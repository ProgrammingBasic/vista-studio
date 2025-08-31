import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { destinationRef } from "@/lib/database";



const categoryColors = {
    Adventure: "bg-red-500/50 text-white border-red-500/30",
    Cultural: "bg-purple-500/50 text-white border-purple-500/30",
    Nature: "bg-green-500/50 text-white border-green-500/30"
};

export default function Destinations() {
    const navigate = useNavigate();
    const [destinations, setDestinations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const q = query(destinationRef, where("isPublished", "==", true));
                const querySnapshot = await getDocs(q);
                const destinationData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log(destinationData);
                setDestinations(destinationData);
            } catch (err) {
                console.error("Error fetching users:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);


    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!destinations.length) {
        return <div className="min-h-screen flex items-center justify-center">No destinations found.</div>;
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.pexels.com/photos/13894718/pexels-photo-13894718.jpeg"
                        alt="Camping under stars"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Destinations
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Discover amazing destinations with our carefully crafted tour packages
                    </p>
                    <div className="flex items-center justify-center gap-4 text-white/80 mt-5">
                        <div className="flex items-center gap-1">
                            <MapPin className="h-5 w-5" />
                            <span>Premium Packages</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Shield className="h-5 w-5" />
                            <span>Safety Assured</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* Packages Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((item) => (
                            <Card
                                key={item.id}
                                className="group overflow-hidden border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={item.images[0]?.url}  // Ensure the URL exists
                                        alt={item.images[0]?.alt || item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    <div className="absolute top-4 left-4">
                                        <Badge
                                            variant="outline"
                                            className={`${categoryColors[item.category as keyof typeof categoryColors]} font-medium`}
                                        >
                                            {item.category}
                                        </Badge>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-bold text-foreground mb-3">
                                        {item.title}
                                    </h3>

                                    {/* <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            <span>{item.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users className="h-4 w-4" />
                                            <span>{item.groupSize}</span>
                                        </div>
                                    </div> */}

                                    <div className="flex items-center gap-1 mb-4">
                                        <MapPin className="h-4 w-4 text-travel-ocean" />
                                        <span className="text-travel-ocean font-medium">{item.state}</span>
                                    </div>

                                    <p className="text-muted-foreground mb-6 line-clamp-3">
                                        {item.description}
                                    </p>

                                    <Button
                                        variant="travel"
                                        className="w-full group-hover:scale-105 transition-transform duration-300"
                                        onClick={() => navigate(`/destination/${item.slug}`)}
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