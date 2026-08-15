import React from "react";
import { Link } from "wouter";

export const IndustriesHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-[#050B14] overflow-hidden pt-24 pb-16">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent mix-blend-screen" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase">
              INDUSTRIES
            </span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-8 text-white animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Technology Solutions Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Every Industry</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 mb-10">
            Aurexion delivers enterprise software, digital transformation, AI/ML, cloud modernization, and technology solutions across multiple industry verticals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link href="#network" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--primary),0.3)]">
              Explore Industries
            </Link>
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-card/20 backdrop-blur-sm px-8 text-sm font-medium text-white transition-all hover:bg-white hover:text-black">
              Talk to Our Experts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
