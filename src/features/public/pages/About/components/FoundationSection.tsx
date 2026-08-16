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
          {/* High-Visibility Radiant Connecting Timeline Line */}
          <div className="absolute top-2 bottom-2 left-4 md:left-[50%] w-[2px] bg-gradient-to-b from-[#63f5e8]/20 via-[#63f5e8] to-[#63f5e8]/20 transform md:-translate-x-1/2 shadow-[0_0_10px_rgba(99,245,232,0.6)]" />
          
          <div className="space-y-16">
            {aboutData.foundation.milestones.map((milestone: any, index: number) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Luminous Glowing Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#050B14] border-2 border-[#63f5e8] rounded-full transform -translate-x-1/2 mt-2 shadow-[0_0_14px_rgba(99,245,232,0.9)] z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#63f5e8] rounded-full" />
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="p-6 bg-card/10 border border-[rgba(99,245,232,0.18)] rounded-lg backdrop-blur-sm hover:border-[#63f5e8] hover:bg-[#0c1626] transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      <span className="font-mono text-xs font-bold text-[#63f5e8] bg-[rgba(99,245,232,0.12)] border border-[rgba(99,245,232,0.3)] px-2.5 py-0.5 rounded shadow-[0_0_8px_rgba(99,245,232,0.4)]">
                        PHASE 0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">{milestone.description}</p>
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
