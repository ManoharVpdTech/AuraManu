import React from "react";
import Card from "../../../../components/ui/card";

export const Reports: React.FC = () => {
  const reports = [
    { title: "Quarterly Estimator Report", type: "VALUATION", size: "124 KB", updated: "Aug 14" },
    { title: "BDM Lead Conversion Statistics", type: "PERFORMANCE", size: "450 KB", updated: "Aug 10" },
    { title: "Monthly Platform Compliance Integrity", type: "COMPLIANCE", size: "1.2 MB", updated: "Aug 01" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">ANALYTICS ENGINE</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>System Reports</h1>
      </div>

      <div style={{ display: "grid", gap: "1.5rem" }} className="grid-responsive">
        {reports.map((rep) => (
          <Card key={rep.title} glowOnHover>
            <span style={{ fontSize: "0.75rem", fontFamily: "IBM Plex Mono, monospace", color: "#64748b" }}>
              {rep.type}
            </span>
            <h3 style={{ margin: "0.5rem 0", fontSize: "1.1rem" }}>{rep.title}</h3>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#94a3b8", marginTop: "1rem" }}>
              <span>Size: {rep.size}</span>
              <span>Updated: {rep.updated}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reports;

