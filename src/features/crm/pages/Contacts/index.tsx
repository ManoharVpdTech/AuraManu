import React from "react";
import Card from "../../../../components/ui/card";

export const Contacts: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">CONTACT METRICS</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Client Contacts</h1>
      </div>
      <Card>
        <p style={{ color: "#94a3b8" }}>Enterprise contacts register scope. Secure vault integration is active.</p>
      </Card>
    </div>
  );
};

export default Contacts;

