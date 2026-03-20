import { defineCollection, z } from 'astro:content';

const novosti = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    thumbnail: z.string(),
    heroAlt: z.string(),
    preview: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  novosti,
};
