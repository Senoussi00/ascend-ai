import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Download, 
  Globe, 
  Palette,
  ChevronLeft,
  ChevronRight,
  Edit3,
  AlertTriangle,
  Lightbulb,
  Target,
  TrendingUp,
  DollarSign,
  BarChart3,
  Users,
  Rocket
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
}

const slides: Slide[] = [
  {
    id: "problem",
    title: "Le Problème",
    icon: <AlertTriangle className="w-6 h-6" />,
    content: "Les PME françaises perdent en moyenne 8h par semaine sur des tâches administratives. 67% jonglent entre plus de 5 outils différents. Le manque de vision unifiée coûte 12K€/an en opportunités manquées."
  },
  {
    id: "solution",
    title: "Notre Solution",
    icon: <Lightbulb className="w-6 h-6" />,
    content: "SmartBiz unifie gestion startup et PME en une plateforme augmentée par l'IA. Interface intuitive, recommandations automatiques, et assistant virtuel 24/7 pour prendre les bonnes décisions."
  },
  {
    id: "usp",
    title: "Proposition de Valeur Unique",
    icon: <Target className="w-6 h-6" />,
    content: "L'IA au service de l'entrepreneur. Contrairement aux ERP traditionnels, SmartBiz anticipe vos besoins, automatise les tâches répétitives et vous guide vers la croissance avec des insights actionnables."
  },
  {
    id: "market",
    title: "Marché",
    icon: <TrendingUp className="w-6 h-6" />,
    content: "TAM: 45B€ (SaaS PME Europe)\nSAM: 8B€ (France + Benelux)\nSOM: 200M€ (PME 10-100 employés)\n\nCroissance marché: +12% par an"
  },
  {
    id: "model",
    title: "Business Model",
    icon: <DollarSign className="w-6 h-6" />,
    content: "SaaS par abonnement\n\nStarter: 29€/mois\nPro: 49€/mois\nEnterprise: Sur mesure\n\nLTV: 2,400€ | CAC: 200€ | LTV/CAC: 12x"
  },
  {
    id: "traction",
    title: "Traction",
    icon: <BarChart3 className="w-6 h-6" />,
    content: "✓ 150 beta testeurs actifs\n✓ NPS: 72\n✓ 15 clients payants (5K€ MRR)\n✓ +40% croissance MoM\n✓ Partenariat Bpifrance signé"
  },
  {
    id: "team",
    title: "L'Équipe",
    icon: <Users className="w-6 h-6" />,
    content: "Alexandre Dupont - CEO\n10 ans exp. SaaS, ex-Salesforce\n\nMarie Martin - CTO\nPhD IA, ex-Google\n\nPierre Durand - COO\nEx-McKinsey, M&A specialist"
  },
  {
    id: "funding",
    title: "Levée de Fonds",
    icon: <Rocket className="w-6 h-6" />,
    content: "Seed: 1.5M€\n\nUtilisation:\n• 60% Produit & Tech\n• 25% Sales & Marketing\n• 15% Opérations\n\nObjectif 18 mois: 500 clients, 150K€ MRR"
  },
];

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [slideContents, setSlideContents] = useState(slides.map(s => s.content));

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  return (
    <AppLayout>
      <div className="p-6 lg:p-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground mb-2">
                Pitch Deck Generator
              </h1>
              <p className="text-muted-foreground">
                Créez un pitch deck professionnel en quelques clics
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Palette className="w-4 h-4 mr-2" />
                Templates
              </Button>
              <Button variant="hero">
                <Download className="w-4 h-4 mr-2" />
                Exporter PDF
              </Button>
            </div>
          </div>

          {/* Main Slide View */}
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden mb-6">
            {/* Slide Preview */}
            <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 via-background to-accent/30 p-8 lg:p-12 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl gradient-primary text-primary-foreground">
                  {slides[currentSlide].icon}
                </div>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                  {slides[currentSlide].title}
                </h2>
              </div>
              
              <div className="flex-1 flex items-center">
                {editMode ? (
                  <Textarea
                    value={slideContents[currentSlide]}
                    onChange={(e) => {
                      const newContents = [...slideContents];
                      newContents[currentSlide] = e.target.value;
                      setSlideContents(newContents);
                    }}
                    className="w-full h-full text-lg resize-none"
                  />
                ) : (
                  <p className="text-lg lg:text-xl text-foreground whitespace-pre-line leading-relaxed">
                    {slideContents[currentSlide]}
                  </p>
                )}
              </div>

              {/* Slide number */}
              <div className="flex items-center justify-between mt-6">
                <span className="text-sm text-muted-foreground">
                  SmartBiz - Pitch Deck 2024
                </span>
                <span className="text-sm font-medium text-primary">
                  {currentSlide + 1} / {slides.length}
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="p-4 border-t border-border flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={() => goToSlide(currentSlide - 1)}
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Précédent
              </Button>
              
              <Button 
                variant={editMode ? "default" : "outline"}
                onClick={() => setEditMode(!editMode)}
              >
                <Edit3 className="w-4 h-4 mr-2" />
                {editMode ? "Terminer" : "Modifier"}
              </Button>

              <Button 
                variant="ghost" 
                onClick={() => goToSlide(currentSlide + 1)}
                disabled={currentSlide === slides.length - 1}
              >
                Suivant
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Slide Thumbnails */}
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={cn(
                  "aspect-[16/9] rounded-lg border-2 transition-all duration-200 p-2 flex flex-col items-center justify-center gap-1",
                  currentSlide === index
                    ? "border-primary bg-accent shadow-md"
                    : "border-border hover:border-primary/50 bg-card"
                )}
              >
                <div className={cn(
                  "text-xs",
                  currentSlide === index ? "text-primary" : "text-muted-foreground"
                )}>
                  {slide.icon}
                </div>
                <span className={cn(
                  "text-[10px] font-medium truncate w-full text-center",
                  currentSlide === index ? "text-primary" : "text-muted-foreground"
                )}>
                  {slide.title}
                </span>
              </button>
            ))}
          </div>

          {/* Export Options */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button variant="outline">
              <Globe className="w-4 h-4 mr-2" />
              Version Web
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export PowerPoint
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
