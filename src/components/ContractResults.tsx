import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Users, 
  FileCheck, 
  Calendar, 
  AlertTriangle,
  CheckCircle2 
} from "lucide-react";

interface ContractResultsProps {
  data: {
    SLAs: string[];
    Obligations: {
      ServiceProvider: string[];
      Client: string[];
    };
    Deliverables: string[];
    RenewalRules: string[];
    RisksAndCompliance: string[];
  };
}

export const ContractResults = ({ data }: ContractResultsProps) => {
  const sections = [
    {
      title: "Service Level Agreements",
      icon: Clock,
      items: data.SLAs,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Service Provider Obligations",
      icon: Users,
      items: data.Obligations.ServiceProvider,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Client Obligations",
      icon: CheckCircle2,
      items: data.Obligations.Client,
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      title: "Deliverables",
      icon: FileCheck,
      items: data.Deliverables,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Renewal Rules",
      icon: Calendar,
      items: data.RenewalRules,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Risks & Compliance",
      icon: AlertTriangle,
      items: data.RisksAndCompliance,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Analysis Results</h2>
        <p className="text-muted-foreground">
          AI-extracted insights from your contract
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <Card
              key={idx}
              className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${section.bgColor}`}>
                  <Icon className={`w-5 h-5 ${section.color}`} />
                </div>
                <h3 className="font-semibold text-lg text-foreground">
                  {section.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-card-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Badge variant="secondary" className="mt-4">
                {section.items.length} {section.items.length === 1 ? 'item' : 'items'}
              </Badge>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
