import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { publicService } from "../../services/publicService";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const rfpSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(2, "Company name is required"),
  rfpTitle: z.string().min(5, "RFP title is required"),
  description: z.string().min(20, "Please provide a brief description"),
});

type RfpFormValues = z.infer<typeof rfpSchema>;

export const RfpPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<RfpFormValues>({
    resolver: zodResolver(rfpSchema)
  });

  const onSubmit = async (data: RfpFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await publicService.submitRfp({ ...data, file });
      setSuccess(true);
    } catch (err: any) {
      setSubmitError(err.message || "Failed to submit RFP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background pt-24 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest mb-6">SUBMIT RFP</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-6">
            Request for <span className="text-muted-foreground">Proposal.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Submit your RFP documentation securely. Our engineering and strategy teams will review it and respond with a comprehensive proposal.
          </p>
        </div>

        <div className="bg-card border border-border/40 rounded-lg p-8 md:p-12">
          {success ? (
            <div className="py-12 flex flex-col items-center text-center">
              <CheckCircle2 className="h-16 w-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">RFP Submitted</h3>
              <p className="text-muted-foreground max-w-md">
                Thank you for submitting your RFP. We have received your documents and will review them shortly.
              </p>
              <button 
                onClick={() => setSuccess(false)} 
                className="mt-8 text-primary hover:underline text-sm font-medium"
              >
                Submit another RFP
              </button>
            </div>
          ) : (
            <>
              {submitError && (
                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 text-destructive rounded flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />
                  <p className="text-sm">{submitError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Full Name <span className="text-destructive">*</span></label>
                    <input {...register("name")} className="w-full p-3 rounded-md bg-background border border-input focus:ring-1 focus:ring-primary" />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Work Email <span className="text-destructive">*</span></label>
                    <input {...register("email")} type="email" className="w-full p-3 rounded-md bg-background border border-input focus:ring-1 focus:ring-primary" />
                    {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Company <span className="text-destructive">*</span></label>
                    <input {...register("company")} className="w-full p-3 rounded-md bg-background border border-input focus:ring-1 focus:ring-primary" />
                    {errors.company && <p className="text-xs text-destructive">{errors.company.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">RFP Title <span className="text-destructive">*</span></label>
                    <input {...register("rfpTitle")} className="w-full p-3 rounded-md bg-background border border-input focus:ring-1 focus:ring-primary" />
                    {errors.rfpTitle && <p className="text-xs text-destructive">{errors.rfpTitle.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Brief Description <span className="text-destructive">*</span></label>
                  <textarea rows={4} {...register("description")} className="w-full p-3 rounded-md bg-background border border-input focus:ring-1 focus:ring-primary resize-none" />
                  {errors.description && <p className="text-xs text-destructive">{errors.description.message}</p>}
                </div>
                
                <div className="space-y-2 border-t border-border/40 pt-6">
                  <label className="text-sm font-medium text-muted-foreground">Upload RFP Documents</label>
                  <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="w-full p-3 rounded-md bg-background border border-input focus:ring-1 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary" />
                  <p className="text-xs text-muted-foreground mt-1">Accepted formats: PDF, DOCX, ZIP (Max 10MB)</p>
                </div>

                <div className="pt-4 flex justify-end">
                  <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50">
                    {isSubmitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : "Submit RFP"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RfpPage;
