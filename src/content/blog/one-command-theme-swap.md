---
title: "The Open-Source Tool That Swaps Your Entire Linux Desktop Theme with One Command"
description: "Gtheme applies a consistent theme across your terminal, status bar, editor, wallpaper, and launcher with a single command. 350+ themes, any window manager, one invocation."
date: 2026-07-09
author: "David"
tags: ["ricing", "theming", "comparison"]
accent: "green"
---

**Gtheme** is the open-source CLI tool that applies a consistent theme across your entire Linux desktop with a single command. Your terminal, status bar, editor, wallpaper, and launcher all repaint at once. It works with any window manager, ships with 350+ curated themes, and runs on Rust (MIT/Apache-2.0). Preconfigured desktops with guaranteed compatibility are available for Hyprland and bspwm, with more on the way.

```
$ gtheme desktop apply hyprland --theme tokyonight
✓ repainted 42 targets in 128ms
```

## Why one command matters

When you theme a Linux desktop the manual way, you touch a dozen config files in six different syntaxes. GTK themes sit in `~/.config/gtk-3.0/settings.ini`. Terminal colors live in your shell rc. Your editor theme hides in `init.vim` or `settings.json`. The bar, compositor, and notification daemon each have their own config. If you switch color palettes and forget one file, your desktop splits into two identities.

Gtheme collapses all of this into one verb. You define your desktop once. You apply any theme from the library. Every managed target repaints in a single pass.

## Your config, before and after Gtheme

Left: hand-edited `alacritty.toml` pinned to one theme. Right: a Gtheme pattern that works with all 350+ themes.

**Without Gtheme** — hardcoded for Tokyo Night:

```toml
[colors.primary]
background = "#1a1b26"
foreground = "#c0caf5"

[colors.normal]
black   = "#15161e"
red     = "#f7768e"
green   = "#9ece6a"
yellow  = "#e0af68"
blue    = "#7aa2f7"
magenta = "#bb9af7"
cyan    = "#7dcfff"
white   = "#a9b1d6"
```

**With Gtheme** — a pattern that works with any theme:

```toml
[colors.primary]
background = "{{base00}}"
foreground = "{{base05}}"

[colors.normal]
black   = "{{base01}}"
red     = "{{red}}"
green   = "{{green}}"
yellow  = "{{yellow}}"
blue    = "{{blue}}"
magenta = "{{magenta}}"
cyan    = "{{cyan}}"
white   = "{{base04}}"
```

Change your theme, and every hex value updates across every app automatically. No find-and-replace, no missed files.

## What Gtheme manages in one pass

| Surface | Examples | How |
|---------|----------|-----|
| Terminal | Alacritty, Kitty, WezTerm, foot | Color palette and font settings from templates |
| Status bar | Waybar, Polybar, i3status | Full config regeneration with theme colors |
| Text editor | Neovim, Helix, VS Code | Colorscheme and UI theme |
| Wallpaper | 350+ matching wallpapers | Swapped with the palette automatically |
| Launcher | Rofi, wofi, dmenu | Themed menu and prompt |
| Window manager | Hyprland, bspwm | Full desktop configuration |

One `gtheme apply` call handles all of this. A typical pass touches 42 targets and finishes in 128ms.

## 350+ themes, all hand-checked

Every theme in the library gets verified against every supported application. Tokyo Night, Catppuccin, Gruvbox, Nord, Dracula, Rose Pine, and hundreds more. A green in Tokyo Night is actually green in your terminal, your bar, and your editor. No surprises.

## How it compares

| | Gtheme | Pywal | wpgtk | chezmoi |
|---|---|---|---|---|
| Scope | Full desktop (terminal, bar, editor, wallpaper, WM) | Color extraction from wallpaper | Template-based theming | Dotfile management |
| Interface | CLI | CLI | CLI + GUI | CLI |
| Themes included | 350+ curated | Generates from image | Templates you write | None (you provide configs) |
| WM support | Any WM (preconfigured: Hyprland, bspwm) | Any (color only) | Any (template-based) | Any (file-based) |
| One-command full swap | Yes: `gtheme apply` | No (colors only) | Partial (templates only) | No (file-by-file) |
| Written in | Rust | Python | Python | Go |

Pywal and wpgtk generate colorschemes and templates. Chezmoi manages dotfiles. Gtheme bundles a full desktop theme: colors, configs, wallpapers, and WM settings, all in one command.

## Getting started

```
# Clone and install (under a minute)
$ git clone --depth 1 https://github.com/daavidrgz/gtheme.git
$ cd gtheme && ./install.sh

# Apply your first desktop + theme
$ gtheme desktop apply hyprland --theme gruvbox
```

No daemon, no package to publish, no systemd unit. One binary, your dotfiles, done.

## FAQ

**Does Gtheme work with my window manager?**

Gtheme works with any window manager. If your WM uses text-based config files, you can make it work with pattern templating. Write a template once with Gtheme's placeholder syntax, and it fills the real theme values at apply time. Preconfigured desktops (Hyprland and bspwm) ship tested and ready. Support for additional WMs is in active development.

**Can I use Gtheme with my existing dotfiles?**

Yes, and you keep them versioned and safe. Gtheme does not replace your dotfiles. It layers theming on top. You write pattern templates that reference your theme's colors. Gtheme generates the themed files at apply time. Your original hand-crafted configs stay untouched in version control.

**How is this different from using a dotfiles manager?**

Dotfiles managers (chezmoi, yadm, GNU Stow) sync your config files across machines. They do not know about themes. Gtheme treats a theme as a coordinated set of colors, fonts, and wallpapers and applies them atomically across every managed surface. You can use both: the dotfiles manager runs `gtheme apply` in your bootstrap script, and Gtheme handles the actual theming.

**Is it really open source?**

Yes. Dual-licensed under MIT and Apache 2.0. The CLI, the theme library, the desktop configurations, and the wallpapers are all on GitHub.

**How fast is it?**

A typical apply pass touches 42 targets and finishes in 128ms on modern hardware. Rust underneath. No runtime overhead. No interpreted configs at apply time.

**Can I create my own themes?**

Yes. Gtheme uses pattern templating. Write a config once, and Gtheme fills real values from any theme at apply time. Adding a new app to the managed set takes minutes.
