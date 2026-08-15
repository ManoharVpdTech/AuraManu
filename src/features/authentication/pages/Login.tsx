import React, { useState } from "react";
import { useLocation } from "wouter";
import useAuth from "../../../hooks/useAuth";
import Card from "../../../components/ui/card";
import Button from "../../../components/ui/button";

export const Login: React.FC = () => {
  const { login, isLoading } = useAuth();
  const [username, setUsername] = useState("administrator");
  const [password, setPassword] = useState("Admin@2026");
  const [role, setRole] = useState("ADMIN");
  const [, setLocation] = useLocation();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Please fill in all credentials.");
      return;
    }

    try {
      await login(username, password);
      
      // Redirect based on role
      const upperRole = role.toUpperCase();
      if (upperRole === "ADMIN") {
        setLocation("/admin/dashboard");
      } else if (upperRole === "BDM") {
        setLocation("/bdm/dashboard");
      } else if (upperRole === "CLIENT") {
        setLocation("/portal/dashboard");
      } else if (upperRole === "SALES") {
        setLocation("/crm/dashboard");
      } else if (upperRole === "HR") {
        setLocation("/recruitment/dashboard");
      } else if (upperRole === "CONTENT") {
        setLocation("/cms/dashboard");
      } else if (upperRole === "SUPPORT") {
        setLocation("/support/dashboard");
      } else {
        setLocation("/");
      }
    } catch (err: any) {
      setError(err?.response?.data?.detail || err?.message || "Failed to authenticate.");
    }
  };

  const handleRoleSelect = (selectedRole: string, defaultUser: string, defaultPass: string) => {
    setRole(selectedRole);
    setUsername(defaultUser);
    setPassword(defaultPass);
  };

  return (
    <Card borderAccent style={{ width: "100%" }}>
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <img src="/logo.svg" alt="Aurexion" style={{ width: "48px", height: "48px", marginBottom: "0.5rem" }} />
        <h2 style={{ fontSize: "1.5rem", margin: 0 }}>Access Scope Console</h2>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem", marginTop: "0.5rem" }}>
          Authorize credentials to establish a secure session.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {error && (
          <div style={{
            color: "#ef4444",
            backgroundColor: "rgba(239, 68, 68, 0.08)",
            border: "1px solid rgba(239, 68, 68, 0.15)",
            padding: "0.75rem",
            borderRadius: "4px",
            fontSize: "0.85rem",
            fontFamily: "IBM Plex Mono, monospace",
          }}>
            ERROR // {error}
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.75rem", fontFamily: "IBM Plex Mono, monospace", color: "#64748b" }}>
            SELECT SYSTEM ROLE SCOPE
          </label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem" }}>
            {[
              ["ADMIN", "administrator", "Admin@2026"],
              ["BDM", "business_dev_manager", "Bdm@2026"],
              ["CLIENT", "client_user", "Client@2026"],
              ["SALES", "sales_executive", "Sales@2026"],
              ["HR", "hr_manager", "Hr@2026"],
              ["CONTENT", "content_manager", "Content@2026"],
              ["SUPPORT", "support_executive", "Support@2026"]
            ].map(([r, defaultUser, defaultPass]) => {
              const isSelected = role === r;
              return (
                <button
                  key={r}
                  type="button"
                  onClick={() => handleRoleSelect(r, defaultUser, defaultPass)}
                  style={{
                    padding: "0.5rem",
                    fontSize: "0.68rem",
                    fontFamily: "IBM Plex Mono, monospace",
                    borderRadius: "4px",
                    backgroundColor: isSelected ? "rgba(99, 245, 232, 0.1)" : "#050811",
                    border: isSelected ? "1px solid #63f5e8" : "1px solid #1e293b",
                    color: isSelected ? "#63f5e8" : "#cbd5e1",
                    cursor: "pointer",
                    transition: "all 150ms",
                    textAlign: "center",
                  }}
                >
                  {r}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label htmlFor="username" style={{ fontSize: "0.75rem", fontFamily: "IBM Plex Mono, monospace", color: "#64748b" }}>
            USERNAME OR EMAIL
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="administrator"
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <label htmlFor="password" style={{ fontSize: "0.75rem", fontFamily: "IBM Plex Mono, monospace", color: "#64748b" }}>
              PASSWORD
            </label>
            <span 
              onClick={() => setLocation("/forgot-password")}
              style={{ fontSize: "0.75rem", color: "#63f5e8", cursor: "pointer", textDecoration: "underline" }}
            >
              Forgot?
            </span>
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
          />
        </div>

        <Button type="submit" glow style={{ width: "100%", marginTop: "0.75rem" }} disabled={isLoading}>
          {isLoading ? "ESTABLISHING SECURE PORT..." : "ESTABLISH SESSION"}
        </Button>
      </form>
    </Card>
  );
};

export default Login;
