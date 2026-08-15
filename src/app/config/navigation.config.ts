export interface NavItem {
  title: string;
  path: string;
  icon?: string;
  roles?: string[];
  permissions?: string[];
  children?: NavItem[];
}

export const SIDEBAR_NAV: Record<string, NavItem[]> = {
  ADMIN: [
    { title: "Dashboard", path: "/admin/dashboard", icon: "LayoutDashboard" },
    { title: "User Management", path: "/admin/users", icon: "Users" },
    { title: "Roles & Rules", path: "/admin/roles", icon: "ShieldAlert" },
    { title: "Permissions Map", path: "/admin/permissions", icon: "Key" },
    { title: "Audit Trail", path: "/admin/audit-logs", icon: "History" },
    { title: "Platform Settings", path: "/admin/settings", icon: "Settings" },
  ],
  BDM: [
    { title: "Dashboard", path: "/bdm/dashboard", icon: "LayoutDashboard" },
    { title: "Leads Funnel", path: "/bdm/leads", icon: "Contact2" },
    { title: "Opportunities", path: "/bdm/opportunities", icon: "TrendingUp" },
    { title: "RFP Engine", path: "/bdm/rfp", icon: "FileText" },
    { title: "Cost Estimator", path: "/bdm/estimator", icon: "Calculator" },
  ],
  CLIENT: [
    { title: "Dashboard", path: "/portal/dashboard", icon: "LayoutDashboard" },
    { title: "My Projects", path: "/portal/projects", icon: "Briefcase" },
    { title: "Requests Queue", path: "/portal/requests", icon: "MessageSquareCode" },
    { title: "Docs Vault", path: "/portal/documents", icon: "FolderLock" },
    { title: "User Profile", path: "/portal/profile", icon: "UserCircle" },
  ],
  SALES_EXECUTIVE: [
    { title: "CRM Dashboard", path: "/crm/dashboard", icon: "LayoutDashboard" },
    { title: "Leads Funnel", path: "/crm/leads", icon: "Contact2" },
    { title: "Contacts Directory", path: "/crm/contacts", icon: "Users" },
    { title: "Company Registry", path: "/crm/companies", icon: "Briefcase" },
    { title: "Activity Feed", path: "/crm/activities", icon: "History" },
  ],
  HR_MANAGER: [
    { title: "Recruitment Desk", path: "/recruitment/dashboard", icon: "LayoutDashboard" },
    { title: "Jobs Board", path: "/recruitment/jobs", icon: "Briefcase" },
    { title: "Candidates Pool", path: "/recruitment/candidates", icon: "Users" },
    { title: "Applications Map", path: "/recruitment/applications", icon: "FileText" },
  ],
  CONTENT_MANAGER: [
    { title: "CMS Control", path: "/cms/dashboard", icon: "LayoutDashboard" },
    { title: "Services Catalog", path: "/cms/services", icon: "Briefcase" },
    { title: "Case Studies", path: "/cms/case-studies", icon: "FileText" },
    { title: "Blog Engine", path: "/cms/blog", icon: "MessageSquareCode" },
  ],
  SUPPORT_EXECUTIVE: [
    { title: "Support Desk", path: "/support/dashboard", icon: "LayoutDashboard" },
    { title: "Tickets Queue", path: "/support/tickets", icon: "History" },
  ],
};

export const PUBLIC_NAV = [
  { title: "ABOUT", path: "/#about" },
  { title: "CAPABILITIES", path: "/#capabilities" },
  { title: "INDUSTRIES", path: "/#industries" },
  { title: "WORK", path: "/#work" },
  { title: "INSIGHTS", path: "/#insights" },
];
export default SIDEBAR_NAV;
