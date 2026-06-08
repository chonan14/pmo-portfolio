export const SITE = {
  url: 'https://pmo.koho.tokyo',
  name: '長南貴則｜PMOコンサルタント',
  shortName: '長南貴則 PMO',
  defaultTitle: '長南貴則｜統括PMO・戦略PMO・クライシスマネジメント',
  titleTemplate: '%s｜長南貴則 PMO',
  description:
    'PMO実務歴 約10年。NTTドコモにて開発予算1兆円・体制2,000人規模のLTE全国展開をはじめ、全社横断システム導入・DX推進・危機対応の統括PMO／戦略PMOを歴任。IPA専門委員・デジタル庁デジタル推進委員。CxOの右腕として機能する統括PMOを、外部PMO案件として提供します。',
  locale: 'ja_JP',
  lang: 'ja',
  themeColor: '#043e80',
  ogImage: '/og-default.png',
} as const;

export const PROFILE = {
  fullName: '長南 貴則',
  fullNameReading: 'ちょうなん たかのり',
  fullNameEn: 'Chonan Takanori',
  title: '統括PMO ／ 戦略PMO ／ クライシスマネジメント専門家',
  pmoYears: 'PMO実務歴 約10年',
  company: '合同会社KOHO 代表',
  catchphrase: '「何を決めるべきか」を可視化し、\nプロジェクトを止めずに前進させる。',
  lead:
    '単なる進捗管理者ではなく、CxOの右腕として機能する統括PMO。「何を決めるべきか／誰をどう動かすか／どの順番で整理すべきか」を可視化し、経営・現場・外部機関を横断してプロジェクトを前進させます。',
  email: 'takanori.chonan@gmail.com',
} as const;

export const AVAILABILITY = {
  days: '週3〜4日',
  location: 'フルリモート優先',
  start: '即日可（応相談）',
} as const;

export type NavItem = {
  href: string;
  label: string;
  emphasized?: boolean;
};

export const NAV: readonly NavItem[] = [
  { href: '/projects/', label: '実績・ケーススタディ' },
  { href: '/career/', label: '職務経歴' },
  { href: '/portfolio/', label: 'ポートフォリオ' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'お問い合わせ', emphasized: true },
];

export const FOOTER_LINKS: readonly NavItem[] = [
  { href: '/projects/', label: '実績・ケーススタディ' },
  { href: '/career/', label: '職務経歴' },
  { href: '/portfolio/', label: 'ポートフォリオ' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'お問い合わせ' },
];

export type Stat = {
  value: string;
  unit?: string;
  label: string;
};

export const STATS: readonly Stat[] = [
  { value: '約10年', label: 'PMO実務歴（統括／戦略／管理）' },
  { value: '1兆円', label: '最大案件 開発予算（単年度）' },
  { value: '2,000人', label: '最大案件 開発体制' },
  { value: '2機関', label: '国の委員（IPA・デジタル庁）' },
];

export type Strength = {
  eyebrow: string;
  title: string;
  body: string;
};

export const STRENGTHS: readonly Strength[] = [
  {
    eyebrow: 'GOVERNANCE',
    title: '統括PMO統制・CxOレポーティング',
    body: '経営層と現場が同じ粒度で判断できるレポート体系を設計。「何を・誰を・どの順番で」を可視化し、意思決定の遅滞を解消します。',
  },
  {
    eyebrow: 'VENDOR CONTROL',
    title: 'マルチベンダーコントロール',
    body: '新規開発要件と保守要件、事実(制約)と理想(To-Be)を切り分け、ベンダー間の情報非対称を解消。手戻りと納期遅延を抑制します。',
  },
  {
    eyebrow: 'CRISIS',
    title: 'クライシスマネジメント',
    body: '炎上・有事において「責任論」を排除し、事実整理・影響最小化・確定事項の迅速決定に論点を集中。二次被害ゼロで収束へ導きます。',
  },
  {
    eyebrow: 'RULE MAKING',
    title: '合意形成・ルールメイキング',
    body: '官民・業界横断の利害を、決定可能な粒度へ収束。IPA・デジタル庁での国のガイドライン策定など、制度・法規制を踏まえた実行計画を策定します。',
  },
];
