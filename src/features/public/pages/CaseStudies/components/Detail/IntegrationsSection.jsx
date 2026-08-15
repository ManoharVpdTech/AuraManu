import React from "react";
import { Link2 } from "lucide-react";

export const IntegrationsSection = ({ caseStudy }) => {
  if (!caseStudy.thirdPartyIntegrations) return null;

  return (
    <section className="py-24 bg-card/30 border-b border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl font-bold text-primary font-mono opacity-50">06</span>
            <h2 className="text-3xl font-bold">Third-Party Integrations</h2>
          </div>
        </div>

        {caseStudy.thirdPartyIntegrations.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {caseStudy.thirdPartyIntegrations.map((integration, idx) => (
              <div key={idx} className="p-6 bg-background border border-border/40 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-lg">{integration.name}</h4>
                  <Link2 className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{integration.purpose}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 bg-background border border-border/40 rounded-lg text-center max-w-2xl">
            <p className="text-muted-foreground">Integration details available through specific project configuration.</p>
          </div>
        )}
      </div>
    </section>
  );
};
