# 中身を更新する手順（非エンジニア向け）

このサイトの「文章・実績・経歴」は、`src/content/` と `src/consts.ts` のテキストを書き換えるだけで更新できます。

## どこを直すか

| 直したい内容 | 場所 |
|---|---|
| プロジェクト実績（課題→介入→成果） | `src/content/projects/*.yaml`（1ファイル＝1案件） |
| 職務経歴・委員・学歴 | `src/content/career/*.yaml` |
| 氏名・肩書・希望条件・スキル等 | `src/consts.ts` |
| 各ページの文章 | `src/pages/*.astro` / `src/pages/projects/[slug].astro` |

YAMLは「ラベル: 値」の形式です。日本語の文章を書き換えるだけでOK（記号やインデントは崩さないこと）。

## 公開（再デプロイ）の手順

ターミナルで、このフォルダ（`pmo-portfolio`）に移動して：

```powershell
npm run build
npx wrangler pages deploy dist --project-name=pmo-portfolio --branch=main --commit-dirty=true
```

数十秒で https://pmo-portfolio.pages.dev に反映されます。

## 職務経歴書PDFを更新したい場合

`/resume` ページの内容（実績・経歴）を直したあと、PDFを作り直します（Edgeで印刷）。
不明な場合は、編集内容を伝えてくれれば再生成します。

## 困ったら

YAMLの記号崩れ等でビルドが通らない時は、変更内容を共有してください。安全に反映します。
