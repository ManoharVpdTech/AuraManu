import React from "react";
import Card from "../../../../components/ui/card";

export const Permissions: React.FC = () => {
  const permissionsList = [
    { module: "AUTH", key: "auth:write", desc: "Allows adding or disabling operators" },
    { module: "CRM", key: "crm:write", desc: "Allows updating client pipeline contact matrices" },
    { module: "BDM", key: "bdm:estimator", desc: "Allows generating project valuations and proposal estimates" },
    { module: "PORTAL", key: "portal:documents", desc: "Allows uploading files to the Client Vault" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">RULES ENGINE</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Permissions Registry</h1>
      </div>

      <Card>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #1e293b", color: "#64748b" }}>
                <th style={{ padding: "1rem", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem" }}>MODULE Scope</th>
                <th style={{ padding: "1rem", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem" }}>REGISTRATION KEY</th>
                <th style={{ padding: "1rem", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem" }}>RULE DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              {permissionsList.map((p) => (
                <tr key={p.key} style={{ borderBottom: "1px solid #1e293b" }}>
                  <td style={{ padding: "1rem", color: "#cbd5e1", fontWeight: 600 }}>{p.module}</td>
                  <td style={{ padding: "1rem", fontFamily: "IBM Plex Mono, monospace", color: "#63f5e8" }}>{p.key}</td>
                  <td style={{ padding: "1rem", color: "#94a3b8" }}>{p.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Permissions;

