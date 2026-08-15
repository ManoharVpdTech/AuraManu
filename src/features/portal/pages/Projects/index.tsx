import React from "react";
import Card from "../../../../components/ui/card";

export const Projects: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">WORK SCOPE</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Project Deliverables</h1>
      </div>
      <Card>
        <h3 style={{ color: "#63f5e8" }}>Project Overview</h3>
        <p style={{ color: "#94a3b8" }}>Enterprise Database Overhaul project is 80% complete.</p>
      </Card>
    </div>
  );
};

export default Projects;

