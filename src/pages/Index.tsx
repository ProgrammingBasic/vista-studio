import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TopDestinationsSlider } from "@/components/TopDestinationsSlider";
import { AboutCompany } from "@/components/AboutCompany";
import { WhatWeOffer } from "@/components/WhatWeOffer";
import { TourPackages } from "@/components/TourPackages";
import { Accommodations } from "@/components/Accommodations";
import { ExperienceGallery } from "@/components/ExperienceGallery";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { TopDestinationsShowcase } from "@/components/TopDestinationsShowcase";
import { Footer } from "@/components/Footer";
import { Blog } from "@/components/Blog";
import WhatWeDo from "@/components/WhatWeDo";
import Adventure from "@/components/Adventure";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      <Hero />
      <TopDestinationsSlider />
      <WhatWeDo />
      <Adventure />
      <AboutCompany />
      <WhatWeOffer />
      <TourPackages />
      <Accommodations />
      <Blog/>
      <ExperienceGallery />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <TopDestinationsShowcase />

    </div>
  );
};

export default Index;
