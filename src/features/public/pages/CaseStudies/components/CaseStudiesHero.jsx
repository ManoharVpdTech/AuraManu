import React from "react";
import { Link } from "wouter";
import { ArrowDown, Database, Shield, Cpu, Code2, Server } from "lucide-react";

export const CaseStudiesHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-[#050B14] overflow-hidden pt-32 pb-16 border-b border-border/10">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent mix-blend-screen" />
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-primary font-mono text-sm tracking-[0.2em]">
                CASE STUDIES
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-white">
              Engineering Solutions for Complex Enterprise Challenges
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              Showcase Aurexion's technical and engineering approach through structured case studies covering business challenges, architecture, technology, development, security, and measurable outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#case-studies-grid" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                Explore Case Studies
              </a>
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md border border-border/40 bg-transparent px-8 text-sm font-bold text-white transition-colors hover:bg-white hover:text-black">
                Talk to Our Experts
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl" />
              <div className="relative border border-border/30 bg-card/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl flex flex-col items-center">
                
                {[
                  { label: "BUSINESS CHALLENGE", icon: <Code2 className="w-4 h-4" /> },
                  { label: "ARCHITECTURE", icon: <Server className="w-4 h-4" /> },
                  { label: "ENGINEERING", icon: <Cpu className="w-4 h-4" /> },
                  { label: "INTEGRATION", icon: <Database className="w-4 h-4" /> },
                  { label: "SECURITY", icon: <Shield className="w-4 h-4" /> },
                  { label: "DEPLOYMENT", icon: <Server className="w-4 h-4" /> },
                  { label: "BUSINESS OUTCOME", icon: <Code2 className="w-4 h-4" /> }
                ].map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="w-full flex items-center justify-between px-6 py-3 border border-border/40 rounded-lg bg-card shadow-sm hover:border-primary/50 transition-colors">
                      <span className="text-xs font-mono tracking-widest text-gray-300 font-bold">{step.label}</span>
                      <span className="text-primary">{step.icon}</span>
                    </div>
                    {idx < 6 && (
                      <div className="h-6 flex items-center justify-center">
                        <div className="w-[1px] h-full bg-gradient-to-b from-primary/50 to-transparent" />
                        <ArrowDown className="w-3 h-3 text-primary/50 absolute" />
                      </div>
                    )}
                  </React.Fragment>
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
