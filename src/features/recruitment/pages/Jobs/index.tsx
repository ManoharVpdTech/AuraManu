import React from "react";
import Card from "../../../../components/ui/card";

export const Jobs: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">TALENT ACQUISITION</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Job Openings</h1>
      </div>
      <Card>
        <p style={{ color: "#94a3b8" }}>List of open corporate and contract positions.</p>
      </Card>
    </div>
  );
};

export default Jobs;

