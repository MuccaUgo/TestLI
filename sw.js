const CACHE_NAME = "strategy-marketing-hub-v1";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./data.js",
  "./app.js",
  "./manifest.json",
  "./icon.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if(event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if(response.ok){
          const copy=response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request,copy));
        }
        return response;
      })
      .catch(async () => {
        const cached=await caches.match(event.request);
        if(cached)return cached;
        if(event.request.mode==="navigate")return caches.match("./index.html");
        return Response.error();
      })
  );
});
