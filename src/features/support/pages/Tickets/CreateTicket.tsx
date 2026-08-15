import React from "react";
import Card from "../../../../components/ui/card";

export const CreateTicket: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">OPERATOR TRANSMISSION</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Create Support Ticket</h1>
      </div>
      <Card>
        <p style={{ color: "#94a3b8" }}>Transmit a diagnostics payload or operational request to the systems administrator.</p>
      </Card>
    </div>
  );
};

export default CreateTicket;

