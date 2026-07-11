<div align="center">

# 💻 Mayank Malik | Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Groq API](https://img.shields.io/badge/AI-Groq%20Llama%203.3-FF5722?style=for-the-badge&logo=meta)](https://groq.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

*A high-end, conversion-focused freelance portfolio website built with a Retro OS / Terminal aesthetic.*

<br/>

</div>

---

## ⚡ The Vibe

This isn't your standard minimal developer portfolio. It's built with a **Premium Retro-Terminal** aesthetic designed to stand out. 

- **Interactive Terminal UI:** Pixel-art panels, CRT scanlines, and mechanical keyboard Web Audio sound effects.
- **Live AI RAG Assistant:** An integrated `ai_demo.exe` window powered by Groq's blazing-fast Llama 3.3. It acts as an autonomous proxy agent, answering client questions using data retrieved directly from the codebase.
- **Conversion-Optimized:** Built not just to show off code, but to *sell* high-ticket AI and web development services.

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js (App Router), React 18 |
| **Styling** | Tailwind CSS (Utility-first, Pixel-perfect) |
| **AI Backend** | Vercel AI SDK, Groq (Llama 3.3 70B), Native Fetch Streaming |
| **Interactivity** | Web Audio API (Synthesized SFX), React Hooks |
| **Language** | TypeScript |

## 🚀 Getting Started

Want to run this locally? It's simple.

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd Services-Portfolio
npm install
```

### 2. Configure AI (Optional but recommended)
To use the live RAG Chatbot, you'll need a free API key from [Groq](https://console.groq.com/).
Create a `.env.local` file in the root directory:
```env
GROQ_API_KEY=your_groq_api_key_here
```

### 3. Boot the System
```bash
npm run dev
```
Navigate to `http://localhost:3000` to access the terminal.

---

## 📂 Architecture & Customization

The entire architecture is modular. All dynamic content (your projects, pricing, and about text) is fully decoupled from the UI components.

To customize the portfolio for yourself, you only need to edit **one file**:
👉 `src/data/portfolio.ts`

- **`projects`**: Add your case studies and GitHub links here.
- **`services`**: Update the list of services you offer.
- **`pricing`**: Adjust your pricing tiers.
- **`aboutData` & `contactInfo`**: Update your bio, email, and WhatsApp number.

*Note: The AI Knowledge Base in `src/app/api/chat/route.ts` is explicitly synced with `portfolio.ts` to prevent AI hallucinations.*

## 🎨 Design System

- **Colors:** Deep midnight blacks (`#09090B`), stark pixel-whites, and vibrant neon accents (Hacker Green, Cyber Red, Electric Blue).
- **Typography:** `Press Start 2P` for the primary terminal UI, paired with clean readable sans-serifs for longer case studies.
- **Audio:** Custom synthesized mechanical keyboard clicks utilizing lowpass filters and noise buffers to create a realistic, non-intrusive tactile experience without external `.mp3` dependencies.

<div align="center">
<br/>

**Built with intent. Engineered for conversion.**

</div>
