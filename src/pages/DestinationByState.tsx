import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MapPin, Shield } from 'lucide-react';

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
    {
        id: 6,
        name: "Nagaland",
        slug: "nagaland",
        image: "https://en.indiaboundtour.com/assets/images/1722240164Nagaland.jpg",
        description: "Home to diverse indigenous tribes, Nagaland is a cultural mosaic with vibrant festivals, unique traditions, and stunning hill scenery."
    },
    {
        id: 7,
        name: "Sikkim",
        slug: "sikkim",
        image: "https://www.tripsavvy.com/thmb/LV9cMvf0PkFRA1hO6-CfTyFBxgs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-606222988-5a823cff1d64040037dfd9a1.jpg",
        description: "Nestled in the Himalayas, Sikkim is famed for its dramatic landscapes, including India's highest mountain, Kangchenjunga, and Buddhist monasteries."
    },
    {
        id: 8,
        name: "Tripura",
        slug: "tripura",
        image: "https://www.ppthetraveller.com/uploads/post/1713873688.webp",
        description: "A state with a rich royal history, Tripura boasts magnificent palaces, rock-cut carvings, and a diverse cultural heritage."
    },
];

function DestinationByState() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background">
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://static.toiimg.com/thumb/91692790/Arunachal-Dirang-Monastery.jpg?width=1200&height=900"
                        alt="Northeast India Landscape"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Destinations by State
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Explore the diverse and enchanting states of Northeast India.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {northEastStates.map((state) => (
                            <Card key={state.id} className="group overflow-hidden border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-2 rounded-lg">
                                <div className="relative h-64 overflow-hidden">
                                    <img src={state.image} alt={state.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-bold text-foreground mb-3">{state.name}</h3>
                                    <p className="text-muted-foreground mb-6 line-clamp-3">{state.description}</p>
                                    <Button variant="travel" className="w-full rounded-none hover:text-yellow-300" onClick={() => navigate(`/destinations/state/${state.slug}`)}>
                                        Explore
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DestinationByState

