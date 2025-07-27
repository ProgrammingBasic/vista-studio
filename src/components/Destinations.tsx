import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

// Using placeholder destinations - in a real app these would come from an API
const destinations = [
  {
    id: 1,
    name: "Swiss Alps Adventure",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    rating: 4.9,
    price: "From ₹89,999",
    duration: "7 days",
    highlights: ["Mountain Hiking", "Scenic Drives", "Local Culture"]
  },
  {
    id: 2,
    name: "Himalayan Expedition",
    location: "Nepal",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    rating: 4.8,
    price: "From ₹45,999",
    duration: "10 days",
    highlights: ["Trekking", "Base Camp", "Mountain Views"]
  },
  {
    id: 3,
    name: "Coastal Road Trip",
    location: "California, USA",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    rating: 4.7,
    price: "From ₹75,999",
    duration: "5 days",
    highlights: ["Ocean Views", "Wine Tasting", "Coastal Towns"]
  },
  {
    id: 4,
    name: "Desert Safari",
    location: "Rajasthan, India",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    rating: 4.6,
    price: "From ₹25,999",
    duration: "4 days",
    highlights: ["Camel Safari", "Desert Camping", "Cultural Shows"]
  },
  {
    id: 5,
    name: "Nordic Lights",
    location: "Iceland",
    image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=400&h=300&fit=crop",
    rating: 4.9,
    price: "From ₹95,999",
    duration: "6 days",
    highlights: ["Northern Lights", "Hot Springs", "Glacier Tours"]
  },
  {
    id: 6,
    name: "Tropical Paradise",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    rating: 4.8,
    price: "From ₹125,999",
    duration: "5 days",
    highlights: ["Water Sports", "Island Hopping", "Luxury Resorts"]
  }
];

export const Destinations = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover breathtaking locations curated for the ultimate adventure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
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
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-1 text-white/90 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{destination.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {destination.name}
                  </h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-travel-ocean">
                    {destination.price}
                  </span>
                  <Badge variant="secondary" className="bg-travel-teal/10 text-travel-teal">
                    {destination.duration}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground mb-3">Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
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
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-travel-ocean">
            Our Destinations
          </Badge>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {["Manali", "Spiti", "Goa", "Kerala", "Ladakh"].map((place) => (
              <div key={place} className="text-center group cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-2 bg-gradient-ocean rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-semibold">{place[0]}</span>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-travel-ocean transition-colors">
                  {place}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};