import { AppLayout } from "@/components/layout/AppLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ActivityItem } from "@/components/dashboard/ActivityItem";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  TrendingUp,
  TrendingDown,
  Package, 
  AlertTriangle,
  CheckCircle2,
  Clock,
  Users,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const lateTasks = [
  { title: "Rapport Q4", assignee: "Marie D.", daysLate: 3 },
  { title: "Audit inventaire", assignee: "Pierre L.", daysLate: 1 },
  { title: "Mise à jour CRM", assignee: "Sophie M.", daysLate: 5 },
];

const criticalStock = [
  { product: "Produit Alpha", quantity: 8, threshold: 20 },
  { product: "Composant X12", quantity: 3, threshold: 15 },
  { product: "Emballage Premium", quantity: 45, threshold: 100 },
];

const teamActivity = [
  { icon: <CheckCircle2 className="w-4 h-4" />, title: "Marie a terminé", description: "Analyse financière Q4", time: "Il y a 30 min", type: "success" as const },
  { icon: <Clock className="w-4 h-4" />, title: "Pierre travaille sur", description: "Préparation commande #1234", time: "Il y a 1h", type: "info" as const },
  { icon: <Users className="w-4 h-4" />, title: "Réunion équipe", description: "Point hebdomadaire planifié", time: "Dans 2h", type: "default" as const },
  { icon: <AlertTriangle className="w-4 h-4" />, title: "Alerte stock", description: "Produit Beta sous le seuil", time: "Il y a 2h", type: "warning" as const },
];

export default function PMEDashboard() {
  return (
    <AppLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            Dashboard PME
          </h1>
          <p className="text-muted-foreground">
            Vue d'ensemble de votre activité
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Ventes du mois"
            value="32,450€"
            icon={<DollarSign className="w-5 h-5" />}
            trend={{ value: 15, isPositive: true }}
          />
          <StatsCard
            title="Dépenses"
            value="18,200€"
            icon={<TrendingDown className="w-5 h-5" />}
            trend={{ value: 8, isPositive: false }}
          />
          <StatsCard
            title="Bénéfice net"
            value="14,250€"
            icon={<TrendingUp className="w-5 h-5" />}
            trend={{ value: 22, isPositive: true }}
          />
          <StatsCard
            title="Stock critique"
            value="3"
            icon={<Package className="w-5 h-5" />}
            className="border-l-4 border-l-destructive"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Late Tasks */}
          <div className="bg-card rounded-xl border border-border shadow-sm">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="font-display font-semibold text-lg flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                Tâches en retard
              </h2>
              <span className="px-2 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-semibold">
                {lateTasks.length}
              </span>
            </div>
            <div className="divide-y divide-border">
              {lateTasks.map((task, index) => (
                <div key={index} className="p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{task.title}</p>
                      <p className="text-sm text-muted-foreground">{task.assignee}</p>
                    </div>
                    <span className="px-2 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-medium">
                      +{task.daysLate}j
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-border">
              <Button variant="ghost" className="w-full" asChild>
                <Link to="/pme/tasks">
                  Voir toutes les tâches
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Critical Stock */}
          <div className="bg-card rounded-xl border border-border shadow-sm">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="font-display font-semibold text-lg flex items-center gap-2">
                <Package className="w-5 h-5 text-warning" />
                Stock critique
              </h2>
              <span className="px-2 py-1 rounded-full bg-warning/10 text-warning text-xs font-semibold">
                {criticalStock.length}
              </span>
            </div>
            <div className="divide-y divide-border">
              {criticalStock.map((item, index) => (
                <div key={index} className="p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-foreground">{item.product}</p>
                    <span className={cn(
                      "text-sm font-semibold",
                      item.quantity < item.threshold * 0.2 ? "text-destructive" : "text-warning"
                    )}>
                      {item.quantity} unités
                    </span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full",
                        item.quantity < item.threshold * 0.2 ? "bg-destructive" : "bg-warning"
                      )}
                      style={{ width: `${(item.quantity / item.threshold) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-border">
              <Button variant="ghost" className="w-full" asChild>
                <Link to="/pme/stock">
                  Gérer le stock
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Team Activity */}
          <div className="bg-card rounded-xl border border-border shadow-sm">
            <div className="p-6 border-b border-border">
              <h2 className="font-display font-semibold text-lg flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Activité équipe
              </h2>
            </div>
            <div className="p-2">
              {teamActivity.map((activity, index) => (
                <ActivityItem key={index} {...activity} />
              ))}
            </div>
          </div>
        </div>

        {/* Alerts Section */}
        <div className="bg-card rounded-xl border border-border shadow-sm p-6">
          <h2 className="font-display font-semibold text-lg mb-4">
            Alertes automatiques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <span className="font-semibold text-destructive">Critique</span>
              </div>
              <p className="text-sm text-foreground">
                3 produits en rupture imminente sous 5 jours
              </p>
            </div>
            <div className="p-4 rounded-xl bg-warning/5 border border-warning/20">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-warning" />
                <span className="font-semibold text-warning">Attention</span>
              </div>
              <p className="text-sm text-foreground">
                2 factures clients impayées depuis +30 jours
              </p>
            </div>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">Opportunité</span>
              </div>
              <p className="text-sm text-foreground">
                Croissance +15% ce mois, recommandation de réapprovisionnement
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
