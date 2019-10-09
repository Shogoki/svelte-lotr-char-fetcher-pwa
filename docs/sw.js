
self.addEventListener('fetch', (event) => {
    event.respondWith(async function() {
      const cache = await caches.open('mysite-dynamic');
      console.log("Request to: "+ event.request.url)
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        console.log("found resource in cache, serving from here")
        return cachedResponse;
      }
      console.log("resource is not cached, making network request")
      const networkResponse = await fetch(event.request);
      event.waitUntil(
        cache.put(event.request, networkResponse.clone())
      );
      return networkResponse;
    }());
  });
  