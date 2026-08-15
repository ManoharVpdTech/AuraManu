import React from "react";
import { aboutData } from "../../../../../data/about";

export const WhyAurexion: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0f18] border-t border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">{aboutData.differentiators.title}</h2>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {aboutData.differentiators.items.map((item: any, index: number) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group flex flex-col sm:flex-row items-start sm:items-center p-6 sm:p-8 bg-card/5 border border-border/20 rounded-lg hover:border-primary/40 hover:bg-card/10 transition-all duration-300">
                <div className="flex items-center sm:w-1/3 mb-4 sm:mb-0">
                  <span className="text-3xl font-mono text-primary/30 font-bold mr-6 group-hover:text-primary transition-colors">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mr-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
                </div>
                
                <div className="sm:w-2/3 sm:pl-12 sm:border-l border-border/20">
                  <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
