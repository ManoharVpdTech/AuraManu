import React from "react";
import { Route, Switch } from "wouter";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../features/administration/pages/Dashboard";
import Users from "../features/administration/pages/Users";
import Roles from "../features/administration/pages/Roles";
import Permissions from "../features/administration/pages/Permissions";
import Support from "../features/administration/pages/Support";
import Reports from "../features/administration/pages/Reports";
import AuditLogs from "../features/administration/pages/AuditLogs";
import Settings from "../features/administration/pages/Settings";

export const AdminRoutes: React.FC = () => {
  return (
    <AdminLayout>
      <Switch>
        <Route path="/admin/dashboard" component={Dashboard} />
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/roles" component={Roles} />
        <Route path="/admin/permissions" component={Permissions} />
        <Route path="/admin/support" component={Support} />
        <Route path="/admin/reports" component={Reports} />
        <Route path="/admin/audit-logs" component={AuditLogs} />
        <Route path="/admin/settings" component={Settings} />
      </Switch>
    </AdminLayout>
  );
};

export default AdminRoutes;
