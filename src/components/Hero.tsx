"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";


export default function Hero() {
  const fullText = "C:\\MAYANK\\desktop>";
  const [displayedText, setDisplayedText] = useState("");
  const hasTypedRef = useRef(false);

  useEffect(() => {
    // Only run if we haven't typed yet and we are in the browser
    if (typeof window === "undefined" || hasTypedRef.current) return;
    
    // We wait for user interaction to unlock audio for typing if we want
    // But since typing happens immediately on load, audio might be blocked.
    // That's okay, we'll try to play it.
    
    let index = 0;
    
    const typeNextChar = () => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        // (Typing sound removed)
        index++;
        setTimeout(typeNextChar, 50 + Math.random() * 50); // random typing speed
      } else {
        hasTypedRef.current = true;
      }
    };
    
    // Delay start slightly
    setTimeout(typeNextChar, 800);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32 relative overflow-hidden">
      {/* Big PORTFOLIO title */}
      <motion.div
        className="text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <p className="font-mono text-sm md:text-base text-midnight/60 tracking-[0.3em] uppercase mb-4 h-6 flex items-center justify-center">
          {displayedText}<span className="blink-caret inline-block w-2 h-4 bg-midnight/40 ml-1"></span>
        </p>
        <h1 className="text-7xl sm:text-8xl md:text-[140px] lg:text-[180px] font-display font-bold text-red tracking-tight leading-[0.85] drop-shadow-[6px_6px_0_rgba(40,63,118,1)]">
          PORTFOLIO
        </h1>
        <p className="font-display text-4xl md:text-6xl text-midnight/30 font-bold tracking-tight mt-4">
          2026
        </p>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        className="mt-8 text-center max-w-lg relative z-10 bg-white/50 backdrop-blur-sm px-6 py-4 pixel-panel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-midnight font-bold text-xl md:text-2xl mb-2 font-display">
          Mayank Malik
        </p>
        <p className="text-midnight/80 text-sm md:text-base font-bold">
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
          className="w-12 h-12 flex items-center justify-center pixel-button group min-h-[44px]"
          aria-label="LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-midnight group-hover:text-blue pixel-art">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href="https://github.com/mayankmalik263"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center pixel-button group min-h-[44px]"
          aria-label="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-midnight group-hover:text-blue pixel-art">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
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
      {/* Pixel Sprites */}
      <div className="absolute top-1/4 left-[10%] opacity-40 text-blue hidden md:block">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="pixel-art"><path fillRule="evenodd" clipRule="evenodd" d="M2 4h20v12H2V4zm2 2v8h16V6H4zm6 12v2H6v2h12v-2h-4v-2h-4z"/></svg>
      </div>
      <div className="absolute top-1/3 right-[15%] opacity-30 text-red hidden md:block">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="pixel-art"><path fillRule="evenodd" clipRule="evenodd" d="M4 2h12l4 4v16H4V2zm2 2v4h8V4H6zm10 2v2H6V6h10zm-10 6v8h12v-8H6zm2 2h8v4H8v-4z"/></svg>
      </div>
      <div className="absolute bottom-1/4 left-[20%] opacity-20 text-midnight hidden md:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="pixel-art"><path fillRule="evenodd" clipRule="evenodd" d="M10 2h4v6h6v4h-6v6h-4v-6H4V8h6V2z"/></svg>
      </div>
    </section>
  );
}
