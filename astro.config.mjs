// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 公開先 = Cloudflare Pages（ルート配信）。非公開リンク前提のため sitemap は付けない。
const SITE = 'https://pmo-portfolio.pages.dev';

export default defineConfig({
  site: SITE,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
