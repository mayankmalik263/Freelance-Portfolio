"use client";
import RetroWindow from "./RetroWindow";
import { contactInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <div className="section-padding px-6 md:pl-28 md:pr-6">
      <div className="max-w-4xl mx-auto">
        <RetroWindow title="contact" id="contact">
          <h3 className="text-2xl font-display font-bold text-midnight mb-2 uppercase tracking-wider">Get In Touch</h3>
          <p className="text-midnight/50 text-sm mb-8">Let's build a high-end digital experience for your business. Reach out directly below.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {/* WhatsApp - Primary */}
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-lg bg-red text-white border-2 border-red hover:bg-midnight hover:border-midnight transition-all duration-200 shadow-[3px_3px_0px_rgba(247,10,54,0.2)] hover:shadow-[3px_3px_0px_rgba(40,63,118,0.2)] min-h-[44px] hover:-translate-y-0.5"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <div>
                <p className="font-bold text-sm tracking-wider uppercase">Message on WhatsApp</p>
                <p className="text-white/70 text-[10px] font-mono">wa.me/918199082861</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-4 p-5 rounded-lg bg-white text-midnight border-2 border-midnight/15 hover:border-blue transition-all duration-200 shadow-[2px_2px_0px_rgba(40,63,118,0.1)] hover:shadow-[2px_2px_0px_rgba(85,145,209,0.2)] min-h-[44px] hover:-translate-y-0.5"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5591D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <div>
                <p className="font-bold text-sm tracking-wider uppercase">Email Me</p>
                <p className="text-midnight/50 text-[10px] font-mono">{contactInfo.email}</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mayankmalik263"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-lg bg-white text-midnight border-2 border-midnight/15 hover:border-blue transition-all duration-200 shadow-[2px_2px_0px_rgba(40,63,118,0.1)] hover:shadow-[2px_2px_0px_rgba(85,145,209,0.2)] min-h-[44px] hover:-translate-y-0.5"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#283F76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              <div>
                <p className="font-bold text-sm tracking-wider uppercase">GitHub</p>
                <p className="text-midnight/50 text-[10px] font-mono">github.com/mayankmalik263</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mayankmalik263"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-lg bg-white text-midnight border-2 border-midnight/15 hover:border-blue transition-all duration-200 shadow-[2px_2px_0px_rgba(40,63,118,0.1)] hover:shadow-[2px_2px_0px_rgba(85,145,209,0.2)] min-h-[44px] hover:-translate-y-0.5"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5591D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
              </svg>
              <div>
                <p className="font-bold text-sm tracking-wider uppercase">LinkedIn</p>
                <p className="text-midnight/50 text-[10px] font-mono">linkedin.com/in/mayankmalik263</p>
              </div>
            </a>
          </div>
        </RetroWindow>
      </div>
    </div>
  );
}
