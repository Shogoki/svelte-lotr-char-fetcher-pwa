
self.addEventListener('fetch', (event) => {
    event.respondWith(async function() {
      const cache = await caches.open('mysite-dynamic');
      console.log(event.request)
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) return cachedResponse;
      const networkResponse = await fetch(event.request);
      event.waitUntil(
        cache.put(event.request, networkResponse.clone())
      );
      return networkResponse;
    }());
  });
  