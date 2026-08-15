import React from "react";
import Card from "../../../components/ui/card";

export const Dashboard: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">RECRUITMENT ENGINE</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>HR Recruiter Desk</h1>
      </div>
      <div style={{ display: "grid", gap: "1.5rem" }} className="grid-responsive">
        <Card glowOnHover>
          <h3>Active Vacancies</h3>
          <p style={{ fontSize: "2rem", fontWeight: 600, color: "#63f5e8", margin: "0.5rem 0" }}>4 positions</p>
          <span style={{ color: "#64748b", fontSize: "0.8rem" }}>AI researcher, DevOps engineer, API dev...</span>
        </Card>
        <Card glowOnHover>
          <h3>New Applications</h3>
          <p style={{ fontSize: "2rem", fontWeight: 600, color: "#63f5e8", margin: "0.5rem 0" }}>18 candidates</p>
          <span style={{ color: "#64748b", fontSize: "0.8rem" }}>+5 since yesterday</span>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
