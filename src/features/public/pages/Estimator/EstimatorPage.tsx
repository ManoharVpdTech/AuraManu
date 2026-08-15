import React, { useState } from "react";
import { publicService } from "../../services/publicService";
import { Loader2 } from "lucide-react";

export const EstimatorPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [estimate, setEstimate] = useState<string | null>(null);
  
  const [type, setType] = useState("web");
  const [size, setSize] = useState("small");
  
  const handleEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await publicService.calculateEstimate({ type, size });
      setEstimate(result.estimatedCost);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background pt-24 pb-24 min-h-[80vh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-widest mb-6">PROJECT ESTIMATOR</p>
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Calculate an Estimate</h1>
          <p className="text-muted-foreground">Select your project parameters to get a rough estimate of the engagement.</p>
        </div>
        
        <div className="bg-card border border-border/40 p-8 rounded-lg">
          <form onSubmit={handleEstimate} className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-medium">Project Type</label>
              <select value={type} onChange={(e) => setType(e.target.value)} className="w-full p-3 rounded-md bg-background border border-input focus:ring-1 focus:ring-primary">
                <option value="web">Web Application</option>
                <option value="mobile">Mobile Application</option>
                <option value="data">Data Pipeline / Architecture</option>
                <option value="ai">AI / ML Model Integration</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-sm font-medium">Project Size/Complexity</label>
              <select value={size} onChange={(e) => setSize(e.target.value)} className="w-full p-3 rounded-md bg-background border border-input focus:ring-1 focus:ring-primary">
                <option value="small">Small (1-3 months)</option>
                <option value="medium">Medium (3-6 months)</option>
                <option value="large">Large (6-12 months)</option>
                <option value="enterprise">Enterprise (12+ months)</option>
              </select>
            </div>
            
            <button type="submit" disabled={loading} className="w-full h-11 rounded-md bg-primary font-medium text-primary-foreground hover:bg-primary/90 flex items-center justify-center disabled:opacity-50">
              {loading ? <Loader2 className="animate-spin h-5 w-5" /> : "Calculate Estimate"}
            </button>
          </form>
          
          {estimate && (
            <div className="mt-8 pt-8 border-t border-border/40 text-center animate-in fade-in slide-in-from-bottom-4">
              <p className="text-muted-foreground text-sm font-mono mb-2">ESTIMATED RANGE</p>
              <p className="text-4xl font-bold text-primary">{estimate}</p>
              <p className="text-xs text-muted-foreground mt-4">*This is a rough estimate and does not constitute a formal quote.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EstimatorPage;
