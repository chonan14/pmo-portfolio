# pmo-portfolio

長南貴則 PMOコンサルタント・ポートフォリオサイト（外部PMO案件受注用）。

- **スタック**: Astro 6（静的） + Tailwind v4 + Zod
- **ホスティング**: GitHub Pages（GitHub Actions で自動ビルド・デプロイ）
- **公開URL（予定）**: https://pmo.koho.tokyo
- **コンテンツ正本（将来）**: Notion 4DB →（ビルド時 sync）→ `src/content/*.yaml`

## 開発

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的生成
npm run preview  # ビルド結果をプレビュー
npm run check    # 型チェック
```

> 重要: `vite` は `package.json` の `overrides` で **7.3.2** に固定しています。
> `@tailwindcss/vite` が vite 8（rolldown）と非互換のため、外さないでください。

## コンテンツ

- `src/content/projects/*.yaml` … プロジェクト経歴（課題→介入→成果）
- `src/content/career/*.yaml` … 職務経歴（職歴/委員/学歴）
- `src/content/portfolio/*.yaml` … 制作物・成果物

`status: Public` のものだけが公開されます。`Draft` / `Archive` は非表示。

## デプロイ

`main` への push、または Actions タブの「Run workflow」で
`.github/workflows/deploy.yml` が走り、GitHub Pages へ公開されます。

カスタムドメインは `public/CNAME`（= `pmo.koho.tokyo`）で指定。
DNS 側（Cloudflare）に `pmo` の CNAME → `<user>.github.io` を登録する必要があります。
