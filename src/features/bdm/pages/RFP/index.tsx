import React, { useState } from "react";
import { useLeads } from "../../hooks/useLeads";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../../../../components/ui/table";
import { Badge } from "../../../../components/ui/badge";
import type { Lead } from "../../services/bdmService";

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  under_review: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  contacted: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  qualified: "bg-green-500/20 text-green-400 border-green-500/30",
  proposal_submitted: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  negotiation: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  won: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  lost: "bg-red-500/20 text-red-400 border-red-500/30",
};

const PRIORITY_COLORS: Record<string, string> = {
  low: "bg-gray-500/20 text-gray-400",
  medium: "bg-blue-500/20 text-blue-400",
  high: "bg-orange-500/20 text-orange-400",
  urgent: "bg-red-500/20 text-red-400",
};

export const RFP: React.FC = () => {
  const [search, setSearch] = useState("");

  const { leads, totalCount, isLoading, error, refetch, currentPage, totalPages, nextPage, prevPage, hasNext, hasPrev } = useLeads({
    search: search || undefined,
  });

  const rfpLeads = leads.filter((lead) => lead.source?.toUpperCase() === "RFP");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusBadge = (status: string) => (
    <Badge className={STATUS_COLORS[status] || "bg-gray-500/20 text-gray-400"}>
      {status.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
    </Badge>
  );

  const getPriorityBadge = (priority: string) => (
    <Badge className={PRIORITY_COLORS[priority] || "bg-gray-500/20 text-gray-400"}>
      {priority.charAt(0).toUpperCase() + priority.slice(1)}
    </Badge>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <p className="eyebrow">RFP PIPELINE</p>
          <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 0 0" }}>Requests For Proposal (RFP)</h1>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button onClick={refetch} variant="outline">
            Refresh
          </Button>
        </div>
      </div>

      <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        <Card glowOnHover borderAccent>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total RFPs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: "#63f5e8" }}>
              {rfpLeads.length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">RFP submissions</p>
          </CardContent>
        </Card>
        <Card glowOnHover>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">New RFPs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: "#60a5fa" }}>
              {rfpLeads.filter((l: Lead) => l.status === "new").length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Awaiting review</p>
          </CardContent>
        </Card>
        <Card glowOnHover>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: "#fbbf24" }}>
              {rfpLeads.filter((l: Lead) => ["under_review", "contacted", "qualified"].includes(l.status)).length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Active proposals</p>
          </CardContent>
        </Card>
        <Card glowOnHover>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Won / Lost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: "#fbbf24" }}>
              {rfpLeads.filter((l: Lead) => ["won", "lost"].includes(l.status)).length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Closed RFPs</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "space-between" }}>
            <CardTitle>RFP Submissions ({rfpLeads.length} total)</CardTitle>
            <form onSubmit={handleSearch} style={{ display: "flex", gap: "0.75rem" }}>
              <Input
                placeholder="Search RFPs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: "300px" }}
              />
              <Button type="submit">Search</Button>
            </form>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div style={{ textAlign: "center", padding: "3rem" }}>
              <p style={{ color: "#64748b" }}>Loading RFPs...</p>
            </div>
          ) : error ? (
            <div style={{ textAlign: "center", padding: "3rem" }}>
              <p style={{ color: "#ef4444" }}>Error: {error}</p>
              <Button onClick={refetch} className="mt-2">
                Retry
              </Button>
            </div>
          ) : rfpLeads.length === 0 ? (
            <div style={{ textAlign: "center", padding: "3rem" }}>
              <p style={{ color: "#64748b" }}>No RFP submissions found</p>
            </div>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reference</TableHead>
                    <TableHead>Name / Company</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead>Next Follow-up</TableHead>
                    <TableHead>Submitted</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rfpLeads.map((lead: Lead) => (
                    <TableRow key={lead.id}>
                      <TableCell style={{ fontFamily: "monospace", fontSize: "0.8rem" }}>
                        {lead.reference_id}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p style={{ fontWeight: 500, margin: 0 }}>{lead.name || "—"}</p>
                          <p style={{ fontSize: "0.8rem", color: "#64748b", margin: 0 }}>{lead.company || "—"}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          {lead.email && <p style={{ fontSize: "0.8rem", margin: 0 }}>{lead.email}</p>}
                          {lead.phone && <p style={{ fontSize: "0.8rem", color: "#64748b", margin: 0 }}>{lead.phone}</p>}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(lead.status)}</TableCell>
                      <TableCell>{getPriorityBadge(lead.priority)}</TableCell>
                      <TableCell>
                        {lead.assigned_to_name ? (
                          <span>{lead.assigned_to_name}</span>
                        ) : (
                          <span style={{ color: "#ef4444" }}>Unassigned</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {lead.next_follow_up_at ? formatDate(lead.next_follow_up_at) : "—"}
                      </TableCell>
                      <TableCell>{formatDate(lead.created_at)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {totalPages > 1 && (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginTop: "1.5rem" }}>
                  <Button onClick={prevPage} disabled={!hasPrev} variant="outline">
                    Previous
                  </Button>
                  <span style={{ color: "#94a3b8" }}>
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button onClick={nextPage} disabled={!hasNext} variant="outline">
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RFP;