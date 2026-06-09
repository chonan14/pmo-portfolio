export const SITE = {
  url: 'https://pmo-portfolio.pages.dev',
  name: '長南貴則｜統括PMO',
  shortName: '長南貴則',
  defaultTitle: '長南貴則｜統括PMO・戦略PMO・クライシスマネジメント',
  titleTemplate: '%s｜長南貴則',
  description:
    '「決まらない・進まない・炎上した」プロジェクトを、目的の達成へ導く統括PMO。PMO実務歴 約10年。開発予算1兆円規模の全社案件（全国セールス部門の統括PMO）から危機対応・官民連携・0→1の制度設計まで。IPA専門委員・デジタル庁デジタル推進委員。',
  locale: 'ja_JP',
  lang: 'ja',
  themeColor: '#102a4c',
  ogImage: '/og-default.png',
  email: 'takanori.chonan@gmail.com',
  // 転職あっせん事業者へ提出する個人ポートフォリオ。非公開リンク前提（検索除外）。
  noindex: true,
} as const;

export const PROFILE = {
  fullName: '長南 貴則',
  fullNameReading: 'ちょうなん たかのり',
  fullNameEn: 'Chonan Takanori',
  title: '統括PMO ／ 戦略PMO ／ クライシスマネジメント',
  pmoYears: 'PMO実務歴 約10年',
  catchphrase: '「何を決めるべきか」を可視化し、\nプロジェクトを、止めずに前進させる。',
  lead:
    'プロジェクトの成否はPMOで決まる——そう考えています。経営層の意図を翻訳し、現場の悩みを解き、対立を起こさせない。コミュニケーションと情報の対称性を担保しながら、いくつもの壁を越え、地図に描いた目的地まで到達させる。それが私の仕事です。',
} as const;

/** 顧客視点ヒーロー（成果＝相手のメリットを先頭に） */
export const HERO = {
  headline: 'その難プロジェクト、\n完遂に導く。',
  sub: '「何を決めるべきか分からない」「対立で進まない」「炎上した」「前例がなく形にできない」——止まった・始まらないプロジェクトを、目的の達成まで導く統括PMOです。',
} as const;

/** こんな状況、ありませんか（顧客の痛み） */
export const CLIENT_PAINS: readonly string[] = [
  '何を決めるべきかが曖昧で、会議が前に進まない',
  '部門・ベンダー間の対立や責任論で、停滞している',
  '遅延・重大インシデントで炎上し、立て直せていない',
  '前例のない新規事業・制度を、誰も形にできない',
  '経営と現場で認識がズレ、意思決定が遅い',
];

/** ご依頼で得られること（顧客メリット） */
export const BENEFITS: readonly { title: string; body: string }[] = [
  {
    title: '“完遂”まで、任せられる',
    body: '依頼を作業で終わらせず、目的への貢献まで見据えて取り組む。進捗・完了報告を確実に行い、経営層とPMが安心して任せられます。',
  },
  {
    title: '意思決定が、速くなる',
    body: '経営と現場が同じ粒度で判断できる状態をつくり、「何を・誰を・どの順で」決めるかを可視化。停滞を解消します。',
  },
  {
    title: 'リスクが、下がる',
    body: '炎上・遅延・対立を、責任論を排して事実ベースで収束。二次被害を防ぎ、プロジェクトを安全に前進させます。',
  },
  {
    title: '立ち上がりから、即戦力',
    body: '開発予算1兆円規模（案件全体）の全社案件で全国セールス部門の統括PMOを担当。危機対応・官民連携まで経験し、立ち上がりから貢献します。',
  },
];

/** ご依頼の流れ */
export const PROCESS: readonly { step: string; title: string; body: string }[] = [
  { step: '01', title: 'ご相談', body: 'まずはメールで。現状の課題感だけでも構いません。' },
  { step: '02', title: 'すり合わせ', body: 'オンラインで、目的・体制・関わり方をすり合わせます。' },
  { step: '03', title: '参画・完遂', body: '初動から論点を可視化し、目的の達成まで導きます。' },
];

/** よくあるご不安への先回り回答 */
export const FAQ: readonly { q: string; a: string }[] = [
  {
    q: '守秘義務のある案件でも依頼できますか？',
    a: '大規模SI・官民連携・金融など、守秘を前提とした案件を多数経験しています。ご依頼時のNDAに基づき、機密を適切に管理します。',
  },
  {
    q: '立ち上がりは速いですか？',
    a: '現場を知り尽くした統括として、参画初動から状況・論点を可視化。最初の数週間で「何を・どの順で決めるか」と進め方を固めます。',
  },
  {
    q: '炎上・対立した現場にも入れますか？',
    a: '責任論を排し、事実整理・影響最小化・確定事項の迅速決定に論点を集中させて収束させるのが得意領域です。',
  },
  {
    q: '契約・稼働の条件は？',
    a: '業務委託／フルリモート／週3〜5日（応相談）。即日可。単価は月額120万円〜（税別・応相談）です。',
  },
];

/** 差別化の一文（上流〜下流・制度まで見通す全体知） */
export const POSITIONING =
  '上流から下流まで、そして制度まで。全体像と“つながり”を見通せるから、問題が起きても対処できる。';

/** 価値提案＝「安心」の定義 */
export const VALUE_PROP = {
  headline: '任せて、前に進む。',
  body:
    '依頼された作業を表面でこなすのではなく、その先の「目的への貢献」まで見据えて取り組む。そして、進捗・完了報告を確実に行う。経営層とPMが安心して任せられる——それが私の提供価値です。',
} as const;

/** 信念・哲学 */
export const PHILOSOPHY =
  '声の大きさではなく、目的にとっての正しさで決める。周りに押し付けず、自分を持ち続ける。';

/** 希望する関わり方（転職あっせん事業者向けの判断材料） */
export const SEEKING: Array<{ label: string; value: string }> = [
  { label: '形態', value: '業務委託' },
  { label: '領域', value: 'PMO ／ 通信・行政・金融' },
  { label: '稼働', value: 'フルリモート ／ 週3〜5日（応相談）' },
  { label: '開始', value: '即日可（応相談）' },
  { label: '単価', value: '月額 120万円〜（税別・応相談）' },
  { label: '役割', value: '経営層とPMを支える統括PMO' },
  { label: '志向', value: '0→1・立上げ／再生フェーズ（軌道化後はバトンタッチ）' },
];

/** 価値を出すフェーズ（0→1が核、定常運用は専門外） */
export const VALUE_STAGES: readonly {
  stage: string;
  label: string;
  emphasis: string;
  strong: boolean;
  body: string;
}[] = [
  {
    stage: '0 → 1',
    label: '創造・立上げ',
    emphasis: '最も得意',
    strong: true,
    body: '不確実性の中で道を作り、新しい概念を世に出す。前例のない制度・事業・仕組みをゼロから形にする、最も力を発揮するフェーズです。',
  },
  {
    stage: '1 → 10',
    label: '拡大・推進',
    emphasis: '得意',
    strong: true,
    body: '立ち上げたものを軌道に乗せ、組織とプロセスを拡張する。立上げは単独で、軌道化はチームを率いて進めます。',
  },
  {
    stage: '10 → 100',
    label: '安定運用',
    emphasis: 'バトンタッチ',
    strong: false,
    body: '軌道に乗ったら、定常運用は適任の方へバトンタッチ。私は次の0→1へ向かいます。',
  },
];

export const HIGHLIGHTS: readonly string[] = [
  'PMO実務 約10年（統括／戦略／リード／管理）',
  '最大案件：開発予算1兆円・体制2,000人規模のLTE全国展開（全国セールス部門の統括PMO）',
  '通信・金融・公共（自治体DX）／ 危機対応・官民連携・0→1新概念導入',
  'IPA専門委員・デジタル庁デジタル推進委員 ／ 政策創造 修士',
  '即戦力・フルリモート・即日可',
];

export const METHODS: readonly string[] = [
  'WBS / スケジュール管理',
  'EVM（出来高管理）',
  '進捗・課題・リスク管理',
  '変更管理 / スコープ統制',
  'RACI / 体制設計',
  'ステアリングコミッティ運営',
  'エスカレーション基準設計',
  'マルチベンダーコントロール',
  'RFP策定 / 要件定義',
  'CxO向けレポーティング',
];

/** 対応できるフェーズ・状況（こういう時に呼んでください） */
export const PHASES: readonly { title: string; body: string }[] = [
  { title: '立上げ・計画', body: '目的・体制・進め方が定まらないプロジェクトの初動を設計する。' },
  { title: '炎上・リカバリー', body: '遅延・重大インシデント・対立で止まった現場を、火消しから立て直す。' },
  { title: '大規模・全社横断', body: '多拠点・マルチベンダー・全社業務にまたがる統制と合意形成を担う。' },
  { title: '0→1・新概念導入', body: '前例のない制度・業務・システムをゼロから設計し、定着まで導く。' },
  { title: '官民・制度対応', body: '法規制・ガイドライン・行政連携を要する難案件の実行計画を策定する。' },
];

/** 専門知識・得意領域（制度・法令の理解が差別化軸） */
export const EXPERTISE: readonly string[] = [
  '本人確認（KYC / eKYC・保証レベル IAL/AAL）',
  '携帯電話不正利用防止法',
  '個人情報・利用者保護',
  '災害時・有事の特例運用設計',
  '官民連携・ガイドライン策定',
  '自治体DX・実証実験',
];

export type NavItem = {
  href: string;
  label: string;
  emphasized?: boolean;
};

export const NAV: readonly NavItem[] = [
  { href: '/projects/', label: '実績・ケーススタディ' },
  { href: '/career/', label: '職務経歴' },
  { href: '/about/', label: 'About' },
];

export const FOOTER_LINKS: readonly NavItem[] = [
  { href: '/projects/', label: '実績・ケーススタディ' },
  { href: '/career/', label: '職務経歴' },
  { href: '/about/', label: 'About' },
  { href: '/privacy/', label: 'プライバシーポリシー' },
];

export type Stat = { value: string; label: string };

export const STATS: readonly Stat[] = [
  { value: '約10年', label: 'PMO実務歴（統括／戦略／管理）' },
  { value: '1兆円', label: '最大案件の開発予算（案件全体・単年度）' },
  { value: '2,000人', label: '最大案件の開発体制（全体）' },
  { value: 'IPA・デジタル庁', label: '専門委員／デジタル推進委員' },
];

export type Strength = { eyebrow: string; title: string; body: string };

export const STRENGTHS: readonly Strength[] = [
  {
    eyebrow: 'TRANSLATE',
    title: '経営と現場を“翻訳”する',
    body: '経営層の意図を現場の言葉へ、現場の悩みを経営の判断材料へ。双方が同じ粒度で判断できる状態をつくり、意思決定の遅滞を解消します。',
  },
  {
    eyebrow: 'WHOLE-VIEW',
    title: '上流〜下流・制度まで見通す',
    body: '要件の上流から運用の下流、そして法制度まで。全体像と“つながり”を把握しているからこそ、問題が起きても根本から対処できます。',
  },
  {
    eyebrow: 'JUDGMENT',
    title: '正しさで決め、ネックを潰す',
    body: '声の大きさではなく、目的にとっての正しさで判断。会議では相手の真意と“本当のネック”を見極め、裏で奔走してそれを解消します。',
  },
  {
    eyebrow: 'CRISIS',
    title: '有事に、迅速に決める',
    body: 'メリット・デメリット・法令の範囲を、有事の中で一つひとつ迅速に判断。全国へ通達し、混乱を最小化して人を守る制度を立ち上げます。',
  },
];

/** スキル・コンピテンシーマトリクス（◎=主担当 ○=経験あり △=補佐） */
export type SkillLevel = '◎' | '○' | '△';
export type SkillItem = { label: string; level: SkillLevel };

export const SKILL_GROUPS: Array<{ title: string; items: SkillItem[] }> = [
  {
    title: 'PMO機能',
    items: [
      { label: '計画・立上', level: '◎' },
      { label: '進捗管理', level: '◎' },
      { label: 'リスク管理', level: '◎' },
      { label: 'ステークホルダー管理', level: '◎' },
      { label: '変更管理', level: '◎' },
      { label: '品質管理', level: '○' },
    ],
  },
  {
    title: '対応領域',
    items: [
      { label: '大規模SI', level: '◎' },
      { label: '官公庁連携', level: '◎' },
      { label: '危機対応', level: '◎' },
      { label: 'マルチベンダー統制', level: '◎' },
      { label: 'ゼロ→1 新概念導入', level: '◎' },
      { label: 'DX推進', level: '○' },
    ],
  },
];

/** 現場で実際に頂いた言葉（個人名は出さず、関係性のみ記載） */
export type Voice = { quote: string; attribution: string };

export const VOICES: readonly Voice[] = [
  {
    quote: '君に任せておけば、安心だ。自由にやってほしい。',
    attribution: '担当案件の責任者（経営層）',
  },
];

/** 使用ツール */
export const TOOLS: readonly string[] = [
  'MS Office (Word/Excel/PowerPoint)',
  'Slack',
  'Backlog',
  'Confluence',
  'MS Teams',
  'Notion',
];
