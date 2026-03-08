self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("sumaray-cache-v1").then(function(cache) {
      return cache.addAll(["index.html"]);
    })
  );
});
