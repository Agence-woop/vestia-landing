/* ----------------------------------------------------------------
   Conventions de format par langue — centralisées ici, jamais
   dispersées. Chaque valeur affichée suit les conventions de sa
   langue :

     Montant        48 $            $48
     Heure          17 h 30         5:30 p.m.
     Plage          entre 17 h 30   between 5:30 and
                    et 19 h 30      7:30 p.m.
     Date longue    jeudi 17        Thursday,
                    septembre 2026  September 17, 2026
     Jours          LUN MAR MER…    MON TUE WED…
     Mois           Septembre 2026  September 2026
     Décimale       virgule         point
---------------------------------------------------------------- */
import type { Langue } from '../i18n';

export const LOCALES: Record<Langue, string> = { fr: 'fr-CA', en: 'en-CA' };

/* 48 $ / 48,50 $ — $48 / $48.50 */
export function formaterMontant(n: number, langue: Langue = 'fr'): string {
  const entier = Math.abs(n - Math.round(n)) < 0.005;
  if (langue === 'en') {
    return `$${entier ? String(Math.round(n)) : n.toFixed(2)}`;
  }
  const texte = entier ? String(Math.round(n)) : n.toFixed(2).replace('.', ',');
  return `${texte} $`;
}

/* 17 h 30 — 5:30 p.m. */
export function formaterHeure(heures: number, minutes: number, langue: Langue = 'fr'): string {
  if (langue === 'en') {
    const periode = heures < 12 ? 'a.m.' : 'p.m.';
    const h12 = heures % 12 === 0 ? 12 : heures % 12;
    return minutes === 0 ? `${h12} ${periode}` : `${h12}:${String(minutes).padStart(2, '0')} ${periode}`;
  }
  return `${heures} h ${String(minutes).padStart(2, '0')}`;
}

/* jeudi 3 septembre — Thursday, September 3 (sans l'année) */
export function dateLongueSansAnnee(d: Date, langue: Langue = 'fr'): string {
  return d.toLocaleDateString(LOCALES[langue], { weekday: 'long', day: 'numeric', month: 'long' });
}

/* Jeudi 17 septembre 2026 — Thursday, September 17, 2026 */
export function dateComplete(d: Date, langue: Langue = 'fr'): string {
  const texte = d.toLocaleDateString(LOCALES[langue], {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return texte.charAt(0).toUpperCase() + texte.slice(1);
}

/* Le 11 septembre 2026, 15 h 37 — September 11, 2026, 3:37 p.m. */
export function formaterDateHeure(iso: string, langue: Langue = 'fr'): string {
  const d = new Date(iso);
  const date = d.toLocaleDateString(LOCALES[langue], { day: 'numeric', month: 'long', year: 'numeric' });
  const heure = formaterHeure(d.getHours(), d.getMinutes(), langue);
  return langue === 'en' ? `${date}, ${heure}` : `Le ${date}, ${heure}`;
}

/* En-têtes du calendrier, semaine commençant le lundi */
export function joursSemaine(langue: Langue = 'fr'): readonly string[] {
  return langue === 'en'
    ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    : ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'];
}

/* Septembre 2026 — September 2026 (la capitale vient du CSS côté fr) */
export function moisAnnee(d: Date, langue: Langue = 'fr'): string {
  return d.toLocaleDateString(LOCALES[langue], { month: 'long', year: 'numeric' });
}
