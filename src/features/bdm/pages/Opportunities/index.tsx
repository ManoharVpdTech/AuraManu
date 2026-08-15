import React from "react";
import Card from "../../../../components/ui/card";

export const Opportunities: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">OPPORTUNITY ENGINE</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Opportunities</h1>
      </div>
      <Card>
        <p style={{ color: "#94a3b8" }}>Enterprise proposals, architectural solutions and active business negotiations scope.</p>
      </Card>
    </div>
  );
};

export default Opportunities;

