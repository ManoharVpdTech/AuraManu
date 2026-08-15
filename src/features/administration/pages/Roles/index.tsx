import React from "react";
import Card from "../../../../components/ui/card";

export const Roles: React.FC = () => {
  const roles = [
    { role: "ADMIN", desc: "Global systems operator. Full permission mapping bypass.", count: "1 user", rules: ["*"] },
    { role: "BDM", desc: "Business Development Manager. Leads and estimator access.", count: "2 users", rules: ["read:leads", "write:leads", "read:opportunities", "write:rfp", "write:estimator"] },
    { role: "CLIENT", desc: "External client user. Requests and documents access.", count: "1 user", rules: ["read:projects", "write:requests", "read:documents"] },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">ACCESS ROLES</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>System Scopes & Rules</h1>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {roles.map((r) => (
          <Card key={r.role}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.25rem", color: "#63f5e8", fontFamily: "Space Grotesk, sans-serif" }}>
                  {r.role}
                </h3>
                <p style={{ margin: "0.5rem 0", color: "#94a3b8", fontSize: "0.9rem" }}>{r.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
                  {r.rules.map((rule) => (
                    <code key={rule} style={{
                      backgroundColor: "#050811",
                      border: "1px solid #1e293b",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "4px",
                      color: "#cbd5e1",
                    }}>{rule}</code>
                  ))}
                </div>
              </div>
              <span style={{ fontSize: "0.75rem", fontFamily: "IBM Plex Mono, monospace", color: "#64748b" }}>
                {r.count.toUpperCase()}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Roles;

