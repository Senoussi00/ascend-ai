import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { AIRecommendation } from "@/components/dashboard/AIRecommendation";
import { 
  Brain, 
  TrendingUp,
  Zap,
  Target,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowRight,
  Filter
} from "lucide-react";
import { cn } from "@/lib/utils";

type FilterType = "all" | "finance" | "stock" | "rh" | "ventes" | "strategy";

const recommendations = [
  {
    title: "Optimisez vos dépenses marketing",
    description: "Vos dépenses Google Ads ont augmenté de 30% mais le ROI a baissé de 15%. Recommandation: réallouer 40% vers LinkedIn Ads.",
    category: "finance" as const,
    priority: "high" as const,
  },
  {
    title: "Rupture stock critique dans 5 jours",
    description: "Produit Alpha: 8 unités restantes, consommation moyenne 3/jour. Commander minimum 50 unités.",
    category: "stock" as const,
    priority: "high" as const,
  },
  {
    title: "2 tâches bloquent la roadmap",
    description: "Les tâches 'Audit sécurité' et 'Migration serveur' sont en retard. Impact: décalage livraison de 5 jours.",
    category: "rh" as const,
    priority: "medium" as const,
  },
  {
    title: "Opportunité d'upsell détectée",
    description: "3 clients Pro utilisent plus de 80% de leur quota. Proposer upgrade Enterprise avec 20% de réduction.",
    category: "ventes" as const,
    priority: "medium" as const,
  },
  {
    title: "Votre runway est de 14 mois",
    description: "Au rythme actuel, avec 180K€ en banque et un burn rate de 12K€/mois. Objectif recommandé: 18 mois.",
    category: "finance" as const,
    priority: "low" as const,
  },
  {
    title: "Tendance positive: acquisition clients",
    description: "+25% de nouveaux clients ce mois vs M-1. Canal le plus performant: Referral (45% des conversions).",
    category: "ventes" as const,
    priority: "low" as const,
  },
];

const problems = [
  { title: "Burn rate élevé", severity: "warning", description: "12K€/mois vs objectif 10K€" },
  { title: "Stock faible sur 3 produits", severity: "error", description: "Risque rupture sous 7 jours" },
  { title: "Taux de conversion en baisse", severity: "warning", description: "-5% vs mois dernier" },
];

const metrics = [
  { label: "Croissance", value: "+18%", trend: "up", color: "text-success" },
  { label: "Rentabilité", value: "12%", trend: "up", color: "text-success" },
  { label: "Vitesse exécution", value: "85%", trend: "stable", color: "text-primary" },
  { label: "Priorités respectées", value: "72%", trend: "down", color: "text-warning" },
];

export default function IABrain() {
  const [filter, setFilter] = useState<FilterType>("all");
  
  const filteredRecommendations = filter === "all" 
    ? recommendations 
    : recommendations.filter(r => r.category === filter);

  const filters: { value: FilterType; label: string }[] = [
    { value: "all", label: "Tous" },
    { value: "finance", label: "Finance" },
    { value: "stock", label: "Stock" },
    { value: "rh", label: "RH" },
    { value: "ventes", label: "Ventes" },
    { value: "strategy", label: "Stratégie" },
  ];

  return (
    <AppLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-2xl gradient-primary shadow-purple">
            <Brain className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground">
              Intelligence Globale IA
            </h1>
            <p className="text-muted-foreground">
              Vue hybride Startup + PME • Analyse complète de votre activité
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-card rounded-xl p-5 border border-border shadow-sm">
              <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
              <div className="flex items-center gap-2">
                <span className={cn("text-2xl font-display font-bold", metric.color)}>
                  {metric.value}
                </span>
                {metric.trend === "up" && <TrendingUp className="w-5 h-5 text-success" />}
                {metric.trend === "down" && <AlertTriangle className="w-5 h-5 text-warning" />}
                {metric.trend === "stable" && <Target className="w-5 h-5 text-primary" />}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Problems Detected */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl border border-border shadow-sm">
              <div className="p-6 border-b border-border">
                <h2 className="font-display font-semibold text-lg flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  Problèmes détectés
                </h2>
              </div>
              <div className="p-4 space-y-3">
                {problems.map((problem, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "p-4 rounded-xl border-l-4",
                      problem.severity === "error" 
                        ? "bg-destructive/5 border-l-destructive" 
                        : "bg-warning/5 border-l-warning"
                    )}
                  >
                    <p className="font-semibold text-foreground">{problem.title}</p>
                    <p className="text-sm text-muted-foreground">{problem.description}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-border">
                <Button variant="outline" className="w-full">
                  Voir l'historique IA
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl border border-border shadow-sm">
              <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="font-display font-semibold text-lg flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Recommandations IA
                </h2>
                <div className="flex gap-2 flex-wrap">
                  {filters.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setFilter(f.value)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                        filter === f.value
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      )}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-4 space-y-3">
                {filteredRecommendations.map((rec, index) => (
                  <AIRecommendation key={index} {...rec} />
                ))}
              </div>
              <div className="p-4 border-t border-border">
                <Button variant="hero" className="w-full">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Appliquer toutes les recommandations
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
