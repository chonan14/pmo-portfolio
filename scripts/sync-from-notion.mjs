/**
 * Notion（正本）→ src/content/*.yaml を生成する同期スクリプト。
 *
 *   実行: NOTION_API_KEY / NOTION_PROJECTS_DB / NOTION_CAREER_DB を .env か環境変数に設定し
 *         `npm run sync`
 *
 * 公開（Status=Public）の行だけを出力し、InternalNotes 等の非公開プロパティは一切読まない
 * （ホワイトリスト方式＝機密の漏洩防止）。
 */
import { Client } from '@notionhq/client';
import yaml from 'js-yaml';
import { writeFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import path from 'node:path';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const PROJECTS_DB = process.env.NOTION_PROJECTS_DB;
const CAREER_DB = process.env.NOTION_CAREER_DB;

if (!NOTION_API_KEY || !PROJECTS_DB || !CAREER_DB) {
  console.error('NOTION_API_KEY / NOTION_PROJECTS_DB / NOTION_CAREER_DB を設定してください（.env 参照）。');
  process.exit(1);
}

const notion = new Client({ auth: NOTION_API_KEY });

// --- Notion プロパティ読み取りヘルパ ---
const txt = (p) => ((p?.rich_text ?? p?.title ?? []).map((t) => t.plain_text).join('')).trim();
const lines = (p) => txt(p).split('\n').map((s) => s.trim()).filter(Boolean);
const sel = (p) => p?.select?.name || undefined;
const multi = (p) => (p?.multi_select ?? []).map((m) => m.name);
const num = (p) => (typeof p?.number === 'number' ? p.number : undefined);
const chk = (p) => p?.checkbox ?? false;

async function queryAll(dbId) {
  const out = [];
  let cursor;
  do {
    const res = await notion.databases.query({
      database_id: dbId,
      start_cursor: cursor,
      page_size: 100,
    });
    out.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return out;
}

const clean = (o) => {
  const r = {};
  for (const [k, v] of Object.entries(o)) {
    if (v === undefined) continue;
    if (Array.isArray(v) && v.length === 0) continue;
    r[k] = v;
  }
  return r;
};

function mapProject(page) {
  const p = page.properties;
  return clean({
    title: txt(p.Title),
    slug: txt(p.slug),
    status: sel(p.Status) ?? 'Public',
    displayOrder: num(p.DisplayOrder) ?? 0,
    featured: chk(p.Featured),
    industry: multi(p.Industry),
    clientScale: sel(p.ClientScale),
    clientNameVisible: txt(p.ClientNameVisible) || undefined,
    role: txt(p.Role),
    durationStart: txt(p.DurationStart),
    durationEnd: txt(p.DurationEnd) || undefined,
    scope: txt(p.Scope) || undefined,
    summary: txt(p.Summary),
    challenge: lines(p.Challenge),
    intervention: lines(p.Intervention),
    resultsQuantitative: lines(p.ResultsQuantitative),
    resultsQualitative: lines(p.ResultsQualitative),
    toolsMethods: multi(p.ToolsMethods),
    confidentialityLevel: sel(p.ConfidentialityLevel) ?? 'Open',
    note: txt(p.Note) || undefined,
  });
}

function mapCareer(page) {
  const p = page.properties;
  return clean({
    title: txt(p.Title),
    type: sel(p.Type) ?? 'Employment',
    status: sel(p.Status) ?? 'Public',
    organization: txt(p.Organization) || undefined,
    position: txt(p.Position) || undefined,
    startDate: txt(p.StartDate),
    endDate: txt(p.EndDate) || undefined,
    current: chk(p.Current),
    keyAchievements: lines(p.KeyAchievements),
    responsibilities: lines(p.Responsibilities),
    displayOrder: num(p.DisplayOrder) ?? 0,
  });
}

function writeCollection(dir, items) {
  const full = path.resolve('src/content', dir);
  mkdirSync(full, { recursive: true });
  for (const f of readdirSync(full)) {
    if (f.endsWith('.yaml') || f.endsWith('.yml')) rmSync(path.join(full, f));
  }
  let n = 0;
  for (const item of items) {
    if ((item.status ?? 'Public') !== 'Public') continue;
    const base = (item.slug || item.title || `item-${n}`).toString();
    const file = base.replace(/[^a-z0-9-]/gi, '-').toLowerCase() || `item-${n}`;
    const body = yaml.dump(item, { lineWidth: -1, noRefs: true, sortKeys: false });
    writeFileSync(path.join(full, `${file}.yaml`), body, 'utf8');
    n++;
  }
  return n;
}

const projects = (await queryAll(PROJECTS_DB)).map(mapProject);
const career = (await queryAll(CAREER_DB)).map(mapCareer);

const np = writeCollection('projects', projects);
const nc = writeCollection('career', career);

console.log(`synced: projects=${np}, career=${nc}`);
