import React from "react";
import { Route, Switch } from "wouter";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../features/crm/pages/Dashboard";
import Leads from "../features/crm/pages/Leads";
import Contacts from "../features/crm/pages/Contacts";
import Companies from "../features/crm/pages/Companies";
import Activities from "../features/crm/pages/Activities";

export const CrmRoutes: React.FC = () => {
  return (
    <AdminLayout>
      <Switch>
        <Route path="/crm/dashboard" component={Dashboard} />
        <Route path="/crm/leads" component={Leads} />
        <Route path="/crm/contacts" component={Contacts} />
        <Route path="/crm/companies" component={Companies} />
        <Route path="/crm/activities" component={Activities} />
      </Switch>
    </AdminLayout>
  );
};

export default CrmRoutes;
