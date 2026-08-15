import React from "react";
import { Route, Switch } from "wouter";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../features/recruitment/pages/Dashboard";
import Jobs from "../features/recruitment/pages/Jobs";
import Candidates from "../features/recruitment/pages/Candidates";
import Applications from "../features/recruitment/pages/Applications";

export const RecruitmentRoutes: React.FC = () => {
  return (
    <AdminLayout>
      <Switch>
        <Route path="/recruitment/dashboard" component={Dashboard} />
        <Route path="/recruitment/jobs" component={Jobs} />
        <Route path="/recruitment/candidates" component={Candidates} />
        <Route path="/recruitment/applications" component={Applications} />
      </Switch>
    </AdminLayout>
  );
};

export default RecruitmentRoutes;
