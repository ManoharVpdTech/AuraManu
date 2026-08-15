import axiosClient from "../../../api/axiosClient";
import API_ENDPOINTS from "../../../api/endpoints";

export interface JobVacancy {
  id: number;
  job_id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  skills: string;
  responsibilities: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface CandidateApplication {
  id: number;
  tracking_code: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  resume_storage_path: string;
  stage: string;
  created_at: string;
  updated_at: string;
  job_vacancy: number;
}

export const recruitmentService = {
  getPublicJobs: async (): Promise<JobVacancy[]> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.RECRUITMENT.PUBLIC_JOBS);
    return Array.isArray(data) ? data : (data.results || []);
  },

  getPublicJobDetail: async (jobId: string): Promise<JobVacancy> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.RECRUITMENT.PUBLIC_JOB_DETAIL(jobId));
    return data;
  },

  applyForJob: async (applicationData: { job_id: string; first_name: string; last_name: string; email: string; phone: string; resume: string }) => {
    const data = await axiosClient.post<any, any>(API_ENDPOINTS.RECRUITMENT.PUBLIC_APPLY, applicationData);
    return data;
  },

  getAdminJobs: async (): Promise<JobVacancy[]> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.RECRUITMENT.ADMIN_JOBS);
    return Array.isArray(data) ? data : (data.results || []);
  },

  getAdminApplications: async (): Promise<CandidateApplication[]> => {
    const data = await axiosClient.get<any, any>(API_ENDPOINTS.RECRUITMENT.ADMIN_APPLICATIONS);
    return Array.isArray(data) ? data : (data.results || []);
  },

  updateApplicationStage: async (applicationId: number, stage: string): Promise<CandidateApplication> => {
    const data = await axiosClient.patch<any, any>(`${API_ENDPOINTS.RECRUITMENT.ADMIN_APPLICATIONS}${applicationId}/`, { stage });
    return data;
  },
};

export default recruitmentService;
