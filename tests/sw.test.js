const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const scope = "https://muccaugo.github.io/TestLI/";
const prefix = `financial-accounting-hub:${scope}:`;
const currentCache = `${prefix}v2`;
const source = readFileSync(path.join(__dirname, "..", "sw.js"), "utf8");
const tick = () => new Promise(setImmediate);
const deferred = () => {
  let resolve;
  const promise = new Promise(done => { resolve = done; });
  return { promise, resolve };
};

function worker(options = {}) {
  const handlers = {};
  const stores = new Map();
  const calls = { skipWaiting: 0, claim: 0, fetch: 0, assets: [] };
  const key = request => new URL(typeof request === "string" ? request : request.url, scope).href;
  function store(name) {
    if (!stores.has(name)) stores.set(name, new Map());
    return stores.get(name);
  }
  function cache(name) {
    return {
      async addAll(urls) {
        calls.assets = [...urls];
        await options.addAll?.();
        urls.forEach(url => store(name).set(key(url), new Response(`asset: ${url}`)));
      },
      async match(request) { return store(name).get(key(request))?.clone(); },
      async put(request, response) {
        await options.put?.();
        store(name).set(key(request), response);
      }
    };
  }
  vm.runInNewContext(source, {
    URL,
    Response,
    self: {
      registration: { scope },
      location: { origin: new URL(scope).origin },
      addEventListener(type, handler) { handlers[type] = handler; },
      async skipWaiting() { calls.skipWaiting++; await options.skipWaiting?.(); },
      clients: { async claim() { calls.claim++; await options.claim?.(); } }
    },
    caches: {
      async open(name) { store(name); return cache(name); },
      async keys() { return [...stores.keys()]; },
      async delete(name) { await options.delete?.(name); return stores.delete(name); },
      async match(request) {
        for (const entries of stores.values()) {
          if (entries.has(key(request))) return entries.get(key(request)).clone();
        }
      }
    },
    async fetch(request) {
      calls.fetch++;
      if (options.fetch) return options.fetch(request);
      throw new Error("Offline");
    }
  });
  return {
    stores,
    calls,
    seed(name, url, body) { store(name).set(key(url), new Response(body)); },
    dispatch(type, request) {
      const waits = [];
      let response;
      handlers[type]({
        request,
        waitUntil(promise) { waits.push(promise); },
        respondWith(promise) { response = promise; }
      });
      return { waits, response, done: Promise.all(waits) };
    }
  };
}

function request(url = `${scope}app.js`, mode = "cors", method = "GET") {
  return { url, mode, method };
}

test("installation waits for precaching and skipWaiting, using absolute app assets", async () => {
  const downloaded = deferred();
  const skipped = deferred();
  const sw = worker({ addAll: () => downloaded.promise, skipWaiting: () => skipped.promise });
  const event = sw.dispatch("install");
  let done = false;
  event.done.then(() => { done = true; });
  await tick();
  assert.equal(sw.calls.skipWaiting, 0);
  downloaded.resolve();
  await tick();
  assert.equal(sw.calls.skipWaiting, 1);
  assert.equal(done, false);
  assert.ok(sw.calls.assets.includes(`${scope}index.html`));
  assert.ok(sw.calls.assets.every(url => url.startsWith(scope)));
  skipped.resolve();
  await event.done;
});

test("activation deletes only this app's stale caches and waits before claiming clients", async () => {
  const deleted = deferred();
  const claimed = deferred();
  const sw = worker({ delete: () => deleted.promise, claim: () => claimed.promise });
  const siblingCache = "financial-accounting-hub:https://muccaugo.github.io/OtherApp/:v1";
  for (const name of [`${prefix}v1`, currentCache, siblingCache, "other-app", "financial-accounting-hub-v1"]) {
    sw.seed(name, `${scope}index.html`, name);
  }
  const event = sw.dispatch("activate");
  let done = false;
  event.done.then(() => { done = true; });
  await tick();
  assert.equal(sw.calls.claim, 0);
  deleted.resolve();
  await tick();
  assert.equal(sw.calls.claim, 1);
  assert.equal(done, false);
  claimed.resolve();
  await event.done;
  assert.deepEqual([...sw.stores.keys()], [currentCache, siblingCache, "other-app", "financial-accounting-hub-v1"]);
});

test("offline requests use this app's cached assets and navigation shell", async () => {
  const sw = worker();
  sw.seed(currentCache, `${scope}app.js`, "cached script");
  sw.seed(currentCache, `${scope}index.html`, "cached page");
  const asset = sw.dispatch("fetch", request());
  assert.equal(await (await asset.response).text(), "cached script");
  const navigation = sw.dispatch("fetch", request(`${scope}?practice=1`, "navigate"));
  assert.equal(await (await navigation.response).text(), "cached page");
  await Promise.all([asset.done, navigation.done]);
});

test("offline fallback does not serve another app's cache and always returns a Response", async () => {
  const sw = worker();
  sw.seed("another-app", `${scope}app.js`, "unrelated script");
  sw.seed("another-app", `${scope}index.html`, "unrelated page");
  for (const req of [request(), request(`${scope}?missing=1`, "navigate")]) {
    const event = sw.dispatch("fetch", req);
    assert.equal((await event.response).type, "error");
    await event.done;
  }
});

test("requests outside the app scope and non-GET requests are untouched", async () => {
  const sw = worker();
  for (const req of [
    request("https://muccaugo.github.io/OtherApp/app.js"),
    request("https://muccaugo.github.io/TestLI-other/app.js"),
    request("https://example.org/TestLI/app.js"),
    request(`${scope}app.js`, "cors", "POST")
  ]) {
    const event = sw.dispatch("fetch", req);
    assert.equal(event.response, undefined);
    assert.equal(event.waits.length, 0);
  }
  assert.equal(sw.calls.fetch, 0);
});

test("cache updates stay alive while the network response remains immediately readable", async () => {
  const written = deferred();
  const sw = worker({ fetch: () => new Response("fresh script"), put: () => written.promise });
  const event = sw.dispatch("fetch", request());
  let done = false;
  event.done.then(() => { done = true; });
  assert.equal(await (await event.response).text(), "fresh script");
  await tick();
  assert.equal(done, false);
  assert.equal(event.waits.length, 1);
  written.resolve();
  await event.done;
  assert.equal(await sw.stores.get(currentCache).get(`${scope}app.js`).text(), "fresh script");
});

test("cache storage failures do not discard successful network responses", async () => {
  const sw = worker({
    fetch: () => new Response("fresh script"),
    put: () => { throw new Error("Storage quota exceeded"); }
  });
  const event = sw.dispatch("fetch", request());
  assert.equal(await (await event.response).text(), "fresh script");
  await event.done;
});

test("HTTP errors do not overwrite a previously cached working asset", async () => {
  const sw = worker({ fetch: () => new Response("Unavailable", { status: 503 }) });
  sw.seed(currentCache, `${scope}app.js`, "cached script");
  const event = sw.dispatch("fetch", request());
  assert.equal((await event.response).status, 503);
  await event.done;
  assert.equal(await sw.stores.get(currentCache).get(`${scope}app.js`).text(), "cached script");
});
