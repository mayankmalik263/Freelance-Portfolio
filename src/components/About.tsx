"use client";
import RetroWindow from "./RetroWindow";
import { aboutData } from "@/data/portfolio";

export default function About() {
  return (
    <div className="section-padding px-6 md:pl-28 md:pr-6">
      <div className="max-w-4xl mx-auto">
        <RetroWindow title="profile" id="about">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">

            {/* Left: Photo + Name */}
            <div className="flex flex-col items-center md:items-start shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-3 border-midnight/20 bg-icy flex items-center justify-center overflow-hidden shadow-[3px_3px_0px_rgba(40,63,118,0.15)]">
                {/* TODO: real photo */}
                <span className="text-[10px] text-midnight/40 font-mono text-center px-2">[ PHOTO ]</span>
              </div>
              <h3 className="mt-4 text-lg font-display">
                hi! i'm <span className="text-red font-bold">Mayank Malik</span>
              </h3>
              <span className="inline-block mt-2 px-3 py-1.5 bg-icy text-midnight text-[10px] font-bold tracking-[0.15em] uppercase rounded-md border border-blue/20">
                Full-Stack AI Developer
              </span>
            </div>

            {/* Right: Bio */}
            <div className="flex-1">
              <p className="text-midnight/80 leading-[1.8] text-sm md:text-base mb-6">
                I build full-stack web apps and AI automations. B.Tech CSE (AI/ML) at UPES Dehradun. I ship products with Next.js, React, and TypeScript on the front, Python and FastAPI on the back, and AI on top: RAG chatbots, LangGraph multi-agent systems, and automation workflows. Currently interning at NewCycl, building full-stack features and a RAG-powered assistant.
              </p>

              {/* Education & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="p-4 bg-buttercream rounded-lg border border-midnight/10">
                  <h4 className="text-sm font-display font-bold text-midnight uppercase tracking-wider mb-2">Education</h4>
                  <p className="text-midnight font-semibold text-sm">{aboutData.education.institution}</p>
                  <p className="text-midnight/60 text-xs mt-1">{aboutData.education.degree}</p>
                  <p className="text-midnight/40 text-[10px] font-mono mt-1">{aboutData.education.years}</p>
                </div>
                <div className="p-4 bg-buttercream rounded-lg border border-midnight/10">
                  <h4 className="text-sm font-display font-bold text-midnight uppercase tracking-wider mb-2">Experience</h4>
                  <p className="text-midnight font-semibold text-sm">{aboutData.experience.company}</p>
                  <p className="text-midnight/60 text-xs mt-1">{aboutData.experience.role}</p>
                  <p className="text-midnight/40 text-[10px] font-mono mt-1">JUNE 2026 - PRESENT</p>
                </div>
              </div>
            </div>
          </div>
        </RetroWindow>
      </div>
    </div>
  );
}
