
const CACHE = 'nardil-tyramine-rebuild-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data/nardil_master.generated.js',
  './data/nardil_master.generated.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './manifest.webmanifest'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(match => match || fetch(event.request))
  );
});
