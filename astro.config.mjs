// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://beta.fragrant-signatures.eu',
  base: '/',
  i18n: {
    defaultLocale: 'hr',
    locales: ['hr', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  trailingSlash: 'always',
  integrations: [
    mdx(), // omogućava .mdx fajlove
    tailwind(), // omogućava Tailwind CSS
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark', // opcionalno: tema za code blockove
    },
  },
});
