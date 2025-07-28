import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin } from "lucide-react";

const packages = [
	{
		id: 1,
		name: "Himalayan Adventure",
		image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
		duration: "7 Days",
		groupSize: "4-8 People",
		location: "Himachal Pradesh",
		highlights: ["Mountain Trekking", "Local Culture", "Scenic Views"],
	},
	{
		id: 2,
		name: "Spiti Valley Explorer",
		image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
		duration: "10 Days",
		groupSize: "6-12 People",
		location: "Spiti Valley",
		highlights: ["Cold Desert", "Monasteries", "Stargazing"],
	},
	{
		id: 3,
		name: "Coastal Paradise",
		image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
		duration: "5 Days",
		groupSize: "2-6 People",
		location: "Goa",
		highlights: ["Beach Activities", "Water Sports", "Nightlife"],
	},
	{
		id: 4,
		name: "Backwater Bliss",
		image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
		duration: "6 Days",
		groupSize: "4-10 People",
		location: "Kerala",
		highlights: ["Houseboat Stay", "Ayurveda", "Nature Walks"],
	},
	{
		id: 5,
		name: "Desert Safari",
		image: "https://images.unsplash.com/photo-1582659962893-e4bee469d0ca?w=400&h=300&fit=crop",
		duration: "4 Days",
		groupSize: "6-15 People",
		location: "Rajasthan",
		highlights: ["Camel Safari", "Desert Camping", "Folk Culture"],
	},
	{
		id: 6,
		name: "Ladakh Expedition",
		image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=400&h=300&fit=crop",
		duration: "12 Days",
		groupSize: "4-8 People",
		location: "Ladakh",
		highlights: ["High Altitude", "Buddhist Culture", "Adventure Sports"],
	},
];

export const TourPackages = () => {
	return (
		<section className="py-20 bg-background">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						Tour Packages
					</h2>
					<div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Discover our specially crafted tour packages for unforgettable
						adventures
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{packages.map((pkg) => (
						<Card
							key={pkg.id}
							className="relative group overflow-hidden border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-3 h-96 flex items-end"
							style={{ minHeight: "24rem" }}
						>
							{/* Background Image */}
							<img
								src={pkg.image}
								alt={pkg.name}
								className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 z-0"
							/>
							{/* Gradient Overlay */}
							<div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

							{/* Card Content */}
							<CardContent className="relative z-20 w-full p-6 flex flex-col justify-end h-full">
								{/* Sliding content wrapper */}
								<div
									className="
      absolute left-0 right-0 bottom-0
      px-6
      flex flex-col justify-end
      transition-all duration-500
      translate-y-0
      group-hover:-translate-y-10
    "
									style={{ zIndex: 30 }}
								>
									{/* Always visible: name, days, people */}
									<div>
										<h3 className="text-2xl font-bold text-white mb-2 drop-shadow">
											{pkg.name}
										</h3>
										<div className="flex items-center gap-4 mb-2 text-sm text-white/80">
											<div className="flex items-center gap-1">
												<Clock className="h-4 w-4" />
												<span>{pkg.duration}</span>
											</div>
											<div className="flex items-center gap-1">
												<Users className="h-4 w-4" />
												<span>{pkg.groupSize}</span>
											</div>
										</div>
									</div>
									{/* Hidden info, revealed as content slides up */}
									<div
										className="
        opacity-0
        max-h-0
        overflow-hidden
        transition-all duration-500
        group-hover:opacity-100 group-hover:max-h-96 group-hover:mt-2
      "
									>
										<div className="flex items-center gap-1 mb-2 mt-2">
											<MapPin className="h-4 w-4 text-travel-ocean" />
											<span className="text-travel-ocean font-medium">
												{pkg.location}
											</span>
										</div>
										<div className="mb-4">
											<p className="text-sm text-white/70 mb-1">Highlights:</p>
											<div className="flex flex-wrap gap-2">
												{pkg.highlights.map((highlight, index) => (
													<Badge
														key={index}
														variant="outline"
														className="border-teal/30 text-white bg-white/10 backdrop-blur-sm"
													>
														{highlight}
													</Badge>
												))}
											</div>
										</div>
										<Button
											variant="travel"
											className=" w-full transition-transform duration-300 border border-white/20 rounded-full"
										>
											More Info
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};