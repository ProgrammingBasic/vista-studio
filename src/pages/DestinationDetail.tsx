import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Clock, Users, CheckCircle, Camera, Mountain, Utensils } from "lucide-react";
import { destinationRef } from "@/lib/database";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";



const categoryColors = {
    Adventure: "bg-red-500/10 text-red-600 border-red-500/30",
    Cultural: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    Nature: "bg-green-500/10 text-green-600 border-green-500/30"
};

export default function DestinationDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [destination, setDestination] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPostBySlug = async () => {
            try {
                setLoading(true);
                const q = query(destinationRef, where("slug", "==", slug));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const doc = querySnapshot.docs[0];
                    setDestination({ id: doc.id, ...doc.data() });
                } else {
                    console.warn("No document found for slug:", slug);
                    setDestination(null);
                }
            } catch (error) {
                console.error("Error fetching document:", error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) fetchPostBySlug();
    }, [slug]);

    if (loading || !destination) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }


    return (
        <div className="min-h-screen bg-background">
            <section className="relative py-20 bg-gradient-to-br from-travel-ocean to-travel-deep pt-40">
                <div className="absolute inset-0">
                    <img
                        src={destination.images[0].url || "https://images.pexels.com/photos/13894718/pexels-photo-13894718.jpeg"}
                        alt={destination.title || "Destination Image"}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
                    {/* Category Badge on top */}
                    <Badge
                        variant="outline"
                        className={`mb-4 ${categoryColors[destination.category as keyof typeof categoryColors]} font-medium`}
                    >
                        {destination.category}
                    </Badge>
                    {/* Package Name */}
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        {destination.title}
                    </h1>
                    {/* Package Info */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                        <div className="flex items-center gap-2 text-white/90">
                            <MapPin className="h-4 w-4" />
                            <span>{destination.state}</span>
                        </div>

                    </div>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Discover amazing destinations with our carefully crafted tour packages
                    </p>
                </div>
            </section>
            {/* Overview */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-6">
                    {/* <h2 className="text-3xl font-bold mb-6">Overview</h2> */}
                    <div
                        className="prose max-w-none mb-10 text-foreground wysiwyg"
                        dangerouslySetInnerHTML={{ __html: destination?.content || "" }}
                    />


                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {destination.images.map((image, index) => (
                            <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                                <img
                                    src={image.url}
                                    alt={`${destination.name} ${index + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>
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

