import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string(),
  date: z.string(),
  thumbnail: z.string(),
  heroAlt: z.string(),
  preview: z.string(),
  order: z.number(),
  draft: z.boolean().optional().default(false),
});

const novosti = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/novosti' }),
  schema: articleSchema,
});

const news = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/news' }),
  schema: articleSchema,
});

export const collections = {
  novosti,
  news,
};
