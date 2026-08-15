import React from "react";
import Card from "../../../components/ui/card";

export const SupportDashboard: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">SUPPORT CORE</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Support Dashboard</h1>
      </div>
      <Card>
        <p style={{ color: "#94a3b8" }}>Operational ticket boards and system logs access terminal.</p>
      </Card>
    </div>
  );
};

export default SupportDashboard;

