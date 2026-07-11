"use client";
import { useState, useRef, useEffect } from "react";
import RetroWindow from "./RetroWindow";
import { playClickSound } from "@/utils/audio";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function LiveDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 'initial', role: 'assistant', content: 'Terminal connected. I am Mayank\'s AI proxy. Ask me anything.' }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    playClickSound();

    const userMessage = { id: Date.now().toString(), role: "user" as const, content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      
      const aiMessageId = (Date.now() + 1).toString();
      setMessages((prev) => [...prev, { id: aiMessageId, role: "assistant", content: "" }]);

      let streamDone = false;
      while (!streamDone) {
        const { value, done } = await reader.read();
        if (done) {
          streamDone = true;
          break;
        }
        
        const chunkText = decoder.decode(value, { stream: true });
        
        if (chunkText) {
          setMessages((prev) => {
            const updatedMsgs = [...prev];
            const last = updatedMsgs[updatedMsgs.length - 1];
            if (last && last.role === 'assistant') {
               updatedMsgs[updatedMsgs.length - 1] = {
                 ...last,
                 content: last.content + chunkText
               };
            }
            return updatedMsgs;
          });
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, { id: Date.now().toString(), role: 'assistant', content: 'Connection Error. Could not reach Groq backend.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="section-padding px-6 md:pl-28 md:pr-6">
      <div className="max-w-4xl mx-auto">
        <RetroWindow title="ai_demo.exe" id="live-demo">
          <h3 className="text-2xl font-display font-bold text-midnight mb-2 uppercase tracking-wider">Live AI Demo</h3>
          <p className="text-midnight/70 font-semibold text-sm mb-6 leading-relaxed max-w-2xl">
            Test out a real RAG agent powered by Groq and Llama 3.3. Ask it questions about my background, tech stack, or pricing.
          </p>
          <div className="bg-black border-4 border-midnight p-4 font-mono text-xs sm:text-sm shadow-inner min-h-[300px] max-h-[400px] flex flex-col relative group">
            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto space-y-4 mb-4 pb-2 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] whitespace-pre-wrap ${msg.role === "user" ? "text-[#00FF00]" : "text-white"}`}>
                    <span className="opacity-50 mr-2">{msg.role === "user" ? "GUEST>" : "AI>"}</span>
                    {msg.content.replace(/\*\*/g, '')}
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === 'user' && (
                <div className="text-white flex items-center">
                  <span className="opacity-50 mr-2">AI&gt;</span>
                  <span className="blink-caret inline-block w-2.5 h-4 bg-white"></span>
                </div>
              )}
            </div>
            
            <form onSubmit={onSubmit} className="flex items-center border-t border-[#00FF00]/30 pt-3">
              <span className="text-[#00FF00] opacity-50 mr-2 whitespace-nowrap">GUEST&gt;</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-[#00FF00] outline-none border-none font-mono placeholder:text-[#00FF00]/30 min-w-0"
                placeholder="Type a question and press enter..."
                autoComplete="off"
                disabled={isLoading}
              />
              <button type="submit" className="hidden" disabled={isLoading}>Send</button>
            </form>
          </div>
        </RetroWindow>
      </div>
    </div>
  );
}
