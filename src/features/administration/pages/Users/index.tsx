import React from "react";
import Card from "../../../../components/ui/card";

export const Users: React.FC = () => {
  const usersList = [
    { id: "usr_10", name: "Venkat G.", email: "venkat@aurexion.io", role: "ADMIN", status: "ACTIVE" },
    { id: "usr_11", name: "Alice S.", email: "alice@aurexion.io", role: "BDM", status: "ACTIVE" },
    { id: "usr_12", name: "Marcus L.", email: "marcus@client.com", role: "CLIENT", status: "SUSPENDED" },
    { id: "usr_13", name: "Sarah K.", email: "sarah@aurexion.io", role: "BDM", status: "ACTIVE" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">IDENTITY MANAGER</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>User Directory</h1>
      </div>

      <Card>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #1e293b", color: "#64748b" }}>
                <th style={{ padding: "1rem", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem" }}>OPERATOR ID</th>
                <th style={{ padding: "1rem", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem" }}>NAME</th>
                <th style={{ padding: "1rem", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem" }}>EMAIL</th>
                <th style={{ padding: "1rem", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem" }}>ROLE SCOPE</th>
                <th style={{ padding: "1rem", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem" }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((usr) => (
                <tr key={usr.id} style={{ borderBottom: "1px solid #1e293b" }}>
                  <td style={{ padding: "1rem", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.85rem", color: "#63f5e8" }}>{usr.id}</td>
                  <td style={{ padding: "1rem", fontWeight: 600, color: "#cbd5e1" }}>{usr.name}</td>
                  <td style={{ padding: "1rem", color: "#94a3b8" }}>{usr.email}</td>
                  <td style={{ padding: "1rem" }}>
                    <span style={{
                      fontSize: "0.75rem",
                      fontFamily: "IBM Plex Mono, monospace",
                      color: "#63f5e8",
                      backgroundColor: "rgba(99, 245, 232, 0.05)",
                      border: "1px solid rgba(99, 245, 232, 0.15)",
                      padding: "0.15rem 0.4rem",
                      borderRadius: "4px",
                    }}>{usr.role}</span>
                  </td>
                  <td style={{ padding: "1rem" }}>
                    <span style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: usr.status === "ACTIVE" ? "#10b981" : "#ef4444",
                    }}>{usr.status}</span>
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

export default Users;

