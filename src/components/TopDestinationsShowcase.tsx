import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";
import { useState, useEffect } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, topDestinations.length - itemsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = prev + 1;
        return nextIndex > maxIndex ? 0 : nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [maxIndex]);

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

        <div className="relative">
          <div className="overflow-hidden pt-3">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {topDestinations.map((destination) => (
                <div key={destination.id} className="min-w-0 flex-shrink-0" style={{ width: `${100 / itemsPerView}%` }}>
                  <Card className="group overflow-hidden border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-3 cursor-pointer h-96">
                    <div className="relative h-full">
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
                      <div className="absolute bottom-6 left-6">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-5 w-5 text-white" />
                          <h3 className="text-2xl font-bold text-white">
                            {destination.name}
                          </h3>
                        </div>
                        <p className="text-gray-100 leading-relaxed">
                          {destination.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
