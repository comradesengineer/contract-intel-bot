import { useState } from "react";
import { ContractUpload } from "@/components/ContractUpload";
import { ContractResults } from "@/components/ContractResults";
import { FileText, Sparkles } from "lucide-react";

const Index = () => {
  const [analysisData, setAnalysisData] = useState<any>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
              <FileText className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                Contract Intelligence
              </h1>
              <p className="text-xs text-muted-foreground">
                AI-Powered Contract Analysis
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Powered by AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Extract Key Insights from Contracts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your contract and let AI automatically identify SLAs, obligations, 
            deliverables, renewal terms, and compliance requirements.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16 max-w-6xl">
        {!analysisData ? (
          <div className="max-w-2xl mx-auto">
            <ContractUpload onAnalysisComplete={setAnalysisData} />
          </div>
        ) : (
          <div className="space-y-6">
            <ContractResults data={analysisData} />
            <div className="flex justify-center">
              <button
                onClick={() => setAnalysisData(null)}
                className="text-primary hover:text-primary/80 font-medium underline"
              >
                Analyze another contract
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Contract Intelligence. Streamline your contract review process.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
