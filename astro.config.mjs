// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fragrant-signatures.eu',
  base: '/',
  i18n: {
    defaultLocale: 'hr',
    locales: ['hr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  trailingSlash: 'always',
  integrations: [
    mdx(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'hr',
        locales: {
          hr: 'hr-HR',
          en: 'en-US',
        },
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
