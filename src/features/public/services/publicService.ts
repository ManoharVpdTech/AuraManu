import axiosClient from "../../../api/axiosClient";
import { API_ENDPOINTS } from "../../../api/endpoints";
import { BlogPost, CaseStudy, Industry, Job, JobApplication, Service, ContactFormData, QuoteFormData } from "../types/website.types";

export const publicService = {
  // CMS endpoints
  getServiceBySlug: async (slug: string): Promise<Service> => {
    const response = await axiosClient.get(API_ENDPOINTS.CMS.PUBLIC_SERVICE_DETAIL(slug));
    return response.data;
  },

  getIndustryBySlug: async (slug: string): Promise<Industry> => {
    const response = await axiosClient.get(API_ENDPOINTS.CMS.PUBLIC_INDUSTRY_DETAIL(slug));
    return response.data;
  },

  getCaseStudies: async (): Promise<CaseStudy[]> => {
    const response = await axiosClient.get(API_ENDPOINTS.CMS.PUBLIC_CASE_STUDIES);
    return response.data;
  },

  getBlogPosts: async (): Promise<BlogPost[]> => {
    const response = await axiosClient.get(API_ENDPOINTS.CMS.PUBLIC_BLOG);
    return response.data;
  },

  // Careers endpoints
  getJobs: async (): Promise<Job[]> => {
    const response = await axiosClient.get(API_ENDPOINTS.RECRUITMENT.PUBLIC_JOBS);
    return response.data;
  },

  getJobById: async (jobId: string): Promise<Job> => {
    const response = await axiosClient.get(API_ENDPOINTS.RECRUITMENT.PUBLIC_JOB_DETAIL(jobId));
    return response.data;
  },

  applyForJob: async (data: JobApplication): Promise<void> => {
    const formData = new FormData();
    formData.append("jobId", data.jobId);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    if (data.coverLetter) formData.append("coverLetter", data.coverLetter);
    if (data.resume) formData.append("resume", data.resume);

    await axiosClient.post(API_ENDPOINTS.RECRUITMENT.PUBLIC_APPLY, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  // These are placeholders for missing APIs as reported in the plan
  submitContactForm: async (data: ContactFormData): Promise<void> => {
    // throw new Error("Contact API is missing");
    console.warn("Mock contact form submission:", data);
    return Promise.resolve();
  },

  requestQuote: async (data: QuoteFormData): Promise<void> => {
    // throw new Error("Request Quote API is missing");
    console.warn("Mock quote request submission:", data);
    return Promise.resolve();
  },
  
  submitRfp: async (data: any): Promise<void> => {
    // throw new Error("RFP API is missing");
    console.warn("Mock RFP submission:", data);
    return Promise.resolve();
  },
  
  calculateEstimate: async (data: any): Promise<any> => {
    // throw new Error("Estimator API is missing");
    console.warn("Mock estimate calculation:", data);
    return Promise.resolve({ estimatedCost: "$10,000" });
  }
};

export default publicService;
