import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per Support Stack episode or long read. The front matter is the
// structured bit (title, date, guest, video); the body is the summary followed by
// a "## Episode transcript" heading and the transcript.
const supportStack = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/support-stack' }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    episode: z.number().optional(),
    format: z.enum(['guest', 'solo', 'article']).default('guest'),
    guest: z.string().optional(),
    youtubeId: z.string().optional(),
    thumbnail: z.string().optional(),
    excerpt: z.string().default(''),
    categories: z.array(z.string()).default([]),
    resources: z.array(z.object({ label: z.string(), url: z.string().optional() })).default([]),
    squarespaceUrl: z.string().optional(),
  }),
});

export const collections = { 'support-stack': supportStack };
