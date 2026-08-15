import React from "react";
import { aboutData } from "../../../../../data/about";
import { Linkedin } from "lucide-react";

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-widest mb-4">OUR TEAM</p>
          <h2 className="text-4xl font-bold">{aboutData.leadership.title}</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.leadership.items.map((leader: any, index: number) => (
            <div key={index} className="group border border-border/40 bg-card rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
              <div className="aspect-[4/3] bg-muted relative flex items-center justify-center border-b border-border/40">
                <div className="w-16 h-16 rounded-full border border-primary/20 bg-background flex items-center justify-center">
                  <span className="text-muted-foreground/50 text-xs font-mono">IMG</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{leader.name}</h3>
                    <p className="text-sm font-mono text-primary mt-1">{leader.designation}</p>
                  </div>
                  <a href={leader.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
