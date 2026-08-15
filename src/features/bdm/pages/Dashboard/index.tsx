import React from "react";
import Card from "../../../../components/ui/card";

export const Dashboard: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">BUSINESS DEVELOPMENT</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>BDM Dashboard</h1>
      </div>
      <div style={{ display: "grid", gap: "1.5rem" }} className="grid-responsive">
        <Card glowOnHover>
          <h3>Active Opportunities</h3>
          <p style={{ fontSize: "2rem", fontWeight: 600, color: "#63f5e8", margin: "0.5rem 0" }}>$960,000</p>
          <span style={{ color: "#64748b", fontSize: "0.8rem" }}>2 opportunities registered</span>
        </Card>
        <Card glowOnHover>
          <h3>RFP Submissions</h3>
          <p style={{ fontSize: "2rem", fontWeight: 600, color: "#63f5e8", margin: "0.5rem 0" }}>1 Active Proposal</p>
          <span style={{ color: "#64748b", fontSize: "0.8rem" }}>Due in 18 days</span>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

