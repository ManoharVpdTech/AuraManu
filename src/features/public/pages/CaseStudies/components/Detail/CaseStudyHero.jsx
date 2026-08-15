import React from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export const CaseStudyHero = ({ caseStudy }) => {
  return (
    <section className="relative min-h-[50vh] flex items-center bg-[#050B14] overflow-hidden pt-32 pb-16 border-b border-border/10">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link href="/case-studies" className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          BACK TO CASE STUDIES
        </Link>
        
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase">
              TECHNICAL CASE STUDY
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-white">
            {caseStudy.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl">
            {caseStudy.challenge.split('.')[0]}.
          </p>
        </div>
      </div>
    </section>
  );
};
