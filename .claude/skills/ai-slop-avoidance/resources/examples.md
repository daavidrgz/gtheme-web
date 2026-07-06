# Annotated before/after examples

## Example 1: Hero section

### Before (slop)
```
┌───────────────────────────────────────────────┐
│ [gradient purple-to-pink background]          │
│                                               │
│      ✨ Powered by AI                         │
│      The AI platform for modern teams         │
│      [Subscribe to our newsletter]            │
│                                               │
│      [Get started]  [Learn more]              │
│                                               │
│  [row of grayscale logos: react, stripe...]   │
└───────────────────────────────────────────────┘
```

**Why it's slop:** gradient bg, sparkle emoji, generic tagline, misplaced newsletter signup, "trusted by" logos with no actual customers.

### After
```
┌───────────────────────────────────────────────┐
│ [warm off-white bg, no decoration]            │
│                                               │
│      Quiet tools for serious teams.           │
│      We make [specific product]. One          │
│      sentence that says what it does.         │
│                                               │
│      [Try it free]                            │
│                                               │
└───────────────────────────────────────────────┘
```

**Why it's better:** one committed line (declares a stance), no filler, one primary CTA.

---

## Example 2: Feature list

### Before (slop)
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│ 🚀       │  │ ✨       │  │ 🎯       │
│ FAST     │  │ BEAUTIFUL│  │ POWERFUL │
│ Blazing  │  │ Stunning │  │ Unmatched│
│ fast.    │  │ design.  │  │ power.   │
└──────────┘  └──────────┘  └──────────┘
```

**Why:** emoji as decoration, meaningless adjectives, no real claim.

### After
```
┌──────────────────────────────────────────────┐
│ One-click rollback.                          │
│ Every deploy is reversible in under 10       │
│ seconds. Including database migrations.      │
├──────────────────────────────────────────────┤
│ End-to-end encryption by default.            │
│ Keys live on-device; our servers never       │
│ see plaintext.                               │
└──────────────────────────────────────────────┘
```

**Why:** specific claims, measurable, meaningful. Two features, not six.

---

## Example 3: Card grid

### Before (slop)
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│┃ [icon]      │  │┃ [icon]      │  │┃ [icon]      │
│  Feature A   │  │  Feature B   │  │  Feature C   │
│  Lorem ipsum │  │  Lorem ipsum │  │  Lorem ipsum │
└──────────────┘  └──────────────┘  └──────────────┘
```
(with 4px left border in accent color)

**Why:** accent stripe is generic, three parallel cards with identical structure.

### After
```
 Feature A                Feature B
 ─────────               ────────
 Real description with   Real description with
 actual product claim    actual product claim.
 and proof.              A screenshot here.
                         [image placeholder]

               Feature C
              ────────
              Full-width treatment for
              the most important one.
```

**Why:** rhythm through layout variation, proof-first content, hierarchy reflects importance.

---

## Example 4: Color

### Before (slop)
Background: `#FFFFFF`
Headings: `#000000`
Body: `#333333`
Accent: `#5B7FFF` (Tailwind indigo)
Semantic red: `#EF4444` (Tailwind red)
Semantic green: `#10B981` (Tailwind green)

**Why:** no tone commitment, default Tailwind palette, no relationship between accent and semantic colors.

### After
```
--surface: oklch(0.97 0.01  80);   /* warm off-white */
--ink:     oklch(0.20 0.01  40);   /* warm near-black */
--muted:   oklch(0.50 0.01  40);
--accent:  oklch(0.55 0.18  25);   /* rust */
--success: oklch(0.55 0.15 140);
--error:   oklch(0.55 0.20  25);
```

**Why:** warm tone committed, accent and semantics share L+C, visually coherent family.

---

## Example 5: Copy

### Before (slop)
> At Acme, we believe that software should be beautiful, fast, and accessible. That's why we built a revolutionary platform that empowers teams to collaborate seamlessly.

**Why:** abstractions, "we believe," "revolutionary," "seamless."

### After
> Acme is a markdown editor that syncs across devices in under a second. It's $8/month.

**Why:** specific, quantified, prices named. The reader knows what they're looking at.
