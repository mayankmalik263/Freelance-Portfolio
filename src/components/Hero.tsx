"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32 relative overflow-hidden">
      {/* Big PORTFOLIO title */}
      <motion.div
        className="text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <p className="font-mono text-sm md:text-base text-midnight/60 tracking-[0.3em] uppercase mb-4">
          C:\MAYANK\desktop
        </p>
        <h1 className="text-7xl sm:text-8xl md:text-[140px] lg:text-[180px] font-display font-bold text-red tracking-tight leading-[0.85]">
          PORTFOLIO
        </h1>
        <p className="font-display text-3xl md:text-5xl text-midnight/30 font-bold tracking-tight mt-2">
          2026
        </p>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        className="mt-8 text-center max-w-lg relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-midnight font-semibold text-lg md:text-xl mb-2">
          Mayank Malik
        </p>
        <p className="text-midnight/60 text-sm md:text-base">
          Full-Stack AI Developer & Automation Builder
        </p>
      </motion.div>

      {/* Social strip */}
      <motion.div
        className="flex items-center gap-4 mt-10 relative z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a
          href="https://www.linkedin.com/in/mayankmalik263"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-lg bg-white border-2 border-midnight/20 shadow-[2px_2px_0px_rgba(40,63,118,0.15)] hover:border-blue hover:shadow-[2px_2px_0px_rgba(85,145,209,0.3)] transition-all duration-200 hover:-translate-y-0.5 min-h-[44px]"
          aria-label="LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#283F76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a
          href="https://github.com/mayankmalik263"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-lg bg-white border-2 border-midnight/20 shadow-[2px_2px_0px_rgba(40,63,118,0.15)] hover:border-blue hover:shadow-[2px_2px_0px_rgba(85,145,209,0.3)] transition-all duration-200 hover:-translate-y-0.5 min-h-[44px]"
          aria-label="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#283F76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
          </svg>
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="flex flex-col items-center gap-2 text-midnight/30">
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5"/>
            <motion.circle
              cx="8" cy="8" r="2" fill="currentColor"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
