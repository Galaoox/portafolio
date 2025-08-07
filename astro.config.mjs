// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown'

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.erick-avn.xyz',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    // mdx(), 
    sitemap(),
    partytown({
        config: {
          forward: ["dataLayer.push"],
        },
    }),
  ]
});
