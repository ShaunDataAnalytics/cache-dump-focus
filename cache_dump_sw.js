const CACHE = "cache-dump-v3";

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(Promise.resolve());
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("cache-dump")).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const isDoc =
    e.request.mode === "navigate" ||
    e.request.destination === "document" ||
    (e.request.url && /\.html(\?|$)/.test(e.request.url));

  if (isDoc) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(e.request).then((hit) => hit || caches.match("./index.html")))
    );
    return;
  }

  e.respondWith(
    fetch(e.request)
      .then((res) => res)
      .catch(() => caches.match(e.request))
  );
});
