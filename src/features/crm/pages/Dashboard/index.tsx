import React from "react";
import Card from "../../../../components/ui/card";

export const Dashboard: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">CRM ENGINE</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>CRM Dashboard</h1>
      </div>
      <div style={{ display: "grid", gap: "1.5rem" }} className="grid-responsive">
        <Card glowOnHover>
          <h3>Total Pipeline Value</h3>
          <p style={{ fontSize: "2rem", fontWeight: 600, color: "#63f5e8", margin: "0.5rem 0" }}>$2,450,000</p>
          <span style={{ color: "#64748b", fontSize: "0.8rem" }}>12 active deals</span>
        </Card>
        <Card glowOnHover>
          <h3>Win Rate</h3>
          <p style={{ fontSize: "2rem", fontWeight: 600, color: "#63f5e8", margin: "0.5rem 0" }}>74.2%</p>
          <span style={{ color: "#64748b", fontSize: "0.8rem" }}>+2.1% this quarter</span>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

