import React, { useEffect, useState } from 'react'
import { MapPin, Shield, Star } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';
import { accomodationRef } from '@/lib/database';
import { getDocs, where, query } from 'firebase/firestore';

// const accommodations = [
//     { id: 1, name: "Serene Valley Homestay", slug: "serene-valley-homestay", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&h=400&fit=crop", location: "Ziro, Arunachal Pradesh", price: "₹2,500/night", rating: 4.8, category: "Homestay" },
//     { id: 2, name: "Himalayan Crest Resort", slug: "himalayan-crest-resort", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop", location: "Tawang, Arunachal Pradesh", price: "₹7,000/night", rating: 4.9, category: "Hotel" },
//     { id: 3, name: "Wilderness Camp", slug: "wilderness-camp", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=400&fit=crop", location: "Namdapha National Park", price: "₹1,800/night", rating: 4.6, category: "Camping" },
//     { id: 4, name: "The Traveller's Nook", slug: "the-travellers-nook", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&h=400&fit=crop", location: "Bomdila, Arunachal Pradesh", price: "₹800/night", rating: 4.4, category: "Zostel" },
//     { id: 5, name: "Riverside Cottage", slug: "riverside-cottage", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=400&fit=crop", location: "Mechuka, Arunachal Pradesh", price: "₹3,500/night", rating: 4.7, category: "Homestay" },
//     { id: 6, name: "Mountain's Edge Hotel", slug: "mountains-edge-hotel", image: "https://images.unsplash.com/photo-1542314831-068cd1dbb5eb?w=500&h=400&fit=crop", location: "Dirang, Arunachal Pradesh", price: "₹5,500/night", rating: 4.5, category: "Hotel" },
//     { id: 7, name: "Starlit Sky Camping", slug: "starlit-sky-camping", image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=500&h=400&fit=crop", location: "Sela Pass, Arunachal Pradesh", price: "₹2,200/night", rating: 4.9, category: "Camping" },
//     { id: 8, name: "Ziro Puto Homestay", slug: "ziro-puto-homestay", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop", location: "Ziro, Arunachal Pradesh", price: "₹2,000/night", rating: 4.6, category: "Homestay" },
//     { id: 9, name: "Tawang Regency", slug: "tawang-regency", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&h=400&fit=crop", location: "Tawang, Arunachal Pradesh", price: "₹8,500/night", rating: 4.8, category: "Hotel" },
// ];

const AccommodationCard = ({ accommodation }: { accommodation: typeof accommodations[0] }) => {
    const navigate = useNavigate();

    return (
        <Card className="group overflow-hidden border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-2 rounded-lg">
            <div className="relative h-64 overflow-hidden">
                <img src={accommodation.images[0].url} alt={accommodation.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        {/* <span className="text-white font-semibold">{accommodation.rating}</span> */}
                    </div>
                </div>
            </div>
            <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{accommodation.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                    <MapPin className="h-4 w-4 text-travel-ocean" />
                    <span className="text-muted-foreground font-medium text-sm">{accommodation.location.address}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-bold text-travel-ocean">{accommodation.price}</span>
                    <Badge variant="outline" className="border-travel-ocean/30 text-travel-ocean">{accommodation.category}</Badge>
                </div>
                <Button variant="travel" className="w-full rounded-none hover:text-yellow-300" onClick={() => navigate(`/stay/${accommodation.slug}`)}>
                    View Details
                </Button>
            </CardContent>
        </Card>
    );
};

function Staylist() {
    const categories = ["All", "Homestay", "Hotel", "Camping", "Zostel"];

    const getFilteredAccommodations = (category: string) => {
        if (category === "All") {
            return accommodations;
        }
        return accommodations.filter(acc => acc.category === category);
    };
    const [loading, setLoading] = useState(true)
    const [accommodations, setAccommodations] = useState<any[]>([])

    useEffect(() => {
        const fetchAccomodations = async () => {
            console.log("fetching accommodations")
            try {
                const q = query(accomodationRef, where("isPublished", "==", true))
                const querySnapshot = await getDocs(q)
                console.log(querySnapshot.docs)
                const accommodationData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                console.log(accommodationData)
                setAccommodations(accommodationData)
            } catch (error) {
                console.error("Error fetching accommodations:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchAccomodations();
    }, [])


    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>
    }
    if (!accommodations.length) {
        return <div className="min-h-screen flex items-center justify-center">No accommodations found.</div>
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop"
                        alt="Accommodations"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Accommodations
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8">
                        Find your perfect home away from home for your mountain adventures.
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
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <Tabs defaultValue="All" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 max-w-2xl mx-auto mb-12">
                            {categories.map(category => (
                                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                            ))}
                        </TabsList>

                        {categories.map(category => (
                            <TabsContent key={category} value={category}>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {getFilteredAccommodations(category).map(acc => (
                                        <AccommodationCard key={acc.id} accommodation={acc} />
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>
        </div>
    )
}

export default Staylist