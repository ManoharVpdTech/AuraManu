import React from "react";
import { Link } from "wouter";

export const ServicesCTA: React.FC = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center border border-border/40 bg-card/30 backdrop-blur-sm p-12 md:p-20 rounded-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Engineer Your Next Digital Transformation</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Enterprise software, AI/ML, cloud modernization, digital platforms and technology consulting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--primary),0.3)]"
            >
              Talk to Our Experts
            </Link>
            <Link 
              href="/rfp" 
              className="inline-flex h-14 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-bold transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
