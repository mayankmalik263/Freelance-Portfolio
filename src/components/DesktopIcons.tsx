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
            <div className="w-12 h-12 flex items-center justify-center pixel-button group-hover:-translate-y-0.5">
              <item.icon />
            </div>
            <span className="text-[10px] font-mono text-midnight tracking-wide text-center leading-tight bg-buttercream px-1">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Mobile: Top bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-midnight text-white px-4 py-2 border-b-2 border-white" aria-label="Mobile navigation">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-normal tracking-wider">C:\MAYANK</span>
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
                className="flex items-center gap-2 px-4 py-2.5 pixel-button text-xs font-mono tracking-wider whitespace-nowrap min-h-[44px] text-midnight"
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="pixel-art text-midnight">
      <path fillRule="evenodd" clipRule="evenodd" d="M10 4h4v2h2v4h-2v2h-4v-2H8V6h2V4zM8 14h8v2h2v4h-2v-2H8v2H6v-4h2v-2z"/>
    </svg>
  );
}

function WorksIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="pixel-art text-blue">
      <path fillRule="evenodd" clipRule="evenodd" d="M10 4H2v16h20V8H12V6h-2V4zM4 18V6h4v4h12v8H4z"/>
    </svg>
  );
}

function ServicesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="pixel-art text-red">
      <path fillRule="evenodd" clipRule="evenodd" d="M14 2h6v6h-2V6h-2V4h-2V2zM4 22l6-6-2-2-6 6v2h2zM16 10l-2-2 2-2 2 2-2 2zM12 14l-2-2 2-2 2 2-2 2z"/>
    </svg>
  );
}

function PricingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="pixel-art text-midnight">
      <path fillRule="evenodd" clipRule="evenodd" d="M10 2h4v20h-4V2zm2 2v2H8V4h4zm0 6V8H8v2h4zm0 2v2H8v-2h4zm0 6v-2h6v2h-6zm0 2v-2h6v2h-6zm0-10V8h6v2h-6zm0-2V4h6v2h-6z"/>
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="pixel-art text-blue">
      <path fillRule="evenodd" clipRule="evenodd" d="M2 4h20v16H2V4zm2 2v2l8 6 8-6V6H4zm0 12h16V9.5l-8 6-8-6V18z"/>
    </svg>
  );
}
