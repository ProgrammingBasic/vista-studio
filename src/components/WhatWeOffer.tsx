import { Card, CardContent } from "@/components/ui/card";
import { Route, Home, Package, FileText } from "lucide-react";

const services = [
  {
    icon: Route,
    title: "Transport Routes",
    description: "Comprehensive transportation solutions including scenic routes and tourist circuits across breathtaking destinations.",
    features: ["Self-drive vehicles", "Guided tours", "Scenic routes", "Safety assured"]
  },
  {
    icon: Home,
    title: "Housing & Homestays",
    description: "Comfortable accommodations ranging from luxury resorts to authentic local homestays for an immersive experience.",
    features: ["Luxury resorts", "Local homestays", "Camping sites", "Budget options"]
  },
  {
    icon: Package,
    title: "Tour Packages",
    description: "Carefully curated tour packages designed to showcase the best of each destination with expert local guides.",
    features: ["Customized itineraries", "Expert guides", "All-inclusive options", "Group discounts"]
  },
  {
    icon: FileText,
    title: "Permits & Documentation",
    description: "Complete assistance with travel permits, documentation, and regulatory requirements for hassle-free journeys.",
    features: ["Travel permits", "Documentation help", "Visa assistance", "Legal compliance"]
  }
];

export const WhatWeOffer = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive travel solutions designed to make your journey seamless and unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group border-0 shadow-card-travel  "
            >
              <CardContent className="p-2 text-center">
                <div className="w-40 h-40 mx-auto mb-6 bg-gradient-ocean rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-travel-ocean mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                {/* <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-travel-teal rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};