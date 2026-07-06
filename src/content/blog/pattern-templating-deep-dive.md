---
title: "A deep dive into pattern templating"
description: "How Gtheme turns a single config pattern into a correctly themed file for any of 350+ palettes — no per-theme copies, no manual editing."
date: 2026-06-30
author: "David"
tags: ["templating", "internals"]
accent: "green"
---

The core trick that makes Gtheme work is deceptively simple: instead of keeping
one config file per theme, you keep **one pattern** with placeholders, and
Gtheme fills in the active theme's values when you apply.

## Placeholders

A pattern is just your normal config with `{{...}}` attributes where colors go:

```toml
[colors.primary]
background = "{{base00}}"
foreground = "{{base05}}"

[colors.normal]
red   = "{{red}}"
green = "{{green}}"
blue  = "{{blue}}"
```

At apply time, Gtheme resolves each placeholder against the selected theme and
writes the finished file to where the app expects it.

## Why this scales

Adding a new theme costs nothing on the app side — every pattern already knows
how to render it. And adding a new app is a one-time job: drop in the
placeholders once, and that app joins the themed set for all 350+ palettes at
once.

```console
$ gtheme theme apply catppuccin
✓ resolved 18 patterns
✓ repainted 42 targets in 131ms
```

No copies to keep in sync. No file you forgot to update. Just one pattern, many
themes.
