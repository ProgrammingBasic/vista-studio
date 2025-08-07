import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Stay from "./pages/Stay";
import Travel from "./pages/Travel";
import Packages from "./pages/Packages";
import PackageDetail from "./pages/PackageDetail";
import CreatePlan from "./pages/CreatePlan";
import NotFound from "./pages/NotFound";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import Chatpage from "./pages/ChatPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:id" element={<PackageDetail />} />
          <Route path="/create-plan" element={<CreatePlan />} />
          <Route path="/chat" element={<Chatpage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
