//visit week 18 activity 23
//used https://googlechrome.github.io/samples/service-worker/basic/ for more documentation
const FILES_TO_CACHE = [
    '/',
  '/styles.css',
  '/index.js'
]
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';


// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(PRECACHE)
        .then((cache) => {
          console.log(`cache me outside how 'bout data`);
          return cache.addAll(FILES_TO_CACHE);
        })
    );
  });
  
  // The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
  self.addEventListener("fetch", (event) => {
    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
          caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                console.log(`fetched`)
              return cachedResponse;
            }
    
            return caches.open(RUNTIME).then(cache => {
              return fetch(event.request).then(response => {
                // Put a copy of the response in the runtime cache.
                return cache.put(event.request, response.clone()).then(() => {
                  return response;
                });
              });
            });
          })
        );
      }
  });