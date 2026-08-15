import React from "react";
import { Link } from "wouter";
import { ArrowRight, Server, Database, Shield, Blocks } from "lucide-react";

export const FeaturedCaseStudy = ({ caseStudy }) => {
  if (!caseStudy) return null;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xs font-mono tracking-widest text-primary mb-8 uppercase font-bold">Featured Case Study</h2>
        
        <div className="bg-card border border-border/40 rounded-2xl overflow-hidden flex flex-col lg:flex-row group hover:border-primary/50 transition-colors shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="lg:w-1/2 p-8 md:p-12 relative z-10 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs font-mono font-bold bg-primary/10 text-primary px-3 py-1 rounded">
                  {caseStudy.clientType}
                </span>
                <span className="text-xs font-mono font-bold bg-secondary text-secondary-foreground border border-border/40 px-3 py-1 rounded">
                  {caseStudy.industry}
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{caseStudy.title}</h3>
              
              <div className="space-y-6 mb-12">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Challenge</h4>
                  <p className="text-gray-300 leading-relaxed line-clamp-3">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Outcome</h4>
                  <p className="text-primary font-bold">{caseStudy.results?.[0]?.impact} {caseStudy.results?.[0]?.label}</p>
                </div>
              </div>
            </div>
            
            <Link 
              href={`/case-studies/${caseStudy.slug}`}
              className="inline-flex items-center text-primary font-bold hover:text-white transition-colors"
            >
              Read Technical Case Study
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="lg:w-1/2 bg-[#050B14] p-8 md:p-12 relative flex items-center justify-center border-l border-border/20">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
            
            {/* Abstract Architecture Diagram */}
            <div className="relative z-10 w-full max-w-md">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-border/40 bg-card rounded-lg flex items-center gap-3">
                  <Server className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-gray-300">API GATEWAY</span>
                </div>
                <div className="p-4 border border-border/40 bg-card rounded-lg flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-xs font-mono font-bold text-gray-300">IAM / RBAC</span>
                </div>
                <div className="col-span-2 p-6 border border-primary/40 bg-primary/10 rounded-lg flex flex-col items-center justify-center gap-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse" />
                  <Blocks className="w-8 h-8 text-primary relative z-10" />
                  <span className="text-sm font-mono font-bold text-white relative z-10">MICROSERVICES MESH</span>
                </div>
                <div className="col-span-2 p-4 border border-border/40 bg-card rounded-lg flex items-center justify-center gap-3">
                  <Database className="w-5 h-5 text-orange-400" />
                  <span className="text-xs font-mono font-bold text-gray-300">DATA LAYER</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
