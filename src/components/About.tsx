"use client";
import RetroWindow from "./RetroWindow";
import { aboutData } from "@/data/portfolio";

export default function About() {
  return (
    <div className="section-padding px-6 md:pl-28 md:pr-6">
      <div className="max-w-4xl mx-auto">
        <RetroWindow title="profile" id="about">
          <div className="retro-body grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
            
            {/* Left: Photo / Quick Info */}
            <div className="flex flex-col gap-6 relative">
              <div className="w-48 h-48 md:w-full md:h-64 bg-midnight/5 pixel-panel flex items-center justify-center mx-auto md:mx-0 overflow-hidden group">
                {aboutData.photo ? (
                  <img src={aboutData.photo} alt="Profile" className="w-full h-full object-cover pixel-art" />
                ) : (
                  <div className="text-midnight/30 flex flex-col items-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="pixel-art mb-2"><path fillRule="evenodd" clipRule="evenodd" d="M10 4h4v2h2v4h-2v2h-4v-2H8V6h2V4zM8 14h8v2h2v4h-2v-2H8v2H6v-4h2v-2z"/></svg>
                    <span className="font-mono text-xs">NO_IMAGE</span>
                  </div>
                )}
              </div>
              <h3 className="text-lg font-display">
                hi! i'm <span className="text-red font-bold">Mayank Malik</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="pixel-button px-2 py-1.5 bg-icy text-midnight text-[10px] font-bold tracking-[0.1em] uppercase cursor-default">
                  Full-Stack AI
                </span>
                <span className="pixel-button px-2 py-1.5 bg-buttercream text-midnight text-[10px] font-bold tracking-[0.1em] uppercase cursor-default">
                  AIML Engineer
                </span>
                <span className="pixel-button px-2 py-1.5 bg-white text-midnight text-[10px] font-bold tracking-[0.1em] uppercase cursor-default">
                  Automation Dev
                </span>
                <span className="pixel-button px-2 py-1.5 bg-white text-midnight text-[10px] font-bold tracking-[0.1em] uppercase cursor-default">
                  Front End
                </span>
                <span className="pixel-button px-2 py-1.5 bg-buttercream text-midnight text-[10px] font-bold tracking-[0.1em] uppercase cursor-default">
                  UI UX
                </span>
                <span className="pixel-button px-2 py-1.5 bg-icy text-midnight text-[10px] font-bold tracking-[0.1em] uppercase cursor-default">
                  Marketing Guy
                </span>
              </div>
            </div>

            {/* Right: Bio */}
            <div className="flex-1">
              <div className="pixel-panel p-5 mb-8 bg-buttercream/30">
                <p className="text-midnight leading-[1.6] text-lg md:text-xl font-display">
                  I build full-stack web apps and AI automations. B.Tech CSE (AI/ML) at UPES Dehradun. I ship products with Next.js, React, and TypeScript on the front, Python and FastAPI on the back, and AI on top: RAG chatbots, LangGraph multi-agent systems, and automation workflows. Currently interning at NewCycl, building full-stack features and a RAG-powered assistant.
                </p>
              </div>

              {/* Experience */}
              <div className="grid gap-4 mt-4">
                <div className="pixel-panel p-4 group">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <h5 className="font-bold text-midnight group-hover:text-red transition-colors leading-tight">{aboutData.experience.role}</h5>
                    <span className="font-mono text-[10px] sm:text-xs text-midnight/50 bg-buttercream px-1.5 py-0.5 shrink-0 border border-midnight/10">{aboutData.experience.period || "JUNE 2026 - PRESENT"}</span>
                  </div>
                  <p className="text-sm font-semibold text-blue">{aboutData.experience.company}</p>
                </div>
              </div>
              
              {/* Education */}
              <div className="mt-8">
                <h4 className="text-xl font-display font-bold text-midnight mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-red/20 inline-block border border-red/30" /> Education
                </h4>
                <div className="grid gap-4">
                  <div className="pixel-panel p-4 group">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <h5 className="font-bold text-midnight group-hover:text-red transition-colors leading-tight">{aboutData.education.degree}</h5>
                      <span className="font-mono text-[10px] sm:text-xs text-midnight/50 bg-buttercream px-1.5 py-0.5 shrink-0 border border-midnight/10">{aboutData.education.years}</span>
                    </div>
                    <p className="text-sm font-semibold text-blue">{aboutData.education.institution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RetroWindow>
      </div>
    </div>
  );
}
