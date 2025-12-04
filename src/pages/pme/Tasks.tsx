import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Search, 
  Filter,
  User,
  Calendar,
  MoreHorizontal,
  GripVertical
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  assignee: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
  tags: string[];
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

const initialColumns: Column[] = [
  {
    id: "todo",
    title: "À faire",
    tasks: [
      {
        id: "1",
        title: "Préparer rapport mensuel",
        assignee: "Marie D.",
        dueDate: "15 Jan",
        priority: "high",
        tags: ["Finance"],
      },
      {
        id: "2",
        title: "Réunion équipe commerciale",
        assignee: "Pierre L.",
        dueDate: "12 Jan",
        priority: "medium",
        tags: ["Meeting"],
      },
      {
        id: "3",
        title: "Mise à jour site web",
        assignee: "Sophie M.",
        dueDate: "20 Jan",
        priority: "low",
        tags: ["Marketing"],
      },
    ],
  },
  {
    id: "inprogress",
    title: "En cours",
    tasks: [
      {
        id: "4",
        title: "Développement feature X",
        assignee: "Thomas R.",
        dueDate: "18 Jan",
        priority: "high",
        tags: ["Dev", "Urgent"],
      },
      {
        id: "5",
        title: "Campagne email Q1",
        assignee: "Marie D.",
        dueDate: "25 Jan",
        priority: "medium",
        tags: ["Marketing"],
      },
    ],
  },
  {
    id: "done",
    title: "Terminé",
    tasks: [
      {
        id: "6",
        title: "Audit sécurité",
        assignee: "Pierre L.",
        dueDate: "10 Jan",
        priority: "high",
        tags: ["IT"],
      },
      {
        id: "7",
        title: "Formation nouveaux employés",
        assignee: "Sophie M.",
        dueDate: "8 Jan",
        priority: "low",
        tags: ["RH"],
      },
    ],
  },
];

const priorityColors = {
  high: "bg-destructive/10 text-destructive border-destructive/20",
  medium: "bg-warning/10 text-warning border-warning/20",
  low: "bg-success/10 text-success border-success/20",
};

export default function Tasks() {
  const [columns, setColumns] = useState(initialColumns);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AppLayout>
      <div className="p-6 lg:p-8 h-[calc(100vh-2rem)]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground mb-2">
              Gestion des Tâches
            </h1>
            <p className="text-muted-foreground">
              Organisez et suivez les tâches de votre équipe
            </p>
          </div>
          <Button variant="hero">
            <Plus className="w-4 h-4 mr-2" />
            Ajouter une tâche
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher une tâche..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtres
          </Button>
        </div>

        {/* Kanban Board */}
        <div className="flex gap-6 overflow-x-auto pb-4">
          {columns.map((column) => (
            <div 
              key={column.id}
              className="flex-shrink-0 w-80"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">{column.title}</h3>
                  <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                    {column.tasks.length}
                  </span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              {/* Tasks */}
              <div className="space-y-3">
                {column.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="bg-card rounded-xl p-4 border border-border shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-start gap-2 mb-3">
                      <GripVertical className="w-4 h-4 text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab" />
                      <h4 className="flex-1 font-medium text-foreground text-sm">
                        {task.title}
                      </h4>
                      <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <span className={cn(
                        "px-2 py-0.5 rounded-full text-xs font-medium border",
                        priorityColors[task.priority]
                      )}>
                        {task.priority === "high" ? "Urgent" : task.priority === "medium" ? "Normal" : "Basse"}
                      </span>
                      {task.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-[10px] text-primary-foreground font-semibold">
                          {task.assignee.split(" ").map(n => n[0]).join("")}
                        </div>
                        <span>{task.assignee}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{task.dueDate}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add Task Button */}
                <button className="w-full p-3 rounded-xl border-2 border-dashed border-border hover:border-primary/50 hover:bg-accent/50 transition-colors text-muted-foreground hover:text-foreground text-sm flex items-center justify-center gap-2">
                  <Plus className="w-4 h-4" />
                  Ajouter une tâche
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
