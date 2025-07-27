import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Transportation } from "@/components/Transportation";
import { Accommodations } from "@/components/Accommodations";
import { Destinations } from "@/components/Destinations";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Transportation />
      <Accommodations />
      <Destinations />
      <Footer />
    </div>
  );
};

export default Index;
