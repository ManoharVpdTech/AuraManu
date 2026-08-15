import React from "react";
import Card from "../../../../components/ui/card";

export const Leads: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">SALES LEAD FUNNEL</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Pipeline Leads</h1>
      </div>
      <Card>
        <p style={{ color: "#94a3b8" }}>Lead database initialized. Integrations to sync CRM pipeline is online.</p>
      </Card>
    </div>
  );
};

export default Leads;

