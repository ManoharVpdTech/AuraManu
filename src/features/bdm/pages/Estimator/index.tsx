import React, { useState } from "react";
import Card from "../../../../components/ui/card";
import Button from "../../../../components/ui/button";

export const Estimator: React.FC = () => {
  const [developerCount, setDeveloperCount] = useState(5);
  const [timelineMonths, setTimelineMonths] = useState(6);
  const [calculatedCost, setCalculatedCost] = useState(0);

  const calculateEstimate = () => {
    // Basic mock calculation rate: $10,000 per dev per month
    const estimate = developerCount * timelineMonths * 10000;
    setCalculatedCost(estimate);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p className="eyebrow">ESTIMATOR ENGINE</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Project Cost Estimator</h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="grid-responsive">
        <Card>
          <h3 style={{ marginBottom: "1.5rem" }}>Input Scope Parameters</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label htmlFor="devs" style={{ fontSize: "0.8rem", color: "#64748b" }}>ENGINEERING HEADCOUNT (DEVS)</label>
              <input
                id="devs"
                type="number"
                value={developerCount}
                onChange={(e) => setDeveloperCount(parseInt(e.target.value) || 0)}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label htmlFor="months" style={{ fontSize: "0.8rem", color: "#64748b" }}>PROJECT TIMELINE (MONTHS)</label>
              <input
                id="months"
                type="number"
                value={timelineMonths}
                onChange={(e) => setTimelineMonths(parseInt(e.target.value) || 0)}
              />
            </div>
            <Button onClick={calculateEstimate} glow style={{ marginTop: "1rem" }}>
              RUN SIMULATE CALCULATION
            </Button>
          </div>
        </Card>

        <Card borderAccent>
          <p className="eyebrow">CALCULATION OUTPUT</p>
          <h3 style={{ marginTop: "0.5rem" }}>Project Cost Valuation</h3>
          <div style={{
            fontSize: "3rem",
            fontWeight: 600,
            fontFamily: "Space Grotesk, sans-serif",
            color: "#63f5e8",
            margin: "2rem 0",
          }}>
            ${calculatedCost.toLocaleString()}
          </div>
          <span style={{ color: "#64748b", fontSize: "0.8rem" }}>
            Based on core developer allocation of $10,000 / month / developer.
          </span>
        </Card>
      </div>
    </div>
  );
};

export default Estimator;

