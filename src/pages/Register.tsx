import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, Mail, Lock, User, ArrowRight, Rocket, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

type UserType = "startup" | "pme" | "both";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [userType, setUserType] = useState<UserType>("both");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/dashboard";
  };

  const userTypeOptions = [
    { value: "startup", label: "Startup", icon: <Rocket className="w-5 h-5" /> },
    { value: "pme", label: "PME", icon: <Building2 className="w-5 h-5" /> },
    { value: "both", label: "Les deux", icon: <Brain className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left side - Illustration */}
      <div className="hidden lg:flex flex-1 gradient-hero items-center justify-center p-12">
        <div className="max-w-lg text-center">
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-20 h-20 rounded-2xl gradient-primary shadow-purple flex items-center justify-center animate-float">
              <Rocket className="w-10 h-10 text-primary-foreground" />
            </div>
            <div className="w-20 h-20 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
              <Building2 className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">
            Startup ou PME ? On s'adapte à vous
          </h2>
          <p className="text-muted-foreground">
            Créez votre compte en quelques secondes et découvrez tous les outils 
            pour développer votre activité avec l'aide de l'intelligence artificielle.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">SmartBiz</span>
          </Link>

          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            Créer un compte
          </h1>
          <p className="text-muted-foreground mb-8">
            Rejoignez des milliers d'entrepreneurs
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="firstName"
                    placeholder="Jean"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input
                  id="lastName"
                  placeholder="Dupont"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Type d'utilisateur</Label>
              <div className="grid grid-cols-3 gap-3">
                {userTypeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setUserType(option.value as UserType)}
                    className={cn(
                      "p-3 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2",
                      userType === option.value
                        ? "border-primary bg-accent text-primary"
                        : "border-border hover:border-primary/30 text-muted-foreground"
                    )}
                  >
                    {option.icon}
                    <span className="text-sm font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <Button type="submit" variant="hero" className="w-full" size="lg">
              Créer mon compte
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <p className="mt-8 text-center text-muted-foreground">
            Déjà un compte ?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
