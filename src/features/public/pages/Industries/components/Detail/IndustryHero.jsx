import React from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export const IndustryHero = ({ industry }) => {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-[#050B14] overflow-hidden pt-32 pb-16 border-b border-border/10">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent mix-blend-screen" />
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link href="/industries" className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          BACK TO INDUSTRIES
        </Link>
        
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase">
              {industry.name.toUpperCase()}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-white">
            Transforming {industry.name} Through Enterprise Technology
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mb-12">
            {industry.shortDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-12">
            <div className="flex items-center gap-4 border-r border-border/40 pr-6">
              <span className="text-3xl font-bold text-white">{industry.relatedServices.length}</span>
              <span className="text-sm text-muted-foreground leading-tight">Associated<br/>Services</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-white">{industry.relatedCaseStudies.length}</span>
              <span className="text-sm text-muted-foreground leading-tight">Sector<br/>Case Studies</span>
            </div>
          </div>

          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--primary),0.3)]">
            Discuss Your Industry Challenge
          </Link>
        </div>
      </div>
    </section>
  );
};
