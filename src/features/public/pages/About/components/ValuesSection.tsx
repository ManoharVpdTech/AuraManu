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
              <div className="absolute -top-6 -right-6 text-8xl md:text-9xl font-bold font-mono text-[#63f5e8] opacity-30 group-hover:opacity-75 transition-opacity duration-500 select-none drop-shadow-[0_0_15px_rgba(99,245,232,0.4)]">
                {value.id}
              </div>
              <div className="relative z-10 flex flex-col h-full justify-end pt-24">
                <span className="text-[#63f5e8] font-mono font-bold text-sm mb-4 block drop-shadow-[0_0_6px_rgba(99,245,232,0.5)]">VALUE {value.id}</span>
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
