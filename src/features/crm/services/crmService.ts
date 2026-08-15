import axiosClient from "../../../api/axiosClient";
import API_ENDPOINTS from "../../../api/endpoints";

export interface LeadItem {
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
  assigned_to_name: string | null;
  created_by_name: string | null;
  created_at: string;
  updated_at: string;
}

export interface LeadFollowUp {
  id: number;
  lead: number;
  assigned_to: number | null;
  assigned_to_name: string;
  created_by: number | null;
  created_by_name: string;
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

export interface LeadNote {
  id: number;
  content: string;
  created_by: number | null;
  created_by_name: string;
  created_at: string;
  updated_at: string;
}

export const crmService = {
  getLeads: async (): Promise<LeadItem[]> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.CRM.LEADS);
    return Array.isArray(data) ? data : (data.results || []);
  },

  getLead: async (leadId: number): Promise<LeadItem> => {
    const data = await axiosClient.get<any, any>(`${API_ENDPOINTS.CRM.LEADS}${leadId}/`);
    return data;
  },

  createLead: async (leadData: Partial<LeadItem>): Promise<LeadItem> => {
    const data = await axiosClient.post<any, any>(API_ENDPOINTS.CRM.LEADS, leadData);
    return data;
  },

  updateLead: async (leadId: number, leadData: Partial<LeadItem>): Promise<LeadItem> => {
    const data = await axiosClient.patch<any, any>(`${API_ENDPOINTS.CRM.LEADS}${leadId}/`, leadData);
    return data;
  },

  assignLead: async (leadId: number, assignedTo: number): Promise<LeadItem> => {
    const data = await axiosClient.post<any, any>(API_ENDPOINTS.CRM.LEAD_ASSIGN(leadId), { assigned_to: assignedTo });
    return data;
  },

  transitionLead: async (leadId: number, status: string): Promise<LeadItem> => {
    const data = await axiosClient.post<any, any>(API_ENDPOINTS.CRM.LEAD_TRANSITION(leadId), { status });
    return data;
  },

  qualifyLead: async (leadId: number): Promise<LeadItem> => {
    const data = await axiosClient.post<any, any>(API_ENDPOINTS.CRM.LEAD_QUALIFY(leadId), {});
    return data;
  },

  markLeadWon: async (leadId: number): Promise<LeadItem> => {
    const data = await axiosClient.post<any, any>(API_ENDPOINTS.CRM.LEAD_WON(leadId), {});
    return data;
  },

  markLeadLost: async (leadId: number, reason: string): Promise<LeadItem> => {
    const data = await axiosClient.post<any, any>(API_ENDPOINTS.CRM.LEAD_LOST(leadId), { reason });
    return data;
  },

  getFollowUps: async (leadId: number): Promise<LeadFollowUp[]> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.CRM.LEAD_FOLLOW_UPS(leadId));
    return Array.isArray(data) ? data : (data.results || []);
  },

  createFollowUp: async (leadId: number, followUpData: Partial<LeadFollowUp>): Promise<LeadFollowUp> => {
    const data = await axiosClient.post<any, any>(API_ENDPOINTS.CRM.LEAD_FOLLOW_UPS(leadId), followUpData);
    return data;
  },

  completeFollowUp: async (leadId: number, followUpId: number): Promise<LeadFollowUp> => {
    const data = await axiosClient.post<any, any>(`${API_ENDPOINTS.CRM.LEAD_FOLLOW_UPS(leadId)}${followUpId}/complete/`, {});
    return data;
  },

  getNotes: async (leadId: number): Promise<LeadNote[]> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.CRM.LEAD_NOTES(leadId));
    return Array.isArray(data) ? data : (data.results || []);
  },

  createNote: async (leadId: number, content: string): Promise<LeadNote> => {
    const data = await axiosClient.post<any, any>(API_ENDPOINTS.CRM.LEAD_NOTES(leadId), { content });
    return data;
  },

  exportLeads: async (): Promise<Blob> => {
    const response = await axiosClient.get(API_ENDPOINTS.CRM.LEAD_EXPORT, {
      responseType: 'blob',
    });
    return response as unknown as Blob;
  },

  // Mock data for features not yet implemented in backend
  getContacts: async () => {
    return [
      { id: "con_1", name: "Marcus L.", email: "marcus@apex.com", company: "Apex FinTech" },
    ];
  },
  getCompanies: async () => {
    return [
      { id: "com_1", name: "Apex FinTech", domain: "apex.com", size: "1000-5000 employees" },
    ];
  },
  getActivities: async () => {
    return [
      { id: "act_1", type: "EMAIL", desc: "Sent proposal draft", date: "Aug 14" },
    ];
  },
};

export default crmService;
