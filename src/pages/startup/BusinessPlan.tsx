import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Sparkles, 
  Download, 
  FileText, 
  RefreshCcw, 
  Save,
  ChevronRight,
  Users,
  TrendingUp,
  Target,
  DollarSign,
  AlertTriangle,
  BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "market", label: "Analyse marché", icon: <BarChart3 className="w-4 h-4" /> },
  { id: "persona", label: "Persona client", icon: <Users className="w-4 h-4" /> },
  { id: "value", label: "Proposition de valeur", icon: <Target className="w-4 h-4" /> },
  { id: "model", label: "Business model", icon: <DollarSign className="w-4 h-4" /> },
  { id: "marketing", label: "Plan marketing", icon: <TrendingUp className="w-4 h-4" /> },
  { id: "costs", label: "Structure de coûts", icon: <FileText className="w-4 h-4" /> },
  { id: "risks", label: "Risques", icon: <AlertTriangle className="w-4 h-4" /> },
  { id: "financial", label: "Prévisions financières", icon: <BarChart3 className="w-4 h-4" /> },
];

const generatedContent = {
  market: "Le marché des solutions SaaS pour PME représente 45 milliards d'euros en Europe, avec une croissance annuelle de 12%. Les entreprises de 10 à 250 employés sont particulièrement sous-équipées en outils de gestion intégrés. La digitalisation post-COVID a accéléré l'adoption, créant une fenêtre d'opportunité majeure.",
  persona: "Marie, 42 ans, dirigeante d'une PME de 35 personnes dans le secteur des services. Elle jongle entre Excel, 5 logiciels différents et des processus manuels. Son plus grand défi : avoir une vision unifiée de son activité et gagner du temps sur les tâches administratives.",
  value: "SmartBiz centralise la gestion startup et PME en une seule plateforme augmentée par l'IA. Gain de temps moyen : 8h/semaine. ROI visible en 30 jours grâce aux recommandations automatiques.",
  model: "Modèle SaaS avec 3 tiers : Starter (29€/mois), Pro (49€/mois), Enterprise (sur mesure). Revenus récurrents avec upsell via modules additionnels. CAC cible : 200€, LTV cible : 2400€.",
  marketing: "Stratégie inbound : contenu SEO (blog, guides), webinaires mensuels, partenariats avec experts-comptables. Paid : LinkedIn Ads ciblés dirigeants PME. Objectif : 500 leads/mois en année 1.",
  costs: "Coûts fixes : équipe (65%), infrastructure cloud (15%), marketing (15%), autres (5%). Burn rate mensuel : 45K€. Point mort : 300 clients payants.",
  risks: "1. Concurrence des acteurs établis (mitigation : différenciation IA)\n2. Cycle de vente long (mitigation : freemium + onboarding automatisé)\n3. Dépendance aux API tierces (mitigation : architecture modulaire)",
  financial: "Année 1 : 180K€ ARR (150 clients)\nAnnée 2 : 720K€ ARR (500 clients)\nAnnée 3 : 2.1M€ ARR (1200 clients)\nBreak-even : mois 18"
};

export default function BusinessPlan() {
  const [step, setStep] = useState<"form" | "result">("form");
  const [activeSection, setActiveSection] = useState("market");
  const [formData, setFormData] = useState({
    project: "",
    client: "",
    problem: "",
  });

  const handleGenerate = () => {
    setStep("result");
  };

  return (
    <AppLayout>
      <div className="p-6 lg:p-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold text-foreground mb-2">
              Générateur de Business Plan
            </h1>
            <p className="text-muted-foreground">
              Créez un business plan complet en quelques minutes grâce à l'IA
            </p>
          </div>

          {step === "form" ? (
            /* Step 1: Form */
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl gradient-primary">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-lg">
                    Décrivez votre projet
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    L'IA générera un business plan personnalisé
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="project">Quel est votre projet ?</Label>
                  <Textarea
                    id="project"
                    placeholder="Ex: Une application mobile qui aide les PME à gérer leur trésorerie..."
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="client">Qui est votre client idéal ?</Label>
                  <Input
                    id="client"
                    placeholder="Ex: Dirigeants de PME de 10 à 50 employés"
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="problem">Quel problème résolvez-vous ?</Label>
                  <Textarea
                    id="problem"
                    placeholder="Ex: Les PME perdent en moyenne 5h par semaine sur des tâches administratives..."
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    className="min-h-[100px]"
                  />
                </div>

                <Button 
                  variant="hero" 
                  size="xl" 
                  className="w-full"
                  onClick={handleGenerate}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Générer mon Business Plan
                </Button>
              </div>
            </div>
          ) : (
            /* Step 2: Result */
            <div className="flex gap-6">
              {/* Sidebar */}
              <div className="w-64 shrink-0">
                <div className="bg-card rounded-xl border border-border shadow-sm p-4 sticky top-6">
                  <h3 className="font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                    Sections
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={cn(
                          "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors text-left",
                          activeSection === section.id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {section.icon}
                        <span>{section.label}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="bg-card rounded-xl border border-border shadow-sm p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display font-semibold text-xl flex items-center gap-2">
                      {sections.find(s => s.id === activeSection)?.icon}
                      {sections.find(s => s.id === activeSection)?.label}
                    </h2>
                    <Button variant="ghost" size="sm">
                      <RefreshCcw className="w-4 h-4 mr-2" />
                      Régénérer
                    </Button>
                  </div>
                  <Textarea
                    value={generatedContent[activeSection as keyof typeof generatedContent]}
                    className="min-h-[200px] text-foreground"
                    onChange={() => {}}
                  />
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <Button variant="hero">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger PDF
                  </Button>
                  <Button variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Export Google Docs
                  </Button>
                  <Button variant="outline">
                    <Save className="w-4 h-4 mr-2" />
                    Sauvegarder
                  </Button>
                  <Button variant="ghost" onClick={() => setStep("form")}>
                    <ChevronRight className="w-4 h-4 mr-2 rotate-180" />
                    Modifier les inputs
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
