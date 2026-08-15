import React from "react";
import Card from "../../../../components/ui/card";

export const Dashboard: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">CLIENT CENTER</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Partner Dashboard</h1>
      </div>
      <div style={{ display: "grid", gap: "1.5rem" }} className="grid-responsive">
        <Card glowOnHover>
          <h3>Active Projects</h3>
          <p style={{ fontSize: "2rem", fontWeight: 600, color: "#63f5e8", margin: "0.5rem 0" }}>1 Project</p>
          <span style={{ color: "#64748b", fontSize: "0.8rem" }}>Database migration phase</span>
        </Card>
        <Card glowOnHover>
          <h3>Pending Requests</h3>
          <p style={{ fontSize: "2rem", fontWeight: 600, color: "#63f5e8", margin: "0.5rem 0" }}>2 Requests</p>
          <span style={{ color: "#64748b", fontSize: "0.8rem" }}>Average execution rate 24h</span>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

