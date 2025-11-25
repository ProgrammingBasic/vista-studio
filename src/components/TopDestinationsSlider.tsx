import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";
import Up1 from "@/assets/upcoming/up1.jpeg"
import Up2 from "@/assets/upcoming/up2.jpeg"
import Up3 from "@/assets/upcoming/up3.jpeg"
import Up4 from "@/assets/upcoming/up4.jpeg"

const destinations = [
	{
		id: 1,
		name: "Biodiversity Meet",
		image: Up1,
	},
	{
		id: 2,
		name: "EagleNest Bird",
		image: Up2,
	},
	{
		id: 3,
		name: "Pakke Paga Hornbill",
		image: Up3,
	},
	{
		id: 4,
		name: "Honoring Heroes",
		image: Up4,
	},


];

export const TopDestinationsSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const itemsPerView = 3; // Show only three cards at a time
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
			<div className="container mx-auto px-6">
				<SectionTitle title="Upcoming Events & Activities" subtitle="Discover breathtaking locations waiting for your exploration" />

				<div className="relative">
					<div className="overflow-hidden pt-3">
						<div
							className="flex transition-transform duration-500 ease-in-out gap-2"
							style={{
								transform: `translateX(-${currentIndex * (100 / itemsPerView)
									}%)`,
							}}
						>
							{destinations.map((destination) => (
								<div
									key={destination.id}
									className="min-w-0 flex-shrink-0"
									style={{ width: `${100 / itemsPerView}%` }}
								>
									<Card className="group overflow-hidden border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-3 cursor-pointer h-[35rem]">
										{/* Increased height from h-80 to h-[28rem] */}
										<div className="relative h-full">
											<img
												src={destination.image}
												alt={destination.name}
												className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
											<div className="absolute bottom-6 left-6">
												<h3 className="text-4xl font-light text-white">
													{destination.name}
												</h3>
												{/* <p className="text-xl text-gray-300 font-semibold" id="sub-text">Waterfalls &middot; Nature</p> */}
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