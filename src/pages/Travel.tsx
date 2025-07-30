import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bike, Car, Truck, Shield, AlertTriangle, Clock, Users, MapPin } from "lucide-react";


const vehicles = [
  {
    id: 1,
    name: "Royal Enfield Classic 350",
    type: "Motorcycle",
    price: "₹1,500",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop",
    icon: Bike,
    details: ["Manual transmission", "350cc engine", "Fuel efficient", "Perfect for long rides"]
  },
  {
    id: 2,
    name: "Royal Enfield Himalayan",
    type: "Adventure Bike",
    price: "₹1,800",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&h=250&fit=crop",
    icon: Bike,
    details: ["All-terrain capability", "411cc engine", "Adventure ready", "Rugged design"]
  },
  {
    id: 3,
    name: "Mahindra Thar",
    type: "SUV",
    price: "₹3,500",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=250&fit=crop",
    icon: Car,
    details: ["4x4 capability", "Diesel engine", "6 seater", "Perfect for group travel"]
  },
  {
    id: 4,
    name: "Maruti Suzuki Swift",
    type: "Hatchback",
    price: "₹2,000",
    image: "https://images.unsplash.com/photo-1503376821350-57669e2c6bb3?w=400&h=250&fit=crop",
    icon: Car,
    details: ["Automatic/Manual", "Petrol engine", "5 seater", "City friendly"]
  },
  {
    id: 5,
    name: "Toyota Innova Crysta",
    type: "MUV",
    price: "₹4,000",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop",
    icon: Truck,
    details: ["7-8 seater", "Diesel/Petrol", "Spacious interior", "Family friendly"]
  },
  {
    id: 6,
    name: "Tempo Traveller",
    type: "Van",
    price: "₹6,000",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=250&fit=crop",
    icon: Truck,
    details: ["12-16 seater", "Group travel", "AC available", "Long distance comfort"]
  }
];

const Travel = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/21014/pexels-photo.jpg"
            alt="Camping under stars"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Vehicle Rentals
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Explore the mountains with our premium vehicle rental services
          </p>
          <div className="flex items-center justify-center gap-4 text-white/80">
            <div className="flex items-center gap-1">
              <MapPin className="h-5 w-5" />
              <span>Premium Vehicles</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="h-5 w-5" />
              <span>Safety Assured</span>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop"
            alt="Mountain roads"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Vehicle Rentals
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Explore the mountains with our premium vehicle rental services
          </p>
        </div>
      </section> */}

      {/* Vehicles Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Choose Your Ride
            </h2>
            <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From motorcycles to tempo travellers, find the perfect vehicle for your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => {
              const IconComponent = vehicle.icon;
              return (
                <Card
                  key={vehicle.id}
                  className="group border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-travel-ocean text-white">
                        {vehicle.type}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-travel-ocean">
                        {vehicle.name}
                      </h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-travel-teal">
                          {vehicle.price}
                        </div>
                        <div className="text-sm text-muted-foreground">per day</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {vehicle.details.map((detail, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-travel-teal rounded-full mr-2"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Details */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="border-0 shadow-card-travel">
            <CardHeader>
              <CardTitle className="text-2xl text-travel-ocean flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                Important Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-travel-ocean" />
                    General Terms
                  </h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>• There is no limit to the miles, charges are as per daily basis.</p>
                    <p>• Helmets will be provided, but feel free to bring your own if you like.</p>
                    <p>• There is a security deposit of ₹5,000 charged per motorcycle which will be refunded when the motorcycle is returned (subject to inspection for damages etc.)</p>
                    <p>• Fuel costs will be borne by the customer/group.</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-foreground mb-3">
                    Additional Services
                  </h4>
                  <div className="bg-travel-ocean/5 rounded-lg p-4 border border-travel-ocean/20">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-travel-teal">NOTE:</strong> We also provide services of an on-road mechanic if you require.
                      The charge is <strong className="text-travel-teal">₹2,000 per day</strong> inclusive of food and lodging.
                      The fuel costs for the mechanic will however be borne by the customer/group.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Travel;