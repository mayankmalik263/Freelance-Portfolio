"use client";
import RetroWindow from "./RetroWindow";
import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <div className="section-padding px-6 md:pl-28 md:pr-6">
      <div className="max-w-4xl mx-auto">
        <RetroWindow title="services" id="services">
          <h3 className="text-2xl font-display font-bold text-midnight mb-2 uppercase tracking-wider">What I Build</h3>
          <p className="text-midnight/50 text-sm mb-8">High-end digital solutions designed to save you time and grow your business.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-5 rounded-lg bg-icy/50 border-2 border-midnight/10 hover:border-blue hover:shadow-[2px_2px_0px_rgba(85,145,209,0.2)] transition-all duration-200 hover:-translate-y-0.5 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white border-2 border-midnight/15 flex items-center justify-center mb-4 text-blue group-hover:text-red group-hover:border-red/30 transition-colors shadow-[2px_2px_0px_rgba(40,63,118,0.1)]">
                  <service.icon size={24} strokeWidth={2} />
                </div>
                <h4 className="font-display font-bold text-midnight text-sm uppercase tracking-wider mb-2">{service.title}</h4>
                <p className="text-midnight/60 text-xs leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </RetroWindow>
      </div>
    </div>
  );
}
