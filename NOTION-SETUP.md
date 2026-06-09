# Notion 連携セットアップ（中身の「正本」をNotionにする）

実績・職務経歴を **Notionで編集 → サイトへ反映** できるようにする手順です。

## 1. Notionインテグレーションを作成（APIキー取得）
1. https://www.notion.so/my-integrations → **New integration**
2. 名前（例：`pmo-portfolio`）→ 作成 → **Internal Integration Secret** をコピー（= APIキー）

## 2. 親ページを用意して共有
1. Notionに空のページを1枚作る（例：「PMOポートフォリオ」）
2. そのページ右上「…」→ **コネクト** → 作ったインテグレーションを追加
3. ページURL末尾の32桁ID（ハイフン無し）= **親ページID**

## 3. `.env` を作成
プロジェクト直下に `.env`（`.env.example` を複製）：
```
NOTION_API_KEY=secret_xxxxx
NOTION_PARENT_PAGE=（親ページID）
```

## 4. データベース作成＋現在の内容を投入（初回だけ）
```powershell
npm run notion:bootstrap
```
→ 親ページ配下に **Projects / Career** DBが作られ、今のサイト内容が入ります。
出力された `NOTION_PROJECTS_DB=...` / `NOTION_CAREER_DB=...` を `.env` に追記。

## 5. 以降の運用
1. **Notionで中身を編集**（`Status = Public` のものだけ公開されます）
2. 反映：
```powershell
npm run sync
npm run build
npx wrangler pages deploy dist --project-name=pmo-portfolio --branch=main --commit-dirty=true
```

## 注意
- `InternalNotes` 列は実名・契約詳細などの**非公開メモ用**。**syncは絶対に出力しません**（機密保護）。
- `.env`・APIキーは Git に含めないでください（`.gitignore` 済）。
- 日付（DurationStart 等）は「2011」「2023年5月」のように**テキストで自由記入**できます。
