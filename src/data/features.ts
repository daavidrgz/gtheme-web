// Single source of truth for the features bento (home) and the individual
// /features/[slug] pages. Icons are inline SVG path markup (stroke-based).

export interface FeatureBlock {
  heading: string;
  body: string;
  code?: { lang: string; title?: string; lines: string[] };
  bullets?: string[];
}

export interface Feature {
  slug: string;
  title: string;
  /** short label shown on the bento card */
  blurb: string;
  /** one-line thesis for the feature page hero */
  tagline: string;
  icon: string;
  accent: "purple" | "yellow" | "cyan" | "green" | "orange" | "blue";
  span?: "big" | "wide" | "tall";
  blocks: FeatureBlock[];
}

export const features: Feature[] = [
  {
    slug: "themes",
    title: "350+ themes & wallpapers",
    blurb:
      "A huge curated palette library. Every color, everywhere, changes at once.",
    tagline: "A curated library of 350+ palettes, one keystroke away.",
    icon: '<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>',
    accent: "purple",
    span: "big",
    blocks: [
      {
        heading: "Every classic, hand-checked",
        body: "Tokyo Night, Catppuccin, Gruvbox, Nord, Dracula, Rosé Pine, Kanagawa and hundreds more — each verified against every supported app so the greens are actually green and the contrast holds up.",
      },
      {
        heading: "Wallpapers travel with the palette",
        body: "A theme isn't just 16 colors. Gtheme ships matching wallpapers and swaps them with the rest of the desktop, so your background never fights your bar.",
        bullets: [
          "Curated wallpaper per theme, or bring your own",
          "Automatic light/dark variants where the theme defines them",
          "Preview before you commit",
        ],
      },
      {
        heading: "Apply one",
        body: "Pick a theme and everything repaints in a single pass.",
        code: {
          lang: "console",
          title: "shell",
          lines: [
            "$ gtheme theme apply tokyonight",
            "✓ repainted 42 targets in 128ms",
          ],
        },
      },
    ],
  },
  {
    slug: "one-command",
    title: "One command",
    blurb:
      "Swap your entire desktop — apps, colors, wallpaper — with a single invocation.",
    tagline: "Your whole desktop, restyled in one line.",
    icon: '<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',
    accent: "yellow",
    span: "wide",
    blocks: [
      {
        heading: "No more editing twelve dotfiles",
        body: "Changing themes the manual way means touching your terminal, bar, editor, launcher, and notification daemon by hand. Gtheme collapses all of that into one verb.",
        code: {
          lang: "console",
          title: "shell",
          lines: [
            "$ gtheme desktop apply hyprland --theme gruvbox",
            "✓ applied desktop 'hyprland'",
            "✓ repainted 42 targets in 128ms",
          ],
        },
      },
      {
        heading: "Fast, because it's Rust",
        body: "The whole apply pass runs in well under a second on a typical setup. Fast enough that switching themes becomes something you do on a whim, not a chore.",
      },
    ],
  },
  {
    slug: "centralized",
    title: "Centralized & automated",
    blurb: "Define theming once. Gtheme propagates it across every app.",
    tagline: "One source of truth for how your whole system looks.",
    icon: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="4" r="2"/><circle cx="12" cy="20" r="2"/><circle cx="4" cy="8" r="2"/><circle cx="20" cy="8" r="2"/><circle cx="4" cy="16" r="2"/><circle cx="20" cy="16" r="2"/>',
    accent: "cyan",
    blocks: [
      {
        heading: "A single control plane",
        body: "Gtheme keeps a central registry of the apps it manages and the theme currently mapped to each. Change the mapping, and everything downstream follows automatically.",
        bullets: [
          "One config directory, version-controlled with your dotfiles",
          "Add or remove managed apps without touching the theme files",
          "Reproducible across machines — clone and apply",
        ],
      },
    ],
  },
  {
    slug: "templating",
    title: "Pattern templating",
    blurb:
      "Write config patterns with generic attributes; Gtheme fills them per theme.",
    tagline: "Write your config once with placeholders. Gtheme fills the rest.",
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 9v12"/>',
    accent: "green",
    blocks: [
      {
        heading: "Placeholders, not copies",
        body: "Instead of maintaining one config per theme, you write a single pattern with generic attributes. Gtheme substitutes the active theme's real values at apply time.",
        code: {
          lang: "toml",
          title: "alacritty.pattern",
          lines: [
            "[colors.primary]",
            'background = "{{base00}}"',
            'foreground = "{{base05}}"',
            "",
            "[colors.normal]",
            'red   = "{{red}}"',
            'green = "{{green}}"',
          ],
        },
      },
      {
        heading: "Add a new app in minutes",
        body: "Any text-based config can become a pattern. Drop in the placeholders once and that app joins the themed set forever.",
      },
    ],
  },
  {
    slug: "desktops",
    title: "Plug 'n' play desktops",
    blurb:
      "Install ready-made desktop configs from other people — everything just works.",
    tagline: "Full, shareable desktop setups — clone and run.",
    icon: '<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/>',
    accent: "orange",
    blocks: [
      {
        heading: "A desktop is a package",
        body: "A Gtheme desktop bundles a window manager, bar, launcher, and the patterns that tie them together. Install one and you get a complete, coherent environment — no hunting through screenshots and broken gists.",
        bullets: [
          "Works with Hyprland, i3, Sway, KDE, GNOME, XFCE and more",
          "Community desktops shared through the gtheme-desktops repo",
          "Layer any of the 350+ themes on top",
        ],
      },
      {
        heading: "Grab one",
        body: "Browse the community collection, then apply.",
        code: {
          lang: "console",
          title: "shell",
          lines: [
            "$ gtheme desktop install hyprland-minimal",
            "$ gtheme desktop apply hyprland-minimal",
          ],
        },
      },
    ],
  },
];

export const getFeature = (slug: string) =>
  features.find((f) => f.slug === slug);
