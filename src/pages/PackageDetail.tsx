import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Clock, Users, CheckCircle, Camera, Mountain, Utensils } from "lucide-react";

const packageData = {
  1: {
    id: 1,
    name: "Himalayan Adventure",
    category: "Adventure",
    duration: "7 Days",
    groupSize: "4-8 People",
    location: "Himachal Pradesh",
    overview: "Embark on an unforgettable journey through the majestic Himalayas. This adventure-packed tour takes you through pristine mountain trails, ancient villages, and breathtaking landscapes. Experience the thrill of high-altitude trekking, camping under starlit skies, and discovering hidden valleys that few have ever seen.",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1464822759844-d150ad6c0a6c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=500&fit=crop"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Shimla", description: "Arrive in Shimla, check into hotel, evening local sightseeing and briefing session." },
      { day: 2, title: "Shimla to Sarahan", description: "Drive to Sarahan (180km), visit Bhimakali Temple, acclimatization walk." },
      { day: 3, title: "Sarahan to Chitkul", description: "Drive to Chitkul via Sangla, explore the last village on Indo-Tibet border." },
      { day: 4, title: "Chitkul to Kalpa", description: "Trek to Kalpa, visit Kinnaur Kailash, overnight stay with mountain views." },
      { day: 5, title: "Kalpa to Nako", description: "Drive to Nako, explore Nako Lake and monastery, evening meditation session." },
      { day: 6, title: "Nako to Kaza", description: "Journey to Kaza via Gue village, visit mummy monastery, check into guesthouse." },
      { day: 7, title: "Departure", description: "Morning at leisure, drive back to Shimla/Manali for onward journey." }
    ],
    howToReach: "Fly to Delhi, then take overnight bus to Shimla (12 hours) or fly to Chandigarh and drive to Shimla (4 hours). We provide pickup service from Shimla bus stand/airport.",
    included: [
      "Accommodation in hotels/guesthouses",
      "All meals (breakfast, lunch, dinner)",
      "Transportation in comfortable vehicles",
      "Professional trek guide",
      "Permits and entry fees",
      "First aid kit and emergency support",
      "Camping equipment (if required)"
    ],
    highlights: [
      "Trek through pristine Himalayan trails",
      "Visit ancient monasteries and temples",
      "Experience local Kinnauri culture",
      "Witness breathtaking mountain sunrises",
      "Camp under starlit skies",
      "Photography opportunities at every turn"
    ]
  }
  // Add more package data as needed
};

const categoryColors = {
  Adventure: "bg-red-500/10 text-red-600 border-red-500/30",
  Cultural: "bg-purple-500/10 text-purple-600 border-purple-500/30",
  Nature: "bg-green-500/10 text-green-600 border-green-500/30"
};

export default function PackageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const packageInfo = packageData[Number(id) as keyof typeof packageData];

  if (!packageInfo) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Package not found</h2>
          <Button onClick={() => navigate('/packages')}>Back to Packages</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 bg-gradient-to-br from-travel-ocean to-travel-deep pt-40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Category Badge on top */}
          <Badge 
            variant="outline" 
            className={`mb-4 ${categoryColors[packageInfo.category as keyof typeof categoryColors]} font-medium`}
          >
            {packageInfo.category}
          </Badge>
          {/* Package Name */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {packageInfo.name}
          </h1>
          {/* Package Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-4 w-4" />
              <span>{packageInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="h-4 w-4" />
              <span>{packageInfo.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Users className="h-4 w-4" />
              <span>{packageInfo.groupSize}</span>
            </div>
          </div>
          {/* Book Now Button */}
          <Button 
            variant="travel" 
            size="lg"
            className="mb-8"
          >
            Book Now
          </Button>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover amazing destinations with our carefully crafted tour packages
          </p>
        </div>
      </section>
      {/* Header */}
      {/* <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-6">
          
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold text-foreground">{packageInfo.name}</h1>
                <Badge 
                  variant="outline" 
                  className={`${categoryColors[packageInfo.category as keyof typeof categoryColors]} font-medium`}
                >
                  {packageInfo.category}
                </Badge>
              </div>
              
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{packageInfo.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{packageInfo.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{packageInfo.groupSize}</span>
                </div>
              </div>
            </div>
            
            <Button variant="travel" size="lg">
              Book Now
            </Button>
          </div>
        </div>
      </section> */}

      {/* Overview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {packageInfo.overview}
          </p>
          
          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {packageInfo.images.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                <img 
                  src={image} 
                  alt={`${packageInfo.name} ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs defaultValue="itinerary" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger value="reach">How to Reach</TabsTrigger>
              <TabsTrigger value="included">Included</TabsTrigger>
            </TabsList>
            
            <TabsContent value="itinerary" className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Day-wise Itinerary</h3>
              <div className="space-y-4">
                {packageInfo.itinerary.map((day) => (
                  <Card key={day.day} className="border-l-4 border-l-travel-ocean">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-travel-ocean text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          {day.day}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{day.title}</h4>
                          <p className="text-muted-foreground">{day.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reach">
              <h3 className="text-2xl font-bold mb-6">How to Reach</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-6 w-6 text-travel-ocean mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Transportation Details</h4>
                        <p className="text-muted-foreground mb-4">{packageInfo.howToReach}</p>
                        
                        <div className="space-y-2">
                          <h5 className="font-medium text-foreground">Address:</h5>
                          <p className="text-sm text-muted-foreground">
                            Starting Point: Shimla Bus Stand<br/>
                            Shimla, Himachal Pradesh 171001<br/>
                            Contact: +91 9876543210
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-travel-ocean" />
                      Location Map
                    </h4>
                    <div className="relative h-64 bg-muted rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789!2d77.1734!3d31.1048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3dc0053ad%3A0x3e1cf40b65b80aaa!2sShimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1635678901234!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="included">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packageInfo.included.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>{item}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Package Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packageInfo.highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-hover-travel transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-travel-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-travel-ocean/20 transition-colors duration-300">
                    <Mountain className="h-6 w-6 text-travel-ocean" />
                  </div>
                  <p className="font-medium">{highlight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-travel-ocean to-travel-deep">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book this amazing package now and create memories that will last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Contact Us
            </Button>
            <Button variant="outline" size="lg" className="border-white text-travel-ocean hover:bg-white hover:text-travel-ocean">
              Download Itinerary
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}