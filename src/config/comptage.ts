/* ----------------------------------------------------------------
   Bordereau de comptage (/comptage) — configuration unique.
---------------------------------------------------------------- */

/* ================= RÉGLAGE DES TAXES =================
   Vestia n'est pas inscrite à la TPS/TVQ à ce jour. Le jour de
   l'inscription, passer `inscrit` à true et renseigner les deux
   numéros : le PDF affichera alors automatiquement le sous-total
   avant taxes, les lignes TPS et TVQ, le total taxes incluses et
   les numéros d'inscription dans le pied de page ; le montant
   estimé à l'écran suivra la même logique. Rien d'autre à changer. */
export const TAXES = {
  inscrit: false,
  tauxTPS: 0.05,
  tauxTVQ: 0.09975,
  /* p. ex. « 123456789 RT0001 » */
  numeroTPS: '',
  /* p. ex. « 1234567890 TQ0001 » */
  numeroTVQ: '',
};

/* Les quatre paliers de la grille tarifaire du site. Les listes de
   vêtements reprennent telles quelles les tuiles de la page d'accueil
   (Grille.astro, source de vérité) — aide-mémoire à l'écran seulement,
   jamais sur le PDF */
export const CATEGORIES = [
  {
    nom: 'Pièce simple',
    prix: 6,
    vetements: 'T-shirt, coton ouaté, camisole, polo, legging, pantalon de jogging',
  },
  {
    nom: 'Pièce standard',
    prix: 9,
    vetements: 'Chemise, blouse, pantalon, jean, jupe, short',
  },
  {
    nom: 'Pièce complexe',
    prix: 15,
    vetements: 'Robe, pièce en lin, jupe ou robe plissée',
  },
  {
    nom: 'Veston',
    prix: 20,
    vetements: 'Veston, blazer',
  },
] as const;

/* Minimum de commande — averti sans bloquer */
export const MINIMUM_PIECES = 8;

/* Coordonnées du pied de page du PDF */
export const COORDONNEES = {
  telephone: '(438) 300-7410',
  courriel: 'info@vestia.ca',
  site: 'vestia.ca',
  quartiers: 'Griffintown · Cité du Multimédia · Vieux-Montréal',
};
