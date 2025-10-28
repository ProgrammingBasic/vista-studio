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
import Navbar  from "./components/NewNavigation";
import { Footer } from "./components/Footer";
import Chatpage from "./pages/ChatPage";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import Contact from "./pages/Contact";
import DestinationByState from "./pages/DestinationByState";
import DestinationSearchByState from "./pages/DestinationSearchByState";
import StayDetails from "./pages/StayDetails";
import Staylist from "./pages/Staylist";
import About from "./pages/About";
import Experience from "./pages/Experience";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:id" element={<PackageDetail />} />
          <Route path="/destination/:slug" element={<DestinationDetail />} />
          <Route path="/create-plan" element={<CreatePlan />} />
          <Route path="/chat" element={<Chatpage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/state" element={<DestinationByState />} />
          <Route path="/destinations/state/:slug" element={<DestinationSearchByState />} />
          <Route path="/stay/:slug" element={<StayDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/stay/list" element={<Staylist />} />
          <Route path="/experiences" element={<Experience />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
