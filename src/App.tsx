import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import BusinessPlan from "./pages/startup/BusinessPlan";
import Roadmap from "./pages/startup/Roadmap";
import PitchDeck from "./pages/startup/PitchDeck";
import Tasks from "./pages/pme/Tasks";
import Finances from "./pages/pme/Finances";
import PMEDashboard from "./pages/pme/PMEDashboard";
import IABrain from "./pages/IABrain";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* Startup Copilot */}
          <Route path="/startup/business-plan" element={<BusinessPlan />} />
          <Route path="/startup/roadmap" element={<Roadmap />} />
          <Route path="/startup/pitch-deck" element={<PitchDeck />} />
          
          {/* PME FlowOptimizer */}
          <Route path="/pme/tasks" element={<Tasks />} />
          <Route path="/pme/finances" element={<Finances />} />
          <Route path="/pme/dashboard" element={<PMEDashboard />} />
          
          {/* IA Brain */}
          <Route path="/ia-brain" element={<IABrain />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
