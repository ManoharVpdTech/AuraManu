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

export const bdmService = {
  getDashboardData: async (): Promise<DashboardData> => {
    return axiosClient.get<any, any>(API_ENDPOINTS.BDM.DASHBOARD);
  },

  // Mock data for features not yet implemented in backend
  getLeads: async () => {
    return [
      { id: "ld_101", company: "Zeta Prime Corp", value: 320000, prob: "85%" },
      { id: "ld_102", company: "Ion Robotics", value: 640000, prob: "45%" },
    ];
  },
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
