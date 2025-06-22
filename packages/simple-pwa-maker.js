function PWAMaker(PWAInformation) {
    document.querySelector("head").innerHTML += `<link rel="manifest" href="data:application/json,{
    'name': ${PWAInformation.name},
    'short_name': ${PWAInformation.shortName},
    'icons': [
    {
    'src': ${PWAInformation.icon},
    'type': 'image/png',
    'sizes': '192x192'
    }
    ],
    'start_url': ${PWAInformation.url},
    'background_color': ${PWAInformation.backgroundColor},
    'display': ${PWAInformation.display},
    'theme_color': ${PWAInformation.themeColor},
    'description': ${PWAInformation.description},
    'from': ${PWAInformation.from}
    }">`;
    document.querySelector("body").innerHTML += `<script src='data:text/javascript,
    // On install - caching the application shell
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('sw-cache').then(function(cache) {
      // cache any static files that make up the application shell
      return cache.add('index.html');
    })
  );
});

// On network request
self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function(response) {
      //If response found return it, else fetch again
      return response || fetch(event.request);
    })
  );
});
'></script>`;
}
export default PWAMaker()