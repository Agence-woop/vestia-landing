// @ts-check
import { defineConfig } from 'astro/config';

// Servi à la racine du domaine : https://vestia.ca (GitHub Pages, domaine
// personnalisé — déploiement via .github/workflows/deploy.yml)
// https://astro.build/config
export default defineConfig({
  site: 'https://vestia.ca',
});
