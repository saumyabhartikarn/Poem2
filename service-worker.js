const CACHE_NAME = "kavita-v2";

self.addEventListener("install", e=>{
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache=>{
      return cache.addAll([
        "./",
        "./index.html",
        "./icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(res=>{
      return res || fetch(e.request);
    })
  );
});
