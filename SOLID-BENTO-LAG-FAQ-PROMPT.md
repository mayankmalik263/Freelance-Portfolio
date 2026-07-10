# Antigravity (Gemini 3.1 Pro, High) — Solid-Color Bento + Fix Lag + Fix FAQ
_Keep the current layout, violet accent, and structure. Three targeted changes: solid-color bento tiles, smoother scrolling, and corrected FAQ answers. Do not redesign from scratch._

## 1. Solid-color bento tiles (match the reference picture)
Right now the tiles are all translucent glass on dark, so it reads flat and same-colored. Make the HERO bento use SOLID, saturated color tiles like the attached "Jon Daniel" reference: a mix of different solid-colored blocks, not all the same glass.

- Page background stays neutral near-black (`#09090B`).
- In the hero bento and the stat tiles, use SOLID fills across a small palette:
  - Violet `#8B5CF6` (primary, largest tile),
  - a teal/mint `#5EEAD4`,
  - an amber `#FBBF24`,
  - a near-black `#18181B` tile,
  - optionally a light lavender `#A78BFA`.
  Vary them tile to tile like the reference (e.g. profile card violet, one stat tile teal, one amber, one dark).
- Text on tiles must stay readable: dark text (`#09090B`) on the light tiles (teal, amber, lavender); white text on violet and dark tiles. Verify 4.5:1 contrast.
- Keep the corner-bracket accents and rounded-2xl corners.
- The rest of the page (services, work, pricing, FAQ) stays cohesive dark cards with violet accents. Only the hero bento + stat tiles become multi-color solid blocks. Do not rainbow every section.

## 2. Fix the scroll lag / jank
Scrolling stutters, especially at the top. Main causes are heavy blur and scroll-linked animation. Do this:
- Reduce `backdrop-filter: blur()` usage drastically. Prefer SOLID fills (which we are adding anyway) and simple borders over frosted glass. Keep blur only on the navbar if needed.
- Reveal animations: animate ONLY `transform` and `opacity`, use `whileInView` with `viewport={{ once: true }}`, keep durations 150-300ms, small stagger. No continuous scroll-linked or parallax effects.
- Remove or lighten large blurred glow layers that repaint on scroll; use a static low-opacity radial gradient instead of an animated/huge blur.
- Respect `prefers-reduced-motion`.
- Goal: smooth 60fps scroll on a mid-range laptop.

## 3. Rewrite the FAQ answers (current ones are wrong)
Keep the questions, replace the answers with these exact ones. Do NOT invent new claims.

- **How long does a website take to build?**
  "Fast. Most business websites go live in 3 to 5 days. A full site with booking and automations usually takes about a week. I build lean with modern tools, so you are not waiting a month."
- **Do I need to write my own copy?**
  "No. Send me your services, prices, and a few details, and I write and lay out the content for you. If you already have copy, I will use it. You review everything before it goes live."
- **What is the maintenance cost?**
  "The monthly fee covers hosting, keeping your site online and secure, small edits, and updates. It starts at around Rs 1,500 to 2,000 a month depending on your plan, and the first year's domain is included in the build. No hidden charges."

Also ADD these three questions and answers to the FAQ:
- **Do you work with businesses outside your city?**
  "Yes. Everything runs over WhatsApp and call, so I build for clients anywhere. You never need to meet in person."
- **What if I want changes after it goes live?**
  "Just message me. Small changes are part of your monthly plan. Bigger additions we scope on a quick call."
- **Do you only build websites?**
  "No. I also build online booking, WhatsApp automations like reminders and review requests, and custom AI chatbots trained on your business."

## 4. Small fix
Remove the em dash in the contact line ("custom demo and quote—no obligations"). Rewrite as "a custom demo and a quote, no obligations." No em dashes anywhere.

## Keep unchanged
Violet accent system, navbar, bento hero structure, WaffleDa featured card, 3-tier pricing with middle highlighted, data in `src/data/portfolio.ts`, WhatsApp `wa.me/918199082861`, email mayankmalik263@gmail.com. Accessibility 4.5:1, 44px targets, SVG icons, mobile-first, no em dashes.

## Verify before done
- `npm run build` clean.
- Hero shows solid multi-color tiles like the reference, readable text on each.
- Scrolling is smooth, no stutter.
- FAQ shows the corrected answers plus the 3 new questions.
- 375px mobile: clean stack, no horizontal scroll.
