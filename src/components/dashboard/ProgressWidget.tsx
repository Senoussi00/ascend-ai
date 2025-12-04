import { cn } from "@/lib/utils";
import { CheckCircle2, Circle } from "lucide-react";

interface ProgressItem {
  label: string;
  completed: boolean;
}

interface ProgressWidgetProps {
  title: string;
  items: ProgressItem[];
  className?: string;
}

export function ProgressWidget({ title, items, className }: ProgressWidgetProps) {
  const completedCount = items.filter(i => i.completed).length;
  const progress = (completedCount / items.length) * 100;

  return (
    <div className={cn(
      "bg-card rounded-xl p-6 border border-border shadow-sm",
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-foreground">{title}</h3>
        <span className="text-sm font-medium text-primary">
          {completedCount}/{items.length}
        </span>
      </div>
      
      {/* Progress bar */}
      <div className="h-2 bg-muted rounded-full overflow-hidden mb-4">
        <div 
          className="h-full gradient-primary rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Items list */}
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            {item.completed ? (
              <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-muted-foreground shrink-0" />
            )}
            <span className={cn(
              "text-sm",
              item.completed ? "text-muted-foreground line-through" : "text-foreground"
            )}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
