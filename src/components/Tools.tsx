"use client";
import RetroWindow from "./RetroWindow";

const tools = [
  { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript" },
  { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript" },
  { name: "Python", src: "https://cdn.simpleicons.org/python" },
  { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "React", src: "https://cdn.simpleicons.org/react" },
  { name: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "FastAPI", src: "https://cdn.simpleicons.org/fastapi" },
  { name: "Supabase", src: "https://cdn.simpleicons.org/supabase" },
  { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql" },
  { name: "LangChain", src: "https://cdn.simpleicons.org/langchain" },
  { name: "Vercel", src: "https://cdn.simpleicons.org/vercel" },
  { name: "Cloudflare", src: "https://cdn.simpleicons.org/cloudflare" },
  { name: "Netlify", src: "https://cdn.simpleicons.org/netlify" },
  { name: "Git", src: "https://cdn.simpleicons.org/git" },
  { name: "GitHub", src: "https://cdn.simpleicons.org/github" },
];

const aiTools = [
  { name: "Claude Opus", src: "https://cdn.simpleicons.org/anthropic" },
  { name: "Antigravity", src: "https://cdn.simpleicons.org/googlegemini" },
  { name: "Google Stitch", src: "https://cdn.simpleicons.org/google" },
  { name: "Codex", src: "/openai.svg" },
];

export default function Tools() {
  return (
    <div className="section-padding px-6 md:pl-28 md:pr-6">
      <div className="max-w-4xl mx-auto">
        <RetroWindow title="tools" id="tools">
          <h3 className="text-2xl font-display font-bold text-midnight mb-6 uppercase tracking-wider">Tools & Technologies</h3>

          <div className="retro-body">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4 mb-8">
              {tools.map((tool) => (
                <div 
                  key={tool.name} 
                  className="pixel-panel p-4 flex flex-col items-center justify-center gap-3 hover:-translate-y-1 transition-transform group"
                >
                  <img src={tool.src} alt={tool.name} className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity pixel-art" />
                  <span className="text-[10px] font-bold text-midnight/70 text-center uppercase tracking-wider">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-xl font-display font-bold text-midnight mt-10 mb-4 uppercase tracking-wider">AI Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {aiTools.map((tool) => (
              <div 
                key={tool.name} 
                className="pixel-panel p-4 flex flex-col items-center justify-center gap-3 hover:-translate-y-1 transition-transform group"
              >
                <img src={tool.src} alt={tool.name} className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity pixel-art" />
                <span className="text-[10px] font-bold text-midnight/70 text-center uppercase tracking-wider">{tool.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-midnight/60 text-xs leading-relaxed font-bold tracking-wide uppercase">
              Shipping production apps and automations fast.
            </p>
          </div>
        </RetroWindow>
      </div>
    </div>
  );
}
