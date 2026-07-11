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
              className="flex items-center gap-4 p-5 pixel-button bg-red text-white hover:bg-midnight transition-colors min-h-[44px] group"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="pixel-art">
                <path fillRule="evenodd" clipRule="evenodd" d="M4 2h16v14h-4v4l-4-4H4V2zm2 2v10h7l2 2v-2h3V4H6z"/>
              </svg>
              <div>
                <p className="font-bold text-sm tracking-wider uppercase">Message on WhatsApp</p>
                <p className="text-white/70 text-[10px] font-mono">wa.me/918199082861</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-4 p-5 pixel-button bg-white text-midnight hover:text-blue transition-colors min-h-[44px] group"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="pixel-art">
                <path fillRule="evenodd" clipRule="evenodd" d="M2 4h20v16H2V4zm2 2v2l8 6 8-6V6H4zm0 12h16V9.5l-8 6-8-6V18z"/>
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
              className="flex items-center gap-4 p-5 pixel-button bg-white text-midnight hover:text-blue transition-colors min-h-[44px] group"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="pixel-art">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
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
              className="flex items-center gap-4 p-5 pixel-button bg-white text-midnight hover:text-blue transition-colors min-h-[44px] group"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="pixel-art">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
