"use client";
import { motion } from "framer-motion";
import { heroData, contactInfo } from "@/data/portfolio";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-20 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-noise z-0" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT: Profile Card (Bento) */}
          <motion.div 
            className="lg:col-span-4 glass-panel rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden bento-bracket bento-bracket-tr bento-bracket-bl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-accent/20 to-transparent opacity-50 pointer-events-none" />
            
            <div>
              <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-white/10 shadow-xl mx-auto lg:mx-0 relative">
                {/* Fallback avatar if no image is provided */}
                <div className="w-full h-full bg-gradient-to-br from-accent to-blue-800 flex items-center justify-center text-4xl font-bold text-white">
                  M
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
                Hi, I'm {heroData.name}
              </h1>
              <p className="text-muted text-lg mb-8">
                Freelance Developer & Automation Expert
              </p>
            </div>
            
            <a 
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-accent text-white py-4 px-6 rounded-full font-semibold hover:bg-violet-600 transition-all shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:-translate-y-1 w-full"
            >
              <MessageCircle size={20} />
              Message me
            </a>
          </motion.div>
          
          {/* RIGHT: Headline & Stats Bento */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Headline Card */}
            <motion.div 
              className="glass-panel rounded-[2rem] p-8 sm:p-12 flex-grow flex flex-col justify-center relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-6">
                Making Your Business a <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-accent drop-shadow-sm">Pain-Free Experience.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-8">
                {heroData.subheadline}
              </p>
              
              <div className="flex">
                <a 
                  href="#work"
                  className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  See my work <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
            
            {/* Stat Tiles Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              <motion.div 
                className="glass-panel glass-panel-hover rounded-[1.5rem] p-6 bento-bracket bento-bracket-tr relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-4xl font-bold text-white mb-2">120+</div>
                <div className="text-sm font-medium text-muted">Orders Driven (WaffleDa)</div>
              </motion.div>
              
              <motion.div 
                className="glass-panel glass-panel-hover rounded-[1.5rem] p-6 relative overflow-hidden group border-t-accent/30 bg-accent/[0.02]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-4xl font-bold text-accent mb-2">5</div>
                <div className="text-sm font-medium text-muted">Live Projects</div>
              </motion.div>
              
              <motion.div 
                className="glass-panel glass-panel-hover rounded-[1.5rem] p-6 bento-bracket bento-bracket-bl relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-4xl font-bold text-white mb-2">2</div>
                <div className="text-sm font-medium text-muted">Real Clients</div>
              </motion.div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
