import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const packages = [
  {
    id: 1,
    name: "Himalayan Adventure",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    category: "Adventure",
    duration: "7 Days",
    groupSize: "4-8 People",
    location: "Himachal Pradesh",
    description: "Experience the thrill of trekking through pristine mountain trails, camping under starlit skies, and discovering hidden valleys in the heart of the Himalayas."
  },
  {
    id: 2,
    name: "Spiti Valley Explorer",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    category: "Cultural",
    duration: "10 Days",
    groupSize: "6-12 People",
    location: "Spiti Valley",
    description: "Journey through the cold desert landscapes of Spiti, visit ancient monasteries, and immerse yourself in the unique Tibetan Buddhist culture."
  },
  {
    id: 3,
    name: "Coastal Paradise",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    category: "Nature",
    duration: "5 Days",
    groupSize: "2-6 People",
    location: "Goa",
    description: "Relax on pristine beaches, explore vibrant coral reefs, and enjoy water sports in this tropical paradise perfect for nature lovers."
  },
  {
    id: 4,
    name: "Backwater Bliss",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    category: "Cultural",
    duration: "6 Days",
    groupSize: "4-10 People",
    location: "Kerala",
    description: "Navigate through serene backwaters on traditional houseboats, experience authentic Kerala culture, and rejuvenate with Ayurvedic treatments."
  },
  {
    id: 5,
    name: "Desert Safari",
    image: "https://images.unsplash.com/photo-1582659962893-e4bee469d0ca?w=400&h=300&fit=crop",
    category: "Adventure",
    duration: "4 Days",
    groupSize: "6-15 People",
    location: "Rajasthan",
    description: "Embark on camel safaris across golden sand dunes, camp under the desert stars, and experience the rich folk culture of Rajasthan."
  },
  {
    id: 6,
    name: "Ladakh Expedition",
    image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=400&h=300&fit=crop",
    category: "Adventure",
    duration: "12 Days",
    groupSize: "4-8 People",
    location: "Ladakh",
    description: "Challenge yourself with high-altitude adventures, explore Buddhist monasteries, and witness breathtaking landscapes in the Land of High Passes."
  },
  {
    id: 7,
    name: "Northeast Heritage",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop",
    category: "Cultural",
    duration: "8 Days",
    groupSize: "6-12 People",
    location: "Arunachal Pradesh",
    description: "Discover the rich tribal heritage, visit traditional villages, and explore the untouched natural beauty of India's northeastern frontier."
  },
  {
    id: 8,
    name: "Wildlife Safari",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop",
    category: "Nature",
    duration: "5 Days",
    groupSize: "4-8 People",
    location: "Jim Corbett",
    description: "Spot majestic tigers and diverse wildlife in their natural habitat while staying in eco-friendly jungle lodges."
  },
  {
    id: 9,
    name: "Valley of Flowers",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
    category: "Nature",
    duration: "6 Days",
    groupSize: "8-15 People",
    location: "Uttarakhand",
    description: "Trek through meadows carpeted with rare alpine flowers and witness one of nature's most spectacular displays in this UNESCO World Heritage site."
  }
];

const categoryColors = {
  Adventure: "bg-red-500/10 text-red-600 border-red-500/30",
  Cultural: "bg-purple-500/10 text-purple-600 border-purple-500/30",
  Nature: "bg-green-500/10 text-green-600 border-green-500/30"
};

export default function Packages() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-travel-ocean to-travel-deep">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Tour Packages
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover amazing destinations with our carefully crafted tour packages
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id}
                className="group overflow-hidden border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant="outline" 
                      className={`${categoryColors[pkg.category as keyof typeof categoryColors]} font-medium`}
                    >
                      {pkg.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {pkg.name}
                  </h3>

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

                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {pkg.description}
                  </p>

                  <Button 
                    variant="travel" 
                    className="w-full group-hover:scale-105 transition-transform duration-300"
                    onClick={() => navigate(`/packages/${pkg.id}`)}
                  >
                    More Info
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}