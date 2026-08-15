import React from "react";
import Card from "../../../../components/ui/card";

export const Dashboard: React.FC = () => {
  const stats = [
    { title: "Active Operators", value: "32", detail: "0 pending approvals", change: "+12%" },
    { title: "Active Sessions", value: "142", detail: "4 scopes active", change: "+5%" },
    { title: "Audit Records", value: "1,240", detail: "Integrity verified", change: "Secure" },
    { title: "RFP Processing", value: "8", detail: "Avg response 2.1h", change: "-14%" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">ADMINISTRATIVE SCOPE</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Control Dashboard</h1>
      </div>

      <div style={{ display: "grid", gap: "1.5rem" }} className="grid-responsive">
        {stats.map((stat) => (
          <Card key={stat.title} glowOnHover>
            <span style={{ fontSize: "0.75rem", fontFamily: "IBM Plex Mono, monospace", color: "#64748b" }}>
              {stat.title.toUpperCase()}
            </span>
            <div style={{
              fontSize: "2.25rem",
              fontWeight: 600,
              fontFamily: "Space Grotesk, sans-serif",
              color: "#63f5e8",
              margin: "0.5rem 0",
            }}>{stat.value}</div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.75rem",
              color: "#cbd5e1",
            }}>
              <span>{stat.detail}</span>
              <span style={{ color: stat.change.startsWith("+") ? "#10b981" : "#63f5e8" }}>{stat.change}</span>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem" }} className="grid-responsive">
        <Card>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Active System Processes</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              ["API GATEWAY", "ONLINE", "http://localhost:5000/api", "0ms delay"],
              ["ESTIMATOR ENGINE", "ONLINE", "v1.2.0-core", "12ms calculation avg"],
              ["AUDIT RECORDER", "STANDBY", "integrity: verified", "buffered logs: 0"],
            ].map(([processName, status, details, speed]) => (
              <div
                key={processName}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0.75rem",
                  border: "1px solid #1e293b",
                  borderRadius: "4px",
                  fontSize: "0.85rem",
                }}
              >
                <div>
                  <span style={{ fontWeight: 600, color: "#cbd5e1" }}>{processName}</span>
                  <span style={{
                    marginLeft: "0.5rem",
                    fontSize: "0.7rem",
                    fontFamily: "IBM Plex Mono, monospace",
                    color: "#64748b",
                  }}>{details}</span>
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <span style={{ fontSize: "0.75rem", fontFamily: "IBM Plex Mono, monospace", color: "#64748b" }}>{speed}</span>
                  <span style={{
                    color: "#63f5e8",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    fontFamily: "IBM Plex Mono, monospace",
                    backgroundColor: "rgba(99, 245, 232, 0.05)",
                    border: "1px solid rgba(99, 245, 232, 0.15)",
                    padding: "0.1rem 0.4rem",
                    borderRadius: "2px",
                  }}>{status}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Platform Operators</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["Admin Operator", "admin@aurexion.io", "ADMIN"],
              ["Business BDM", "bdm@aurexion.io", "BDM"],
              ["Partner Client", "client@aurexion.io", "CLIENT"],
            ].map(([name, email, role]) => (
              <div key={email} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#cbd5e1" }}>{name}</div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b" }}>{email}</div>
                </div>
                <span style={{
                  fontSize: "0.7rem",
                  fontFamily: "IBM Plex Mono, monospace",
                  color: "#63f5e8",
                  backgroundColor: "rgba(99, 245, 232, 0.05)",
                  border: "1px solid rgba(99, 245, 232, 0.15)",
                  padding: "0.15rem 0.4rem",
                  borderRadius: "4px",
                }}>{role}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

