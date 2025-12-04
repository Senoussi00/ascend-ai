import { AppLayout } from "@/components/layout/AppLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { AIRecommendation } from "@/components/dashboard/AIRecommendation";
import { ProgressWidget } from "@/components/dashboard/ProgressWidget";
import { ActivityItem } from "@/components/dashboard/ActivityItem";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  TrendingUp, 
  Users, 
  Package, 
  FileText, 
  Plus,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

const startupProgress = [
  { label: "Business Plan", completed: true },
  { label: "Étude de marché", completed: true },
  { label: "MVP défini", completed: true },
  { label: "Roadmap 90 jours", completed: false },
  { label: "Pitch Deck", completed: false },
  { label: "Prévisions financières", completed: false },
];

const recommendations = [
  {
    title: "Vos dépenses marketing ont augmenté de 30%",
    description: "Analysez le ROI de vos campagnes pour optimiser votre budget.",
    category: "finance" as const,
    priority: "high" as const,
  },
  {
    title: "Stock critique: Produit Alpha",
    description: "Il vous reste 12 unités. Recommandation: commander 50 unités.",
    category: "stock" as const,
    priority: "high" as const,
  },
  {
    title: "2 tâches en retard cette semaine",
    description: "Réassignez ou replanifiez pour maintenir le rythme.",
    category: "rh" as const,
    priority: "medium" as const,
  },
];

const activities = [
  {
    icon: <CheckCircle2 className="w-4 h-4" />,
    title: "Tâche complétée",
    description: "Mise à jour du pitch deck - Slide 3",
    time: "Il y a 2h",
    type: "success" as const,
  },
  {
    icon: <AlertTriangle className="w-4 h-4" />,
    title: "Alerte stock",
    description: "Produit Beta en rupture dans 5 jours",
    time: "Il y a 3h",
    type: "warning" as const,
  },
  {
    icon: <DollarSign className="w-4 h-4" />,
    title: "Nouvelle vente",
    description: "Commande #1234 - 2,450€",
    time: "Il y a 5h",
    type: "success" as const,
  },
  {
    icon: <Users className="w-4 h-4" />,
    title: "Nouveau membre",
    description: "Marie Dupont a rejoint l'équipe",
    time: "Hier",
    type: "info" as const,
  },
];

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground">
              Bonjour, Alexandre 👋
            </h1>
            <p className="text-muted-foreground mt-1">
              Voici un aperçu de votre activité aujourd'hui
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link to="/startup/business-plan">
                <FileText className="w-4 h-4 mr-2" />
                Créer un business plan
              </Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/pme/tasks">
                <Plus className="w-4 h-4 mr-2" />
                Nouvelle tâche
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Progression Startup"
            value="50%"
            icon={<Rocket className="w-5 h-5" />}
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="Chiffre d'affaires"
            value="24,500€"
            icon={<TrendingUp className="w-5 h-5" />}
            trend={{ value: 8, isPositive: true }}
          />
          <StatsCard
            title="Équipe"
            value="12"
            icon={<Users className="w-5 h-5" />}
            trend={{ value: 2, isPositive: true }}
          />
          <StatsCard
            title="Produits en stock"
            value="156"
            icon={<Package className="w-5 h-5" />}
            trend={{ value: 5, isPositive: false }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Progress Widget */}
          <ProgressWidget
            title="Progression Startup"
            items={startupProgress}
            className="lg:col-span-1"
          />

          {/* Finance Chart Placeholder */}
          <div className="lg:col-span-2 bg-card rounded-xl p-6 border border-border shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-semibold text-foreground">
                Prévisions financières
              </h3>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/startup/budget">
                  Voir détails
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
            <div className="h-64 flex items-center justify-center rounded-lg bg-gradient-to-br from-accent to-background border border-border">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground">Graphique des prévisions</p>
                <p className="text-sm text-muted-foreground/70">Runway: 18 mois</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Recommendations */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-semibold text-foreground">
                Recommandations IA
              </h3>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/ia-brain">
                  Voir tout
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
            <div className="space-y-3">
              {recommendations.map((rec, index) => (
                <AIRecommendation key={index} {...rec} />
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-semibold text-foreground">
                Activité récente
              </h3>
              <Button variant="ghost" size="sm">
                Voir tout
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="space-y-1">
              {activities.map((activity, index) => (
                <ActivityItem key={index} {...activity} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
