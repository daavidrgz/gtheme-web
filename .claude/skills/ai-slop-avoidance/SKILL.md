---
name: ai-slop-avoidance
description: Catalog of tropes that signal "AI-generated design" and how to avoid them. Reference skill; load when critiquing or preventing slop.
when_to_use:
  - About to produce a visual from a vague brief
  - Reviewing a design for authenticity
  - User explicitly asks to avoid "AI-looking" designs
---

# ai-slop-avoidance

The most damning thing someone can say about a design now is "this looks AI-generated." What they mean: generic, trope-laden, no committed choices, visual mumble. This skill catalogs the specific tropes so you can recognize and avoid them.

## Core principle: commit to choices

AI slop usually comes from *not choosing*. Picking "clean and modern" isn't a choice; it's a shrug that defaults to the mean. The antidote is to commit to a specific aesthetic direction, even if it's wrong — wrong-but-committed beats right-but-generic.

See `skills/frontend-aesthetics/` for the positive side of this.

## The big tropes

### 1. The purple gradient background
Diagonal `linear-gradient(135deg, #667EEA, #764BA2)` behind a hero section. Maybe with a "glow" behind the headline. Every AI-generated landing page has this because early image models learned it.

**Fix:** flat color. If you must gradient, keep the hue range ≤30° apart and commit to a specific texture (risograph two-tone, not smooth "dawn sky").

### 2. Cards with left-border accent stripes
`border-left: 4px solid #indigo` on every feature card. Popularized by bootstrap tutorials and Tailwind's docs examples.

**Fix:** differentiate cards by type (icon variant, layout, color tint) not border-left.

### 3. Decorative icons next to every bullet
Every feature list item has a little rounded-square icon next to it. Often mismatched styles pulled from Heroicons / Lucide / FontAwesome.

**Fix:** icons earn their place by adding information. If the list reads fine without them, drop them. If you keep them, pick one family and commit.

### 4. 4-up stat cards with invented numbers
"10M+ users," "99.9% uptime," "Trusted by teams at" with a row of grayscale logos. Numbers the model invented.

**Fix:** real numbers or no numbers. "Trusted by" only if trusted by.

### 5. Inter + neutral gray
Default font, default palette, everything looks like every SaaS landing page.

**Fix:** pick a distinctive typeface. See `skills/frontend-aesthetics/resources/type-pairings.md`.

### 6. Glassmorphism everywhere
Frosted-glass cards floating over a gradient. Was interesting in 2020; now it's wallpaper.

**Fix:** flat UI with intentional hierarchy. Reach for blur only when it communicates (e.g., modal dimming).

### 7. Stock photos of diverse people at laptops
Hero photo of 4 people of varied ethnicities smiling at a laptop. Often AI-generated.

**Fix:** placeholder with a caption ("product demo video" / "team photo" / "customer quote"). Real photos later; placeholder now is more honest.

### 8. Emoji as UI
🚀 Launch! ✨ Features! 🎯 Goals!

**Fix:** unless the brand is literally emoji-based (e.g., a playful consumer app with explicit emoji branding), cut them. They signal "I couldn't pick an icon style."

### 9. Drop shadows on everything
Cards with shadows, buttons with shadows, headlines with shadows, shadows on shadows.

**Fix:** pick flat OR elevated, commit. If elevated, 2–3 shadow tiers max, used to signal actual hierarchy.

### 10. "Subscribe to our newsletter" in the hero footer
Every landing page has this, whether there's a newsletter or not.

**Fix:** only add if the newsletter exists. And put it where newsletters go (not the hero).

### 11. Animated gradient "mesh" backgrounds
Moving blobs of color, often CSS `conic-gradient` with `filter: blur(100px)`. Signature of 2022 AI products.

**Fix:** static background. Animate content, not decoration.

### 12. "Built with" rows of grayscale logos
React, TypeScript, Stripe, Vercel… dumped into a row.

**Fix:** only include logos if it's a trust signal (partners, customers). Technology stack belongs in docs.

### 13. Absurdly deep font sizes
`font-size: 14px` for body because "that looks more designed." 14 is fine; 16 is better; anything under 14 is usually a mistake.

**Fix:** 16px baseline for web body. 14 for secondary only.

### 14. The generic "feature / benefit / CTA" structure
Hero → 3 features in a row → bigger feature with screenshot → 3 testimonials → pricing → CTA. Identical across 10,000 sites.

**Fix:** structure to the actual story. A landing page can be a long-scroll narrative, a single interactive demo, a gallery, a manifesto — not always the same module stack.

### 15. Invented testimonials
"This product changed my life!" — Sarah K, CEO, Acme Corp. With an avatar.

**Fix:** real testimonials or none. Blank space is better than fake trust.

### 16. Perfectly-cropped hero product shots on a pedestal
Centered isometric dashboard screenshot with a drop shadow, floating over a gradient.

**Fix:** use a real screenshot of the real product. Or crop in tight on one element. Or skip entirely.

### 17. Corner-to-corner feature-grid stat spam
"Fast / Reliable / Secure / Intuitive / Scalable / Customizable" as a 3×2 grid.

**Fix:** pick 2–3 real differentiators. Talk about them properly with real examples.

### 18. "Powered by AI" sparkle badges ✨
Pink or purple sparkle next to anything that mentions AI.

**Fix:** if the product actually uses AI, describe what it does. Sparkles have been worn out.

### 19. The "we believe" manifesto paragraph
"At [company], we believe software should be [virtue]. That's why we built [product]."

**Fix:** start with what the thing does. Beliefs come through craft, not declaration.

### 20. Avatars on things that don't need them
A "team" icon, a "user" icon, a "customer" icon — all as little circular photos of AI-generated faces.

**Fix:** use typography for these. Icons of abstract shapes if you must.

---

## Color slop

- **Too many colors.** More than 2 accents = decorating.
- **High-chroma whites.** Whites with chroma > 0.02 look like colored paper.
- **Bootstrap greens/reds/blues.** Default semantic colors that don't match the system.
- **Unintentional rainbow.** Each feature card a different color, hoping "varied" = "designed."

## Type slop

- **Too many font families.** More than 3 = chaos.
- **Fraunces on a tech site.** Overused for "AI-designed 2024."
- **Arial / Roboto / Open Sans** as defaults — signals "didn't pick."
- **Display font in body.** Hard to read, shouts.

## Layout slop

- **Centered everything.** Every block centered, no rhythm, no anchor.
- **Section after section of the same layout.** No variety.
- **Random card grids.** 3-col, 4-col, 2-col alternating with no reason.
- **Float-y floating elements** with no structure.

## Motion slop

- **Animating on every scroll** — parallax-everything, fade-everywhere.
- **Spring bounce on buttons** — comical after two clicks.
- **Auto-play carousels** that no one watches.

---

## The discipline

Before shipping, ask:
1. **Have I committed to an aesthetic direction?**
2. **Does my design look like 10,000 others, or like itself?**
3. **Have I added any content (copy, numbers, testimonials) that isn't real?**
4. **Is any element here just filling space?**

One "yes" to the last two, or a "no" to the first, means more work.

## What good looks like

A design that looks like someone made a choice. Specific fonts, specific colors, specific layout logic. Content that earns its place. Rhythm that's intentional. Even minimalism, done right, looks committed — Braun product pages, Stripe docs, Craigslist — not generic.

## Checklist

- [ ] No gradient background "for depth"
- [ ] No left-border accent-stripe cards
- [ ] No decorative icons next to every bullet
- [ ] No invented stats or testimonials
- [ ] Fonts chosen deliberately (not Inter/Roboto by default)
- [ ] 0–2 accent colors, chosen from a palette
- [ ] Drop shadows used intentionally or not at all
- [ ] No "built with" / "trusted by" rows unless real
- [ ] Structure matches the content's story, not a SaaS template
- [ ] Emoji absent unless the brand owns them

## Resources

- `resources/examples.md` — annotated before/after pairs
