import React from "react";
import { Route, Switch } from "wouter";
import AdminLayout from "../layouts/AdminLayout";
import CmsDashboard from "../features/cms/pages/CmsDashboard";
import Services from "../features/cms/pages/Services";
import CaseStudies from "../features/cms/pages/CaseStudies";
import Blog from "../features/cms/pages/Blog";

export const CmsConsoleRoutes: React.FC = () => {
  return (
    <AdminLayout>
      <Switch>
        <Route path="/cms/dashboard" component={CmsDashboard} />
        <Route path="/cms/services" component={Services} />
        <Route path="/cms/case-studies" component={CaseStudies} />
        <Route path="/cms/blog" component={Blog} />
      </Switch>
    </AdminLayout>
  );
};

export default CmsConsoleRoutes;
