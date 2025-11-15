import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Clock, Users, CheckCircle, Camera, Mountain, Utensils, Car, Plane, Train, Sun, CloudRain, Snowflake, CalendarDays, Phone, MessageSquare, Facebook, Instagram, Twitter, User, BusFront } from "lucide-react";
import { destinationRef } from "@/lib/database";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import PageImageGallery from "@/components/PageImageGallery";
import PageAccomodation from "./PageAccomodation";

const images = [
    {
        url: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
        alt: "Beautiful mountain landscape with clouds",
    },
    {
        url: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg",
        alt: "City skyline at sunset with skyscrapers",
    },
    {
        url: "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg",
        alt: "Traveler standing on a cliff overlooking the ocean",
    },
    {
        url: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
        alt: "Close-up of purple flower with dew drops",
    },
    {
        url: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
        alt: "Tropical beach with palm trees and blue sky",
    },
    {
        url: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
        alt: "Night sky full of stars over forest",
    },
    {
        url: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
        alt: "Aerial view of winding river through green fields",
    },
    {
        url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        alt: "Modern minimalist living room interior",
    },
    {
        url: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
        alt: "Group of friends hiking on a mountain trail",
    },
    {
        url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
        alt: "Delicious breakfast on wooden table",
    },
];



const categoryColors = {
    Adventure: "bg-red-500/10 text-red-600 border-red-500/30",
    Cultural: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    Nature: "bg-green-500/10 text-green-600 border-green-500/30"
};

const transportIcons = {
    flight: Plane,
    train: Train,
    road: Car,
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
                    const data = doc.data();
                    if (typeof data === "object" && data !== null) {
                        console.log("Fetched document data:", data);
                        setDestination({ id: doc.id, ...data });
                    } else {
                        setDestination({ id: doc.id });
                    }
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
            <section className="bg-muted/40">
                <div className="w-full">


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

                    <PageImageGallery images={images} />


                    {/* Image Gallery */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    </div> */}
                </div>
            </section>



            <div className="h-[2px] w-[90%] bg-gray-300 rounded-lg max-w-6xl mx-auto px-6"></div>
            <section className="max-w-7xl mx-auto px-6">
                {/* how to Reach and Best time to visit*/}
                <section className="py-12 bg-muted/30">
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* How to Reach Card */}
                            <Card className="border-4 shadow-sm border-spacing-1 border-[#00C2CB] ">
                                <CardContent className="p-6">
                                    <h3 className="flex items-center gap-2 relative z-0 text-2xl md:text-3xl font-bold text-foreground mb-2 uppercase font-primary tracking-wide pb-4 before:content-[''] before:absolute before:w-48 before:h-6 before:bg-yellow-400/70 before:bottom-2 before:left-8  before:-z-10">
                                        <MapPin className="h-6 w-6 text-travel-ocean" /> How to Reach
                                    </h3>
                                    <ul className="space-y-6">
                                        {
                                            Object.entries(destination.howToReach || {}).map(([mode, details]) => {
                                                const IconComponent = transportIcons[mode.toLowerCase() as keyof typeof transportIcons] || Plane; // Default to Plane if mode not found
                                                return (
                                                    <li key={mode} className="flex items-start gap-4">
                                                        <div className="bg-travel-ocean/10 rounded-full p-3 mt-1">
                                                            <IconComponent className="h-5 w-5 text-travel-ocean" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-lg capitalize">By {mode}</h4>
                                                            <p className="text-muted-foreground text-sm">{details}.</p>
                                                        </div>
                                                    </li>

                                                )
                                            })
                                        }
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Best Time to Visit Card */}
                            <Card className="border-4 shadow-sm border-spacing-1 border-[#00C2CB]">
                                <CardContent className="p-6">
                                    <h3 className="flex items-center gap-2 relative z-0 text-2xl md:text-3xl font-bold text-foreground mb-2 uppercase font-primary tracking-wide pb-4 before:content-[''] before:absolute before:w-48 before:h-6 before:bg-yellow-400/70 before:bottom-2 before:left-8  before:-z-10 ">
                                        <CalendarDays className="h-6 w-6 text-travel-ocean" /> Best Time to Visit
                                    </h3>
                                    <p className="text-muted-foreground mb-6">The best time to visit Tawang is during the summer and autumn months for pleasant weather and clear views.</p>
                                    <div className="flex justify-around text-center">
                                        <div className="flex flex-col items-center gap-2"><Sun className="h-8 w-8 text-yellow-500" /><span className="font-medium">Summer</span><span className="text-xs text-muted-foreground">Mar - Jun</span></div>
                                        <div className="flex flex-col items-center gap-2"><CloudRain className="h-8 w-8 text-blue-500" /><span className="font-medium">Monsoon</span><span className="text-xs text-muted-foreground">Jul - Sep</span></div>
                                        <div className="flex flex-col items-center gap-2"><Snowflake className="h-8 w-8 text-sky-400" /><span className="font-medium">Winter</span><span className="text-xs text-muted-foreground">Oct - Feb</span></div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section >
                    <div>
                        <Card className="overflow-hidden shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-2xl text-travel-ocean">
                                    <MapPin className="h-6 w-6" />
                                    Check on Map
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="relative h-96 bg-muted">
                                    <iframe
                                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14204.154914923714!2d92.25515060000001!3d27.1235901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375b5856e746dabf%3A0xa01f80e43b7e2191!2sShergaon%20790002!5e0!3m2!1sen!2sin!4v1760513056235!5m2!1sen!2sin`}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </section>

            <div className="h-[2px] w-[90%] bg-gray-300 rounded-lg max-w-6xl mx-auto px-6 my-20"></div>

            <PageAccomodation />

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-travel-ocean to-travel-deep mt-20">
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
