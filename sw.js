const CACHE_NAME = "financas-pro-cache-v2";

const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json"
];

// INSTALAR
self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))

  );

});

// CACHE
self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)
      .then(response => response || fetch(event.request))

  );

});