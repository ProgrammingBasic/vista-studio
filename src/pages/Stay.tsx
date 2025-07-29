import { Navigation } from "@/components/Navigation";
import { Transportation } from "@/components/Transportation";
import { Accommodations } from "@/components/Accommodations";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, MapPin, Users } from "lucide-react";

const tentPricing = [
  {
    type: "Single Tent",
    price: "₹800",
    capacity: "1 Person",
    features: ["Thermarest included", "Weather resistant", "Compact design"]
  },
  {
    type: "Double Tent",
    price: "₹1,000",
    capacity: "2 People",
    features: ["Thermarest included", "Spacious interior", "Enhanced ventilation"]
  }
];

const Stay = () => {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&h=1080&fit=crop"
            alt="Camping under stars"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Stay & Explore
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Comfortable accommodations for your mountain adventures
          </p>
          <div className="flex items-center justify-center gap-4 text-white/80">
            <div className="flex items-center gap-1">
              <MapPin className="h-5 w-5" />
              <span>Premium Locations</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="h-5 w-5" />
              <span>Safety Assured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <Transportation />

      {/* Accommodations Section */}
      <Accommodations />

      {/* Tent Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Camping Equipment
            </h2>
            <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium tents for your outdoor adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {tentPricing.map((tent, index) => (
              <Card 
                key={index}
                className="group border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-3"
              >
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-travel-ocean mb-2">
                    {tent.type}
                  </CardTitle>
                  <div className="text-4xl font-bold text-travel-teal mb-2">
                    {tent.price}
                    <span className="text-lg font-normal text-muted-foreground">/day</span>
                  </div>
                  <Badge variant="secondary" className="bg-travel-ocean/10 text-travel-ocean">
                    {tent.capacity}
                  </Badge>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {tent.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-travel-teal rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
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

          {/* Details Section */}
          <Card className="max-w-4xl mx-auto border-0 shadow-card-travel">
            <CardHeader>
              <CardTitle className="text-2xl text-travel-ocean flex items-center gap-2">
                <Clock className="h-6 w-6" />
                Important Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-travel-ocean" />
                    Pricing Information
                  </h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>• The charges are on a daily basis</p>
                    <p>• Thermarests are included with all tents</p>
                    <p>• Weather-resistant and high-quality materials</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-travel-ocean" />
                    Security Deposit
                  </h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>• Security deposit: <strong className="text-travel-teal">₹2,000 per tent</strong></p>
                    <p>• Full refund upon return (subject to inspection)</p>
                    <p>• Damage assessment for any issues</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-travel-ocean/5 rounded-lg border border-travel-ocean/20">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Note:</strong> All tents undergo thorough inspection before and after use. 
                  Please handle with care to ensure full deposit refund.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


    </div>
  );
};

export default Stay;