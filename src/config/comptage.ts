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

/* Les quatre paliers de la grille tarifaire du site */
export const CATEGORIES = [
  { nom: 'Pièce simple', prix: 6 },
  { nom: 'Pièce standard', prix: 9 },
  { nom: 'Pièce complexe', prix: 15 },
  { nom: 'Veston', prix: 20 },
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
