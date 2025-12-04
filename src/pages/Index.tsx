import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Rocket, 
  Building2, 
  Sparkles, 
  ArrowRight,
  Check,
  BarChart3,
  Users,
  Zap
} from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Startup Copilot",
    description: "Business plan, roadmap, pitch deck générés par IA en quelques minutes."
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "PME FlowOptimizer",
    description: "Gestion des tâches, finances, stock et équipe sur une seule plateforme."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "IA Brain",
    description: "Recommandations intelligentes et analyse prédictive de votre activité."
  },
];

const benefits = [
  "Génération automatique de documents stratégiques",
  "Tableaux de bord en temps réel",
  "Alertes et recommandations IA personnalisées",
  "Gestion unifiée startup et PME",
  "Export PDF, Excel, Google Docs",
  "Assistant virtuel 24/7",
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg">SmartBiz</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Connexion</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/register">
                Commencer gratuitement
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 gradient-hero">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Propulsé par l'Intelligence Artificielle
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 animate-slide-up">
            Gérez votre startup et votre PME avec{" "}
            <span className="text-transparent bg-clip-text gradient-primary">
              l'IA
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            La plateforme tout-en-un qui génère vos business plans, optimise vos opérations 
            et vous guide vers la croissance avec des recommandations intelligentes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/register">
                Démarrer gratuitement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/login">
                Voir la démo
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
            <div>
              <p className="text-3xl font-display font-bold text-foreground">8h</p>
              <p className="text-sm text-muted-foreground">gagnées par semaine</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-foreground">2,500+</p>
              <p className="text-sm text-muted-foreground">entrepreneurs actifs</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-foreground">95%</p>
              <p className="text-sm text-muted-foreground">satisfaction client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une suite complète d'outils intelligents pour piloter votre activité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Pourquoi choisir SmartBiz ?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" className="mt-8" asChild>
                <Link to="/register">
                  Essayer maintenant
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl p-6 border border-border shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold">Dashboard Preview</span>
                </div>
                <div className="h-48 rounded-lg bg-gradient-to-br from-accent via-background to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <Zap className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">Visualisez vos KPIs en temps réel</p>
                  </div>
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 border border-border shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Recommandation IA</p>
                    <p className="text-sm font-medium">+25% croissance possible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-accent to-primary/5 rounded-3xl p-12 text-center border border-primary/20">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Prêt à transformer votre business ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Rejoignez des milliers d'entrepreneurs qui utilisent SmartBiz pour 
              accélérer leur croissance.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/register">
                Commencer gratuitement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Brain className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold">SmartBiz</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 SmartBiz. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
