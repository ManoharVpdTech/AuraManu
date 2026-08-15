import React from "react";
import { Activity } from "lucide-react";

export const PerformanceSection = ({ caseStudy }) => {
  if (!caseStudy.performance || caseStudy.performance.length === 0) return null;

  return (
    <section className="py-24 bg-card/20 border-b border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl font-bold text-primary font-mono opacity-50">09</span>
            <h2 className="text-3xl font-bold">Performance & Scalability</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl">
          {caseStudy.performance.map((perf, idx) => (
            <div key={idx} className="p-6 bg-background border border-border/40 rounded-lg border-l-4 border-l-primary">
              <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase mb-2 block">{perf.metric}</span>
              <span className="text-2xl font-bold text-foreground">{perf.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
