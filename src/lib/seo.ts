import { PROFILE, SITE } from '@/consts';

export function buildPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PROFILE.fullName,
    alternateName: PROFILE.fullNameEn,
    url: SITE.url,
    image: `${SITE.url}${SITE.ogImage}`,
    jobTitle: 'PMOコンサルタント（統括PMO／戦略PMO）',
    worksFor: {
      '@type': 'Organization',
      name: '合同会社KOHO',
    },
    knowsAbout: [
      'PMO',
      'プロジェクトマネジメント',
      'クライシスマネジメント',
      'DX推進',
      'マルチベンダーコントロール',
      '合意形成・ルールメイキング',
    ],
    nationality: 'JP',
  };
}

export function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: 'ja-JP',
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
