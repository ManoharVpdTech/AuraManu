import React, { useState } from "react";
import Card from "../../../../components/ui/card";
import Button from "../../../../components/ui/button";

export const Settings: React.FC = () => {
  const [appName, setAppName] = useState("Aurexion Enterprise Portal");
  const [mfa, setMfa] = useState(true);
  const [rateLimit, setRateLimit] = useState("100 requests / minute");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">SYSTEM CONFIG</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Platform Settings</h1>
      </div>

      <Card>
        <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label htmlFor="appName" style={{ fontSize: "0.8rem", fontFamily: "IBM Plex Mono, monospace", color: "#64748b" }}>
              APPLICATION TITLE NAME
            </label>
            <input
              id="appName"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              style={{ maxWidth: "400px" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label htmlFor="rateLimit" style={{ fontSize: "0.8rem", fontFamily: "IBM Plex Mono, monospace", color: "#64748b" }}>
              API INSTANCE RATE LIMIT
            </label>
            <input
              id="rateLimit"
              value={rateLimit}
              onChange={(e) => setRateLimit(e.target.value)}
              style={{ maxWidth: "400px" }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <input
              type="checkbox"
              id="mfa"
              checked={mfa}
              onChange={(e) => setMfa(e.target.checked)}
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
            />
            <label htmlFor="mfa" style={{ fontSize: "0.9rem", color: "#cbd5e1", cursor: "pointer" }}>
              Require Multi-Factor Authentication (MFA) for Administrative scopes
            </label>
          </div>

          <Button type="submit" glow style={{ maxWidth: "200px", marginTop: "1rem" }}>
            SAVE CONFIG
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Settings;

