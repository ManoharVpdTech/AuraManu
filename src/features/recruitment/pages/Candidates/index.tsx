import React from "react";
import Card from "../../../../components/ui/card";

export const Candidates: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">TALENT DIRECTORY</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Candidates</h1>
      </div>
      <Card>
        <p style={{ color: "#94a3b8" }}>Candidate pipeline profiles and interview evaluations index.</p>
      </Card>
    </div>
  );
};

export default Candidates;

