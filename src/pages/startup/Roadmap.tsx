import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { 
  RefreshCcw, 
  Check,
  Clock,
  Target,
  AlertTriangle
} from "lucide-react";
import { cn } from "@/lib/utils";

type TimeFrame = "30" | "90" | "365";

interface RoadmapItem {
  week: string;
  objective: string;
  metrics: string[];
  tasks: string[];
  priority: "high" | "medium" | "low";
  completed: boolean;
}

const roadmapData: Record<TimeFrame, RoadmapItem[]> = {
  "30": [
    {
      week: "Semaine 1-2",
      objective: "Validation du MVP",
      metrics: ["10 beta testeurs", "NPS > 40"],
      tasks: ["Finaliser onboarding", "Corriger bugs critiques", "Setup analytics"],
      priority: "high",
      completed: true,
    },
    {
      week: "Semaine 3",
      objective: "Premiers retours clients",
      metrics: ["5 interviews", "3 témoignages"],
      tasks: ["Conduire interviews", "Documenter feedback", "Prioriser features"],
      priority: "high",
      completed: true,
    },
    {
      week: "Semaine 4",
      objective: "Itération produit v1.1",
      metrics: ["2 features livrées", "0 régression"],
      tasks: ["Développer feature A", "Tests QA", "Déploiement"],
      priority: "medium",
      completed: false,
    },
  ],
  "90": [
    {
      week: "Mois 1",
      objective: "Product-Market Fit",
      metrics: ["50 utilisateurs actifs", "Rétention 40%"],
      tasks: ["MVP complet", "Acquisition premiers clients", "Itérations rapides"],
      priority: "high",
      completed: false,
    },
    {
      week: "Mois 2",
      objective: "Croissance organique",
      metrics: ["100 utilisateurs", "20% MoM growth"],
      tasks: ["Programme referral", "Content marketing", "SEO"],
      priority: "high",
      completed: false,
    },
    {
      week: "Mois 3",
      objective: "Monétisation",
      metrics: ["10 clients payants", "5K€ MRR"],
      tasks: ["Pricing finalisé", "Billing system", "First sales"],
      priority: "medium",
      completed: false,
    },
  ],
  "365": [
    {
      week: "Q1",
      objective: "Traction initiale",
      metrics: ["100 clients", "25K€ MRR"],
      tasks: ["Équipe de 5", "Product v2.0", "Sales process"],
      priority: "high",
      completed: false,
    },
    {
      week: "Q2",
      objective: "Scale-up",
      metrics: ["300 clients", "75K€ MRR"],
      tasks: ["Hiring x3", "Expansion features", "Partenariats"],
      priority: "high",
      completed: false,
    },
    {
      week: "Q3",
      objective: "Expansion",
      metrics: ["500 clients", "150K€ MRR"],
      tasks: ["Internationalisation", "Enterprise tier", "Série A prep"],
      priority: "medium",
      completed: false,
    },
    {
      week: "Q4",
      objective: "Leadership marché",
      metrics: ["1000 clients", "300K€ MRR"],
      tasks: ["Série A close", "Team 20+", "Market leader"],
      priority: "medium",
      completed: false,
    },
  ],
};

const priorityStyles = {
  high: "border-l-destructive bg-destructive/5",
  medium: "border-l-warning bg-warning/5",
  low: "border-l-success bg-success/5",
};

export default function Roadmap() {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>("30");
  const [items, setItems] = useState(roadmapData);

  const toggleComplete = (weekIndex: number) => {
    setItems(prev => ({
      ...prev,
      [timeFrame]: prev[timeFrame].map((item, idx) => 
        idx === weekIndex ? { ...item, completed: !item.completed } : item
      )
    }));
  };

  return (
    <AppLayout>
      <div className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground mb-2">
                Roadmap Produit
              </h1>
              <p className="text-muted-foreground">
                Planifiez et suivez vos objectifs stratégiques
              </p>
            </div>
            <Button variant="outline">
              <RefreshCcw className="w-4 h-4 mr-2" />
              Régénérer roadmap
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 p-1 bg-muted rounded-xl mb-8 w-fit">
            {[
              { value: "30", label: "30 jours" },
              { value: "90", label: "90 jours" },
              { value: "365", label: "1 an" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setTimeFrame(tab.value as TimeFrame)}
                className={cn(
                  "px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  timeFrame === tab.value
                    ? "bg-card shadow-sm text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-6">
              {items[timeFrame].map((item, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "relative pl-16 animate-slide-up",
                    { "opacity-60": item.completed }
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className={cn(
                    "absolute left-4 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center",
                    item.completed 
                      ? "bg-success border-success" 
                      : "bg-card border-primary"
                  )}>
                    {item.completed && <Check className="w-3 h-3 text-success-foreground" />}
                  </div>

                  {/* Card */}
                  <div className={cn(
                    "bg-card rounded-xl p-6 border border-border shadow-sm border-l-4",
                    priorityStyles[item.priority]
                  )}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-sm font-medium text-primary">{item.week}</span>
                        <h3 className="text-lg font-display font-semibold text-foreground mt-1">
                          {item.objective}
                        </h3>
                      </div>
                      {item.priority === "high" && (
                        <span className="px-2 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-medium flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          Priorité haute
                        </span>
                      )}
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.metrics.map((metric, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm flex items-center gap-1"
                        >
                          <Target className="w-3 h-3" />
                          {metric}
                        </span>
                      ))}
                    </div>

                    {/* Tasks */}
                    <div className="space-y-2 mb-4">
                      {item.tasks.map((task, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {task}
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant={item.completed ? "outline" : "default"}
                      size="sm"
                      onClick={() => toggleComplete(index)}
                    >
                      {item.completed ? "Marquer non fait" : "Marquer comme fait"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
