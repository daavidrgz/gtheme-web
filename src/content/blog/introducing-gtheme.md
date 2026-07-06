---
title: "Introducing Gtheme"
description: "Why we built a blazingly fast, centralized theme manager for *NIX — and how one command came to reskin an entire desktop."
date: 2026-06-18
author: "David"
tags: ["announcement", "ricing"]
accent: "orange"
---

Ricing is fun right up until you want to change your theme. Then it's twelve
config files, six syntaxes, and a nagging feeling you missed one. Your terminal
is Gruvbox, your bar is still Nord, and your editor is doing its own thing.

**Gtheme fixes that.** Define your look once, and a single command repaints the
whole desktop — terminal, status bar, editor, prompt, launcher, and wallpaper —
consistently, every time.

## What it does

- **350+ curated themes**, each verified against every supported app.
- **One command** to swap an entire desktop, in well under a second.
- **Pattern templating** so any text config becomes theme-aware with a few
  placeholders.
- **Plug-n-play desktops** you can install from the community and use instantly.

## Why Rust

Because switching themes should feel instant. Gtheme's apply pass reads your
central config, resolves every template, and writes every target in one go —
fast enough that you'll actually change themes on a whim.

```console
$ gtheme theme apply tokyonight
✓ repainted 42 targets in 128ms
```

This is just the start. Over the next few posts we'll dig into the templating
engine, share community desktops, and show how to add your own apps to the
managed set. Welcome aboard.
