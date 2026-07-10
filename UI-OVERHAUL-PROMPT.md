# Antigravity (Gemini, High) Prompt — UI/UX Overhaul of the Portfolio
_The current portfolio build looks empty, flat, and broken. Fix the design and layout across the whole site. Keep all content and data. Do NOT restart the project._

## Read first: what is actually wrong right now (fix every one)
1. **Giant empty black voids.** In the Work section, the literal text `{/* TODO: add real screenshot */}` is rendering on the page, and each project leaves an entire screen of black nothing where a preview should be. Remove the literal comment text. Replace every screenshot slot with a proper framed preview box (fixed `aspect-video` / 16:9), styled as a subtle glass/gradient placeholder showing the project name and a "Live preview" label, with the live-link button on it. No screen-tall empty gaps.
2. **Broken grids.** Services and Pricing cards float alone on the left with huge empty space beside them; Pricing shows only one card instead of three in a row. Wrap all content in a centered container (`max-w-6xl mx-auto px-6`). Services = responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`) with equal-height cards and no empty floating slot. Pricing = `grid lg:grid-cols-3 gap-6`, all three cards in one row, equal height.
3. **Too flat and generic.** It was supposed to be premium "Liquid Glass" and instead is plain dark boxes. Add real depth (see design bar below).
4. **Massive vertical dead space.** Section padding is far too large. Use `py-20 md:py-28` per section, not screen-heights of emptiness.
5. **No navbar.** Add a sticky top nav: name/logo left, section links center (Services, Work, Pricing, Contact), a WhatsApp CTA button right. Glassy, blurred background on scroll.
6. **Em dash in the hero badge.** Remove it. Use a middot or comma. No em dashes anywhere.

## Use the ui-ux-pro-max skill (installed at `.agents/skills/ui-ux-pro-max/`)
Actually apply it this time. Query it for a premium dark developer/agency portfolio and pull concrete style, palette, shadow/elevation, and motion rules. The result must look like a top-tier dark agency site, not a default template.

## Design bar (make it feel premium and full)
- **Glass cards:** `bg-white/[0.03]`, `border border-white/10`, `rounded-2xl`, `backdrop-blur`, soft inner/outer shadow. Hover: lift + accent glow + border brighten (150-300ms).
- **Depth in the background:** subtle radial gradient glow behind the hero, a faint grid or noise texture, accent-colored gradient blobs low-opacity. The page must not read as flat pure-black voids.
- **Accent:** the electric blue as a glowing accent on primary CTAs, gradient text on key headings, thin gradient borders on the "Most Popular" pricing card.
- **Icons:** Lucide, larger and inside a rounded gradient/glass chip. No emojis.
- **Typography rhythm:** strong size contrast, tighter line-height on big headings, comfortable body; consistent spacing scale. Section eyebrow label + heading + one-line sub, all centered and contained.
- **Every section must feel intentionally full.** If a row has empty space, rebalance the layout (center the last row, widen cards, or add a visual element). Never leave a lone card against a black void.

## Work section specifically (this is the worst part now)
Rebuild each project as a rich card in a 2-column grid (`lg:grid-cols-2 gap-6`), or a featured-first layout with WaffleDa large on top:
- Framed 16:9 preview area (styled placeholder now, `{/* TODO real screenshot */}` as a code comment ONLY, never rendered text), project title, one-line description, a small result/tag badge, and an "Open live site" button linking out.
- WaffleDa is the hero case study: make it the largest card and surface the "~120 orders on the site" as a highlighted stat.

## Keep unchanged
- All copy, project list, services, pricing tiers and numbers, WhatsApp link (`wa.me/918199082861`), email (mayankmalik263@gmail.com), data in `src/data/portfolio.ts`.
- Next.js + Tailwind + Framer Motion stack.

## Non-negotiables
- Contrast at least 4.5:1 (watch glass panels, text must stay readable), 44px tap targets, SVG icons, mobile-first, no horizontal scroll, motion 150-300ms with `prefers-reduced-motion`, images lazy + aspect-ratio set. No em dashes.

## Verify before done
- `npm run build` clean.
- Scroll the whole page: NO empty black screens, NO lone floating cards, NO visible `{/* ... */}` text.
- Services and Pricing show all cards in proper rows.
- Test at 375px width: everything stacks cleanly, no horizontal scroll.

Fix order: container + spacing + navbar first (kills the void problem), then Work section previews, then Services and Pricing grids, then glass depth and motion polish, then mobile pass.
