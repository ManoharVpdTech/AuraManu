import React from "react";
import Card from "../../../../components/ui/card";

export const Documents: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">VAULT INTERACTION</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Documents Repository</h1>
      </div>
      <Card>
        <p style={{ color: "#94a3b8" }}>Secure storage path for blueprints, invoices, contracts and specifications files.</p>
      </Card>
    </div>
  );
};

export default Documents;

