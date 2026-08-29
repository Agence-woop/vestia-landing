# Vestia — Landing page

Document de mission complet : `vestia-brief-claude-code.md` (racine). Le lire avant toute session.

## Fichiers sources

Tous dans `assets-source/` :

- `vestia-brandboard-v1.html` — référence visuelle qui fait foi (couleurs, typo, règles)
- `vestia-landing-textes-vf.md` — textes finaux, source de vérité : ne pas réécrire
- `vestia-boutons-v3.html` — CSS de référence du bouton (variante `.d4`)
- `vestia-nuit-jour.html` — prototype de la bascule de thème
- `vestia-soie-desktop-intra.mp4` — soie desktop en tout-intra, solution de rechange si le
  scrubbing saccade
- `vestia-soie-finale-nuit-petrole.mp4` — ancien asset hero (720×1280, boucle 40 s)
- `vestia-soie-portrait-toutintra.mp4` — son réencodage tout-intra, servi jusqu'à la soie desktop
- `vestia-soie-canva-1080-boucle.mp4` — soie de réserve

## Structure

- Astro, CSS vanilla à variables, GSAP ScrollTrigger pour le scroll. Pas de framework UI, pas de Tailwind.
- `src/styles/tokens.css` — variables des deux thèmes (`html[data-theme="nuit"|"jour"]`, nuit par défaut)
- `src/styles/base.css` — réinitialisation et typographie de base
- `src/styles/sections.css` — échafaudage commun des sections (champs, bouton secondaire, voile local)
- `src/layouts/Base.astro` — head commun : meta, polices Google Fonts, script d'initialisation du thème

## Décisions prises à l'intégration

- Sans-serif définitive = **Montserrat** (remplace Figtree). Graisses chargées : 200, 400, 500 —
  texte courant en 400, labels/kickers en 500, manifeste en ExtraLight 200.
- Le manifeste est composé dans la sans éditoriale (Montserrat ExtraLight), à l'échelle
  éditoriale ; la Libre Baskerville reste réservée aux titres de sections.
- Formulaires (Mission 4, « Prévenez-moi ») : **Formspree** plutôt que Netlify Forms.
- Hébergement : **GitHub Pages** — `https://agence-woop.github.io/vestia-landing` (`base: '/vestia-landing'`
  dans `astro.config.mjs` ; préfixer les URL d'assets de `public/` avec `import.meta.env.BASE_URL`).
  Déploiement automatique à chaque push sur `main` via `.github/workflows/deploy.yml`.
- Soie du fond : `public/soie-nuit-petrole.mp4` — soie desktop officielle (1600×900, 32 s,
  768 images, image-clé toutes les 12 images) ; affiche `public/soie-poster.jpg` tirée de sa
  première image. En cas de scrubbing saccadé, la version tout-intra
  `assets-source/vestia-soie-desktop-intra.mp4` la remplace telle quelle.
- Soie mobile : `public/soie-nuit-petrole-mobile.mp4` (810×1440, même étalonnage), servie via
  `<source media="(orientation: portrait)">` — un seul fichier téléchargé ; affiche
  `public/soie-poster-mobile.jpg`. Sur les pages trop courtes pour le scrubbing, la boucle de
  repli tourne à `playbackRate = 0.25`.
- **Sections : la règle des sections alternées du brief est remplacée par « soie visible
  partout, sections transparentes ».** Lisibilité par ombres de texte subtiles et léger voile
  dégradé local (`.section--voile`) derrière les blocs denses — jamais un aplat opaque. Les
  cartes gardent une surface `#102D4C` semi-transparente avec léger `backdrop-blur`. La soie
  restant nuit pétrole, les sections imposent localement les valeurs nuit (texte ivoire, or
  aplat) quel que soit le thème.

## Règles non négociables

1. Mobile d'abord ; chaque section tient dans un écran mobile ; la page se lit en ~30 s.
2. L'or est une lumière, jamais une surface.
3. Bodoni Moda : emblème VESTIA seulement, jamais en texte courant.
4. Vouvoiement, aucun point d'exclamation dans l'interface.
5. Le vérificateur de zone répond côté client, sans envoi serveur.
6. `prefers-reduced-motion` respecté partout.

## Commandes

- `npm run dev` — serveur de développement
- `npm run build` — build de production (`dist/`)
- `npm run preview` — aperçu du build
