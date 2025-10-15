import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"; // Keep this line
import { Label } from "@/components/ui/label"; // Keep this line
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from 'lucide-react';

const northEastStates = [
    {
        id: 1,
        name: "Arunachal Pradesh",
        slug: "arunachal-pradesh",
        image: "https://static.toiimg.com/thumb/91692790/Arunachal-Dirang-Monastery.jpg?width=1200&height=900",
        description: "Known as the 'Land of the Dawn-Lit Mountains', Arunachal Pradesh is a pristine wilderness of lush forests, deep river valleys, and snow-capped peaks."
    },
    {
        id: 2,
        name: "Assam",
        slug: "assam",
        image: "https://media.assettype.com/english-sentinelassam%2Fimport%2Fh-upload%2F2021%2F02%2F01%2F194824-tea-garden-1.webp?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
        description: "Famous for its tea gardens, rich wildlife in Kaziranga National Park, and the mighty Brahmaputra river, Assam is the gateway to the Northeast."
    },
    {
        id: 3,
        name: "Manipur",
        slug: "manipur",
        image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/18/41382e8a00fb64504e33762e52d83b21_1000x1000.jpg",
        description: "Called the 'Jewel of India', Manipur is known for its classical dance, scenic landscapes, and the unique Loktak Lake with its floating islands."
    },
    {
        id: 4,
        name: "Meghalaya",
        slug: "meghalaya",
        image: "https://chalotravellers.com/wp-content/uploads/2024/08/Dawki-Shnongpdeng-meghalaya.jpg",
        description: "The 'Abode of Clouds', Meghalaya mesmerizes with its living root bridges, cascading waterfalls, and some of the wettest places on Earth."
    },
    {
        id: 5,
        name: "Mizoram",
        slug: "mizoram",
        image: "https://www.holidify.com/images/bgImages/MIZORAM.jpg",
        description: "A land of rolling hills and serene valleys, Mizoram offers a tranquil escape with its vibrant culture and picturesque landscapes."
    },
];

const destinationsByState = {
    "arunachal-pradesh": [
        { id: 1, name: "Tawang", image: "https://www.tripsavvy.com/thmb/LV9cMvf0PkFRA1hO6-CfTyFBxgs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-606222988-5a823cff1d64040037dfd9a1.jpg", description: "Famous for its beautiful monasteries and breathtaking landscapes.", category: "Cultural", rating: 4.8 },
        { id: 2, name: "Ziro Valley", image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/A_cross_section_of_luch_green_valley_of_Ziro.jpg", description: "Known for its pine-clad hills and rice fields, and the Apatani tribe.", category: "Nature", rating: 4.5 },
        { id: 3, name: "Mechuka", image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-samten-yongcha-monastery-mechuka-arunachal-pradesh-attr-hero?qlt=82&ts=1726743121180", description: "A picturesque valley with pristine rivers and snow-capped mountains.", category: "Adventure", rating: 4.7 },
    ],
    "assam": [
        { id: 4, name: "Kaziranga National Park", image: "https://media.assettype.com/english-sentinelassam%2Fimport%2Fh-upload%2F2021%2F02%2F01%2F194824-tea-garden-1.webp?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100", description: "Home to the one-horned rhinoceros.", category: "Wildlife", rating: 4.9 },
        { id: 5, name: "Majuli Island", image: "https://staging-tashi-marketplace.s3-us-west-2.amazonaws.com/cms/blog_content-1623589841679.jpeg", description: "The largest river island in the world.", category: "Nature", rating: 4.6 },
    ],
    // Add more states and destinations as needed
};

const allCategories = ["Cultural", "Nature", "Adventure", "Wildlife"];

function DestinationSearchByState() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [destinations, setDestinations] = useState(destinationsByState[slug as keyof typeof destinationsByState] || []);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const stateInfo = northEastStates.find(state => state.slug === slug);

    const stateName = slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    useEffect(() => {
        const allDests = destinationsByState[slug as keyof typeof destinationsByState] || [];
        if (selectedCategories.length === 0) {
            setDestinations(allDests);
        } else {
            const filteredDests = allDests.filter(dest => selectedCategories.includes(dest.category));
            setDestinations(filteredDests);
        }
    }, [selectedCategories, slug]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    return (
        <div className="min-h-screen bg-background">
            <section className="relative pt-40 pb-24">
                <div className="absolute inset-0">
                    <img
                        src={stateInfo?.image || destinations[0]?.image || "https://images.pexels.com/photos/1426604966848/pexels-photo-1426604966848.jpeg"}
                        alt={`${stateName} landscape`}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Destinations in {stateName}
                    </h1>
                    <p className="text-lg text-white/80">
                        Discover the best places to visit in {stateName}.
                    </p>
                </div>
            </section>

            {stateInfo && (
                <section className="py-16 bg-muted/20">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-foreground mb-4">About {stateName}</h2>
                        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {stateInfo.description}
                        </p>
                    </div>
                </section>
            )}

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column (Filters) - 30% */}
                    <aside className="lg:col-span-3">
                        <Card className="sticky top-24">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
                                <div className="space-y-3">
                                    {allCategories.map(category => (
                                        <div key={category} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={category}
                                                checked={selectedCategories.includes(category)}
                                                onCheckedChange={() => handleCategoryChange(category)}
                                            />
                                            <Label htmlFor={category} className="cursor-pointer">{category}</Label>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </aside>

                    {/* Right Column (Destination Cards) - 70% */}
                    <main className="lg:col-span-9">
                        <div className="space-y-6">
                            {destinations.length > 0 ? (
                                destinations.map(dest => (
                                    <Card key={dest.id} className="group overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                                        <div className="flex flex-col md:flex-row">
                                            <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                                                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            </div>
                                            <div className="md:w-2/3">
                                                <CardContent className="p-6 flex flex-col h-full">
                                                    <h3 className="text-2xl font-bold text-foreground mb-2">{dest.name}</h3>
                                                    <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                                                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> <span>{dest.rating}</span>
                                                        <span className="mx-1">•</span>
                                                        <Badge variant="outline">{dest.category}</Badge>
                                                    </div>
                                                    <p className="text-muted-foreground mb-4 flex-grow">{dest.description}</p>
                                                    <Button variant="travel" className="w-full md:w-auto self-end mt-auto" onClick={() => navigate(`/destination/${dest.name.toLowerCase().replace(/ /g, '-')}`)}>
                                                        Explore
                                                    </Button>
                                                </CardContent>
                                            </div>
                                        </div>
                                    </Card>
                                ))
                            ) : (
                                <p className="text-center text-muted-foreground col-span-full">No destinations found for the selected criteria.</p>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default DestinationSearchByState