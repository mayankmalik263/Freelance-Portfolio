"use client";
import { motion } from "framer-motion";
import { aboutData, contactInfo } from "@/data/portfolio";
import { MessageCircle, Mail, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How long does a website take to build?",
    a: "A standard landing page takes 1-2 weeks. Complex projects with automations take 3-4 weeks depending on the requirements."
  },
  {
    q: "Do I need to write my own copy?",
    a: "No, I can help write conversion-focused copy for your site based on our initial strategy call."
  },
  {
    q: "What is the maintenance cost?",
    a: "The first year's domain is included. After that, basic hosting and domain renewals are around ₹2,000 - ₹5,000/year depending on your traffic."
  }
];

export default function AboutContact() {
  return (
    <section id="contact" className="section-padding px-6 relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-noise z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-accent/5 rounded-[100%] blur-[120px] -z-10" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* About Info - Concise text above contact */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
          <p className="text-muted max-w-2xl mx-auto">{aboutData.text}</p>
        </div>

        {/* Massive Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-10 sm:p-16 rounded-[3rem] relative overflow-hidden mb-24 text-center shadow-2xl bento-bracket bento-bracket-tr bento-bracket-bl border-accent/20"
        >
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">Let's Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-accent">Exceptional.</span></h2>
            <p className="text-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Tell me about your business and what you need. I'll review it and send you a custom demo and quote—no obligations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-accent text-white py-5 px-10 rounded-full font-bold hover:bg-violet-600 transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:-translate-y-1 hover:scale-105 w-full sm:w-auto text-lg"
              >
                <MessageCircle size={24} />
                Message me on WhatsApp
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white py-5 px-10 rounded-full font-bold hover:bg-white/10 transition-all hover:-translate-y-1 w-full sm:w-auto text-lg"
              >
                <Mail size={24} />
                Email Me
              </a>
            </div>
          </div>
        </motion.div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-sm font-semibold tracking-wider text-accent uppercase">FAQ</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="glass-panel glass-panel-hover rounded-[1.5rem] overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-white/90 pr-4">{question}</span>
        <div className={`p-2 rounded-full bg-white/5 text-muted transition-transform duration-300 ${isOpen ? 'rotate-45 bg-accent/20 text-accent' : ''}`}>
          <Plus size={20} />
        </div>
      </button>
      <div 
        className={`px-6 sm:px-8 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-muted leading-relaxed text-lg">{answer}</p>
      </div>
    </div>
  );
}
