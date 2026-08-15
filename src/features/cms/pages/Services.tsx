import React from "react";
import Card from "../../../components/ui/card";

export const Services: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">CMS CONTENT SYSTEM</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Services Catalog</h1>
      </div>
      <Card>
        <p style={{ color: "#94a3b8" }}>Public service nodes are cataloged here. Use this interface to edit core capabilities descriptions.</p>
      </Card>
    </div>
  );
};

export default Services;
