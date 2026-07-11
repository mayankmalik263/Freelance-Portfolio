"use client";
import { motion } from "framer-motion";

interface RetroWindowProps {
  title: string;
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function RetroWindow({ title, id, children, className = "" }: RetroWindowProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={`retro-window ${className}`}
    >
      {/* Title Bar */}
      <div className="retro-titlebar">
        <span className="truncate">C:\MAYANK\{title}<span className="blink-caret inline-block w-1.5 h-2.5 bg-white ml-1 align-baseline"></span></span>
        <div className="retro-titlebar-buttons">
          <div className="retro-titlebar-btn text-black">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="pixel-art"><rect x="2" y="7" width="6" height="2"/></svg>
          </div>
          <div className="retro-titlebar-btn text-black">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="pixel-art"><path fillRule="evenodd" clipRule="evenodd" d="M1 1h8v8H1V1zm2 2h4v4H3V3z"/></svg>
          </div>
          <div className="retro-titlebar-btn text-black font-bold">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="pixel-art"><path d="M2 1h2v1h1v1h1V2h2v2H7v1H6v1h1v1h1v2H6V8H5V7H4v1H2V6h1V5h1V4H3V3H2V1z"/></svg>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="retro-body">
        {children}
      </div>
    </motion.section>
  );
}
