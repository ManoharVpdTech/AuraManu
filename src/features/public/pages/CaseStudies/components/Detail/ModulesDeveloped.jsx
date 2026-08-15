import React from "react";
import { Blocks } from "lucide-react";

export const ModulesDeveloped = ({ caseStudy }) => {
  if (!caseStudy.modules || caseStudy.modules.length === 0) return null;

  return (
    <section className="py-24 bg-background border-b border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl font-bold text-primary font-mono opacity-50">05</span>
            <h2 className="text-3xl font-bold">Modules Developed</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudy.modules.map((module, idx) => (
            <div key={idx} className="p-6 bg-card border border-border/40 rounded-xl flex items-start gap-4 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Blocks className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-muted-foreground block mb-1">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h4 className="font-bold text-foreground leading-tight">{module}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
