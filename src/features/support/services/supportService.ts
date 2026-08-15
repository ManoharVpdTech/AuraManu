import axiosClient from "../../../api/axiosClient";
import API_ENDPOINTS from "../../../api/endpoints";

export interface SupportTicketList {
  id: number;
  ticket_id: string;
  subject: string;
  category: string;
  priority: string;
  status: string;
  client_username: string;
  assigned_username: string | null;
  created_at: string;
  updated_at: string;
}

export interface SupportTicketDetail {
  id: number;
  ticket_id: string;
  client_user: string;
  client_user_id: number;
  assigned_to: string | null;
  assigned_to_id: number | null;
  subject: string;
  category: string;
  priority: string;
  status: string;
  resolution_notes: string;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
}

export const supportService = {
  getTickets: async (): Promise<SupportTicketList[]> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.PORTAL.TICKETS);
    return Array.isArray(data) ? data : (data.results || []);
  },

  getTicketDetails: async (id: number): Promise<SupportTicketDetail> => {
    const data = await axiosClient.get<any, any>(`${API_ENDPOINTS.PORTAL.TICKETS}${id}/`);
    return data;
  },

  createTicket: async (ticket: { subject: string; category: string; priority: string }) => {
    return axiosClient.post<any, any>(API_ENDPOINTS.PORTAL.MY_TICKETS, ticket);
  },

  updateTicket: async (id: number, ticket: Partial<SupportTicketDetail>) => {
    return axiosClient.patch<any, any>(`${API_ENDPOINTS.PORTAL.TICKETS}${id}/`, ticket);
  },

  getAdminTickets: async (): Promise<SupportTicketList[]> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.PORTAL.ADMIN_TICKETS);
    return Array.isArray(data) ? data : (data.results || []);
  },
};

export default supportService;
