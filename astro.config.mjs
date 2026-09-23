// @ts-check
import { defineConfig } from 'astro/config';

// Proof of concept is served from GitHub Pages at https://conorpendergrast.github.io/customersuccess-cx/
// so every internal link is prefixed with `base`. When this moves to customersuccess.cx,
// set site to 'https://www.customersuccess.cx' and base to '/'.
export default defineConfig({
  site: 'https://conorpendergrast.github.io',
  base: '/customersuccess-cx',
  trailingSlash: 'ignore',
});
