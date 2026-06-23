// @ts-check
import { defineConfig } from 'astro/config';

// Página de proyecto en GitHub Pages → se sirve bajo /para-pinky/
// Si más adelante usas un dominio propio, cambia `site` y pon base: '/'.
export default defineConfig({
  site: 'https://sanghel.github.io',
  base: '/para-pinky',
  build: {
    inlineStylesheets: 'auto',
  },
});
