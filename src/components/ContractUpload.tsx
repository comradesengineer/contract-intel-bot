import { useState } from "react";
import { Upload, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface ContractUploadProps {
  onAnalysisComplete: (data: any) => void;
}

export const ContractUpload = ({ onAnalysisComplete }: ContractUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file",
        variant: "destructive",
      });
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    try {
      // For now, simulate analysis - we'll add real AI integration next
      setTimeout(() => {
        const mockData = {
          SLAs: [
            "Response time: 2 hours for critical issues",
            "Resolution time: 24 hours for standard issues",
            "99.9% uptime guarantee",
          ],
          Obligations: {
            ServiceProvider: [
              "Provide 24/7 customer support",
              "Maintain data security standards",
              "Submit monthly performance reports",
            ],
            Client: [
              "Provide necessary access to systems",
              "Pay invoices within 30 days",
              "Designate primary point of contact",
            ],
          },
          Deliverables: [
            "Monthly performance reports",
            "Quarterly business reviews",
            "Annual security audit documentation",
          ],
          RenewalRules: [
            "Contract duration: 12 months",
            "Auto-renewal unless 60 days notice provided",
            "Price adjustment allowed annually based on CPI",
          ],
          RisksAndCompliance: [
            "Penalty: 5% of monthly fees for SLA breaches",
            "GDPR compliance required",
            "Regular security audits mandatory",
          ],
        };
        
        onAnalysisComplete(mockData);
        setIsAnalyzing(false);
        toast({
          title: "Analysis complete",
          description: "Contract has been successfully analyzed",
        });
      }, 3000);
    } catch (error) {
      toast({
        title: "Analysis failed",
        description: "There was an error analyzing your contract",
        variant: "destructive",
      });
      setIsAnalyzing(false);
    }
  };

  return (
    <Card className="p-8 shadow-[var(--shadow-card)]">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Upload Contract</h2>
          <p className="text-muted-foreground">
            Upload your PDF contract for AI-powered analysis
          </p>
        </div>

        <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="flex flex-col items-center gap-4">
              {file ? (
                <>
                  <FileText className="w-16 h-16 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <Upload className="w-16 h-16 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-muted-foreground">PDF files only</p>
                  </div>
                </>
              )}
            </div>
          </label>
        </div>

        <Button
          onClick={handleAnalyze}
          disabled={!file || isAnalyzing}
          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 transition-all shadow-[var(--shadow-soft)]"
          size="lg"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Analyzing Contract...
            </>
          ) : (
            "Analyze Contract"
          )}
        </Button>
      </div>
    </Card>
  );
};
