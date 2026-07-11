"use client";
import RetroWindow from "./RetroWindow";
import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <div className="section-padding px-6 md:pl-28 md:pr-6">
      <div className="max-w-4xl mx-auto">
        <RetroWindow title="services" id="services">
          <h3 className="text-2xl font-display font-bold text-midnight mb-2 uppercase tracking-wider">What I Build</h3>
          <p className="text-midnight/70 font-semibold text-sm mb-8 leading-relaxed max-w-2xl">
            AI engineer and full-stack builder who ships working products, not just prototypes: from RAG chatbots and multi-agent systems to the web apps they live in.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {services.map((service, idx) => {
              // The 6th service is rendered differently
              if (service.isSmall) return null;

              return (
                <div
                  key={service.title}
                  className={`pixel-panel p-5 group flex flex-col items-start ${
                    service.isFlagship ? "border-4 border-red" : ""
                  }`}
                >
                  {service.isFlagship && (
                    <span className="pixel-button inline-block px-2 py-1 mb-4 bg-red text-white text-[10px] font-bold tracking-widest uppercase cursor-default">
                      FLAGSHIP
                    </span>
                  )}
                  <h4 className="font-display font-bold text-midnight text-lg uppercase tracking-wider mb-4 leading-tight">{service.title}</h4>
                  
                  <div className="space-y-4 flex-grow">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-midnight/40 block mb-1">What I build</span>
                      <p className="text-midnight/80 text-xs font-semibold leading-relaxed">{service.whatIBuild}</p>
                    </div>

                    {service.youGet && (
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase text-midnight/40 block mb-1">You get</span>
                        <p className="text-midnight/80 text-xs font-semibold leading-relaxed">{service.youGet}</p>
                      </div>
                    )}

                    {service.framing && (
                      <p className="text-blue text-xs font-bold leading-relaxed">{service.framing}</p>
                    )}
                  </div>

                  {service.proof && (
                    <div className="mt-6 w-full pt-4 border-t-2 border-midnight/10">
                      <span className="text-[10px] font-mono font-bold uppercase text-midnight/40 block mb-1">Proof</span>
                      <p className="text-midnight font-bold text-xs">{service.proof}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 6th Service: Technical Documents */}
          {services.find(s => s.isSmall) && (
            <div className="mt-4 p-4 pixel-panel bg-buttercream/30 flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="font-display font-bold text-midnight uppercase tracking-wider whitespace-nowrap">
                {services.find(s => s.isSmall)?.title}
              </span>
              <span className="hidden sm:inline text-midnight/30 font-bold">|</span>
              <p className="text-midnight/70 text-xs font-semibold">
                {services.find(s => s.isSmall)?.whatIBuild}
              </p>
            </div>
          )}
        </RetroWindow>
      </div>
    </div>
  );
}
