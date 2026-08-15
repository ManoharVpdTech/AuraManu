import React from "react";
import { aboutData } from "../../../../../data/about";

export const FoundationSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0f18]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{aboutData.foundation.title}</h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-[50%] w-[1px] bg-border/30 transform md:-translate-x-1/2" />
          
          <div className="space-y-16">
            {aboutData.foundation.milestones.map((milestone: any, index: number) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 mt-2 shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                
                {/* Content */}
                <div className={`md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="p-6 bg-card/10 border border-border/20 rounded-lg backdrop-blur-sm hover:border-primary/40 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
