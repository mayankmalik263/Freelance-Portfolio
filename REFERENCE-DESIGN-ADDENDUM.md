# Reference-Design Addendum — paste WITH the 4 reference screenshots attached
_Use this ON TOP of the UI overhaul prompt. Attach all 4 reference images in Antigravity. Match their AESTHETIC and STRUCTURE, not their content. Keep my data, my copy, and my electric-blue accent (do not copy their orange/purple)._

## What to take from each reference
- **Reference 1 (bento portfolio, "Portfolio / Jon Daniel"):** the BENTO GRID layout, rounded cards, colored glass STAT TILES, huge bold headline, and the small corner-bracket accents on cards.
- **References 2 and 3 (dark, "Pain Free Experience"):** dark background with a soft warm GLOW so it never reads as flat black, GLASS STAT PILLS (like "20M+", "98%"), pill-shaped buttons and tag chips, and the full premium long-scroll section stack (work, pricing, FAQ, contact).
- **Reference 4 (dark agency, "Domini"):** the 3-TIER PRICING with the MIDDLE tier highlighted in the accent color, bento image cards, and the big confident headline.

## Apply it to MY sections
- **Hero = bento grid.** Left: a profile/intro card (name, one-line pitch, WhatsApp pill button). Right: a huge headline + a cluster of glass STAT TILES. Add corner-bracket accents like reference 1. Soft blue glow behind it.
- **Stat tiles (use ONLY real numbers, do not invent counts):** e.g. "120+ orders driven" (WaffleDa), "5 live projects", "2 real clients". No fake "251 projects / 156 awards" like the refs.
- **Services = glass bento cards,** icons in rounded gradient chips, hover lift + glow.
- **Work = bento preview cards.** WaffleDa featured largest with a glass stat pill showing "~120 orders". Others in the grid. Framed 16:9 preview areas, never empty black voids.
- **Pricing = 3 tiers in a row,** middle ("Growth") highlighted with a glowing blue border + slight elevation, exactly like reference 4's middle card.
- **Contact = a glass card** with a big pill "Message me on WhatsApp" button.
- Optional: a short FAQ block like reference 2 (only real answers).
- Do NOT add testimonials, I have none, and I do not fake them.

## Visual rules to match the refs
- Dark base but with depth: gradient glow, faint grid/noise, blue accent glers. Never flat pure black.
- Glass cards: translucent fill, `border border-white/10`, `rounded-2xl`, backdrop blur, soft shadow.
- Pill-shaped buttons and tag chips (fully rounded), like all the refs.
- Bold oversized headings with strong size contrast.
- Accent = my electric blue (#2563EB) with glow, NOT the refs' orange.

## Keep
All prior overhaul fixes (centered max-width container, real grids, no rendered TODO text, no empty voids, navbar), the ui-ux-pro-max rules, my data in `src/data/portfolio.ts`, WhatsApp `wa.me/918199082861`, email mayankmalik263@gmail.com. Accessibility 4.5:1, 44px targets, SVG icons, mobile-first, no em dashes.

Build the hero bento + stat tiles first (that alone kills the empty look), then work bento, then pricing tiers, then services, then glass polish, then mobile test at 375px.
