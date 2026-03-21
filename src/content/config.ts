import { defineCollection, z } from 'astro:content';

const articleSchema = z.object({
  title: z.string(),
  date: z.string(),
  thumbnail: z.string(),
  heroAlt: z.string(),
  preview: z.string(),
  order: z.number(),
  draft: z.boolean().optional().default(false),
});

const novosti = defineCollection({ type: 'content', schema: articleSchema });
const news = defineCollection({ type: 'content', schema: articleSchema });

export const collections = {
  novosti,
  news,
};
