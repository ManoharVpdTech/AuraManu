import React from "react";
import Card from "../../../../components/ui/card";

export const Requests: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">TICKET WORKFLOW</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Requests Queue</h1>
      </div>
      <Card>
        <p style={{ color: "#94a3b8" }}>Submit work order requests or resource provisions directly to the engineering team.</p>
      </Card>
    </div>
  );
};

export default Requests;

