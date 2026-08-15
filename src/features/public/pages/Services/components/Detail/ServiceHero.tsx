import React from "react";
import { Link } from "wouter";
import { ServiceItem } from "../../../../../../data/services";
import { ArrowLeft } from "lucide-react";

interface ServiceHeroProps {
  service: ServiceItem;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ service }) => {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-[#050B14] overflow-hidden pt-32 pb-16 border-b border-border/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link href="/services" className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          BACK TO SERVICES
        </Link>
        
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase">
              {service.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-8 text-white">
            {service.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mb-12">
            {service.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Discuss Your Requirement
            </Link>
            <Link href="/rfp" className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-card/20 backdrop-blur-sm px-8 text-sm font-medium text-white transition-all hover:bg-white hover:text-black">
              Request a Proposal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
