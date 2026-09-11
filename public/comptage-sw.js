/*
 * Service worker du bordereau de comptage (/comptage) — usage hors
 * ligne dans un hall d'immeuble, une fois la page visitée ou ajoutée
 * à l'écran d'accueil.
 *
 * Portée limitée à /comptage/ : le reste du site n'est jamais
 * intercepté. Stratégies :
 *  - navigations : réseau d'abord (les mises à jour arrivent), cache
 *    en secours (hors ligne) ;
 *  - ressources (bundles, affiche, polices Google) : cache d'abord,
 *    remplies au fil de l'eau — les noms de fichiers d'Astro étant
 *    empreints, une ressource en cache est toujours à jour.
 * Le mode retour (#r=…) fonctionne hors ligne : le fragment ne donne
 * lieu à aucune requête.
 */
const CACHE = 'vestia-comptage-v1';
const NOYAU = [
  '/comptage/',
  '/comptage.webmanifest',
  '/soie-poster.webp',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/favicon.ico',
  '/favicon-32.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => Promise.allSettled(NOYAU.map((u) => cache.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((cles) =>
        Promise.all(cles.filter((c) => c.startsWith('vestia-comptage-') && c !== CACHE).map((c) => caches.delete(c)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const requete = e.request;
  if (requete.method !== 'GET') return;

  /* La page elle-même : réseau d'abord, cache en secours */
  if (requete.mode === 'navigate') {
    e.respondWith(
      fetch(requete)
        .then((reponse) => {
          const copie = reponse.clone();
          caches.open(CACHE).then((cache) => cache.put('/comptage/', copie));
          return reponse;
        })
        .catch(() => caches.match('/comptage/'))
    );
    return;
  }

  /* Ressources : cache d'abord, remplies à la première visite */
  e.respondWith(
    caches.match(requete).then(
      (trouve) =>
        trouve ||
        fetch(requete).then((reponse) => {
          if (reponse.ok || reponse.type === 'opaque') {
            const copie = reponse.clone();
            caches.open(CACHE).then((cache) => cache.put(requete, copie));
          }
          return reponse;
        })
    )
  );
});
