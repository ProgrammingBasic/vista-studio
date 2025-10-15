import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";

const accommodations = [
    {
        id: 1,
        name: "Mountain View Camp",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=300&fit=crop",
        description: "Premium camping sites with modern facilities and equipment rentals for the perfect outdoor experience.",
        location: "Tawang, Arunachal Pradesh"
    },
    {
        id: 2,
        name: "Riverside Homestay",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
        description: "Experience local culture and hospitality with our carefully selected homestay partners.",
        location: "Ziro, Arunachal Pradesh"
    },
    {
        id: 3,
        name: "Himalayan Luxury Resort",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
        description: "Luxury accommodations with world-class amenities for a comfortable mountain retreat.",
        location: "Bomdila, Arunachal Pradesh"
    },

];

function PageAccomodation() {
    const navigate = useNavigate();

    return (
        <div className="bg-background">

            <SectionTitle title="Accommodations" subtitle="Comprehensive travel solutions designed to make your journey seamless and unforgettable" />
            {/* Accommodations Grid */}
            <section >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {accommodations.map((acc) => (
                            <Card key={acc.id} className="group rounded-none overflow-hidden border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-2">
                                <div className="relative h-64 overflow-hidden">
                                    <img src={acc.image} alt={acc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-bold text-foreground mb-3">{acc.name}</h3>
                                    <div className="flex items-center gap-1 mb-4">
                                        <MapPin className="h-4 w-4 text-travel-ocean" />
                                        <span className="text-travel-ocean font-medium">{acc.location}</span>
                                    </div>
                                    <p className="text-muted-foreground mb-6 line-clamp-3">{acc.description}</p>
                                    <Button variant="travel" className="w-full rounded-none" onClick={() => navigate('/stay')}>
                                        View Details
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

export default PageAccomodation;