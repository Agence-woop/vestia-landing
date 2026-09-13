/* ----------------------------------------------------------------
   Infrastructure bilingue. Le français est la langue par défaut et
   conserve ses adresses ; l'anglais vit sous /en/. Aucune détection
   de la langue du navigateur (primauté du français, Charte de la
   langue française) — seul un choix explicite du visiteur, mémorisé
   dans le stockage local (voir SelecteurLangue.astro), est honoré.
---------------------------------------------------------------- */
import { fr } from './fr';
import { en } from './en';

export type Langue = 'fr' | 'en';

/* en.ts suit la structure de fr.ts ; le type commun vient du français */
export type Dictionnaire = typeof fr;

export const dictionnaires: Record<Langue, Dictionnaire> = { fr, en: en as unknown as Dictionnaire };

export const t = (langue: Langue): Dictionnaire => dictionnaires[langue];

/* Paires d'adresses équivalentes — slugs anglais naturels, jamais
   recopiés du français. Utilisées par hreflang, le sélecteur de
   langue et le plan du site. */
export const ROUTES = {
  accueil: { fr: '/', en: '/en/' },
  reserver: { fr: '/reserver/', en: '/en/book/' },
  conditions: { fr: '/conditions-utilisation/', en: '/en/terms/' },
  politique: { fr: '/politique-de-confidentialite/', en: '/en/privacy/' },
} as const;

export type CleRoute = keyof typeof ROUTES;

/* Clé du stockage local de la langue choisie — témoin essentiel, au
   même titre que vestia-consent (préférence de fonctionnement, aucune
   donnée transmise à quiconque) */
export const CLE_LANGUE = 'vestia-langue';

/* Côté client : la langue de la page courante, portée par <html lang> */
export const langueDePage = (): Langue =>
  typeof document !== 'undefined' && document.documentElement.lang === 'en' ? 'en' : 'fr';
