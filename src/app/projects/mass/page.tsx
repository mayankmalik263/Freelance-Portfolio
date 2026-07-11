import RetroWindow from "@/components/RetroWindow";
import Link from "next/link";
import DesktopIcons from "@/components/DesktopIcons";

export default function MassCaseStudy() {
  return (
    <main className="flex min-h-screen flex-col bg-icy bg-[radial-gradient(#283f76_1px,transparent_1px)] [background-size:20px_20px]">
      <DesktopIcons />
      
      <div className="section-padding px-6 md:pl-28 md:pr-6 py-12">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-6">
            <Link href="/#works" className="pixel-button inline-flex items-center gap-2 bg-buttercream text-midnight px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold">
              <span className="text-lg leading-none mt-[-2px]">&larr;</span> Back to Desktop
            </Link>
          </div>

          <RetroWindow title="mass_case_study.doc" id="mass-study">
            <div className="p-2 sm:p-6 bg-white border-4 border-midnight shadow-inner text-midnight">
              <h1 className="text-3xl sm:text-5xl font-display font-bold text-red uppercase tracking-tight mb-2 leading-[0.9]">
                M.A.S.S.
              </h1>
              <h2 className="text-sm sm:text-base font-mono font-bold text-midnight/50 mb-8 uppercase tracking-widest border-b-2 border-midnight/10 pb-4">
                Multi-Agent Startup Simulator
              </h2>

              <div className="space-y-8 font-sans">
                
                {/* The Problem */}
                <section>
                  <h3 className="text-lg font-display font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-4 h-4 bg-red inline-block"></span> 01. The Problem
                  </h3>
                  <p className="text-sm leading-relaxed font-semibold text-midnight/80">
                    Founders often struggle to stress-test their startup ideas before writing code or spending money. Traditional validation is slow, biased, and relies on static feedback. The goal was to build a dynamic, intelligent system that could simulate market conditions, technical constraints, and user feedback instantly by having specialized AI personas argue and collaborate over a business thesis.
                  </p>
                </section>

                {/* Architecture */}
                <section>
                  <h3 className="text-lg font-display font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-4 h-4 bg-blue inline-block"></span> 02. The Architecture
                  </h3>
                  <p className="text-sm leading-relaxed font-semibold text-midnight/80 mb-4">
                    To handle complex, stateful multi-agent conversations without losing context, I bypassed standard simple LLM wrappers and built a robust event-driven architecture:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs mb-4">
                    <div className="border-2 border-midnight p-3 bg-buttercream/30">
                      <div className="font-bold text-blue mb-1 uppercase tracking-wider">Frontend</div>
                      Next.js, React, TailwindCSS. Handling real-time streaming sockets.
                    </div>
                    <div className="border-2 border-midnight p-3 bg-buttercream/30">
                      <div className="font-bold text-red mb-1 uppercase tracking-wider">Backend Core</div>
                      FastAPI (Python) for high-concurrency async processing.
                    </div>
                    <div className="border-2 border-midnight p-3 bg-buttercream/30">
                      <div className="font-bold text-midnight mb-1 uppercase tracking-wider">Agent Engine</div>
                      LangGraph for cyclic agent routing, state management, and memory.
                    </div>
                  </div>
                </section>

                {/* The Workflow */}
                <section>
                  <h3 className="text-lg font-display font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-4 h-4 bg-midnight inline-block"></span> 03. Agentic Workflow
                  </h3>
                  <div className="bg-icy border-2 border-midnight p-4 mb-4">
                    <pre className="font-mono text-[10px] sm:text-xs text-midnight overflow-x-auto whitespace-pre-wrap">
{`[User Input] --> { State Manager }
                      |
        +-------------+-------------+
        |                           |
[ Tech Lead Agent ]         [ Market Analyst ]
(Evaluates feasibility)     (Projects TAM & risk)
        |                           |
        +-------------+-------------+
                      |
             [ Synthesis Agent ]
           (Generates final report)`}
                    </pre>
                  </div>
                  <p className="text-sm leading-relaxed font-semibold text-midnight/80">
                    The LangGraph state machine ensures that the Tech Lead and Market Analyst agents pass their internal monologue and findings back to the central state. The Synthesis agent then compiles this into a structured, highly actionable PDF/UI report for the user, guaranteeing 0 hallucinated crossover between personas.
                  </p>
                </section>

                {/* Live Link */}
                <section className="pt-6 border-t-2 border-midnight/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-lg uppercase">Live Deployment</h3>
                    <p className="text-xs text-midnight/60 font-mono">Hosted on Vercel Edge Network</p>
                  </div>
                  <a 
                    href="https://mass-sim.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="pixel-button px-6 py-3 bg-red text-white font-mono font-bold uppercase tracking-widest text-sm hover:bg-midnight transition-colors w-full sm:w-auto text-center"
                  >
                    Launch App &rarr;
                  </a>
                </section>

              </div>
            </div>
          </RetroWindow>

        </div>
      </div>
    </main>
  );
}
