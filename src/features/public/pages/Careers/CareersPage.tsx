import React from "react";
import { Link } from "wouter";
import { useJobs } from "../../hooks/usePublicContent";
import { ArrowUpRight, Loader2, AlertCircle, MapPin, Clock } from "lucide-react";

export const CareersPage: React.FC = () => {
  const { data: jobs, loading, error } = useJobs();

  return (
    <div className="bg-background pt-24 pb-24">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl">
          <p className="text-primary font-mono text-sm tracking-widest mb-6">CAREERS</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
            Build what <span className="text-muted-foreground">comes next.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Join a team of engineers, strategists, and problem-solvers designing intelligent systems for the world's most complex organizations.
          </p>
        </div>
      </header>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
        {loading ? (
          <div className="min-h-[20vh] flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="p-8 border border-destructive/20 bg-destructive/10 text-destructive rounded-md flex items-center gap-3">
            <AlertCircle className="h-5 w-5" />
            <p>Failed to load open positions. Please try again later.</p>
          </div>
        ) : !jobs || jobs.length === 0 ? (
          <div className="p-12 border border-border/40 bg-card rounded-md text-center">
            <p className="text-muted-foreground">No open positions currently available. Check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {jobs.map((job) => (
              <Link key={job.id} href={`/careers/${job.id}`} className="block group">
                <div className="p-6 md:p-8 border border-border/40 bg-card rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/50 transition-colors">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{job.department}</span>
                      {job.experience && <span className="text-xs font-mono text-muted-foreground border border-border/60 px-2 py-1 rounded">{job.experience}</span>}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center"><MapPin className="mr-1.5 h-4 w-4" /> {job.location}</span>
                      <span className="flex items-center"><Clock className="mr-1.5 h-4 w-4" /> {job.employmentType}</span>
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-muted group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default CareersPage;
