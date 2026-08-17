import axiosClient from "../../../api/axiosClient";
import API_ENDPOINTS from "../../../api/endpoints";

export interface DashboardData {
  total_leads: number;
  assigned_leads: number;
  unassigned_leads: number;
  new_leads: number;
  qualified_leads: number;
  active_opportunities: number;
  overdue_follow_ups: number;
  won_leads: number;
  lost_leads: number;
  conversion_rate: number;
  pipeline_summary: Array<{ status: string; total: number }>;
  recent_activities: Array<{ id: number; action: string; repr: string; actor: string | null; timestamp: string }>;
}

export interface Lead {
  id: number;
  reference_id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  industry: string;
  source: string;
  description: string;
  status: string;
  status_display: string;
  priority: string;
  priority_display: string;
  lost_reason: string;
  assigned_to: number | null;
  assigned_to_name: string | null;
  created_by: number | null;
  created_by_name: string | null;
  last_contacted_at: string | null;
  next_follow_up_at: string | null;
  follow_up_count: number;
  note_count: number;
  created_at: string;
  updated_at: string;
}

export interface LeadsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Lead[];
}

export interface LeadFollowUp {
  id: number;
  lead: number;
  assigned_to: number | null;
  assigned_to_name: string | null;
  created_by: number | null;
  created_by_name: string | null;
  follow_up_type: string;
  follow_up_type_display: string;
  scheduled_at: string;
  status: string;
  status_display: string;
  notes: string;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

export const bdmService = {
  getDashboardData: async (): Promise<DashboardData> => {
    return axiosClient.get<any, any>(API_ENDPOINTS.BDM.DASHBOARD);
  },

  getLeads: async (params?: { page?: number; status?: string; search?: string }): Promise<LeadsResponse> => {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append("page", params.page.toString());
    if (params?.status) queryParams.append("status", params.status);
    if (params?.search) queryParams.append("search", params.search);
    const url = `${API_ENDPOINTS.CRM.LEADS}?${queryParams.toString()}`;
    return axiosClient.get<any, any>(url);
  },

  getLead: async (id: number): Promise<Lead> => {
    return axiosClient.get<any, any>(`${API_ENDPOINTS.CRM.LEADS}${id}/`);
  },

  getLeadFollowUps: async (leadId: number): Promise<LeadFollowUp[]> => {
    return axiosClient.get<any, any>(API_ENDPOINTS.CRM.LEAD_FOLLOW_UPS(leadId));
  },

  // Mock data for features not yet implemented in backend
  getOpportunities: async () => {
    return [
      { id: "opp_1", title: "Enterprise AI Orchestration Platform", lead: "Zeta Prime Corp" },
    ];
  },
  getRfpList: async () => {
    return [
      { id: "rfp_101", title: "Government Security Core proposal", dueDate: "Sep 01" },
    ];
  },
  getEstimates: async () => {
    return [
      { id: "est_101", project: "Ion Cloud Migration Plan", estimate: 540000 },
    ];
  },
};

export default bdmService;