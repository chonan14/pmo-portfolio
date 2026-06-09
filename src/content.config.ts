import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

// URL に使う slug は半角小文字英数字とハイフンのみ（後から変えるとURLが切れるため命名時に確定）
const slug = z.string().regex(/^[a-z0-9-]+$/, 'slug は半角小文字英数字とハイフンのみ');
const status = z.enum(['Public', 'Draft', 'Archive']).default('Public');

// Projects（プロジェクト経歴・案件履歴）= 課題→介入→成果 の3段で記述。
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug,
    status,
    displayOrder: z.number().int(),
    featured: z.boolean().default(false),
    industry: z.array(z.string()).default([]),
    clientScale: z.string().optional(),
    clientNameVisible: z.string().optional(),
    role: z.string(),
    durationStart: z.string(),
    durationEnd: z.string().optional(),
    scope: z.string().optional(),
    summary: z.string(),
    challenge: z.array(z.string()).min(1),
    intervention: z.array(z.string()).min(1),
    resultsQuantitative: z.array(z.string()).min(1),
    resultsQualitative: z.array(z.string()).default([]),
    toolsMethods: z.array(z.string()).default([]),
    confidentialityLevel: z.enum(['Open', 'Masked', 'Restricted']).default('Open'),
    note: z.string().optional(),
  }),
});

// Career（職務経歴・キャリア）= 職歴/学歴/委員 を時系列で。Type で章立て。
const career = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/career' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['Employment', 'Education', 'Committee', 'Certification', 'Award']),
    status,
    organization: z.string().optional(),
    position: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
    current: z.boolean().default(false),
    keyAchievements: z.array(z.string()).default([]),
    responsibilities: z.array(z.string()).default([]),
    displayOrder: z.number().int(),
  }),
});

export const collections = { projects, career };
