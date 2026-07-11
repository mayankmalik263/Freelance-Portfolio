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
        <span className="truncate">C:\MAYANK\{title}</span>
        <div className="retro-titlebar-buttons">
          <div className="retro-titlebar-btn bg-white/10">
            <svg width="8" height="2" viewBox="0 0 8 2" fill="none"><rect width="8" height="2" fill="white"/></svg>
          </div>
          <div className="retro-titlebar-btn bg-white/10">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><rect x="0.5" y="0.5" width="7" height="7" stroke="white" strokeWidth="1"/></svg>
          </div>
          <div className="retro-titlebar-btn bg-red border-red text-white">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 1L7 7M7 1L1 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
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
