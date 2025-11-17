import React from 'react'
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import SectionTitle from './SectionTitle';

import { getFeaturedDestinations } from '@/api/destination'
import { Link } from 'react-router-dom';



function TopPlaceSlider() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [destinations, setDestinations] = useState<any>([]);
	const itemsPerView = 4; // Show only three cards at a time
	const maxIndex = Math.max(0, destinations.length - itemsPerView);


	useEffect(() => {
		const fetchDestinations = async () => {
			const data = await getFeaturedDestinations();
			setDestinations(data);
		};

		fetchDestinations();
	}, []);



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
			<div className="max-w-[1600px] mx-auto px-4">

				<SectionTitle title="Our Responsible Tourism Sites" subtitle='Discover breathtaking locations waiting for your exploration' />

				<div className="relative">
					<div className="overflow-hidden pt-3">
						<div
							className="flex transition-transform duration-500 ease-in-out gap-0"
							style={{
								transform: `translateX(-${currentIndex * (100 / itemsPerView)
									}%)`,
							}}
						>
							{destinations.map((destination) => (
								<div
									key={destination.id}
									className="min-w-0 flex-shrink-0 mx-2 group"
									// style={{ width: `${100 / itemsPerView}%` }}
									style={{ width: `24%` }} // Fixed width for 4 items per view
								>
									<Card className="group overflow-hidden border-8 border-transparent hover:border-8 hover:border-[#31b7d0] shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-3 cursor-pointer h-[30rem] rounded-none">
										{/* Increased height from h-80 to h-[28rem] */}
										<div className="relative h-full">
											<img
												src={destination.images[0].url}
												alt={destination.name}
												className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
											<div className="absolute bottom-4 left-4 right-4 bg-white/90 p-8 text-center group-hover:bg-[#31b7d0]">
												<h3 className="text-2xl font-light text-[#31b7d0] group-hover:text-white ">
													{destination.title}
												</h3>
												<p className='text-gray-500 text-sm py-4 group-hover:text-gray-200 line-clamp-2'>{destination.description}</p>
												<Link
													to={destination.pdf}
													target='_blank'
													className="text-sm font-semibold text-gray-600 hover:text-yellow-400 transition-colors duration-300"
													id="sub-text"
												>
													Read More
												</Link>
											</div>
										</div>
									</Card>
									<div className='h-2 bg-yellow-300 w-[90%] mx-auto mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center'></div>
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