import React from "react";
import { ShieldCheck } from "lucide-react";

export const SecurityControls = ({ caseStudy }) => {
  if (!caseStudy.securityControls || caseStudy.securityControls.length === 0) return null;

  return (
    <section className="py-24 bg-[#0a0f18] border-b border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl font-bold text-primary font-mono opacity-50">07</span>
            <h2 className="text-3xl font-bold text-white">Security Controls</h2>
          </div>
          <p className="text-gray-400">Engineered with defense-in-depth methodologies to protect critical enterprise infrastructure.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {caseStudy.securityControls.map((control, idx) => (
            <div key={idx} className="p-6 bg-card/10 border border-border/20 rounded-lg flex items-center gap-4">
              <ShieldCheck className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="font-bold text-gray-200">{control}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
