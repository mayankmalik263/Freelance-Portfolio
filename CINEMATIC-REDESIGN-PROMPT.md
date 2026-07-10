# Antigravity (Gemini 3.1 Pro, High) — Cinematic Portfolio Redesign
_Redesign the existing portfolio to match the attached reference layout (image 1, the dark cinematic "game-menu" content-creator portfolio) using the attached color palette (image 2). Attach BOTH images when running. Keep the Next.js project and my real data. This replaces the violet theme entirely._

## Color palette (use these exact hexes, replace all previous colors)
- Background base: `#161E2F` (darkest navy), with gradients into `#242F49`.
- Card / surface: `#242F49`, lighter panels `#384358`.
- **Primary accent / CTA / active state / key numbers: `#FFA586` (peach).**
- Strong accent (hero circle backdrop, badges, highlights): `#B51A2B` (red).
- Deep secondary tiles / sections: `#541A2E` (maroon).
- Text: white primary, muted slate (`#A9B4C9`) secondary.
- Contrast: peach and white read well on the navy; use red/maroon as FILLS with white text, not for small text.

## Match the reference layout (image 1), adapted for a developer
Recreate this exact structure and cinematic feel (dark, glow, editorial, "game start screen" vibe):

### 1. Hero = game start-menu screen
- Small logo mark top-left.
- Large title "PORTFOLIO" with a year "2025" beside it, plus "MAYANK MALIK" as the name.
- A small tag/checkbox line: "FREELANCE WEB & AUTOMATION DEVELOPER".
- A vertical menu list styled like a game menu (as in the reference): "START" (scrolls to Work), "SERVICES", "CONTACT". Peach highlight on hover/active.
- A circular cutout photo of me with a solid RED `#B51A2B` circular backdrop and soft glow (like the reference's red circle). Use a placeholder avatar with `{/* TODO: real photo */}`.
- Keep a clear primary CTA button "Message on WhatsApp" -> `https://wa.me/918199082861` (do not lose this in the game-menu styling).

### 2. Profile / About (tabbed like the reference: PROFILE / WORK / CONTACT pill tabs at top of the section, or as scroll sections)
- "HELLO, I AM MAYANK MALIK".
- About Me (real, do not embellish): "B.Tech CSE (AI/ML) at UPES Dehradun. I build websites, online booking, WhatsApp automations, and AI chatbots for businesses. Currently interning at NewCycl on full-stack and AI products."
- **Tech Skills** row with real stack logos (SVG): Next.js, React, TypeScript, Tailwind CSS, Supabase, Python, Node.js. (Mirror the reference's "Software Skills" icon row.)
- **Education:** UPES Dehradun, B.Tech CSE (AI/ML), 2024 to 2028.
- **Experience:** NewCycl (intern) - full-stack web + RAG/AI chatbot work.
- Optional skill/language bars ONLY if real (e.g. English, Hindi). No made-up percentages for skills.

### 3. Services + Pricing (KEEP THESE - this is what sells)
Restyle the existing "What I Build" services and the 3-tier pricing into the new palette and cinematic look. Middle pricing tier highlighted in peach. Do not remove pricing or CTAs.

### 4. Work / Project recap grid (like the reference "Recap Project" grid)
- Heading like "SELECTED WORK 2025".
- A grid of my real projects as thumbnail cards: WaffleDa (featured, with a "~120 orders" badge), MASS, Hair & Beauty Salon, Learn AI OS, Personal Portfolio. Framed preview placeholders `{/* TODO real screenshot */}`, each links to the live site. No empty voids.

### 5. Contact = "THANK YOU" closing screen (like the reference)
- Big headline "LET'S BUILD YOURS" or "THANK YOU".
- Contact row: WhatsApp and Email (I have NO Instagram/TikTok/other socials, so do NOT add fake social icons). Email mayankmalik263@gmail.com, WhatsApp `wa.me/918199082861`.
- Keep it a real call to action, not just a sign-off.

## Honesty rules (do not break)
- Use ONLY real info: my real education, real stack, real projects, real client result (WaffleDa ~120 orders). Do NOT invent follower counts, awards, fake testimonials, or fake social handles like the reference has.

## Performance and quality
- Smooth scroll: animate only transform/opacity, `whileInView` once, no heavy `backdrop-blur` on many elements, no scroll-linked parallax that janks. Target 60fps.
- Accessibility 4.5:1 contrast, 44px tap targets, SVG icons (no emoji), mobile-first, no horizontal scroll, respect prefers-reduced-motion.
- No em dashes anywhere.

## Keep
Next.js + Tailwind stack, data in `src/data/portfolio.ts`, WhatsApp `wa.me/918199082861`, email mayankmalik263@gmail.com.

## Verify before done
- `npm run build` clean.
- Matches the reference's cinematic dark game-menu feel, using ONLY the image-2 palette (navy base, peach/red/maroon accents, no violet or blue left).
- Services and pricing still present and styled to match.
- Smooth scroll, no voids, real content only.
- 375px mobile clean.
