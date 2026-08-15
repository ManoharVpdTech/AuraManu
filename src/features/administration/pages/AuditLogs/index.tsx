import React from "react";
import Card from "../../../../components/ui/card";

export const AuditLogs: React.FC = () => {
  const auditRecords = [
    { timestamp: "2026-08-14 11:12:00", operator: "admin@aurexion.io", action: "ESTABLISH_SESSION", scope: "ADMIN_SCOPE", integrity: "SECURE" },
    { timestamp: "2026-08-14 10:45:12", operator: "bdm@aurexion.io", action: "CALCULATE_ESTIMATE", scope: "BDM_SCOPE", integrity: "SECURE" },
    { timestamp: "2026-08-14 09:15:30", operator: "client@aurexion.io", action: "ACCESS_DOCUMENT_VAULT", scope: "CLIENT_SCOPE", integrity: "SECURE" },
    { timestamp: "2026-08-13 18:30:22", operator: "SYSTEM", action: "ROTATE_API_KEYS", scope: "CORE_SYSTEM", integrity: "SECURE" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">AUDIT SECURITY</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>System Ledger</h1>
      </div>

      <Card>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #1e293b", color: "#64748b" }}>
                <th style={{ padding: "1rem", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem" }}>TIMESTAMP</th>
                <th style={{ padding: "1rem", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem" }}>OPERATOR</th>
                <th style={{ padding: "1rem", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem" }}>ACTION</th>
                <th style={{ padding: "1rem", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem" }}>SCOPE</th>
                <th style={{ padding: "1rem", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem" }}>INTEGRITY</th>
              </tr>
            </thead>
            <tbody>
              {auditRecords.map((log, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #1e293b" }}>
                  <td style={{ padding: "1rem", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.85rem", color: "#cbd5e1" }}>{log.timestamp}</td>
                  <td style={{ padding: "1rem", color: "#cbd5e1", fontWeight: 600 }}>{log.operator}</td>
                  <td style={{ padding: "1rem", fontFamily: "IBM Plex Mono, monospace", color: "#63f5e8", fontSize: "0.85rem" }}>{log.action}</td>
                  <td style={{ padding: "1rem", color: "#94a3b8" }}>{log.scope}</td>
                  <td style={{ padding: "1rem" }}>
                    <span style={{
                      fontSize: "0.75rem",
                      fontFamily: "IBM Plex Mono, monospace",
                      color: "#10b981",
                      backgroundColor: "rgba(16, 185, 129, 0.05)",
                      border: "1px solid rgba(16, 185, 129, 0.15)",
                      padding: "0.15rem 0.4rem",
                      borderRadius: "4px",
                    }}>{log.integrity}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AuditLogs;

