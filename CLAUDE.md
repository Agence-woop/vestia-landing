# Vestia — Landing page

Document de mission complet : `vestia-brief-claude-code.md` (racine). Le lire avant toute session.

## Fichiers sources

Tous dans `assets-source/` :

- `vestia-brandboard-v1.html` — référence visuelle qui fait foi (couleurs, typo, règles)
- `vestia-landing-textes-vf.md` — textes finaux, source de vérité : ne pas réécrire
- `vestia-boutons-v3.html` — CSS de référence du bouton (variante `.d4`)
- `vestia-nuit-jour.html` — prototype de la bascule de thème
- `vestia-soie-finale-nuit-petrole.mp4` — asset hero officiel (720×1280, boucle 40 s)
- `vestia-soie-canva-1080-boucle.mp4` — soie de réserve

## Structure

- Astro, CSS vanilla à variables, GSAP ScrollTrigger pour le scroll. Pas de framework UI, pas de Tailwind.
- `src/styles/tokens.css` — variables des deux thèmes (`html[data-theme="nuit"|"jour"]`, nuit par défaut)
- `src/styles/base.css` — réinitialisation et typographie de base
- `src/layouts/Base.astro` — head commun : meta, polices Google Fonts, script d'initialisation du thème

## Décisions prises à l'intégration

- Sans-serif du courant : **Figtree** (plus proche de l'Avenir Next du brandboard que Montserrat).

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
