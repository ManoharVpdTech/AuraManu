import React from "react";
import { ArrowDown } from "lucide-react";

export const VisionSection: React.FC = () => {
  const flowSteps = [
    "CLIENT",
    "ENGAGEMENT",
    "SOLUTION",
    "DELIVERY",
    "OPERATIONS",
    "DIGITAL TRANSFORMATION"
  ];

  return (
    <section className="py-32 bg-background border-y border-border/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-24">Our Vision</h2>
        
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {flowSteps.map((step, index) => (
            <React.Fragment key={step}>
              <div 
                className={`w-full max-w-sm p-4 border rounded-sm font-mono text-sm tracking-widest backdrop-blur-sm transition-all duration-500
                  ${index === flowSteps.length - 1 
                    ? 'border-primary bg-primary/10 text-primary scale-110 shadow-[0_0_30px_rgba(var(--primary),0.2)]' 
                    : 'border-border/40 bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-foreground'
                  }`}
              >
                {step}
              </div>
              
              {index < flowSteps.length - 1 && (
                <div className="py-4 text-primary/40 animate-pulse">
                  <ArrowDown className="w-5 h-5" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
