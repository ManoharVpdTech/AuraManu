import React from "react";

export const ChallengeSection = ({ caseStudy }) => {
  return (
    <section className="py-24 bg-background border-b border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl font-bold text-primary font-mono opacity-50">01</span>
            <h2 className="text-3xl font-bold">The Challenge</h2>
          </div>
          
          <div className="prose prose-invert max-w-none prose-lg">
            <p className="text-muted-foreground leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
