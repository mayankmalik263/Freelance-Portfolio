# Mayank's Freelance Portfolio

A high-end, conversion-focused freelance portfolio website built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Edit Content

All dynamic content is centralized in **`src/data/portfolio.ts`**. 

- **Projects**: To update your case studies or add new ones (like the NewCycl project), edit the `projects` array.
- **Pricing**: To update your rates, edit the `pricing` array.
- **Hero & About text**: Update `heroData` and `aboutData`.
- **Contact**: Update `contactInfo` with your latest WhatsApp number or Email.

## Design System

This site uses a **Liquid Glass** dark premium aesthetic. 
- Backgrounds are primarily deep black (`#09090B`).
- Cards use a translucent glass effect (`bg-black/40` or `bg-zinc-900/60` over a blur) to ensure 4.5:1 text contrast while maintaining a glossy feel.
- Global styles and CSS variables are located in `src/app/globals.css`.
- Fonts (Space Grotesk and Inter) are configured in `src/app/layout.tsx`.
