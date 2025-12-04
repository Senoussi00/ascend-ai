import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AIRecommendationProps {
  title: string;
  description: string;
  category: "finance" | "stock" | "rh" | "ventes" | "strategy";
  priority: "high" | "medium" | "low";
  onApply?: () => void;
}

const categoryColors = {
  finance: "bg-emerald-100 text-emerald-700 border-emerald-200",
  stock: "bg-amber-100 text-amber-700 border-amber-200",
  rh: "bg-blue-100 text-blue-700 border-blue-200",
  ventes: "bg-purple-100 text-purple-700 border-purple-200",
  strategy: "bg-pink-100 text-pink-700 border-pink-200",
};

const priorityColors = {
  high: "border-l-destructive",
  medium: "border-l-warning",
  low: "border-l-success",
};

export function AIRecommendation({ 
  title, 
  description, 
  category, 
  priority, 
  onApply 
}: AIRecommendationProps) {
  return (
    <div className={cn(
      "bg-card rounded-xl p-5 border border-border shadow-sm hover:shadow-md transition-all duration-300 border-l-4",
      priorityColors[priority]
    )}>
      <div className="flex items-start gap-4">
        <div className="p-2.5 rounded-lg bg-accent shrink-0">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className={cn(
              "px-2 py-0.5 rounded-full text-xs font-medium border",
              categoryColors[category]
            )}>
              {category.toUpperCase()}
            </span>
          </div>
          <h4 className="font-semibold text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onApply}
          className="shrink-0 text-primary hover:text-primary-hover"
        >
          Appliquer
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
