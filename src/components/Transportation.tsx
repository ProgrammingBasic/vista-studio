import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import bikeIcon from "@/assets/bike-icon.png";
import carIcon from "@/assets/car-icon.png";
import motorcycleIcon from "@/assets/motorcycle-icon.png";
import camping from "@/assets/camping.jpg";
import homestay from "@/assets/homestay.jpg";
import hotel from "@/assets/hotel.jpg";

const transportOptions = [
  {
    id: 1,
    name: "Bicycle",
    icon: bikeIcon,
    price: "From ₹849/day",
    description: "Perfect for city exploration and eco-friendly adventures",
    image: camping
  },
  {
    id: 2,
    name: "Motorcycle", 
    icon: motorcycleIcon,
    price: "From ₹1,249/day",
    description: "Freedom to explore winding mountain roads",
    image: homestay
  },
  {
    id: 3,
    name: "Self Drive Car",
    icon: carIcon,
    price: "From ₹2,590/day", 
    description: "Comfortable family travel with complete independence",
    image: hotel
  },
  {
    id: 4,
    name: "SUV",
    icon: carIcon,
    price: "From ₹3,990/day",
    description: "Rugged vehicles for off-road adventures",
    image: camping
  },
  {
    id: 5,
    name: "MUV", 
    icon: carIcon,
    price: "From ₹3,249/day",
    description: "Spacious multi-utility vehicles for group travel",
    image: homestay
  },
  {
    id: 6,
    name: "Caravan",
    icon: carIcon,
    price: "Available on Demand",
    description: "Mobile homes for the ultimate road trip experience",
    image: hotel
  }
];

export const Transportation = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transportation
          </h2>
          <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your perfect ride for an unforgettable journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transportOptions.map((option) => (
            <Card 
              key={option.id} 
              className="group bg-gradient-card border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-300 hover:-translate-y-2 overflow-hidden relative"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{ backgroundImage: `url(${option.image})` }}
              ></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 p-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <img 
                    src={option.icon} 
                    alt={option.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-travel-ocean mb-2">
                  {option.name}
                </h3>
                <p className="text-2xl font-bold text-travel-teal mb-3">
                  {option.price}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {option.description}
                </p>
                <Button 
                  variant="travel" 
                  className="w-full group-hover:scale-105 transition-transform duration-300"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Book Your Transport
          </Button>
        </div>
      </div>
    </section>
  );
};
