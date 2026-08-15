import React from "react";
import { aboutData } from "../../../../../data/about";

export const SecurityTrust: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">{aboutData.security.title}</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {aboutData.security.items.map((item: any, index: number) => {
            const Icon = item.icon;
            return (
              <div key={index} className="p-6 border border-border/40 rounded-lg bg-card hover:border-primary/50 transition-colors">
                <Icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
