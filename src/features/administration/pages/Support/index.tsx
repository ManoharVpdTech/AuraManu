import React, { useState, useEffect } from "react";
import Card, { CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import Button from "../../../../components/ui/button";
import { MessageSquareCode, UserPlus, Clock, CheckCircle, ShieldAlert } from "lucide-react";
import supportService, { SupportTicketList } from "../../../support/services/supportService";

export const Support: React.FC = () => {
  const [tickets, setTickets] = useState<SupportTicketList[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      setLoading(true);
      try {
        const data = await supportService.getAdminTickets();
        if (data && data.length > 0) {
          setTickets(data);
        } else {
          throw new Error("Empty ticket array");
        }
      } catch (err) {
        // Fallback
        setTickets([
          { id: 1, ticket_id: "tck_1", subject: "API Endpoint latency increases in Asia-Pacific", category: "Network", priority: "HIGH", status: "OPEN", client_username: "venkat@aurexion.io", assigned_username: null, created_at: "Aug 14", updated_at: "Aug 14" },
          { id: 2, ticket_id: "tck_2", subject: "Estimator spreadsheet upload failure", category: "App-Estimator", priority: "CRITICAL", status: "ASSIGNED", client_username: "sarah@aurexion.io", assigned_username: "Support Executive A", created_at: "Aug 13", updated_at: "Aug 15" },
          { id: 3, ticket_id: "tck_3", subject: "Verify email SMTP connection issues", category: "System", priority: "LOW", status: "RESOLVED", client_username: "system@aurexion.io", assigned_username: "Support Executive B", created_at: "Aug 12", updated_at: "Aug 14" },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchTickets();
  }, []);

  const handleAssignTicket = (id: number) => {
    const exec = prompt("Enter Support Executive Name to assign this ticket to:");
    if (exec) {
      setTickets(tickets.map(t => t.id === id ? { ...t, assigned_username: exec, status: "ASSIGNED" } : t));
    }
  };

  const handleStatusChange = (id: number, nextStatus: string) => {
    setTickets(tickets.map(t => t.id === id ? { ...t, status: nextStatus } : t));
  };

  // Compute Metrics
  const openCount = tickets.filter(t => ["OPEN", "ASSIGNED"].includes(t.status.toUpperCase())).length;
  const criticalCount = tickets.filter(t => t.priority.toUpperCase() === "CRITICAL").length;
  const resolvedCount = tickets.filter(t => t.status.toUpperCase() === "RESOLVED").length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Title */}
      <div>
        <p className="eyebrow"><MessageSquareCode size={12} /> CLIENT HELPDESK</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0", fontFamily: "var(--font-display)", fontWeight: 600 }}>Support Center</h1>
      </div>

      {/* KPI Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }} className="grid-responsive">
        <Card>
          <CardContent style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <Clock size={24} style={{ color: "var(--color-cyan)" }} />
            <div>
              <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}>OPEN / ACTIVE TICKETS</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 600, fontFamily: "var(--font-display)" }}>{openCount}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <ShieldAlert size={24} style={{ color: "#ef4444" }} />
            <div>
              <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}>CRITICAL PRIORITIES</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 600, fontFamily: "var(--font-display)", color: "#ef4444" }}>{criticalCount}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <CheckCircle size={24} style={{ color: "#10b981" }} />
            <div>
              <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}>RESOLVED ISSUES</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 600, fontFamily: "var(--font-display)", color: "#10b981" }}>{resolvedCount}</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tickets List */}
      <Card>
        <CardHeader>
          <CardTitle style={{ fontSize: "1.1rem" }}>Support Tickets Ledger</CardTitle>
        </CardHeader>
        {loading ? (
          <div style={{ padding: "3rem", textAlign: "center", color: "var(--color-cyan)", fontFamily: "var(--font-mono)" }}>
            RESOLVING SUPPORT DATA NODE...
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}>
                  <th style={{ padding: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>TICKET ID</th>
                  <th style={{ padding: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem", width: "35%" }}>INQUIRY SUBJECT</th>
                  <th style={{ padding: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>CATEGORY</th>
                  <th style={{ padding: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>PRIORITY</th>
                  <th style={{ padding: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>TRANSMITTER</th>
                  <th style={{ padding: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>ASSIGNED EXEC</th>
                  <th style={{ padding: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>STATUS</th>
                  <th style={{ padding: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem", textAlign: "right" }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((t) => (
                  <tr key={t.id} style={{ borderBottom: "1px solid var(--color-border)" }} className="hover:bg-muted/10">
                    <td style={{ padding: "1rem", fontFamily: "var(--font-mono)", color: "var(--color-cyan)" }}>{(t.ticket_id || String(t.id)).toUpperCase()}</td>
                    <td style={{ padding: "1rem", fontWeight: 600, color: "var(--color-text-primary)" }}>{t.subject}</td>
                    <td style={{ padding: "1rem", color: "var(--color-text-secondary)" }}>{t.category}</td>
                    <td style={{ padding: "1rem" }}>
                      <span style={{
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-mono)",
                        color: t.priority === "CRITICAL" ? "#ef4444" : t.priority === "HIGH" ? "#f97316" : "#63f5e8",
                      }}>{t.priority}</span>
                    </td>
                    <td style={{ padding: "1rem", color: "var(--color-text-secondary)" }}>{t.client_username}</td>
                    <td style={{ padding: "1rem", color: "var(--color-text-primary)" }}>
                      {t.assigned_username || <span style={{ color: "var(--color-text-muted)", fontStyle: "italic" }}>Unassigned</span>}
                    </td>
                    <td style={{ padding: "1rem" }}>
                      <span style={{
                        fontSize: "0.7rem",
                        fontFamily: "var(--font-mono)",
                        color: t.status === "RESOLVED" ? "#10b981" : t.status === "CLOSED" ? "#ef4444" : "var(--color-cyan)",
                        backgroundColor: "rgba(0, 0, 0, 0.15)",
                        padding: "0.15rem 0.4rem",
                        borderRadius: "3px",
                        border: "1px solid rgba(255,255,255,0.05)"
                      }}>{t.status}</span>
                    </td>
                    <td style={{ padding: "1rem", textAlign: "right" }}>
                      <div style={{ display: "inline-flex", gap: "0.4rem", alignItems: "center" }}>
                        <Button variant="outline" size="sm" onClick={() => handleAssignTicket(t.id)} style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", borderColor: "var(--color-border)" }}>
                          <UserPlus size={12} /> Assign
                        </Button>
                        <select
                          value={t.status}
                          onChange={(e) => handleStatusChange(t.id, e.target.value)}
                          style={{
                            backgroundColor: "var(--color-bg-secondary)",
                            border: "1px solid var(--color-border)",
                            color: "var(--color-text-primary)",
                            padding: "0.25rem 0.4rem",
                            borderRadius: "4px",
                            outline: "none",
                            fontSize: "0.75rem"
                          }}
                        >
                          <option value="OPEN">Open</option>
                          <option value="ASSIGNED">Assigned</option>
                          <option value="RESOLVED">Resolved</option>
                          <option value="CLOSED">Closed</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Support;
