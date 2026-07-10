"use client";
import { motion } from "framer-motion";
import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" className="section-padding px-6 relative">
      <div className="absolute inset-0 bg-noise z-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-sm font-semibold tracking-wider text-accent uppercase">Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">What I Build</h2>
          </div>
          <p className="text-muted max-w-sm text-base md:text-right">
            High-end digital solutions designed to save you time and exponentially grow your business.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-panel glass-panel-hover p-8 sm:p-10 rounded-[2rem] flex flex-col items-start w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group bento-bracket bento-bracket-bl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-accent rounded-full mb-8 shadow-inner flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-300 group-hover:scale-110">
                <service.icon size={28} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white/90">{service.title}</h3>
              <p className="text-muted text-lg leading-relaxed flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
