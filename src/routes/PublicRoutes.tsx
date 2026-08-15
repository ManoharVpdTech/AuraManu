import React from "react";
import { Route, Switch, Redirect } from "wouter";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../features/cms/pages/Home";
import AboutPage from "../features/public/pages/About/AboutPage";
import ServicesPage from "../features/public/pages/Services/ServicesPage";
import ServiceDetailsPage from "../features/public/pages/Services/ServiceDetailsPage";
import IndustriesPage from "../features/public/pages/Industries/IndustriesPage";
import IndustryDetailsPage from "../features/public/pages/Industries/IndustryDetailsPage";
import CaseStudiesPage from "../features/public/pages/CaseStudies/CaseStudiesPage";
import CaseStudyDetailsPage from "../features/public/pages/CaseStudies/CaseStudyDetailsPage";
import CareersPage from "../features/public/pages/Careers/CareersPage";
import JobDetailsPage from "../features/public/pages/Careers/JobDetailsPage";
import ApplyPage from "../features/public/pages/Careers/ApplyPage";
import InsightsPage from "../features/public/pages/Insights/InsightsPage";
import ArticleDetailPage from "../features/public/pages/Insights/ArticleDetailPage";
import ContactPage from "../features/public/pages/Contact/ContactPage";
import RequestQuotePage from "../features/public/pages/RequestQuote/RequestQuotePage";
import RfpPage from "../features/public/pages/Rfp/RfpPage";
import EstimatorPage from "../features/public/pages/Estimator/EstimatorPage";
import NotFoundPage from "../features/public/pages/NotFound/NotFoundPage";

export const PublicRoutes: React.FC = () => {
  return (
    <PublicLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={AboutPage} />
        
        <Route path="/services" component={ServicesPage} />
        <Route path="/services/:slug" component={ServiceDetailsPage} />
        
        <Route path="/industries" component={IndustriesPage} />
        <Route path="/industries/:slug" component={IndustryDetailsPage} />
        
        <Route path="/case-studies" component={CaseStudiesPage} />
        <Route path="/case-studies/:slug" component={CaseStudyDetailsPage} />
        
        <Route path="/careers" component={CareersPage} />
        <Route path="/careers/:id" component={JobDetailsPage} />
        <Route path="/careers/:id/apply" component={ApplyPage} />
        
        <Route path="/insights" component={InsightsPage} />
        <Route path="/insights/:slug" component={ArticleDetailPage} />
        <Route path="/blog"><Redirect to="/insights" /></Route>
        
        <Route path="/contact" component={ContactPage} />
        <Route path="/request-quote" component={RequestQuotePage} />
        <Route path="/rfp" component={RfpPage} />
        <Route path="/estimator" component={EstimatorPage} />
        
        {/* Default route inside PublicLayout for unmatched routes */}
        <Route component={NotFoundPage} />
      </Switch>
    </PublicLayout>
  );
};

export default PublicRoutes;
