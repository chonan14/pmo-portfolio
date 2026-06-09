/**
 * 初回だけ実行：親ページ配下に Projects / Career データベースを作成し、
 * 現在の src/content/*.yaml の内容を Notion に投入する。
 *
 *   NOTION_API_KEY / NOTION_PARENT_PAGE を設定して `npm run notion:bootstrap`
 *   出力された DB ID を .env に追記してください。
 */
import { Client } from '@notionhq/client';
import yaml from 'js-yaml';
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const PARENT = process.env.NOTION_PARENT_PAGE;
if (!NOTION_API_KEY || !PARENT) {
  console.error('NOTION_API_KEY と NOTION_PARENT_PAGE を設定してください（.env 参照）。');
  process.exit(1);
}
const notion = new Client({ auth: NOTION_API_KEY });

const readYaml = (dir) =>
  readdirSync(path.resolve('src/content', dir))
    .filter((f) => f.endsWith('.yaml'))
    .map((f) => yaml.load(readFileSync(path.resolve('src/content', dir, f), 'utf8')));

const rt = (s) => ({ rich_text: s ? [{ text: { content: String(s).slice(0, 1900) } }] : [] });
const titleP = (s) => ({ title: [{ text: { content: String(s ?? '') } }] });
const sel = (s) => (s ? { select: { name: s } } : { select: null });
const multi = (a) => ({ multi_select: (a ?? []).map((n) => ({ name: n })) });
const numP = (n) => ({ number: typeof n === 'number' ? n : null });
const chk = (b) => ({ checkbox: !!b });
const joinRt = (a) => rt((a ?? []).join('\n'));

const projProps = {
  Title: { title: {} },
  slug: { rich_text: {} },
  Status: { select: { options: [{ name: 'Public' }, { name: 'Draft' }, { name: 'Archive' }] } },
  DisplayOrder: { number: {} },
  Featured: { checkbox: {} },
  Industry: { multi_select: {} },
  ClientScale: { select: {} },
  ClientNameVisible: { rich_text: {} },
  Role: { rich_text: {} },
  DurationStart: { rich_text: {} },
  DurationEnd: { rich_text: {} },
  Scope: { rich_text: {} },
  Summary: { rich_text: {} },
  Challenge: { rich_text: {} },
  Intervention: { rich_text: {} },
  ResultsQuantitative: { rich_text: {} },
  ResultsQualitative: { rich_text: {} },
  ToolsMethods: { multi_select: {} },
  ConfidentialityLevel: {
    select: { options: [{ name: 'Open' }, { name: 'Masked' }, { name: 'Restricted' }] },
  },
  Note: { rich_text: {} },
  InternalNotes: { rich_text: {} },
};

const careerProps = {
  Title: { title: {} },
  Type: {
    select: {
      options: [
        { name: 'Employment' },
        { name: 'Education' },
        { name: 'Committee' },
        { name: 'Certification' },
        { name: 'Award' },
      ],
    },
  },
  Status: { select: { options: [{ name: 'Public' }, { name: 'Draft' }, { name: 'Archive' }] } },
  Organization: { rich_text: {} },
  Position: { rich_text: {} },
  StartDate: { rich_text: {} },
  EndDate: { rich_text: {} },
  Current: { checkbox: {} },
  KeyAchievements: { rich_text: {} },
  Responsibilities: { rich_text: {} },
  DisplayOrder: { number: {} },
  InternalNotes: { rich_text: {} },
};

async function createDb(name, properties) {
  const db = await notion.databases.create({
    parent: { type: 'page_id', page_id: PARENT },
    title: [{ text: { content: name } }],
    properties,
  });
  return db.id;
}

const projDb = await createDb('Projects', projProps);
const careerDb = await createDb('Career', careerProps);

for (const d of readYaml('projects')) {
  await notion.pages.create({
    parent: { database_id: projDb },
    properties: {
      Title: titleP(d.title),
      slug: rt(d.slug),
      Status: sel(d.status ?? 'Public'),
      DisplayOrder: numP(d.displayOrder),
      Featured: chk(d.featured),
      Industry: multi(d.industry),
      ClientScale: sel(d.clientScale),
      ClientNameVisible: rt(d.clientNameVisible),
      Role: rt(d.role),
      DurationStart: rt(d.durationStart),
      DurationEnd: rt(d.durationEnd),
      Scope: rt(d.scope),
      Summary: rt(d.summary),
      Challenge: joinRt(d.challenge),
      Intervention: joinRt(d.intervention),
      ResultsQuantitative: joinRt(d.resultsQuantitative),
      ResultsQualitative: joinRt(d.resultsQualitative),
      ToolsMethods: multi(d.toolsMethods),
      ConfidentialityLevel: sel(d.confidentialityLevel ?? 'Open'),
      Note: rt(d.note),
    },
  });
}

for (const d of readYaml('career')) {
  await notion.pages.create({
    parent: { database_id: careerDb },
    properties: {
      Title: titleP(d.title),
      Type: sel(d.type ?? 'Employment'),
      Status: sel(d.status ?? 'Public'),
      Organization: rt(d.organization),
      Position: rt(d.position),
      StartDate: rt(d.startDate),
      EndDate: rt(d.endDate),
      Current: chk(d.current),
      KeyAchievements: joinRt(d.keyAchievements),
      Responsibilities: joinRt(d.responsibilities),
      DisplayOrder: numP(d.displayOrder),
    },
  });
}

console.log('Bootstrap complete. これを .env に追記してください:');
console.log('NOTION_PROJECTS_DB=' + projDb.replace(/-/g, ''));
console.log('NOTION_CAREER_DB=' + careerDb.replace(/-/g, ''));
