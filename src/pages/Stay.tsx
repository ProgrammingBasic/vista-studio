import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Shield, Clock, MapPin, Users, Tent, Home, Building, Coffee } from "lucide-react";
import { useState } from "react";

const accommodations = [
  {
    id: 1,
    title: "Camping & Rentals",
    icon: Tent,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=300&fit=crop",
    description: "Premium camping sites with modern facilities and equipment rentals for the perfect outdoor experience."
  },
  {
    id: 2,
    title: "Homestay",
    icon: Home,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
    description: "Experience local culture and hospitality with our carefully selected homestay partners."
  },
  {
    id: 3,
    title: "Resorts & Hotels",
    icon: Building,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
    description: "Luxury accommodations with world-class amenities for a comfortable mountain retreat."
  },
  {
    id: 4,
    title: "Zostel",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&h=300&fit=crop",
    description: "Vibrant backpacker hostels perfect for budget travelers and social experiences."
  }
];

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Booking Request Sent!",
      description: "We've received your request and will send you accommodation details via email shortly.",
    });
  };
  return (
    <div className="min-h-screen">
      <Navigation />
      
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

      {/* Accommodations Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Choose Your Stay
            </h2>
            <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From camping under the stars to luxury resorts, find the perfect accommodation for your adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accommodations.map((accommodation) => {
              const IconComponent = accommodation.icon;
              return (
                <Card 
                  key={accommodation.id}
                  className="group border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={accommodation.image}
                      alt={accommodation.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-travel-ocean mb-3">
                      {accommodation.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {accommodation.description}
                    </p>
                    
                    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                      <DialogTrigger asChild>
                        <Button 
                          variant="travel" 
                          className="w-full group-hover:scale-105 transition-transform duration-300"
                        >
                          Book Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-travel-ocean">
                            {isSubmitted ? "Booking Confirmed!" : "Book Your Stay"}
                          </DialogTitle>
                        </DialogHeader>
                        
                        {isSubmitted ? (
                          <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Shield className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Thank You!</h3>
                            <p className="text-muted-foreground">
                              We've received your booking request. An email with accommodation details will be sent to you shortly.
                            </p>
                            <Button 
                              variant="travel" 
                              className="mt-4"
                              onClick={() => {
                                setIsSubmitted(false);
                                setIsModalOpen(false);
                              }}
                            >
                              Close
                            </Button>
                          </div>
                        ) : (
                          <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name</Label>
                              <Input id="name" placeholder="Enter your full name" required />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" type="email" placeholder="Enter your email" required />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="accommodation">Accommodation Type</Label>
                              <Select required>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select accommodation type" />
                                </SelectTrigger>
                                <SelectContent>
                                  {accommodations.map((acc) => (
                                    <SelectItem key={acc.id} value={acc.title}>
                                      {acc.title}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="message">Message (Optional)</Label>
                              <Textarea 
                                id="message" 
                                placeholder="Any specific requirements or questions?" 
                                rows={3}
                              />
                            </div>
                            
                            <div className="flex gap-3 pt-4">
                              <Button 
                                type="button" 
                                variant="outline" 
                                className="flex-1"
                                onClick={() => setIsModalOpen(false)}
                              >
                                Cancel
                              </Button>
                              <Button type="submit" variant="travel" className="flex-1">
                                Submit Request
                              </Button>
                            </div>
                          </form>
                        )}
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

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

      <Footer />
    </div>
  );
};

export default Stay;