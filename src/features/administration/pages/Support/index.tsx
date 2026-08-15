import React from "react";
import Card from "../../../../components/ui/card";

export const Support: React.FC = () => {
  const tickets = [
    { id: "tck_1", title: "API Endpoint latency increases in Asia-Pacific", user: "venkat@aurexion.io", priority: "HIGH", date: "Aug 14" },
    { id: "tck_2", title: "Estimator spreadsheet upload failure", user: "sarah@aurexion.io", priority: "CRITICAL", date: "Aug 13" },
    { id: "tck_3", title: "Verify email SMTP connection issues", user: "system@aurexion.io", priority: "LOW", date: "Aug 12" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">SUPPORT CENTER</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>System Inquiries</h1>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {tickets.map((t) => (
          <Card key={t.id} glowOnHover>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span style={{ fontSize: "0.75rem", fontFamily: "IBM Plex Mono, monospace", color: "#63f5e8" }}>{t.id.toUpperCase()}</span>
                <h3 style={{ margin: "0.25rem 0 0.5rem 0", fontSize: "1.1rem", color: "#cbd5e1" }}>{t.title}</h3>
                <span style={{ fontSize: "0.75rem", color: "#64748b" }}>Transmitted by: {t.user} / {t.date}</span>
              </div>
              <span style={{
                fontSize: "0.75rem",
                fontFamily: "IBM Plex Mono, monospace",
                color: t.priority === "CRITICAL" ? "#ef4444" : t.priority === "HIGH" ? "#f97316" : "#63f5e8",
                backgroundColor: "rgba(5, 8, 17, 0.5)",
                border: "1px solid #1e293b",
                padding: "0.2rem 0.5rem",
                borderRadius: "4px",
              }}>{t.priority}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Support;

