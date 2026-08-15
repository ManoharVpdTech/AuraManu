import React from "react";
import Card from "../../../components/ui/card";

export const CmsDashboard: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">CMS MANAGER ENGINE</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>CMS Control Console</h1>
      </div>
      <div style={{ display: "grid", gap: "1.5rem" }} className="grid-responsive">
        <Card glowOnHover>
          <h3>Active Services</h3>
          <p style={{ fontSize: "2rem", fontWeight: 600, color: "#63f5e8", margin: "0.5rem 0" }}>6 disciplines</p>
          <span style={{ color: "#64748b", fontSize: "0.8rem" }}>AI, Data, Cloud, Software, Security, Automation</span>
        </Card>
        <Card glowOnHover>
          <h3>Case Studies</h3>
          <p style={{ fontSize: "2rem", fontWeight: 600, color: "#63f5e8", margin: "0.5rem 0" }}>1 published</p>
          <span style={{ color: "#64748b", fontSize: "0.8rem" }}>Enterprise Intelligence Platform</span>
        </Card>
        <Card glowOnHover>
          <h3>Blog Articles</h3>
          <p style={{ fontSize: "2rem", fontWeight: 600, color: "#63f5e8", margin: "0.5rem 0" }}>3 articles</p>
          <span style={{ color: "#64748b", fontSize: "0.8rem" }}>Last update: Today</span>
        </Card>
      </div>
    </div>
  );
};

export default CmsDashboard;
