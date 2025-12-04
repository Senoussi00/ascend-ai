import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Rocket, 
  Building2, 
  Brain, 
  User, 
  Menu, 
  X,
  FileText,
  Map,
  Calendar,
  Target,
  Presentation,
  DollarSign,
  MessageSquare,
  FolderOpen,
  CheckSquare,
  Clock,
  Receipt,
  Package,
  BarChart3,
  Lightbulb,
  ChevronDown,
  ChevronRight,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface AppLayoutProps {
  children: ReactNode;
}

interface NavItem {
  label: string;
  href: string;
  icon: ReactNode;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { 
    label: "Startup Copilot", 
    href: "/startup",
    icon: <Rocket className="w-5 h-5" />,
    children: [
      { label: "Business Plan", href: "/startup/business-plan", icon: <FileText className="w-4 h-4" /> },
      { label: "Roadmap", href: "/startup/roadmap", icon: <Map className="w-4 h-4" /> },
      { label: "Priorités", href: "/startup/priorities", icon: <Target className="w-4 h-4" /> },
      { label: "Pitch Deck", href: "/startup/pitch-deck", icon: <Presentation className="w-4 h-4" /> },
      { label: "Budget", href: "/startup/budget", icon: <DollarSign className="w-4 h-4" /> },
      { label: "Mentor IA", href: "/startup/mentor", icon: <MessageSquare className="w-4 h-4" /> },
      { label: "Dossiers", href: "/startup/dossiers", icon: <FolderOpen className="w-4 h-4" /> },
    ]
  },
  { 
    label: "PME FlowOptimizer", 
    href: "/pme",
    icon: <Building2 className="w-5 h-5" />,
    children: [
      { label: "Tâches", href: "/pme/tasks", icon: <CheckSquare className="w-4 h-4" /> },
      { label: "Planning", href: "/pme/planning", icon: <Clock className="w-4 h-4" /> },
      { label: "Finances", href: "/pme/finances", icon: <DollarSign className="w-4 h-4" /> },
      { label: "Factures", href: "/pme/invoices", icon: <Receipt className="w-4 h-4" /> },
      { label: "Stock", href: "/pme/stock", icon: <Package className="w-4 h-4" /> },
      { label: "Dashboard PME", href: "/pme/dashboard", icon: <BarChart3 className="w-4 h-4" /> },
      { label: "Recos IA", href: "/pme/recommendations", icon: <Lightbulb className="w-4 h-4" /> },
    ]
  },
  { label: "IA Brain", href: "/ia-brain", icon: <Brain className="w-5 h-5" /> },
  { label: "Profil", href: "/profile", icon: <User className="w-5 h-5" /> },
];

export function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState<string[]>(["Startup Copilot", "PME FlowOptimizer"]);
  const location = useLocation();

  const toggleSection = (label: string) => {
    setExpandedSections(prev => 
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };

  const isActive = (href: string) => location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-full bg-card border-r border-border z-40 transition-all duration-300 flex flex-col",
        sidebarOpen ? "w-64" : "w-20"
      )}>
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-border">
          {sidebarOpen && (
            <Link to="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg">SmartBiz</span>
            </Link>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="shrink-0"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleSection(item.label)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-left",
                        isActive(item.href) ? "bg-accent text-accent-foreground" : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.icon}
                      {sidebarOpen && (
                        <>
                          <span className="flex-1 font-medium">{item.label}</span>
                          {expandedSections.includes(item.label) ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </>
                      )}
                    </button>
                    {sidebarOpen && expandedSections.includes(item.label) && (
                      <ul className="ml-4 mt-1 space-y-1 border-l border-border pl-3">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              to={child.href}
                              className={cn(
                                "flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm",
                                location.pathname === child.href ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted text-muted-foreground hover:text-foreground"
                              )}
                            >
                              {child.icon}
                              <span>{child.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                      isActive(item.href) ? "bg-accent text-accent-foreground font-medium" : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.icon}
                    {sidebarOpen && <span>{item.label}</span>}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-border">
          <Link
            to="/login"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-destructive/10 text-muted-foreground hover:text-destructive"
          >
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span>Déconnexion</span>}
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className={cn(
        "flex-1 transition-all duration-300",
        sidebarOpen ? "ml-64" : "ml-20"
      )}>
        {children}
      </main>
    </div>
  );
}
