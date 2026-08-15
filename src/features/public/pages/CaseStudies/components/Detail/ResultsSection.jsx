import React from "react";

export const ResultsSection = ({ caseStudy }) => {
  if (!caseStudy.results || caseStudy.results.length === 0) return null;

  return (
    <section className="py-32 bg-[#050B14] border-b border-border/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase">
              MEASURABLE RESULTS
            </span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Business Impact</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {caseStudy.results.map((result, idx) => (
            <div key={idx} className="p-8 bg-card/10 border border-primary/20 rounded-2xl text-center backdrop-blur-sm relative group overflow-hidden hover:border-primary/50 transition-colors shadow-lg">
              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <div className="relative z-10">
                <span className="block text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">{result.impact}</span>
                <span className="block text-sm font-mono tracking-widest text-primary uppercase">{result.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
