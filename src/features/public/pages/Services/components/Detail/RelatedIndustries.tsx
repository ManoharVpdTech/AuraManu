import React from "react";
import { ServiceItem } from "../../../../../../data/services";
import { Link } from "wouter";
import { ArrowUpRight, Building2 } from "lucide-react";

interface RelatedIndustriesProps {
  service: ServiceItem;
}

export const RelatedIndustries: React.FC<RelatedIndustriesProps> = ({ service }) => {
  if (!service.relatedIndustries || service.relatedIndustries.length === 0) return null;

  return (
    <section className="py-24 bg-[#050B14] border-t border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Industries We Serve</h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {service.relatedIndustries.map((industry: string, index: number) => (
            <Link 
              key={index}
              href="/industries" 
              className="group flex items-center justify-between p-6 bg-card/5 border border-border/20 rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-bold text-gray-300 group-hover:text-white transition-colors">{industry}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
