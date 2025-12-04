import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  User, 
  Mail, 
  Lock, 
  Bell, 
  Palette, 
  Globe, 
  CreditCard,
  Camera,
  Save
} from "lucide-react";
import { cn } from "@/lib/utils";

const coachPersonalities = [
  { id: "mentor", name: "Mentor", description: "Conseils stratégiques" },
  { id: "coach", name: "Coach", description: "Motivation et objectifs" },
  { id: "expert", name: "Expert", description: "Analyse approfondie" },
  { id: "ami", name: "Ami", description: "Approche décontractée" },
];

export default function Profile() {
  const [selectedCoach, setSelectedCoach] = useState("mentor");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("fr");

  return (
    <AppLayout>
      <div className="p-6 lg:p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-display font-bold text-foreground mb-2">
          Profil & Paramètres
        </h1>
        <p className="text-muted-foreground mb-8">
          Gérez vos informations personnelles et vos préférences
        </p>

        {/* Profile Section */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm mb-6">
          <h2 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            Informations personnelles
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-3xl font-bold">
                  AD
                </div>
                <button className="absolute bottom-0 right-0 p-2 rounded-full bg-card border border-border shadow-md hover:bg-accent transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Alexandre Dupont</p>
            </div>

            {/* Form */}
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Prénom</Label>
                  <Input defaultValue="Alexandre" />
                </div>
                <div className="space-y-2">
                  <Label>Nom</Label>
                  <Input defaultValue="Dupont" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input defaultValue="alexandre@smartbiz.fr" className="pl-10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm mb-6">
          <h2 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary" />
            Sécurité
          </h2>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Mot de passe actuel</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Nouveau mot de passe</Label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <Label>Confirmer</Label>
                <Input type="password" placeholder="••••••••" />
              </div>
            </div>
          </div>
        </div>

        {/* AI Coach Preferences */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm mb-6">
          <h2 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
            <Bell className="w-5 h-5 text-primary" />
            Préférences du coach IA
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {coachPersonalities.map((coach) => (
              <button
                key={coach.id}
                onClick={() => setSelectedCoach(coach.id)}
                className={cn(
                  "p-4 rounded-xl border-2 transition-all duration-200 text-left",
                  selectedCoach === coach.id
                    ? "border-primary bg-accent"
                    : "border-border hover:border-primary/30"
                )}
              >
                <p className="font-semibold text-foreground">{coach.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{coach.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm mb-6">
          <h2 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
            <Palette className="w-5 h-5 text-primary" />
            Préférences
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Notifications</p>
                  <p className="text-sm text-muted-foreground">Recevoir les alertes et recommandations</p>
                </div>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent">
                  <Palette className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Thème sombre</p>
                  <p className="text-sm text-muted-foreground">Activer le mode sombre</p>
                </div>
              </div>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Langue</p>
                  <p className="text-sm text-muted-foreground">Français</p>
                </div>
              </div>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-3 py-2 rounded-lg border border-border bg-background text-sm"
              >
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
          </div>
        </div>

        {/* Billing */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm mb-6">
          <h2 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" />
            Facturation
          </h2>
          
          <div className="flex items-center justify-between p-4 rounded-xl bg-accent border border-primary/20">
            <div>
              <p className="font-semibold text-primary">Plan Pro</p>
              <p className="text-sm text-muted-foreground">49€/mois • Renouvelé le 15 janvier</p>
            </div>
            <Button variant="outline" size="sm">Gérer</Button>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button variant="hero" size="lg">
            <Save className="w-4 h-4 mr-2" />
            Enregistrer les modifications
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}
