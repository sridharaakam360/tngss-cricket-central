import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EventLaunch from "./pages/EventLaunch";
import Schedule from "./pages/Schedule";
import Teams from "./pages/Teams";
import TeamProfile from "./pages/TeamProfile";
import Live from "./pages/Live";
import LiveMatch from "./pages/LiveMatch";
import Points from "./pages/Points";
import Gallery from "./pages/Gallery";
import AdminLogin from "./pages/AdminLogin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/event-launch" element={<EventLaunch />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:teamId" element={<TeamProfile />} />
          <Route path="/live" element={<Live />} />
          <Route path="/live/:matchId" element={<LiveMatch />} />
          <Route path="/points" element={<Points />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin" element={<AdminLogin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
