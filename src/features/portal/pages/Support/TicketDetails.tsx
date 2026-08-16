import React, { useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, Pencil, Save, X } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Label } from "../../../../components/ui/label";
import Card from "../../../../components/ui/card";
import PageHeader from "../../components/PageHeader";
import { ErrorState, LoadingState, getErrorMessage, getFieldErrors } from "../../components/StateViews";
import { TicketCategoryBadge, TicketPriorityBadge, TicketStatusBadge, ticketCategoryLabel, ticketPriorityLabel } from "../../components/TicketMeta";
import { formatDateTime } from "../../utils/format";
import type { TicketCategory, TicketPriority } from "../../types/portal.types";
import useMyTicket from "../../hooks/useMyTicket";
import useUpdateTicket from "../../hooks/useUpdateTicket";

const CATEGORY_OPTIONS: { value: TicketCategory; label: string }[] = [
  { value: "bug", label: "Bug" },
  { value: "enhancement", label: "Enhancement" },
  { value: "security", label: "Security" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "general", label: "General" },
];

const PRIORITY_OPTIONS: { value: TicketPriority; label: string }[] = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "critical", label: "Critical" },
];

interface InfoRowProps {
  label: string;
  value: React.ReactNode;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
  <div>
    <div style={{ fontSize: "0.7rem", color: "#64748b", fontFamily: "IBM Plex Mono, monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
      {label}
    </div>
    <div style={{ marginTop: "0.25rem", fontSize: "0.9rem", color: "#e2e8f0" }}>{value}</div>
  </div>
);

export const TicketDetails: React.FC = () => {
  const params = useParams();
  const ticketId = params?.id || "";
  const ticket = useMyTicket(ticketId);
  const update = useUpdateTicket();

  const [editing, setEditing] = useState(false);
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState<TicketCategory>("general");
  const [priority, setPriority] = useState<TicketPriority>("medium");
  const [localErrors, setLocalErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const startEdit = () => {
    if (!ticket.data) return;
    setSubject(ticket.data.subject);
    setCategory(ticket.data.category);
    setPriority(ticket.data.priority);
    setLocalErrors({});
    setSuccess(false);
    setEditing(true);
  };

  const handleSave = async () => {
    const errors: Record<string, string> = {};
    if (!subject.trim()) errors.subject = "Subject is required.";
    if (!category) errors.category = "Category is required.";
    if (!priority) errors.priority = "Priority is required.";
    if (Object.keys(errors).length > 0) {
      setLocalErrors(errors);
      return;
    }
    try {
      await update.update(Number(ticketId), { subject: subject.trim(), category, priority });
      setEditing(false);
      setSuccess(true);
      ticket.refetch();
    } catch {
      // Error surfaced via update.error
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <Link href="/portal/support/tickets">
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#63f5e8", fontSize: "0.85rem", cursor: "pointer" }}>
            <ArrowLeft size={14} />
            Back to tickets
          </span>
        </Link>
      </div>

      <PageHeader
        eyebrow="CLIENT SUPPORT"
        title={ticket.data ? ticket.data.subject : "Ticket Details"}
        description={ticket.data ? `${ticket.data.ticket_id} · opened ${formatDateTime(ticket.data.created_at)}` : "Loading ticket..."}
        actions={
          ticket.data &&
          !editing && (
            <Button variant="outline" size="sm" onClick={startEdit}>
              <Pencil size={14} />
              Edit Details
            </Button>
          )
        }
      />

      {ticket.isLoading ? (
        <LoadingState rows={4} label="Loading ticket details" />
      ) : ticket.isError ? (
        <ErrorState error={ticket.error} onRetry={ticket.refetch} title="Unable to load ticket" />
      ) : ticket.data ? (
        <>
          {update.error && (
            <div style={{ color: "#f87171", backgroundColor: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)", padding: "0.75rem", borderRadius: "6px", fontSize: "0.85rem" }}>
              {getErrorMessage(update.error)}
            </div>
          )}
          {success && (
            <div style={{ color: "#4ade80", backgroundColor: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", padding: "0.75rem", borderRadius: "6px", fontSize: "0.85rem" }}>
              Ticket details updated successfully.
            </div>
          )}

          <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            <Card>
              <h3 style={{ margin: 0, color: "#63f5e8", marginBottom: "1rem" }}>Ticket Information</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <InfoRow label="Ticket ID" value={ticket.data.ticket_id} />
                <InfoRow label="Status" value={<TicketStatusBadge status={ticket.data.status} />} />
                <InfoRow label="Category" value={<TicketCategoryBadge category={ticket.data.category} />} />
                <InfoRow label="Priority" value={<TicketPriorityBadge priority={ticket.data.priority} />} />
                <InfoRow label="Assigned To" value={ticket.data.assigned_to || "Not yet assigned"} />
                <InfoRow label="Client Account" value={ticket.data.client_user} />
              </div>
            </Card>

            <Card>
              <h3 style={{ margin: 0, color: "#63f5e8", marginBottom: "1rem" }}>Timeline</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <InfoRow label="Created" value={formatDateTime(ticket.data.created_at)} />
                <InfoRow label="Last Updated" value={formatDateTime(ticket.data.updated_at)} />
                <InfoRow label="Closed" value={ticket.data.closed_at ? formatDateTime(ticket.data.closed_at) : "Still open"} />
              </div>
            </Card>
          </div>

          <Card>
            <h3 style={{ margin: 0, color: "#63f5e8", marginBottom: "0.75rem" }}>Resolution Notes</h3>
            <p style={{ color: "#cbd5e1", fontSize: "0.9rem", margin: 0, whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
              {ticket.data.resolution_notes || "No resolution notes recorded yet."}
            </p>
          </Card>

          {editing && (
            <Card>
              <h3 style={{ margin: 0, color: "#63f5e8", marginBottom: "1rem" }}>Edit Ticket Details</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave();
                }}
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <Label htmlFor="edit-subject" style={{ fontSize: "0.72rem", fontFamily: "IBM Plex Mono, monospace", color: "#64748b" }}>
                    SUBJECT
                  </Label>
                  <Input
                    id="edit-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    maxLength={255}
                    aria-invalid={!!localErrors.subject}
                  />
                  {localErrors.subject && (
                    <span style={{ color: "#f87171", fontSize: "0.78rem" }}>{localErrors.subject}</span>
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <Label style={{ fontSize: "0.72rem", fontFamily: "IBM Plex Mono, monospace", color: "#64748b" }}>
                    CATEGORY
                  </Label>
                  <Select value={category} onValueChange={(v) => setCategory(v as TicketCategory)}>
                    <SelectTrigger style={{ width: "100%" }}>
                      <SelectValue placeholder={ticketCategoryLabel(category)} />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORY_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <Label style={{ fontSize: "0.72rem", fontFamily: "IBM Plex Mono, monospace", color: "#64748b" }}>
                    PRIORITY
                  </Label>
                  <Select value={priority} onValueChange={(v) => setPriority(v as TicketPriority)}>
                    <SelectTrigger style={{ width: "100%" }}>
                      <SelectValue placeholder={ticketPriorityLabel(priority)} />
                    </SelectTrigger>
                    <SelectContent>
                      {PRIORITY_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {update.error && getFieldErrors(update.error).subject && (
                  <div style={{ color: "#f87171", fontSize: "0.8rem" }}>
                    {getFieldErrors(update.error).subject.join(", ")}
                  </div>
                )}

                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <Button type="submit" glow size="sm" disabled={update.isLoading}>
                    <Save size={14} />
                    {update.isLoading ? "Saving..." : "Save Changes"}
                  </Button>
                  <Button type="button" variant="outline" size="sm" onClick={() => setEditing(false)}>
                    <X size={14} />
                    Cancel
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </>
      ) : null}
    </div>
  );
};

export default TicketDetails;