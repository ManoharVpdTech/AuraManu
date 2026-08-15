import React from "react";
import Card from "../../../../components/ui/card";

export const Companies: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">COMPANY DIRECTORY</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Partner Companies</h1>
      </div>
      <Card>
        <p style={{ color: "#94a3b8" }}>Registered business units and billing accounts list.</p>
      </Card>
    </div>
  );
};

export default Companies;

