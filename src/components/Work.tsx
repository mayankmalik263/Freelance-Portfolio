"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink, Play } from "lucide-react";
import Image from "next/image";

export default function Work() {
  return (
    <section id="work" className="section-padding px-6 relative">
      <div className="absolute inset-0 bg-noise z-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-sm font-semibold tracking-wider text-accent uppercase">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Selected Work</h2>
          </div>
          <p className="text-muted max-w-sm text-base md:text-right">
            Proof that I can build high-end products that drive real business results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`glass-panel glass-panel-hover rounded-[2rem] overflow-hidden flex flex-col group ${project.id === 'waffleda' ? 'lg:col-span-2 bento-bracket bento-bracket-tr bento-bracket-bl' : 'bento-bracket bento-bracket-tr'}`}
            >
              {/* Aspect Video Preview Frame */}
              <div className={`relative w-full border-b border-white/10 overflow-hidden bg-black/40 aspect-video`}>
                
                {/* WaffleDa special stat badge Layered on Image */}
                {project.id === 'waffleda' && (
                  <div className="absolute top-6 right-6 z-20 bg-background/80 border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-semibold backdrop-blur-xl shadow-2xl flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                    </span>
                    ~120 orders driven
                  </div>
                )}

                {project.image ? (
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/80 to-background">
                    {/* The literal TODO comment is strictly a code comment now, not rendered text */}
                    {/* TODO: replace project.image in portfolio.ts with real screenshot */}
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-accent/80 shadow-inner group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                      <Play size={24} className="ml-1" />
                    </div>
                    <span className="text-xl font-bold text-white/90">{project.title}</span>
                    <span className="text-sm font-medium text-muted mt-1 bg-white/5 px-3 py-1 rounded-full border border-white/5 mt-3">Preview Area</span>
                  </div>
                )}
                
                {/* Overlay link button */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 flex items-center justify-center bg-background/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <span className="flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-105">
                    Open Live Site <ExternalLink size={18} strokeWidth={2.5} />
                  </span>
                </a>
              </div>
              
              <div className="p-8 flex flex-col flex-grow relative bg-white/[0.01]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-white tracking-tight">{project.title}</h3>
                </div>
                
                <p className="text-muted mb-8 flex-grow leading-relaxed text-lg">{project.description}</p>
                
                <div className="pt-6 border-t border-white/10 mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="bg-white/5 border border-white/10 text-muted px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Proves</span>
                    <span className="text-gray-300 font-medium">{project.proof}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
