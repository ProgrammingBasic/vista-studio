import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin } from "lucide-react";

const packages = [
  {
    id: 1,
    name: "Himalayan Adventure",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    duration: "7 Days",
    groupSize: "4-8 People",
    location: "Himachal Pradesh",
    highlights: ["Mountain Trekking", "Local Culture", "Scenic Views"]
  },
  {
    id: 2,
    name: "Spiti Valley Explorer",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    duration: "10 Days",
    groupSize: "6-12 People",
    location: "Spiti Valley",
    highlights: ["Cold Desert", "Monasteries", "Stargazing"]
  },
  {
    id: 3,
    name: "Coastal Paradise",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    duration: "5 Days",
    groupSize: "2-6 People",
    location: "Goa",
    highlights: ["Beach Activities", "Water Sports", "Nightlife"]
  },
  {
    id: 4,
    name: "Backwater Bliss",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    duration: "6 Days",
    groupSize: "4-10 People",
    location: "Kerala",
    highlights: ["Houseboat Stay", "Ayurveda", "Nature Walks"]
  },
  {
    id: 5,
    name: "Desert Safari",
    image: "https://images.unsplash.com/photo-1582659962893-e4bee469d0ca?w=400&h=300&fit=crop",
    duration: "4 Days",
    groupSize: "6-15 People",
    location: "Rajasthan",
    highlights: ["Camel Safari", "Desert Camping", "Folk Culture"]
  },
  {
    id: 6,
    name: "Ladakh Expedition",
    image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=400&h=300&fit=crop",
    duration: "12 Days",
    groupSize: "4-8 People",
    location: "Ladakh",
    highlights: ["High Altitude", "Buddhist Culture", "Adventure Sports"]
  }
];

export const TourPackages = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tour Packages
          </h2>
          <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our specially crafted tour packages for unforgettable adventures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id}
              className="group overflow-hidden border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-3"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <MapPin className="h-4 w-4 text-travel-ocean" />
                  <span className="text-travel-ocean font-medium">{pkg.location}</span>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-3">Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="border-travel-ocean/30 text-travel-ocean"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="travel" 
                  className="w-full group-hover:scale-105 transition-transform duration-300"
                >
                  More Info
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};