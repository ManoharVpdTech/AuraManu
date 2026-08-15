import React from "react";
import Card from "../../../components/ui/card";

export const CaseStudies: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">CMS CONTENT SYSTEM</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Case Studies</h1>
      </div>
      <Card>
        <p style={{ color: "#94a3b8" }}>Enterprise portfolios and system success cases are configured here.</p>
      </Card>
    </div>
  );
};

export default CaseStudies;
