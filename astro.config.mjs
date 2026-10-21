// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site as studio } from './src/data/site.ts';

export default defineConfig({
  site: studio.dominio,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !/\/(grazie|404)\/?$/.test(page),
      changefreq: 'monthly',
      lastmod: new Date(),
      serialize(item) {
        const path = new URL(item.url).pathname;
        item.priority = path === '/' ? 1.0 : /^\/progetti\/[^/]+\/$/.test(path) ? 0.7 : 0.8;
        return item;
      },
    }),
  ],
});
