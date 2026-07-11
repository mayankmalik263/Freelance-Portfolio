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
            {pricing.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-lg border-2 p-6 flex flex-col relative ${
                  tier.popular
                    ? "border-red bg-white shadow-[4px_4px_0px_rgba(247,10,54,0.2)] lg:-translate-y-2"
                    : "border-midnight/15 bg-white hover:border-blue"
                } transition-all duration-200`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red text-white px-4 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase whitespace-nowrap shadow-md">
                    Most Popular
                  </div>
                )}

                <h4 className="font-display font-bold text-midnight text-lg uppercase tracking-wider">{tier.title}</h4>
                <div className="mt-3 mb-4">
                  <span className="text-3xl font-display font-bold text-midnight">{tier.price}</span>
                  <span className="block text-[10px] font-mono text-midnight/40 mt-1 tracking-wider uppercase">{tier.period}</span>
                </div>
                <p className="text-xs text-midnight/60 mb-6 pb-6 border-b border-midnight/10 leading-relaxed">{tier.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`shrink-0 w-5 h-5 rounded flex items-center justify-center ${tier.popular ? "bg-red/10 text-red" : "bg-blue/10 text-blue"}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs text-midnight/70 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%20Mayank,%20I'm%20interested%20in%20the%20${tier.title}%20plan`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold tracking-widest text-xs uppercase transition-all duration-200 min-h-[44px] ${
                    tier.popular
                      ? "bg-red text-white hover:bg-midnight shadow-[2px_2px_0px_rgba(247,10,54,0.3)]"
                      : "bg-midnight text-white hover:bg-blue shadow-[2px_2px_0px_rgba(40,63,118,0.2)]"
                  }`}
                >
                  Get Started <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-midnight/40 max-w-xl mx-auto leading-relaxed">
            <p className="mb-1">Personal portfolio site from Rs 8,000, or learn to build your own with AI (paid 1:1 session).</p>
            <p>First year's domain included. Final quote confirmed on a quick call.</p>
          </div>
        </RetroWindow>
      </div>
    </div>
  );
}
