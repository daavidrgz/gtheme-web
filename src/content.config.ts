import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default("The Gtheme team"),
    tags: z.array(z.string()).default([]),
    accent: z
      .enum(["purple", "yellow", "cyan", "green", "orange", "blue"])
      .default("purple"),
  }),
});

export const collections = { blog };
