
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Projects from "./pages/Projects";
import SuperChepe from "./pages/SuperChepe";
import DoodhpokhariChepe from "./pages/DoodhpokhariChepe";
import UpperMaiwa from "./pages/UpperMaiwa";
import Portfolio from "./pages/Portfolio";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Notices from "./pages/Notices";
import Publications from "./pages/Publications";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import AdminCMSPage from "./pages/AdminCMSPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/super-chepe" element={<SuperChepe />} />
            <Route path="/doodhpokhari-chepe" element={<DoodhpokhariChepe />} />
            <Route path="/upper-maiwa" element={<UpperMaiwa />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin-cms" element={<AdminCMSPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
