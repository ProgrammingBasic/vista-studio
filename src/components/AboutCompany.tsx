import { Card, CardContent } from "@/components/ui/card";
import { Users, MapPin, Calendar, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "10,000+",
    label: "Happy Travelers",
    description: "Satisfied customers exploring with us"
  },
  {
    icon: MapPin,
    number: "50+",
    label: "Destinations",
    description: "Breathtaking locations across India"
  },
  {
    icon: Calendar,
    number: "5+",
    label: "Years Experience",
    description: "Creating unforgettable memories"
  },
  {
    icon: Award,
    number: "99%",
    label: "Success Rate",
    description: "Perfectly executed adventures"
  }
];

export const AboutCompany = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Journey, Our Passion
            </h2>
            <div className="w-24 h-1 bg-gradient-ocean mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are more than just a travel company - we're your gateway to extraordinary adventures. 
              From the snow-capped peaks of the Himalayas to the serene backwaters of Kerala, 
              we curate experiences that transform journeys into lifelong memories.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of passionate explorers and local experts ensures every trip is 
              perfectly crafted, safe, and unforgettable. Join thousands of travelers 
              who have discovered the magic of authentic exploration with us.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-ocean rounded-full flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-travel-ocean mb-1">
                      {stat.number}
                    </h3>
                    <p className="text-sm font-semibold text-foreground mb-1">
                      {stat.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg relative">
            <div className="animate-scroll-y columns-2 gap-4">
              {Array(8).fill(null).map((_, index) => {
                const srcs = ["/src/assets/hero-mountains.jpg", "/src/assets/camping.jpg", "/src/assets/homestay.jpg", "/src/assets/hotel.jpg"];
                const src = srcs[index % srcs.length];
                const isTall = index % 3 === 0; // Make every third image tall
                return (
                  <div 
                    key={index} 
                    className={`mb-4 rounded-lg overflow-hidden ${isTall ? 'h-60' : 'h-40'}`}
                  >
                    <img 
                      src={src}
                      alt={`Travel image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                );
              })}
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-background to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};