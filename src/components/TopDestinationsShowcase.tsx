import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";

const topDestinations = [
  {
    id: 1,
    name: "Manali",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    rating: 4.8,
    description: "Snow-capped mountains and adventure sports"
  },
  {
    id: 2,
    name: "Spiti Valley",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    rating: 4.9,
    description: "Cold desert and ancient monasteries"
  },
  {
    id: 3,
    name: "Goa",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    rating: 4.7,
    description: "Beautiful beaches and vibrant nightlife"
  },
  {
    id: 4,
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    rating: 4.8,
    description: "Backwaters and lush green landscapes"
  },
  {
    id: 5,
    name: "Ladakh",
    image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=400&h=300&fit=crop",
    rating: 4.9,
    description: "High altitude adventure and pristine beauty"
  },
  {
    id: 6,
    name: "Rajasthan",
    image: "https://images.unsplash.com/photo-1582659962893-e4bee469d0ca?w=400&h=300&fit=crop",
    rating: 4.6,
    description: "Royal heritage and desert landscapes"
  }
];

export const TopDestinationsShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Top Destinations
          </h2>
          <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the most sought-after destinations that await your discovery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topDestinations.map((destination) => (
            <Card 
              key={destination.id}
              className="group overflow-hidden border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-3 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{destination.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-travel-ocean" />
                  <h3 className="text-xl font-bold text-travel-ocean">
                    {destination.name}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {destination.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};