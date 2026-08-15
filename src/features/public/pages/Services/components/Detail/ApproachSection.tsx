import React from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  "DISCOVER",
  "ARCHITECT",
  "ENGINEER",
  "INTEGRATE",
  "TEST",
  "DEPLOY",
  "OPTIMIZE"
];

export const ApproachSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0f18] border-y border-border/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Approach</h2>
          <p className="text-gray-400 mt-4">A proven, rigorous engineering methodology.</p>
        </div>

        {/* Desktop Horizontal Process */}
        <div className="hidden lg:flex items-center justify-between max-w-6xl mx-auto relative">
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-border/30 -translate-y-1/2" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-card border border-border/40 flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-primary/10 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <span className="font-mono text-xs text-primary/70 font-bold group-hover:text-primary">{index + 1}</span>
              </div>
              <span className="font-mono text-xs tracking-widest text-gray-400 group-hover:text-white transition-colors">{step}</span>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Process */}
        <div className="lg:hidden flex flex-col space-y-8 max-w-sm mx-auto relative">
          <div className="absolute top-0 bottom-0 left-8 w-[1px] bg-border/30" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full bg-card border border-border/40 flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                <span className="font-mono text-xs text-primary/70 font-bold group-hover:text-primary">{index + 1}</span>
              </div>
              <span className="font-mono text-sm tracking-widest text-gray-300 group-hover:text-white transition-colors">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
