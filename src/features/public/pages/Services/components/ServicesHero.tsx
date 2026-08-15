import React from "react";
import { Link } from "wouter";

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#050B14] overflow-hidden pt-24 pb-16 border-b border-border/10">
      {/* Background Architectural Grid/Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full md:w-3/4 h-full bg-gradient-to-l from-primary/5 via-cyan-900/10 to-transparent mix-blend-screen" />
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase">
                AUREXION SERVICES
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8 text-white animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Technology Solutions Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Enterprise Scale</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 mb-10">
              Aurexion provides enterprise technology consulting, custom software development, AI/ML engineering, cloud modernization, and digital transformation capabilities across multiple technology domains.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <Link href="#capabilities" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                Explore Capabilities
              </Link>
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-card/20 backdrop-blur-sm px-8 text-sm font-medium text-white transition-all hover:bg-white hover:text-black">
                Talk to Our Experts
              </Link>
            </div>
          </div>

          {/* Right Architecture Visualization */}
          <div className="hidden lg:flex justify-center items-center h-full animate-in fade-in zoom-in-95 duration-1000 delay-300">
            <div className="relative w-full max-w-md aspect-square">
              {/* Central Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 transform -translate-x-1/2" />
              
              <div className="flex flex-col justify-between h-full py-8 relative z-10">
                {[
                  "CORE ENGINEERING",
                  "AI & DATA SCIENCE",
                  "CLOUD & INFRASTRUCTURE",
                  "ENTERPRISE PRODUCTS",
                  "DIGITAL PLATFORMS",
                  "QUALITY & ADVISORY"
                ].map((layer, index) => (
                  <div key={layer} className="flex flex-col items-center">
                    <div className="px-6 py-3 bg-[#0a0f18] border border-border/40 rounded shadow-lg backdrop-blur-md hover:border-primary/60 transition-all duration-300 group cursor-default">
                      <span className="font-mono text-sm tracking-widest text-gray-300 group-hover:text-primary transition-colors">{layer}</span>
                    </div>
                    {index < 5 && (
                      <div className="h-8 md:h-12 w-[1px] relative">
                        <div className="absolute inset-0 bg-primary/30" />
                        <div className="absolute top-0 left-[-3px] w-2 h-2 rounded-full bg-cyan-400 animate-ping" style={{ animationDelay: `${index * 0.5}s`, animationDuration: '2s' }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
