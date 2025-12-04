import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Plus, 
  Download,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  PieChart
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string;
}

const transactions: Transaction[] = [
  { id: "1", description: "Vente produit A", amount: 2450, type: "income", category: "Ventes", date: "15 Jan" },
  { id: "2", description: "Salaires", amount: -8500, type: "expense", category: "RH", date: "14 Jan" },
  { id: "3", description: "Abonnement SaaS", amount: -299, type: "expense", category: "Logiciels", date: "13 Jan" },
  { id: "4", description: "Prestation consulting", amount: 3200, type: "income", category: "Services", date: "12 Jan" },
  { id: "5", description: "Marketing Google Ads", amount: -1500, type: "expense", category: "Marketing", date: "10 Jan" },
  { id: "6", description: "Vente produit B", amount: 1890, type: "income", category: "Ventes", date: "8 Jan" },
];

const topCategories = [
  { name: "Salaires", amount: 8500, percentage: 45, color: "bg-primary" },
  { name: "Marketing", amount: 3200, percentage: 17, color: "bg-purple-400" },
  { name: "Logiciels", amount: 2100, percentage: 11, color: "bg-purple-300" },
  { name: "Loyer", amount: 2000, percentage: 10, color: "bg-purple-200" },
  { name: "Autres", amount: 3200, percentage: 17, color: "bg-muted" },
];

export default function Finances() {
  const [showAddModal, setShowAddModal] = useState(false);

  const totalIncome = transactions.filter(t => t.type === "income").reduce((acc, t) => acc + t.amount, 0);
  const totalExpenses = Math.abs(transactions.filter(t => t.type === "expense").reduce((acc, t) => acc + t.amount, 0));
  const balance = totalIncome - totalExpenses;

  return (
    <AppLayout>
      <div className="p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground mb-2">
                Finances PME
              </h1>
              <p className="text-muted-foreground">
                Suivez vos revenus et dépenses en temps réel
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Exporter
              </Button>
              <Button variant="hero" onClick={() => setShowAddModal(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Nouvelle transaction
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Revenus du mois</p>
                  <p className="text-3xl font-display font-bold text-foreground mt-2">
                    {totalIncome.toLocaleString()}€
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-success text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>+12% vs M-1</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-success/10">
                  <ArrowUpRight className="w-6 h-6 text-success" />
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Dépenses du mois</p>
                  <p className="text-3xl font-display font-bold text-foreground mt-2">
                    {totalExpenses.toLocaleString()}€
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-destructive text-sm">
                    <TrendingDown className="w-4 h-4" />
                    <span>+8% vs M-1</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-destructive/10">
                  <ArrowDownRight className="w-6 h-6 text-destructive" />
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Balance</p>
                  <p className={cn(
                    "text-3xl font-display font-bold mt-2",
                    balance >= 0 ? "text-success" : "text-destructive"
                  )}>
                    {balance >= 0 ? "+" : ""}{balance.toLocaleString()}€
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Projection Q1: +15K€
                  </p>
                </div>
                <div className="p-3 rounded-xl gradient-primary">
                  <DollarSign className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Transactions List */}
            <div className="lg:col-span-2 bg-card rounded-xl border border-border shadow-sm">
              <div className="p-6 border-b border-border">
                <h2 className="font-display font-semibold text-lg">
                  Transactions récentes
                </h2>
              </div>
              <div className="divide-y divide-border">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "p-2 rounded-lg",
                          transaction.type === "income" ? "bg-success/10" : "bg-destructive/10"
                        )}>
                          {transaction.type === "income" ? (
                            <ArrowUpRight className="w-4 h-4 text-success" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4 text-destructive" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{transaction.description}</p>
                          <p className="text-sm text-muted-foreground">
                            {transaction.category} • {transaction.date}
                          </p>
                        </div>
                      </div>
                      <span className={cn(
                        "font-semibold",
                        transaction.type === "income" ? "text-success" : "text-destructive"
                      )}>
                        {transaction.type === "income" ? "+" : ""}{transaction.amount.toLocaleString()}€
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-card rounded-xl border border-border shadow-sm">
              <div className="p-6 border-b border-border">
                <h2 className="font-display font-semibold text-lg flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-primary" />
                  Top catégories dépenses
                </h2>
              </div>
              <div className="p-6 space-y-4">
                {topCategories.map((category) => (
                  <div key={category.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{category.name}</span>
                      <span className="text-sm text-muted-foreground">{category.amount}€</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={cn("h-full rounded-full", category.color)}
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Projection */}
              <div className="p-6 border-t border-border">
                <div className="p-4 rounded-xl bg-accent">
                  <p className="text-sm font-medium text-accent-foreground mb-1">
                    Projection 3 mois
                  </p>
                  <p className="text-2xl font-display font-bold text-primary">
                    +45,000€
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Basé sur les tendances actuelles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
