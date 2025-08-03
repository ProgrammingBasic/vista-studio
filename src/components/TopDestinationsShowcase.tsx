import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";
import { useState, useEffect } from "react";

const topDestinations = [
  {
		id: 1,
		name: "Mechuka",
		image: "https://voysiri.in/wp-content/uploads/2022/12/yboTIPAis6.jpg",
	},
	{
		id: 2,
		name: "Tawang",
		image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/43/cf/85/monastery-view-from-city.jpg?w=1200&h=-1&s=1",
	},
	{
		id: 3,
		name: "Dong",
		image: "https://talesofthehiddentrails.wordpress.com/wp-content/uploads/2021/01/139364729_418404549395528_8105984581183889987_n.jpg?w=825&h=510&crop=1",
	},
	{
		id: 4,
		name: "Namsai",
		image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=919,fit=crop,trim=0;552.4017216642754;0;596.4763271162124/mv0l9yGqjPfjX87X/dsc_7431-YZ9Xllo6W9s96WG3.jpg",
	},
	{
		id: 5,
		name: "Bomdila",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bomdila_Monastery%2C_Arunachal_Pradesh.jpg/1024px-Bomdila_Monastery%2C_Arunachal_Pradesh.jpg",
	},
];

export const TopDestinationsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, topDestinations.length - itemsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = prev + 1;
        return nextIndex > maxIndex ? 0 : nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Top Destinations
          </h2>
          <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the most sought-after destinations that await your discovery
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden pt-3">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {topDestinations.map((destination) => (
                <div key={destination.id} className="min-w-0 flex-shrink-0" style={{ width: `${100 / itemsPerView}%` }}>
                  <Card className="group overflow-hidden border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-3 cursor-pointer h-96">
                    <div className="relative h-full">
                      <img 
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{destination.rating}</span>
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-5 w-5 text-white" />
                          <h3 className="text-2xl font-bold text-white">
                            {destination.name}
                          </h3>
                        </div>
                        <p className="text-gray-100 leading-relaxed">
                          {destination.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
