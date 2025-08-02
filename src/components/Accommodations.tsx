import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import campingImage from "@/assets/camping.jpg";
import hotelImage from "@/assets/hotel.jpg";
import homestayImage from "@/assets/homestay.jpg";

const accommodations = [
  {
    id: 1,
    title: "Camping & Rentals",
    image: campingImage,
    description: "Experience the great outdoors with our premium camping equipment and scenic locations"
  },
  {
    id: 2,
    title: "Luxury Resorts",
    image: hotelImage,
    description: "Indulge in world-class amenities and breathtaking views at our partner resorts"
  },
  {
    id: 3,
    title: "Authentic Homestays",
    image: homestayImage,
    description: "Connect with local culture through our carefully selected homestay experiences"
  }
];

export const Accommodations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Accommodations
          </h2>
          <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find your perfect home away from home
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accommodations.map((accommodation) => (
            <Card 
              key={accommodation.id}
              className="group overflow-hidden border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-3"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={accommodation.image}
                  alt={accommodation.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {accommodation.title}
                </h3>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {accommodation.description}
                </p>
                {/* <Button 
                  variant="outline" 
                  className="w-full border-travel-ocean text-travel-ocean hover:bg-travel-ocean hover:text-white group-hover:scale-105 transition-all duration-300"
                >
                  Explore Options
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="px-8">
            View All Stays
          </Button>
        </div>
      </div>
    </section>
  );
};