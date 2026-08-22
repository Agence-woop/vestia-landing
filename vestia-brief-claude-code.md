# VESTIA — Brief Claude Code · Landing page v1

*Document de mission. À placer à la racine du projet (CLAUDE.md ou brief.md).*

---

## 1 · LE PROJET EN TROIS PHRASES

Vestia est un service premium de cueillette, repassage et retour à domicile,
lancé à Montréal (Griffintown, Cité du Multimédia, Vieux-Port). La landing page
est un commerce dès le jour un : elle prend des réservations directes, sans
paiement en ligne (Interac à la livraison, confirmation personnelle par texto).
Registre : luxe discret — Aman, Aesop. La page se lit en 30 secondes.

---

## 2 · LES FICHIERS SOURCES

À télécharger depuis les conversations Claude, puis **téléverser directement
dans le repo GitHub** (Add file → Upload files) avant la première session —
Claude Code web ne voit que ce qui est dans le repo :

| Fichier | Rôle |
|---|---|
| `vestia-soie-finale-nuit-petrole.mp4` | Asset hero officiel — soie sans or, 720×1280, boucle 40 s |
| `vestia-brandboard-v1.html` | Référence visuelle complète (couleurs, typo, règles) |
| `vestia-landing-textes-vf.md` | Textes finaux, 8 sections + parcours de réservation |
| `vestia-boutons-v3.html` | Prototype du bouton D4 (CSS de référence à reprendre) |
| `vestia-nuit-jour.html` | Prototype de la bascule de thème (variables CSS) |
| `vestia-soie-canva-1080-boucle.mp4` | Soie de réserve (usage secondaire éventuel) |

---

## 3 · LE SYSTÈME (résumé du brandboard — le HTML fait foi)

**Couleurs.** Nuit pétrole `#091E35` (fond), Encre profonde `#0C2540`
(sections alternées), Voile `#102D4C` (cartes), Ivoire `#FAF7F0` (textes),
Or aplat `#C4A03C` (filets, prix, bordures), Or métallisé
`#8E7429 → #C4A03C → #F1DA80` (emblème seulement).

**Mode jour.** Fond `#FAF7F0`, texte `#091E35`, or transposé
`#5E4712 → #8E7429 → #C4A03C`. La soie vidéo reste identique (nuit pétrole).

**Typographie.** Bodoni Moda (emblème VESTIA seulement, jamais en texte) ·
Libre Baskerville (titres, voix) · sans-serif géométrique pour le courant
(Montserrat ou Figtree — trancher à l'intégration). Google Fonts.

**Bouton « le trait qui se referme ».** Capsule, filet or 1 px en dégradé
masqué incliné à 52°, fondu plus tôt en haut qu'en bas ; au survol/toucher,
l'anneau se complète en champagne. CSS exact dans `vestia-boutons-v3.html`
(variante `.d4`).

**Règle d'or.** L'or est une lumière, jamais une surface.

---

## 4 · STACK RECOMMANDÉE

- **Astro** (site statique, composants, performance) + CSS vanilla à
  variables + **GSAP ScrollTrigger** pour le scroll.
- **Formulaires** (réservation, « Prévenez-moi ») : Netlify Forms ou
  Formspree → notification courriel au propriétaire. Pas de backend en v1.
- **Déploiement** : Netlify ou Vercel, aperçus de branche activés.
- Pas de framework UI, pas de Tailwind : le design system est maison.

---

## 5 · LES MISSIONS, DANS L'ORDRE

**Mission 0 — Fondations.**
Le repo GitHub `vestia-landing` existe déjà (créé manuellement, privé) et
contient les fichiers sources et ce brief, téléversés à la racine.
Organiser : déplacer les assets dans `/assets-source`, initialiser la
structure Astro, variables CSS des deux thèmes, chargement des polices.

**Mission 1 — Le hero et la soie.**
Vidéo en fond du hero (couverture plein écran), emblème or métallisé avec
reflet balayant, tagline, CTA 1, mention des quartiers.
**Scroll-scrubbing** : la position de défilement pilote `currentTime` de la
vidéo sur toute la hauteur de page. Réencoder l'asset avec images clés
denses (`ffmpeg -g 1`) pour un scrubbing fluide ; prévoir repli : lecture
en boucle simple si le scrubbing manque de fluidité sur mobile bas de gamme.

**Mission 2 — Les huit sections.**
Intégrer `vestia-landing-textes-vf.md` à la lettre : manifeste, rituel,
grille (3 cartes + carte voilée « Bientôt »), quartier + vérificateur,
engagements, final « Prêt-à-porter. », footer. Sections alternées nuit
pétrole / encre profonde. Cinq CTA identiques « Réserver une cueillette ».

**Mission 3 — Le vérificateur de zone.**
Champ code postal, validation instantanée côté client contre une liste
embarquée (fichier `zones.json`, codes à 6 caractères, liste fournie par le
propriétaire avant lancement — prévoir liste provisoire H3C/H3J/H2Y à
affiner). États : desservi (✓ + CTA, code postal reporté au parcours) /
non desservi (message + champ courriel « Prévenez-moi »).

**Mission 4 — Le parcours de réservation.**
Trois écrans (pièces → adresse/créneau → coordonnées), pastille « retour le
soir même » sur le créneau du matin, écran de confirmation « Vestia vous
confirme personnellement par texto d'ici une heure ». Soumission → courriel
au propriétaire avec toutes les informations.

**Mission 5 — Nuit/jour et détails.**
Bascule ☾/☀ fixe en haut à droite (préférence système détectée, choix
mémorisé), flèche de remontée sticky en bas à droite (cercle au filet d'or,
visible après le premier écran), transitions de thème douces (0,7 s).

**Mission 6 — Qualité et mise en ligne.**
Performance mobile (Lighthouse > 90), `prefers-reduced-motion` respecté
partout, meta SEO (voir annexe B des textes), Open Graph avec image de la
soie, favicon V doré, page politique de confidentialité (gabarit Loi 25 à
compléter), déploiement, domaine.

---

## 6 · EXIGENCES NON NÉGOCIABLES

1. La page se parcourt en ~30 secondes ; chaque section tient dans un écran mobile.
2. Mobile d'abord — la cible réserve depuis son téléphone.
3. Le vérificateur répond instantanément, sans aucun envoi serveur.
4. Aucune bibliothèque UI générique ; le brandboard fait loi.
5. L'emblème Didot/Bodoni n'apparaît jamais en texte courant.
6. Vouvoiement, aucun point d'exclamation dans l'interface.
7. Textes : `vestia-landing-textes-vf.md` est la source de vérité — ne pas réécrire.

---

## 7 · DÉCISIONS EN ATTENTE (ne bloquent pas le chantier)

- Liste définitive des codes postaux (limite Vieux-Port) — propriétaire.
- Plafond quotidien de cueillettes matinales — propriétaire.
- Numéro de téléphone dédié et courriel de contact — propriétaire.
- Statut manteaux/trenchs : « Bientôt » jusqu'à équipement adéquat.
- Version anglaise : v2.
