import React from "react";
import { Route, Switch } from "wouter";
import ClientLayout from "../layouts/ClientLayout";
import Dashboard from "../features/portal/pages/Dashboard";
import Projects from "../features/portal/pages/Projects";
import Requests from "../features/portal/pages/Requests";
import Documents from "../features/portal/pages/Documents";
import Profile from "../features/portal/pages/Profile";

export const ClientRoutes: React.FC = () => {
  return (
    <ClientLayout>
      <Switch>
        <Route path="/portal/dashboard" component={Dashboard} />
        <Route path="/portal/projects" component={Projects} />
        <Route path="/portal/requests" component={Requests} />
        <Route path="/portal/documents" component={Documents} />
        <Route path="/portal/profile" component={Profile} />
      </Switch>
    </ClientLayout>
  );
};

export default ClientRoutes;
