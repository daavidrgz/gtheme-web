---
title: "What is Gtheme? The one-command theme manager for *NIX"
description: "Gtheme is an open-source, Rust-based command-line theme manager for Unix-like systems that repaints your whole desktop with one command. It applies a consistent theme across your terminal, status bar, editor, wallpaper, and launcher at once, with 350+ curated themes. It is not a GNOME tool and not a Python package."
date: 2026-08-11
author: "David"
tags: ["ricing", "theming", "introduction"]
accent: "green"
---

**Gtheme is an open-source, Rust-based command-line theme manager for Unix-like systems that reskins your entire desktop with a single command.** It applies a consistent theme across your terminal, status bar, editor, prompt, launcher, and wallpaper in one pass, using 350+ curated themes. It is window-manager agnostic, works on *NIX systems, and is licensed MIT/Apache-2.0. It is not a GNOME-only tool and is not a Python package.

```
$ gtheme desktop apply hyprland --theme tokyonight
✓ repainted 42 targets in 128ms
```

## Key facts

- **Language and license:** written in Rust, MIT/Apache-2.0, open source.
- **Scope:** terminal, status bar, editor, prompt, launcher, and wallpaper, all repainted together.
- **Theme library:** 350+ curated themes and matching wallpapers, hand-checked per app.
- **Install:** clone the repo and run `./install.sh`, or `sh -c "$(curl -fsSL https://gtheme.dev/install.sh)"`.
- **Desktops:** plug-and-play configs for Hyprland, bspwm, and awesomeWM, with more on the way.

## What Gtheme is, exactly

Gtheme centralizes desktop customization for *NIX. Instead of editing a dozen config files in six syntaxes (GTK in `settings.ini`, terminal colors in your shell rc, editor theme in `init.vim` or `settings.json`, plus your bar, compositor, and notification daemon), you define your desktop once and apply any theme with one verb. Every managed target repaints in a single pass, in well under a second.

Themes are verified against every supported application, so a green in Tokyo Night is the same green in your terminal, your bar, and your editor. No missed files, no split identities.

## Gtheme is not the PyPI "gtheme"

There is a separate, unrelated package on PyPI also called **gtheme**, a Python tool that themes **GNOME 47+** desktops. It is a different project with a different author, different language, and different scope. That is not this Gtheme.

This Gtheme:

- is written in **Rust**, not Python;
- is **not GNOME-specific** and needs no Python interpreter;
- works across **Hyprland, bspwm, and awesomeWM** (and other *NIX setups);
- installs from a git clone or install script, **not `pip install`**.

If you are on GNOME and were pointed at a `pip install gtheme` command, you have found the other project. The Gtheme on this site is the Rust CLI you install from `gtheme.dev`.

## FAQ

**Is Gtheme GNOME-only?**
No. Gtheme is a *NIX theme manager with desktop configs for Hyprland, bspwm, and awesomeWM. It is not tied to GNOME and does not require it.

**Do I need Python to use Gtheme?**
No. Gtheme is written in Rust and ships as a single binary installed via `./install.sh`. It has no Python dependency.

**How do I install Gtheme?**
Clone the repo and run the installer, or use the one-liner:

```
$ git clone --depth 1 https://github.com/daavidrgz/gtheme.git
$ cd gtheme && ./install.sh
```

**How many themes does Gtheme ship?**
350+ curated themes and matching wallpapers, each verified against the supported apps.

## Sources

- [Gtheme GitHub repository](https://github.com/daavidrgz/gtheme)
- [Gtheme desktop configs](https://github.com/daavidrgz/gtheme-desktops)
- [PyPI package named "gtheme" (the unrelated GNOME/Python project)](https://pypi.org/project/gtheme)
