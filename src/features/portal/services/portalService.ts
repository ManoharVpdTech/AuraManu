import axiosClient from "../../../api/axiosClient";
import API_ENDPOINTS from "../../../api/endpoints";
import type {
  PortalProfile,
  SupportTicketCreateInput,
  SupportTicketDetail,
  SupportTicketItem,
  SupportTicketUpdateInput,
} from "../types/portal.types";

const MY_TICKETS = API_ENDPOINTS.PORTAL.MY_TICKETS;

export const portalService = {
  getProfile: async (): Promise<PortalProfile> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.AUTH.ME);
    return data as PortalProfile;
  },

  getMyTickets: async (): Promise<SupportTicketItem[]> => {
    const data = await axiosClient.get<any, any>(MY_TICKETS);
    return Array.isArray(data) ? data : (data.results || []);
  },

  getTicket: async (ticketId: number): Promise<SupportTicketDetail> => {
    const data = await axiosClient.get<any, any>(`${MY_TICKETS}${ticketId}/`);
    return data as SupportTicketDetail;
  },

  createTicket: async (ticketData: SupportTicketCreateInput): Promise<SupportTicketCreateInput> => {
    const data = await axiosClient.post<any, any>(MY_TICKETS, ticketData);
    return data as SupportTicketCreateInput;
  },

  updateTicket: async (ticketId: number, ticketData: SupportTicketUpdateInput): Promise<SupportTicketUpdateInput> => {
    const data = await axiosClient.patch<any, any>(`${MY_TICKETS}${ticketId}/`, ticketData);
    return data as SupportTicketUpdateInput;
  },

  // Backward-compatible empty accessors retained for shared Admin dashboards.
  // Projects and Documents have no backend endpoint for client users, so an
  // honest empty result is returned instead of the previous mock data.
  getProjects: async (): Promise<{ id: string; title: string; deadline: string; completion: number }[]> => {
    return [];
  },
  getDocuments: async (): Promise<{ id: string; name: string; path: string }[]> => {
    return [];
  },
  getAllTickets: async (): Promise<SupportTicketItem[]> => {
    return [];
  },
};

export default portalService;