import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ActivityItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  time: string;
  type: "success" | "warning" | "info" | "default";
}

const typeStyles = {
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  info: "bg-primary/10 text-primary",
  default: "bg-muted text-muted-foreground",
};

export function ActivityItem({ icon, title, description, time, type }: ActivityItemProps) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
      <div className={cn(
        "p-2 rounded-lg shrink-0",
        typeStyles[type]
      )}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground truncate">{description}</p>
      </div>
      <span className="text-xs text-muted-foreground shrink-0">{time}</span>
    </div>
  );
}
