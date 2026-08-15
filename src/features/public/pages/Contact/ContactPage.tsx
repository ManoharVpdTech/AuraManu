import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { publicService } from "../../services/publicService";
import { Mail, Phone, MapPin, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(5, "Phone number is required"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await publicService.submitContactForm(data);
      setSuccess(true);
    } catch (err: any) {
      setSubmitError(err.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background pt-24 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-24">
          
          {/* Left Column - Info */}
          <div className="md:col-span-2">
            <p className="text-primary font-mono text-sm tracking-widest mb-6">CONTACT US</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-8">
              Start the <span className="text-muted-foreground">conversation.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Whether you're looking to transform your enterprise or explore our capabilities, our team is ready to help.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 mt-1"><MapPin className="h-6 w-6 text-primary" /></div>
                <div>
                  <h3 className="font-semibold mb-1">Global Headquarters</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    100 Innovation Way<br />
                    Suite 400<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-1"><Mail className="h-6 w-6 text-primary" /></div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm">hello@aurexion.io</p>
                  <p className="text-muted-foreground text-sm">support@aurexion.io</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-1"><Phone className="h-6 w-6 text-primary" /></div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:col-span-3">
            <div className="bg-card border border-border/40 rounded-lg p-8 md:p-10">
              {success ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <CheckCircle2 className="h-16 w-16 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Message Sent</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. A member of our team will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)} 
                    className="mt-8 text-primary hover:underline text-sm font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  
                  {submitError && (
                    <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 text-destructive rounded flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />
                      <p className="text-sm">{submitError}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Full Name</label>
                        <input 
                          id="name" 
                          {...register("name")} 
                          className={`w-full p-3 rounded-md bg-background border ${errors.name ? 'border-destructive' : 'border-input'} focus:outline-none focus:ring-1 focus:ring-primary`} 
                        />
                        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Work Email</label>
                        <input 
                          id="email" 
                          type="email"
                          {...register("email")} 
                          className={`w-full p-3 rounded-md bg-background border ${errors.email ? 'border-destructive' : 'border-input'} focus:outline-none focus:ring-1 focus:ring-primary`} 
                        />
                        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">Phone</label>
                        <input 
                          id="phone" 
                          {...register("phone")} 
                          className={`w-full p-3 rounded-md bg-background border ${errors.phone ? 'border-destructive' : 'border-input'} focus:outline-none focus:ring-1 focus:ring-primary`} 
                        />
                        {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                        <input 
                          id="subject" 
                          {...register("subject")} 
                          className={`w-full p-3 rounded-md bg-background border ${errors.subject ? 'border-destructive' : 'border-input'} focus:outline-none focus:ring-1 focus:ring-primary`} 
                        />
                        {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-muted-foreground">How can we help?</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        {...register("message")} 
                        className={`w-full p-3 rounded-md bg-background border ${errors.message ? 'border-destructive' : 'border-input'} focus:outline-none focus:ring-1 focus:ring-primary resize-none`} 
                      />
                      {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
