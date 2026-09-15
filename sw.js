const APP_SCOPE = new URL(self.registration.scope);
const CACHE_PREFIX = `financial-accounting-hub:${APP_SCOPE.href}:`;
const CACHE_NAME = `${CACHE_PREFIX}v2`;
const APP_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./data.js",
  "./app.js",
  "./manifest.json",
  "./icon.svg"
].map(path => new URL(path, APP_SCOPE).href);

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_ASSETS);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || url.origin !== APP_SCOPE.origin || !url.pathname.startsWith(APP_SCOPE.pathname)) return;

  const networkResponse = fetch(event.request);
  // Keep cache writes alive without delaying a successful network response.
  event.waitUntil(networkResponse.then(async response => {
    if (!response.ok) return;
    const copy = response.clone();
    const cache = await caches.open(CACHE_NAME);
    await cache.put(event.request, copy);
  }).catch(() => {}));

  event.respondWith(
    networkResponse
      .catch(async () => {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match(event.request);
        if (cached) return cached;
        if (event.request.mode === "navigate") {
          const shell = await cache.match(new URL("./index.html", APP_SCOPE).href);
          if (shell) return shell;
        }
        return Response.error();
      })
  );
});
