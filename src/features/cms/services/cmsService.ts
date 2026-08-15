import axiosClient from "../../../api/axiosClient";
import API_ENDPOINTS from "../../../api/endpoints";

export interface ServiceItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  problem: string;
  solution: string;
  tech_stack: any;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  is_featured: boolean;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface CaseStudyItem {
  id: number;
  title: string;
  slug: string;
  client: string;
  context: string;
  business_challenge: string;
  proposed_architecture: string;
  tech_stack: any;
  development_approach: string;
  modules_integration_security: string;
  outcomes_performance: string;
  confidential: boolean;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface IndustryItem {
  id: number;
  name: string;
  slug: string;
  challenges: string;
  target_solutions: string;
  status: string;
  created_at: string;
  updated_at: string;
  services: number[];
  case_studies: number[];
}

export interface BlogPostItem {
  id: number;
  author_username: string;
  category_name: string;
  title: string;
  slug: string;
  content: string;
  tags: any;
  media: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  status: string;
  category: number;
  author: number;
}

export const cmsService = {
  // Admin endpoints
  getAdminServices: async (): Promise<ServiceItem[]> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.CMS.ADMIN_SERVICES);
    return Array.isArray(data) ? data : (data.results || []);
  },

  getAdminCaseStudies: async (): Promise<CaseStudyItem[]> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.CMS.ADMIN_CASE_STUDIES);
    return Array.isArray(data) ? data : (data.results || []);
  },

  getAdminIndustries: async (): Promise<IndustryItem[]> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.CMS.ADMIN_INDUSTRIES);
    return Array.isArray(data) ? data : (data.results || []);
  },

  getAdminCategories: async () => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.CMS.ADMIN_CATEGORIES);
    return Array.isArray(data) ? data : (data.results || []);
  },

  getAdminBlog: async (): Promise<BlogPostItem[]> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.CMS.ADMIN_BLOG);
    return Array.isArray(data) ? data : (data.results || []);
  },

  // Public endpoints
  getPublicServiceDetail: async (slug: string) => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.CMS.PUBLIC_SERVICE_DETAIL(slug));
    return data;
  },

  getPublicIndustryDetail: async (slug: string) => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.CMS.PUBLIC_INDUSTRY_DETAIL(slug));
    return data;
  },

  getPublicCaseStudies: async (): Promise<CaseStudyItem[]> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.CMS.PUBLIC_CASE_STUDIES);
    return Array.isArray(data) ? data : (data.results || []);
  },

  getPublicBlog: async (): Promise<BlogPostItem[]> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.CMS.PUBLIC_BLOG);
    return Array.isArray(data) ? data : (data.results || []);
  },

  // Mock data for homepage
  getHomepageContent: async () => {
    return {
      heroTitle: "ENGINEERING WHAT COMES NEXT.",
      heroSubtitle: "AI. Software. Cloud. Data. Engineered for the complex enterprise.",
    };
  },
  savePageContent: async (pageId: string, content: any) => {
    return { success: true, pageId, content };
  },
};

export default cmsService;
