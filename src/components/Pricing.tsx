"use client";
import { motion } from "framer-motion";
import { pricing, contactInfo } from "@/data/portfolio";
import { Check, ArrowRight } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm font-semibold tracking-wider text-accent uppercase">Investment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">Choose your Plan</h2>
          <p className="text-muted max-w-2xl text-lg">Transparent pricing for high-end digital experiences.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          {pricing.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`glass-panel p-8 sm:p-10 rounded-[2.5rem] flex flex-col h-full relative transition-all duration-300 hover:-translate-y-2 group ${
                tier.popular 
                  ? 'border-accent/80 shadow-[0_0_60px_rgba(139,92,246,0.2)] lg:-translate-y-4 lg:hover:-translate-y-6 bg-accent/[0.03] z-10 bento-bracket bento-bracket-tr bento-bracket-bl' 
                  : 'glass-panel-hover'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(139,92,246,0.5)] border border-violet-400/50 whitespace-nowrap tracking-wide">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2 text-white/90">{tier.title}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white tracking-tighter">from {tier.price}</span>
                <div className="mt-4">
                  <span className="text-muted text-sm font-semibold bg-white/5 inline-block px-4 py-1.5 rounded-full border border-white/10 uppercase tracking-wider">{tier.period}</span>
                </div>
              </div>
              <p className="text-base text-muted mb-8 pb-8 border-b border-white/10 leading-relaxed">{tier.description}</p>
              
              <ul className="space-y-5 mb-10 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="bg-accent/10 p-1.5 rounded-full shrink-0 border border-accent/20 text-accent">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="text-base text-gray-300 leading-relaxed font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%20Mayank,%20I'm%20interested%20in%20the%20${tier.title}%20plan`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-accent text-white hover:bg-violet-600 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Start Your Journey <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center text-sm text-muted max-w-2xl mx-auto glass-panel p-6 rounded-[2rem] border-white/5">
          <p className="mb-2">Personal portfolio site from Rs 8,000, or learn to build your own with AI (paid 1:1 session).</p>
          <p>First year's domain included. Final quote confirmed on a quick call.</p>
        </div>
      </div>
    </section>
  );
}
