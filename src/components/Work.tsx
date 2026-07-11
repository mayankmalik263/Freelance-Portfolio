"use client";
import RetroWindow from "./RetroWindow";
import { projects } from "@/data/portfolio";

export default function Work() {
  return (
    <div className="section-padding px-6 md:pl-28 md:pr-6">
      <div className="max-w-4xl mx-auto">
        <RetroWindow title="works" id="works">
          <h3 className="text-2xl font-display font-bold text-midnight mb-6 uppercase tracking-wider">Selected Work</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project) => {
              const isFeatured = project.id === "waffleda";
              return (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block rounded-lg border-2 border-midnight/10 overflow-hidden bg-white hover:border-blue hover:shadow-[3px_3px_0px_rgba(85,145,209,0.2)] transition-all duration-200 hover:-translate-y-1 relative ${
                    isFeatured ? "sm:col-span-2" : ""
                  }`}
                >
                  {/* Thumbnail */}
                  <div className={`w-full bg-icy overflow-hidden ${isFeatured ? "h-48 sm:h-56" : "h-36 sm:h-44"}`}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-midnight/20 font-mono text-xs">
                        [ PREVIEW ]
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5591D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>
                      </svg>
                      <h4 className="font-display font-bold text-midnight text-base">{project.title}</h4>
                    </div>
                    <p className="text-midnight/60 text-xs leading-relaxed">{project.description}</p>
                  </div>

                  {/* Featured badge */}
                  {isFeatured && (
                    <div className="absolute top-3 right-3 bg-red text-white px-3 py-1.5 rounded-md text-[10px] font-bold tracking-wider shadow-md flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      ~120 ORDERS DRIVEN
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </RetroWindow>
      </div>
    </div>
  );
}
