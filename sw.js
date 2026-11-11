// Service worker: maakt de app installeerbaar en laat ze ook zonder internet werken.
// Verhoog VERSION na elke wijziging aan de bestanden, zodat toestellen de nieuwe versie ophalen.
const VERSION = "budgetbeheer-v1";
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./icon-180.png",
  "https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(VERSION)
      .then(cache => Promise.all(CORE.map(url => cache.add(url).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;

  // Pagina zelf: eerst netwerk (nieuwste versie), anders uit de cache.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put("./index.html", copy)); return res; })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Overige bestanden (grafiekbibliotheek, lettertypes, iconen): eerst cache, anders netwerk en bewaren.
  event.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && (res.ok || res.type === "opaque")) {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(req, copy));
      }
      return res;
    }))
  );
});
