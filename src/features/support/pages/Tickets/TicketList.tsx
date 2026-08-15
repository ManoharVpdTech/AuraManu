import React from "react";
import Card from "../../../../components/ui/card";

export const TicketList: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">TICKET LEDGER</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Inquiries Queue</h1>
      </div>
      <Card>
        <p style={{ color: "#94a3b8" }}>Operational ticket list. Direct response systems online.</p>
      </Card>
    </div>
  );
};

export default TicketList;

