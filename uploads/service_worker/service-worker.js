const cacheVersion = 'v1';
const filesToCache = [
    '/sw-test/',
    '/sw-test/index.html',
    '/sw-test/style.css',
    '/sw-test/app.js',
    '/sw-test/image-list.js'
];

self.addEventListener('install', (event) => {
    console.log('[ServiceWorker] Install');
    event.waitUntil(
        caches.open(cacheVersion)
        .then(cache => {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log('[ServiceWorker] Activate');

    event.waitUntil(
        caches.keys()
        .then(keyList => {
            return Promise.all(keyList.map(key => {
                if (key !== cacheVersion) {
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .catch(() => {
            return fetch(event.request)
                .then(response => {
                    return caches.open(cacheVersion).then(cache => {
                        cache.put(event.request, response.clone());
                        return response;
                    });
                });
        })
        .catch(function () {
            return caches.match('/sw-test/gallery/myLittleVader.jpg');
        })
    );
});


self.addEventListener('pushsubscriptionchange', function() {
    // do something, usually resubscribe to push and
    // send the new subscription details back to the
    // server via XHR or Fetch
  });
  
self.addEventListener('push', function(event) {
    if (!(self.Notification && self.notification.permission === 'granted')) {
      return;
    }
  
    var data = {};
    if (event.data) {
      data = event.data.json();
    }
    var title = data.title || "Something Has Happened";
    var message = data.message || "Here's something you might want to check out.";
    var icon = "images/new-notification.png";
  
    var notification = new Notification(title, {
      body: message,
      tag: 'simple-push-demo-notification',
      icon: icon
    });
  
    notification.addEventListener('click', function() {
      if (clients.openWindow) {
        clients.openWindow('https://example.blog.com/2015/03/04/something-new.html');
      }
    };
  });