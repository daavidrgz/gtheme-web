---
title: "Sharing full desktops, not screenshots"
description: "Plug-n-play desktops bundle a window manager, bar, and launcher into one installable package — so a great setup is a command away, not a weekend of guesswork."
date: 2026-07-05
author: "The Gtheme team"
tags: ["desktops", "community"]
accent: "cyan"
---

We've all been there: you spot a gorgeous setup on r/unixporn, and the "dotfiles"
link is a half-broken gist from two years ago. Reproducing it is a weekend of
guesswork.

**Gtheme desktops** turn a setup into a package. A desktop bundles a window
manager, bar, launcher, and the patterns that tie them together — everything
needed for a complete, coherent environment.

## Install one

```console
$ gtheme desktop install hyprland-minimal
$ gtheme desktop apply hyprland-minimal --theme rosepine
✓ applied desktop 'hyprland-minimal'
✓ repainted 42 targets in 126ms
```

That's it. You get the whole environment, then layer any of the 350+ themes on
top.

## Share yours

If you've built something you're proud of, package it up and open a PR to the
community collection. Someone out there is one command away from loving your
setup — let's make it easy for them.
