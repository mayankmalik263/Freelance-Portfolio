"use client";
import { useState, useRef, useEffect } from "react";
import RetroWindow from "./RetroWindow";
import { playClickSound } from "@/utils/audio";

type Message = {
  role: "user" | "ai";
  content: string;
};

const SIMULATED_RESPONSES: Record<string, string> = {
  default: "I'm a simulated RAG agent trained on Mayank's profile. Try asking about his 'tech stack', 'rates', or 'experience'.",
  "tech stack": "Mayank specializes in Next.js, React, FastAPI, Python, and LangGraph for multi-agent systems.",
  "rates": "Custom AI & full-stack projects start at Rs 25,000. He also offers standard business web tiers starting at Rs 15,000.",
  "experience": "He's a B.Tech CSE (AI/ML) student currently interning at NewCycl, where he builds full-stack web and RAG chatbots.",
  "mass": "MASS is his flagship project—a multi-agent startup simulator using LangGraph and FastAPI.",
};

export default function LiveDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Terminal connected. I am Mayank's AI proxy. Ask me anything." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    playClickSound();
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking and typing response
    setTimeout(() => {
      let response = SIMULATED_RESPONSES.default;
      const lower = userMsg.toLowerCase();
      
      if (lower.includes("stack") || lower.includes("tech")) response = SIMULATED_RESPONSES["tech stack"];
      else if (lower.includes("rate") || lower.includes("price") || lower.includes("cost") || lower.includes("quote")) response = SIMULATED_RESPONSES["rates"];
      else if (lower.includes("experience") || lower.includes("background") || lower.includes("intern")) response = SIMULATED_RESPONSES["experience"];
      else if (lower.includes("mass") || lower.includes("project") || lower.includes("build")) response = SIMULATED_RESPONSES["mass"];

      // Simulate character by character typing
      setIsTyping(false);
      setMessages(prev => [...prev, { role: "ai", content: "" }]);
      
      let index = 0;
      const typeNext = () => {
        if (index < response.length) {
          setMessages(prev => {
            const newMsgs = [...prev];
            newMsgs[newMsgs.length - 1].content = response.slice(0, index + 1);
            return newMsgs;
          });
          index++;
          setTimeout(typeNext, 20 + Math.random() * 30);
        }
      };
      typeNext();
    }, 600);
  };

  return (
    <div className="section-padding px-6 md:pl-28 md:pr-6">
      <div className="max-w-4xl mx-auto">
        <RetroWindow title="ai_demo.exe" id="live-demo">
          <h3 className="text-2xl font-display font-bold text-midnight mb-2 uppercase tracking-wider">Live AI Demo</h3>
          <p className="text-midnight/70 font-semibold text-sm mb-6 leading-relaxed max-w-2xl">
            Test out a simulated RAG agent interface. Ask it questions about my background, tech stack, or pricing.
          </p>
          <div className="bg-black border-4 border-midnight p-4 font-mono text-xs sm:text-sm shadow-inner min-h-[300px] max-h-[400px] flex flex-col relative group">
            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto space-y-4 mb-4 pb-2 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] ${msg.role === "user" ? "text-[#00FF00]" : "text-white"}`}>
                    <span className="opacity-50 mr-2">{msg.role === "user" ? "GUEST>" : "AI>"}</span>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="text-white flex items-center">
                  <span className="opacity-50 mr-2">AI&gt;</span>
                  <span className="blink-caret inline-block w-2.5 h-4 bg-white"></span>
                </div>
              )}
            </div>
            
            <form onSubmit={handleSubmit} className="flex items-center border-t border-[#00FF00]/30 pt-3">
              <span className="text-[#00FF00] opacity-50 mr-2 whitespace-nowrap">GUEST&gt;</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-[#00FF00] outline-none border-none font-mono placeholder:text-[#00FF00]/30 min-w-0"
                placeholder="Type a question and press enter..."
                autoComplete="off"
              />
              <button type="submit" className="hidden">Send</button>
            </form>
          </div>
        </RetroWindow>
      </div>
    </div>
  );
}
