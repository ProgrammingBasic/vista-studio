import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const destinations = [
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

export const TopDestinationsSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const itemsPerView = 3; // Show only three cards at a time
	const maxIndex = Math.max(0, destinations.length - itemsPerView);

	const nextSlide = () => {
		setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => Math.max(prev - 1, 0));
	};

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						Popular Destinations
					</h2>
					<div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Discover breathtaking locations waiting for your exploration
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
									className="min-w-0 flex-shrink-0"
									style={{ width: `${100 / itemsPerView}%` }}
								>
									<Card className="group overflow-hidden border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-3 cursor-pointer h-[28rem]">
										{/* Increased height from h-80 to h-[28rem] */}
										<div className="relative h-full">
											<img
												src={destination.image}
												alt={destination.name}
												className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
											<div className="absolute bottom-6 left-6">
												<h3 className="text-4xl font-light text-white">
													{destination.name}
												</h3>
                        <p className="text-xl text-gray-300 font-semibold" id="sub-text">Waterfalls &middot; Nature</p>
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
};