import React from "react";
import { Link } from "wouter";
import { Building2, ArrowUpRight } from "lucide-react";
import { industriesData } from "../../../../../../data/industries";

export const RelatedIndustry = ({ caseStudy }) => {
  const ind = industriesData?.find(i => i.slug === caseStudy.industry) || { name: caseStudy.industry, slug: caseStudy.industry };

  return (
    <section className="py-24 bg-card/20 border-b border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Explore Industry</h2>
          
          <Link 
            href={`/industries/${ind.slug}`} 
            className="group inline-flex items-center gap-4 p-6 bg-background border border-border/40 rounded-xl hover:border-primary/50 transition-all shadow-lg hover:shadow-[0_10px_30px_-15px_rgba(var(--primary),0.3)]"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest mb-1">INDUSTRY</span>
              <span className="block text-xl font-bold group-hover:text-primary transition-colors">{ind.name}</span>
            </div>
            <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary ml-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
