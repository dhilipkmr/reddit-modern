self.addEventListener('install', (event) => {
  console.log('Install Event');
  event.waitUntil(
    caches.open('static')
      .then((cacheRef) => {
        cacheRef.add('/styles/home.css');
        cacheRef.add('/styles/common.css');
        cacheRef.add('/client_bundle.js');
      })
  );
});

self.addEventListener('activate', () => {
  console.log('Sw Activated');
});

self.addEventListener('fetch', () => {

});