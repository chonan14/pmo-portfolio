// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://pmo.koho.tokyo';

export default defineConfig({
  site: SITE,
  // GitHub Pages: 独自ドメイン or ユーザー/組織ページ(ルート公開)を想定し base は未指定('/')。
  // プロジェクトページ(https://<user>.github.io/<repo>/)で公開する場合のみ base: '/<repo>/' を設定する。
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
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
