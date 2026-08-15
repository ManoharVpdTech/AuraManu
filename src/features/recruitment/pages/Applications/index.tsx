import React from "react";
import Card from "../../../../components/ui/card";

export const Applications: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">APPLICATIONS TRAIL</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Job Applications</h1>
      </div>
      <Card>
        <p style={{ color: "#94a3b8" }}>Submitted job application status sheets.</p>
      </Card>
    </div>
  );
};

export default Applications;

