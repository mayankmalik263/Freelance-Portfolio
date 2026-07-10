# Antigravity (Gemini 3.1 Pro, High) — Recolor to Violet + Fix Voids
_Keep the current layout and structure (bento hero, navbar, glass cards, 3-tier pricing, WaffleDa featured). Only change the color system and fix the listed layout bugs. Do not restart or redesign from scratch._

## 1. Kill the blue monochrome (main fix)
The whole site reads as one blue hue because the BACKGROUND itself is navy-blue tinted. Fix in two moves:

**A. Base goes neutral near-black (no blue tint anywhere):**
- Page background: `#09090B` (near-black / zinc-950).
- Card/surface: `#18181B` (zinc-900) with `border-white/10`.
- Secondary text: zinc-400 `#A1A1AA`. Primary text: white.
- Remove ALL navy/blue background tints, gradients, and blue-tinted card fills.

**B. Accent becomes VIOLET (replaces every blue):**
- Primary accent: violet `#8B5CF6`, lighter `#A78BFA` for glows/hover.
- Replace every current blue (`#2563EB` and any blue) with violet: primary buttons, check icons, borders, the avatar, eyebrow labels (CAPABILITIES / PORTFOLIO / INVESTMENT), stat numbers, corner-bracket accents, gradient headline text ("Pain-Free Experience"), the "Most Popular" pricing card border + button, and the nav "Let's Talk" button.
- Depth: soft violet radial glow blobs on the black background, plus a faint grid or noise texture, so it never reads as flat black. Glows low-opacity.
- Keep contrast: violet text on black must stay >= 4.5:1; white text on the violet button is fine.

## 2. Fix the reveal-on-scroll voids
Cards currently fade in one-by-one as the user scrolls, so sections look empty (a lone card next to a black void) until they fill. Change the reveal so each section's cards animate in TOGETHER, once, when the section enters view: use `whileInView` with `viewport={{ once: true, amount: 0.2 }}` and a small stagger (max ~60ms), not a long per-card scroll-linked reveal. No section should ever show a single card against empty space.

## 3. Fix the Work section gap
- The WaffleDa featured card is too tall and leaves a big empty gap after it. Cap the preview area to a fixed `aspect-video` (16:9), so the card is a normal height.
- Make sure ALL projects render (WaffleDa featured, then MASS, Hair & Beauty Salon, Learn AI OS, Personal Portfolio) in a compact bento/grid below the featured one. No giant empty area between Work and Pricing.

## 4. Fix the Services empty slot
5 service cards in a 3-column grid leave one empty cell. Either center the last row of 2 cards, or balance the layout so there is no lonely empty grid cell.

## Keep unchanged
Bento hero + stat tiles, navbar, glass card style, corner brackets, 3-tier pricing with middle highlighted, WaffleDa "~120 orders" pill, all copy and data in `src/data/portfolio.ts`, WhatsApp `wa.me/918199082861`, email mayankmalik263@gmail.com. Accessibility 4.5:1, 44px targets, SVG icons, mobile-first, no em dashes, motion 150-300ms.

## Verify before done
- `npm run build` clean.
- Zero blue anywhere; base is neutral black, accent is violet.
- Scroll top to bottom: no lone-card voids, no empty black screens, Work has no big gap, Services has no empty cell, Pricing shows 3 cards.
- 375px mobile: clean stack, no horizontal scroll.
