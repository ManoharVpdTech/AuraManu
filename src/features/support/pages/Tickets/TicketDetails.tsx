import React from "react";
import Card from "../../../../components/ui/card";

export const TicketDetails: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">TICKET METADATA</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Ticket Details</h1>
      </div>
      <Card>
        <p style={{ color: "#94a3b8" }}>Detailed diagnostic information for the selected operational inquiry.</p>
      </Card>
    </div>
  );
};

export default TicketDetails;

