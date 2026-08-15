import React from "react";
import { aboutData } from "../../../../../data/about";

export const ValuesSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#050B14] border-t border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center">
          {aboutData.values.title}
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutData.values.items.map((value: any, index: number) => (
            <div 
              key={index}
              className="group relative p-8 md:p-12 border border-border/20 bg-card/5 overflow-hidden hover:border-primary/40 transition-colors duration-500"
            >
              <div className="absolute -top-6 -right-6 text-8xl md:text-9xl font-bold font-mono text-white/5 group-hover:text-primary/10 transition-colors duration-500 select-none">
                {value.id}
              </div>
              <div className="relative z-10 flex flex-col h-full justify-end pt-24">
                <span className="text-primary font-mono text-sm mb-4 block">VALUE {value.id}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
