import React from "react";
import { ServiceItem } from "../../../../../../data/services";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface RelatedCaseStudiesProps {
  service: ServiceItem;
}

export const RelatedCaseStudies: React.FC<RelatedCaseStudiesProps> = ({ service }) => {
  if (!service.relatedCaseStudies || service.relatedCaseStudies.length === 0) return null;

  return (
    <section className="py-24 bg-background border-t border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold">Related Case Studies</h2>
          <Link href="/case-studies" className="hidden sm:flex items-center text-sm font-bold text-primary hover:underline">
            View All Work <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mock Case Study Cards based on ID logic for demonstration */}
          {service.relatedCaseStudies.slice(0, 2).map((csId: string, index: number) => (
            <Link 
              key={index}
              href="/case-studies" 
              className="group block border border-border/40 bg-card rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video bg-muted relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-primary/10 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded mb-2 inline-block">
                    {service.relatedIndustries[0] || "Enterprise"}
                  </span>
                  <h3 className="text-xl font-bold text-white max-w-sm">
                    Enterprise Digital Transformation Initiative
                  </h3>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex justify-between items-end">
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">OUTCOME</p>
                  <p className="text-lg text-foreground">300% Increase in Operational Efficiency</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <Link href="/case-studies" className="sm:hidden flex items-center justify-center w-full mt-8 h-12 border border-border rounded-md text-sm font-bold">
          View All Work
        </Link>
      </div>
    </section>
  );
};
