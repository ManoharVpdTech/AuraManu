import React from "react";

export const GlobalPresence: React.FC = () => {
  return (
    <section className="py-32 bg-background border-y border-border/20 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for a Global Enterprise Landscape</h2>
          <p className="text-xl text-muted-foreground">
            Architecting solutions that scale across borders, connecting systems securely worldwide.
          </p>
        </div>
        
        {/* World Map Concept */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] border border-border/20 rounded-xl bg-card/30 overflow-hidden backdrop-blur-sm">
          {/* Decorative Grid */}
          <div className="absolute inset-0 opacity-10" 
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} 
          />
          
          {/* Conceptual World Nodes */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500">
            {/* Connection Lines */}
            <path d="M 200 200 Q 500 50 800 250" fill="none" stroke="rgba(var(--primary), 0.3)" strokeWidth="1.5" className="animate-pulse" />
            <path d="M 200 200 Q 400 300 700 350" fill="none" stroke="rgba(var(--primary), 0.2)" strokeWidth="1" />
            <path d="M 500 150 Q 750 200 850 400" fill="none" stroke="rgba(0,255,255, 0.2)" strokeWidth="1" />
            <path d="M 300 350 Q 550 400 700 350" fill="none" stroke="rgba(var(--primary), 0.3)" strokeWidth="1" />
            
            {/* Nodes */}
            <circle cx="200" cy="200" r="4" className="fill-primary animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="200" cy="200" r="2" className="fill-white" />
            
            <circle cx="500" cy="150" r="4" className="fill-cyan-400 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
            <circle cx="500" cy="150" r="2" className="fill-white" />
            
            <circle cx="800" cy="250" r="3" className="fill-primary animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
            <circle cx="800" cy="250" r="1.5" className="fill-white" />
            
            <circle cx="700" cy="350" r="3" className="fill-cyan-400 animate-ping" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />
            <circle cx="700" cy="350" r="1.5" className="fill-white" />
            
            <circle cx="300" cy="350" r="3" className="fill-primary animate-ping" style={{ animationDuration: '4.5s', animationDelay: '2s' }} />
            <circle cx="300" cy="350" r="1.5" className="fill-white" />
          </svg>
          
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
  );
};
