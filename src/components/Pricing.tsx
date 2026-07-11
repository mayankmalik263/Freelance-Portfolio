"use client";
import RetroWindow from "./RetroWindow";
import { pricing, contactInfo } from "@/data/portfolio";
import { Check, ArrowRight } from "lucide-react";

export default function Pricing() {
  return (
    <div className="section-padding px-6 md:pl-28 md:pr-6">
      <div className="max-w-4xl mx-auto">
        <RetroWindow title="pricing" id="pricing">
          <h3 className="text-2xl font-display font-bold text-midnight mb-2 uppercase tracking-wider">Choose Your Plan</h3>
          <p className="text-midnight/50 text-sm mb-8">Transparent pricing for high-end digital experiences.</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            {pricing.map((plan) => (
              <div 
                key={plan.id}
                className={`relative p-6 flex flex-col group hover:-translate-y-1 transition-transform ${
                  plan.popular ? "pixel-panel border-4 border-red bg-white" : "pixel-panel"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-4 bg-red text-white px-3 py-1 text-[10px] font-mono font-bold tracking-wider uppercase pixel-button">
                    Most Popular
                  </div>
                )}

                <h4 className="font-display font-bold text-midnight text-lg uppercase tracking-wider">{plan.title}</h4>
                <div className="mt-3 mb-4">
                  <span className="text-3xl font-display font-bold text-midnight">{plan.price}</span>
                  <span className="block text-[10px] font-mono text-midnight/40 mt-1 tracking-wider uppercase">{plan.period}</span>
                </div>
                <p className="text-xs text-midnight/60 mb-6 pb-6 border-b border-midnight/10 leading-relaxed">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5 text-blue group-hover:text-red transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="pixel-art"><path fillRule="evenodd" clipRule="evenodd" d="M18 6h2v2h-2V6zm-2 4V8h2v2h-2zm-2 2v-2h2v2h-2zm-2 2v-2h2v2h-2zm-2 2v-2h2v2H8zm-2-2v2H6v-2h2zm-2-2v2H4v-2h2zm0-2H2v2h2v-2z"/></svg>
                      </div>
                      <span className="text-sm text-midnight/80 font-bold">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%20Mayank,%20I'm%20interested%20in%20the%20${plan.title}%20plan%20for%20my%20business.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full flex items-center justify-center gap-2 py-3 px-4 font-mono font-bold tracking-wider uppercase text-xs pixel-button ${
                    plan.popular 
                      ? "bg-red text-white hover:bg-midnight" 
                      : "bg-buttercream text-midnight hover:bg-midnight hover:text-white"
                  }`}
                >
                  Select {plan.title}
                  <span className="text-lg leading-none mt-[-2px]">&rarr;</span>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs sm:text-sm text-midnight/70 max-w-2xl mx-auto leading-relaxed flex flex-col items-center gap-4">
            <p className="font-semibold flex flex-col sm:flex-row items-center justify-center gap-3">
              Personal portfolio site from Rs 8,000, or learn to build your own with AI:
              <a 
                href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%20Mayank,%20I'd%20like%20to%20book%20a%201:1%20AI%20coaching%20session.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center py-2 px-4 font-mono font-bold tracking-wider uppercase text-xs pixel-button bg-white text-midnight hover:bg-midnight hover:text-white transition-colors"
              >
                Book 1:1 Session
              </a>
            </p>
            
            <p className="font-semibold text-midnight border-y border-midnight/10 py-5 w-full flex flex-col items-center justify-center gap-3">
              <span>Custom AI and full-stack app projects: quoted per scope, from Rs 25,000.</span>
              <a 
                href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%20Mayank,%20I'd%20like%20to%20request%20a%20custom%20AI%20project%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center py-3 px-6 font-mono font-bold tracking-wider uppercase text-sm pixel-button bg-red text-white hover:bg-midnight transition-colors"
              >
                Request Custom Quote
              </a>
            </p>

            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-midnight/40 mt-1">
              First year's domain included for web tiers. Final quote confirmed on a quick call.
            </p>
          </div>
        </RetroWindow>
      </div>
    </div>
  );
}
