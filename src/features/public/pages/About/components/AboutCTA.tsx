import React from "react";
import { Link } from "wouter";

export const AboutCTA: React.FC = () => {
  return (
    <section className="py-32 bg-background border-t border-border/20 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's Build What Comes Next</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Partner with Aurexion to engineer scalable, secure, and intelligent solutions for your enterprise challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Talk to Our Experts
            </Link>
            <Link 
              href="/services" 
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-transparent px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Explore Our Capabilities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
