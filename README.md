# gtheme-web

Landing page for [Gtheme](https://github.com/daavidrgz/gtheme) — the blazingly
fast dotfile & global theme manager for \*NIX.

Built with [Astro](https://astro.build), deployed on
[Cloudflare Pages](https://pages.cloudflare.com) at **[gtheme.dev](https://gtheme.dev)**.

The page is itself a live demo of the tool: the theme switcher in the hero
repaints the entire site through CSS custom properties, the same way Gtheme
reskins a real desktop.

## Develop

Uses [Bun](https://bun.sh).

```console
bun install      # install dependencies
bun run dev      # start dev server at http://localhost:4321
bun run build    # build static site to ./dist
bun run preview  # preview the production build
```

## Deploy (Cloudflare Pages)

- **Framework preset:** Astro
- **Build command:** `bun run build`
- **Build output directory:** `dist`

## Add a theme

Themes live in `src/styles/global.css` as `:root[data-theme="..."]` palette
blocks, and get a chip + swatch in `src/components/ThemeSwitcher.astro`.

## License

Same as Gtheme: dual-licensed MIT / Apache-2.0.
