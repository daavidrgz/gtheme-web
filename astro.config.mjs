import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

const priorities = [
  { path: "/", priority: 1.0, freq: "weekly" },
  { path: "/blog/one-command-theme-swap", priority: 0.9, freq: "monthly" },
  { path: "/features", priority: 0.9, freq: "monthly" },
  { path: "/features/one-command", priority: 0.8, freq: "monthly" },
  { path: "/features/themes", priority: 0.8, freq: "monthly" },
  { path: "/features/centralized", priority: 0.7, freq: "monthly" },
  { path: "/features/templating", priority: 0.7, freq: "monthly" },
  { path: "/features/desktops", priority: 0.8, freq: "monthly" },
  { path: "/blog", priority: 0.7, freq: "weekly" },
];

export default defineConfig({
  site: "https://gtheme.dev",
  integrations: [
    mdx(),
    sitemap({
      entryLimit: 1000,
      serialize(item) {
        const raw = new URL(item.url).pathname;
        const path = raw.length > 1 ? raw.replace(/\/$/, "") : "/";
        const match = priorities.find((p) => p.path === path);
        if (match) {
          item.priority = match.priority;
          item.changefreq = match.freq;
        } else {
          item.priority = 0.6;
          item.changefreq = "monthly";
        }
        return item;
      },
    }),
  ],
  adapter: cloudflare()
});
