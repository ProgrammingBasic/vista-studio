import React from 'react'
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const destinations = [
	{
		id: 1,
		name: "Trekking Tour",
		image: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/08/Trekking-Cover-Photo-1-840x425.jpg",
	},
	{
		id: 2,
		name: "Cycle Expedition",
		image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/43/cf/85/monastery-view-from-city.jpg?w=1200&h=-1&s=1",
	},
	{
		id: 3,
		name: "Hiking Festival",
		image: "https://talesofthehiddentrails.wordpress.com/wp-content/uploads/2021/01/139364729_418404549395528_8105984581183889987_n.jpg?w=825&h=510&crop=1",
	},
	{
		id: 4,
		name: "Photography Fest",
		image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=919,fit=crop,trim=0;552.4017216642754;0;596.4763271162124/mv0l9yGqjPfjX87X/dsc_7431-YZ9Xllo6W9s96WG3.jpg",
	},
	{
		id: 5,
		name: "Photography Fest",
		image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/43/cf/85/monastery-view-from-city.jpg?w=1200&h=-1&s=1",
	},
	{
		id: 6,
		name: "Photography Fest",
		image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=919,fit=crop,trim=0;552.4017216642754;0;596.4763271162124/mv0l9yGqjPfjX87X/dsc_7431-YZ9Xllo6W9s96WG3.jpg",
	},
	

];

function TopPlaceSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 5; // Show only three cards at a time
    const maxIndex = Math.max(0, destinations.length - itemsPerView);

    // Auto-loop logic
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 3500); // Change slide every 3.5 seconds

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [maxIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <section className="py-20 bg-white">
			<div className="px-6">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						Places Travel
					</h2>
					<div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Experts Insights and Advice
					</p>
				</div>

				<div className="relative">
					<div className="overflow-hidden pt-3">
						<div
							className="flex transition-transform duration-500 ease-in-out gap-2"
							style={{
								transform: `translateX(-${
									currentIndex * (100 / itemsPerView)
								}%)`,
							}}
						>
							{destinations.map((destination) => (
								<div
									key={destination.id}
									className="min-w-0 flex-shrink-0 mx-2"
									style={{ width: `${100 / itemsPerView}%` }}
								>
									<Card className="group overflow-hidden border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-3 cursor-pointer h-[30rem]">
										{/* Increased height from h-80 to h-[28rem] */}
										<div className="relative h-full">
											<img
												src={destination.image}
												alt={destination.name}
												className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
											<div className="absolute bottom-4 left-4 right-4 bg-white/90 p-6 text-center rounded-md group-hover:bg-[#31b7d0]">
												<h3 className="text-xl font-light text-[#31b7d0] group-hover:text-white ">
													{destination.name}
												</h3>
                        <p className="text-sm text-gray-300 font-semibold text-gray-600 group-hover:text-yellow-400" id="sub-text">Read More</p>
											</div>
										</div>
									</Card>
								</div>
							))}
						</div>
					</div>

					<Button
						variant="outline"
						size="icon"
						className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 z-10"
						onClick={prevSlide}
						disabled={currentIndex === 0}
					>
						<ChevronLeft className="h-4 w-4" />
					</Button>

					<Button
						variant="outline"
						size="icon"
						className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 z-10"
						onClick={nextSlide}
						disabled={currentIndex === maxIndex}
					>
						<ChevronRight className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</section>
	);
}

export default TopPlaceSlider