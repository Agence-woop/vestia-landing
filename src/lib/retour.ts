/*
 * Options de retour en soirée — logique partagée entre /reserver et
 * /comptage : une divergence entre les deux pages serait une source
 * d'erreurs.
 *
 * Les dates sont manipulées en heure locale et en jours de calendrier
 * (jamais en durées de 24 h) : le calcul reste juste au changement
 * d'heure. Samedi et dimanche sont toujours sautés ; les dates exclues
 * (fériés, et selon la page les journées complètes) sont fournies par
 * l'appelant au format AAAA-MM-JJ.
 */

export const RETOUR_CONVENIR = 'On en convient ensemble';
export const CRENEAU_RETOUR = 'entre 17 h 30 et 19 h 30';

const cleLocale = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export function jourOuvrableSuivant(d: Date, exclues: Set<string>): Date {
  let n = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
  while (n.getDay() === 0 || n.getDay() === 6 || exclues.has(cleLocale(n))) {
    n = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1);
  }
  return n;
}

/* « Mercredi soir » — majuscule initiale dans les capsules */
export function libelleSoir(cible: Date): string {
  const nom = cible.toLocaleDateString('fr-CA', { weekday: 'long' });
  return `${nom.charAt(0).toUpperCase()}${nom.slice(1)} soir`;
}

/* Les trois options depuis un jour de cueillette : le soir même puis
   le prochain soir ouvrable quand la cueillette a lieu le matin, les
   deux prochains soirs ouvrables sinon — et « on en convient
   ensemble » dans tous les cas (date nulle). */
export function optionsRetour(
  jourCueillette: Date,
  cueilletteDuMatin: boolean,
  exclues: Set<string>
): Array<{ libelle: string; date: Date | null }> {
  const j1 = jourOuvrableSuivant(jourCueillette, exclues);
  if (cueilletteDuMatin) {
    return [
      { libelle: libelleSoir(jourCueillette), date: jourCueillette },
      { libelle: libelleSoir(j1), date: j1 },
      { libelle: RETOUR_CONVENIR, date: null },
    ];
  }
  const j2 = jourOuvrableSuivant(j1, exclues);
  return [
    { libelle: libelleSoir(j1), date: j1 },
    { libelle: libelleSoir(j2), date: j2 },
    { libelle: RETOUR_CONVENIR, date: null },
  ];
}
