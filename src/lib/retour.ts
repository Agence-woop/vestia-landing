/*
 * Options de retour en soirée — logique partagée entre /reserver et
 * /comptage : une divergence entre les deux pages serait une source
 * d'erreurs.
 *
 * Les dates sont manipulées en heure locale et en jours de calendrier
 * (jamais en durées de 24 h) : le calcul reste juste au changement
 * d'heure. Samedi et dimanche sont toujours sautés ; les dates exclues
 * (fériés, et selon la page les journées complètes) sont fournies par
 * l'appelant au format AAAA-MM-JJ. Les libellés suivent la langue
 * demandée (français par défaut).
 */
import type { Langue } from '../i18n';
import { LOCALES } from './formats';

export const RETOUR_CONVENIR_LIBELLES: Record<Langue, string> = {
  fr: 'On en convient ensemble',
  /* ÉDITORIAL */
  en: 'We agree on it together',
};
export const RETOUR_CONVENIR = RETOUR_CONVENIR_LIBELLES.fr;

export const CRENEAUX_RETOUR: Record<Langue, string> = {
  fr: 'entre 17 h 30 et 19 h 30',
  en: 'between 5:30 and 7:30 p.m.',
};
export const CRENEAU_RETOUR = CRENEAUX_RETOUR.fr;

const cleLocale = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export function jourOuvrableSuivant(d: Date, exclues: Set<string>): Date {
  let n = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
  while (n.getDay() === 0 || n.getDay() === 6 || exclues.has(cleLocale(n))) {
    n = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1);
  }
  return n;
}

/* « Mercredi soir » — « Wednesday evening » : majuscule initiale */
export function libelleSoir(cible: Date, langue: Langue = 'fr'): string {
  const nom = cible.toLocaleDateString(LOCALES[langue], { weekday: 'long' });
  const capital = `${nom.charAt(0).toUpperCase()}${nom.slice(1)}`;
  return langue === 'en' ? `${capital} evening` : `${capital} soir`;
}

/* Les trois options depuis un jour de cueillette : le soir même puis
   le prochain soir ouvrable quand la cueillette a lieu le matin, les
   deux prochains soirs ouvrables sinon — et « on en convient
   ensemble » dans tous les cas (date nulle). */
export function optionsRetour(
  jourCueillette: Date,
  cueilletteDuMatin: boolean,
  exclues: Set<string>,
  langue: Langue = 'fr'
): Array<{ libelle: string; date: Date | null }> {
  const j1 = jourOuvrableSuivant(jourCueillette, exclues);
  const convenir = { libelle: RETOUR_CONVENIR_LIBELLES[langue], date: null };
  if (cueilletteDuMatin) {
    return [
      { libelle: libelleSoir(jourCueillette, langue), date: jourCueillette },
      { libelle: libelleSoir(j1, langue), date: j1 },
      convenir,
    ];
  }
  const j2 = jourOuvrableSuivant(j1, exclues);
  return [
    { libelle: libelleSoir(j1, langue), date: j1 },
    { libelle: libelleSoir(j2, langue), date: j2 },
    convenir,
  ];
}
