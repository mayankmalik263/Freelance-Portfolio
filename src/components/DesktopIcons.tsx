"use client";
import { useState } from "react";

const icons = [
  { id: "about", label: "Profile", icon: ProfileIcon },
  { id: "works", label: "Works", icon: WorksIcon },
  { id: "services", label: "Services", icon: ServicesIcon },
  { id: "pricing", label: "Pricing", icon: PricingIcon },
  { id: "contact", label: "Contact", icon: ContactIcon },
];

export default function DesktopIcons() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop: Sticky left sidebar */}
      <nav className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-6" aria-label="Desktop navigation">
        {icons.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex flex-col items-center gap-1.5 group w-16"
            title={item.label}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/80 border-2 border-midnight/20 shadow-[2px_2px_0px_rgba(40,63,118,0.2)] group-hover:border-red group-hover:shadow-[2px_2px_0px_rgba(247,10,54,0.3)] transition-all duration-200 group-hover:-translate-y-0.5">
              <item.icon />
            </div>
            <span className="text-[10px] font-bold text-midnight tracking-wide text-center leading-tight">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Mobile: Top bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-midnight text-white px-4 py-2" aria-label="Mobile navigation">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold tracking-wider">C:\MAYANK</span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <path d="M4 4L16 16M16 4L4 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              ) : (
                <>
                  <rect y="3" width="20" height="2" rx="1" fill="white"/>
                  <rect y="9" width="20" height="2" rx="1" fill="white"/>
                  <rect y="15" width="20" height="2" rx="1" fill="white"/>
                </>
              )}
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="flex gap-2 py-3 overflow-x-auto">
            {icons.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 bg-white/10 rounded-lg text-xs font-bold tracking-wider whitespace-nowrap hover:bg-white/20 transition-colors min-h-[44px]"
              >
                <item.icon />
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

function ProfileIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#283F76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4"/>
      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
    </svg>
  );
}

function WorksIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5591D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

function ServicesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F70A36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  );
}

function PricingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#283F76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5591D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}
