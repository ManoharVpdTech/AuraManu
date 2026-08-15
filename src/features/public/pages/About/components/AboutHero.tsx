import React from "react";
import { aboutData } from "../../../../../data/about";

export const AboutHero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-[#050B14] overflow-hidden pt-24 pb-16">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-primary/10 to-transparent mix-blend-screen" />
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]" />
        
        {/* Animated Grid/Lines Visualization */}
        <div className="absolute inset-y-0 right-0 w-1/2 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Animated Nodes connecting */}
            <circle cx="20%" cy="30%" r="2" className="fill-primary animate-pulse" />
            <circle cx="60%" cy="50%" r="3" className="fill-cyan-400 animate-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="40%" cy="80%" r="2" className="fill-primary animate-pulse" style={{ animationDelay: '2s' }} />
            <line x1="20%" y1="30%" x2="60%" y2="50%" stroke="currentColor" strokeWidth="0.5" className="text-primary/50" />
            <line x1="60%" y1="50%" x2="40%" y2="80%" stroke="currentColor" strokeWidth="0.5" className="text-primary/50" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase">
              {aboutData.hero.eyebrow}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8 text-white animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            {aboutData.hero.heading.split(' ').map((word: string, i: number) => (
              word.toLowerCase() === 'digital' || word.toLowerCase() === 'future' ? 
                <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">{word} </span> : 
                <span key={i}>{word} </span>
            ))}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            {aboutData.hero.description}
          </p>
        </div>
      </div>
    </section>
  );
};
