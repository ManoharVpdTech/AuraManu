import React from "react";
import Card from "../../../../components/ui/card";

export const Activities: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">AUDIT SECURITY</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Pipeline Activities</h1>
      </div>
      <Card>
        <p style={{ color: "#94a3b8" }}>Recent communication trails, status migrations, and actions ledger.</p>
      </Card>
    </div>
  );
};

export default Activities;

