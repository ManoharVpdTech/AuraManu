import React, { useState } from "react";
import { useParams, Link, useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useJobDetails } from "../../hooks/usePublicContent";
import { publicService } from "../../services/publicService";
import { ArrowLeft, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

const applySchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email address is required"),
  phone: z.string()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long")
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]+$/, "Please enter a valid phone number (digits and optional country code only)"),
  coverLetter: z.string().optional(),
});

type ApplyFormValues = z.infer<typeof applySchema>;

export const ApplyPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const id = params?.id || "";
  const { data: job, loading: jobLoading, error: jobError } = useJobDetails(id);
  const [, setLocation] = useLocation();
  
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema)
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 5 * 1024 * 1024) { // 5MB limit
        setFileError("File size must be less than 5MB");
        setFile(null);
      } else {
        setFileError("");
        setFile(selectedFile);
      }
    }
  };

  const onSubmit = async (data: ApplyFormValues) => {
    if (!file) {
      setFileError("Resume is required");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      await publicService.applyForJob({
        jobId: id,
        ...data,
        resume: file,
      });
      setSuccess(true);
    } catch (err: any) {
      const res = err.response?.data;
      let errorMsg = "Failed to submit application. Please check your details and try again.";
      
      if (typeof res === "string") {
        errorMsg = res;
      } else if (res?.message) {
        errorMsg = res.message;
      } else if (res?.detail) {
        errorMsg = res.detail;
      } else if (res && typeof res === "object") {
        const errorList: string[] = [];
        for (const [key, value] of Object.entries(res)) {
          const formattedKey = key.replace(/_/g, " ").toUpperCase();
          const valMsg = Array.isArray(value) ? value.join(", ") : String(value);
          errorList.push(`${formattedKey}: ${valMsg}`);
        }
        if (errorList.length > 0) {
          errorMsg = errorList.join(" | ");
        }
      } else if (err.message) {
        errorMsg = err.message;
      }
      
      setSubmitError(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (jobLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (jobError || !job) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <AlertCircle className="h-12 w-12 text-destructive mb-4" />
        <h2 className="text-2xl font-bold mb-2">Job Not Found</h2>
        <Link href="/careers" className="text-primary hover:underline flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Careers
        </Link>
      </div>
    );
  }

  if (success) {
    return (
      <div className="bg-background pt-24 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <div className="bg-card border border-border/40 rounded-lg p-12 flex flex-col items-center">
            <CheckCircle2 className="h-16 w-16 text-primary mb-6" />
            <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for applying for the <strong>{job.title}</strong> position. Our team will review your application and get back to you shortly.
            </p>
            <Link href="/careers" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Return to Careers
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background pt-32 sm:pt-36 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Link href={`/careers/${id}`} className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> BACK TO JOB DESCRIPTION
        </Link>
        
        <div className="mb-10">
          <h1 
            style={{ 
              fontSize: "clamp(1.85rem, 3.2vw, 2.35rem)", 
              lineHeight: "1.25", 
              fontWeight: 700, 
              letterSpacing: "-0.015em", 
              margin: "0.25rem 0 0.75rem",
              color: "#f8fafc",
              maxWidth: "100%" 
            }}
          >
            Apply for {job.title}
          </h1>
          <p className="text-muted-foreground">Please fill out the form below to submit your application.</p>
        </div>

        {submitError && (
          <div className="mb-8 p-4 bg-destructive/10 border border-destructive/20 text-destructive rounded flex items-start gap-3">
            <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />
            <p>{submitError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Full Name <span className="text-destructive">*</span></label>
              <input 
                id="name" 
                {...register("name")} 
                className={`w-full p-3 rounded-md bg-background border ${errors.name ? 'border-destructive' : 'border-input'} focus:outline-none focus:ring-1 focus:ring-primary`} 
                placeholder="Jane Doe"
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email Address <span className="text-destructive">*</span></label>
              <input 
                id="email" 
                type="email"
                {...register("email")} 
                className={`w-full p-3 rounded-md bg-background border ${errors.email ? 'border-destructive' : 'border-input'} focus:outline-none focus:ring-1 focus:ring-primary`} 
                placeholder="jane@example.com"
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">Phone Number <span className="text-destructive">*</span></label>
            <input 
              id="phone" 
              {...register("phone")} 
              className={`w-full p-3 rounded-md bg-background border ${errors.phone ? 'border-destructive' : 'border-input'} focus:outline-none focus:ring-1 focus:ring-primary`} 
              placeholder="+1 (555) 000-0000"
            />
            {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="resume" className="text-sm font-medium">Resume (PDF, Word) <span className="text-destructive">*</span></label>
            <input 
              id="resume" 
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className={`w-full p-3 rounded-md bg-background border ${fileError ? 'border-destructive' : 'border-input'} focus:outline-none focus:ring-1 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20`} 
            />
            {fileError && <p className="text-xs text-destructive">{fileError}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="coverLetter" className="text-sm font-medium">Cover Letter (Optional)</label>
            <textarea 
              id="coverLetter" 
              rows={6}
              {...register("coverLetter")} 
              className="w-full p-3 rounded-md bg-background border border-input focus:outline-none focus:ring-1 focus:ring-primary resize-none" 
              placeholder="Tell us why you're a great fit for this role..."
            />
          </div>

          <div className="pt-4 border-t border-border/40">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full md:w-auto inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...</>
              ) : (
                "Submit Application"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
