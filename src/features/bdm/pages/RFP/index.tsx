import React from "react";
import Card from "../../../../components/ui/card";

export const RFP: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">RFP PIPELINE</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Requests For Proposal (RFP)</h1>
      </div>
      <Card>
        <p style={{ color: "#94a3b8" }}>Govermental and private RFP bids manager. Integrated proposal builders are active.</p>
      </Card>
    </div>
  );
};

export default RFP;

