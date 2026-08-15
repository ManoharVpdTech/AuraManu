import React from "react";
import { aboutData } from "../../../../../data/about";

export const GovernanceSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#050B14] border-y border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">{aboutData.governance.title}</h2>
          <p className="text-gray-400">
            Aurexion is committed to accountable, secure, and transparent operations adhering strictly to enterprise-grade standards.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          <div className="p-6 border border-primary bg-primary/10 rounded-sm font-mono text-primary font-bold">
            GOVERNANCE
          </div>
          
          <div className="hidden md:block w-16 h-[1px] bg-primary/50" />
          <div className="md:hidden h-16 w-[1px] bg-primary/50" />
          
          <div className="flex flex-col gap-4">
            {aboutData.governance.nodes.map((node: string, index: number) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-border/40" />
                <div className="p-4 border border-border/20 bg-card/10 rounded-sm text-sm text-gray-300 w-48 hover:border-primary/40 transition-colors">
                  {node}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
