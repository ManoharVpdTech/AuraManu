import axiosClient from "../../../api/axiosClient";
import API_ENDPOINTS from "../../../api/endpoints";

export interface TicketItem {
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

export interface TicketDetail {
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

export const portalService = {
  getMyTickets: async (): Promise<TicketItem[]> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.PORTAL.MY_TICKETS);
    return Array.isArray(data) ? data : (data.results || []);
  },

  getTicket: async (ticketId: number): Promise<TicketDetail> => {
    const data = await axiosClient.get<any, any>(`${API_ENDPOINTS.PORTAL.MY_TICKETS}${ticketId}/`);
    return data;
  },

  createTicket: async (ticketData: { subject: string; category: string; priority: string }): Promise<TicketDetail> => {
    const data = await axiosClient.post<any, any>(API_ENDPOINTS.PORTAL.MY_TICKETS, ticketData);
    return data;
  },

  updateTicket: async (ticketId: number, ticketData: Partial<TicketDetail>): Promise<TicketDetail> => {
    const data = await axiosClient.patch<any, any>(`${API_ENDPOINTS.PORTAL.MY_TICKETS}${ticketId}/`, ticketData);
    return data;
  },

  getAllTickets: async (): Promise<TicketItem[]> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.PORTAL.TICKETS);
    return Array.isArray(data) ? data : (data.results || []);
  },

  // Mock data for features not yet implemented in backend
  getProjects: async () => {
    return [
      { id: "prj_1", title: "Enterprise Database Overhaul", deadline: "Oct 12", completion: 80 },
    ];
  },
  getDocuments: async () => {
    return [
      { id: "doc_1", name: "Aurexion Service Agreement.pdf", path: "/vault/doc1.pdf" },
    ];
  },
  getProfile: async () => {
    const user = JSON.parse(localStorage.getItem("aurexion_user") || "{}");
    return {
      name: user.name || "User",
      email: user.email || "user@aurexion.io",
      company: "Aurexion Technologies Client",
    };
  },
};

export default portalService;
