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
                  className={`group block pixel-panel relative hover:-translate-y-1 transition-transform ${
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
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-blue pixel-art">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 4H2v16h20V8H12V6h-2V4zM4 18V6h4v4h12v8H4z"/>
                      </svg>
                      <h4 className="font-display font-bold text-midnight text-base">{project.title}</h4>
                    </div>
                    <p className="text-midnight/60 text-xs leading-relaxed">{project.description}</p>
                  </div>

                  {/* Featured badge */}
                  {isFeatured && (
                    <div className="absolute top-2 right-2 pixel-button bg-red text-white px-2 py-1 text-[10px] font-mono tracking-wider shadow-md flex items-center gap-1.5">
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
