import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
	{
		id: 1,
		name: "The world of mystic beauty awaits you at TAWANG",
		image: "https://himavaatvastya.home.blog/wp-content/uploads/2020/06/untitled-design52.png?w=1568",
		duration: "5 Days 4 Nights",
		groupSize: "4-8 People",
		location: "Himachal Pradesh",
		highlights: ["Mountain Trekking", "Local Culture", "Scenic Views"],
	},
	{
		id: 2,
		name: "Visit magnificent MECHUKA & AALO",
		image: "https://s7ap1.scene7.com/is/image/incredibleindia/mechuka-town-mechuka-arunachal%20pradesh-city-ff?qlt=82&ts=1726742794045",
		duration: "5 Days 4 Nights",
		groupSize: "6-12 People",
		location: "Spiti Valley",
		highlights: ["Cold Desert", "Monasteries", "Stargazing"],
	},
	{
		id: 3,
		name: "Get tucked away in the Himalayan foothills of ZIRO",
		image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/A_cross_section_of_luch_green_valley_of_Ziro.jpg",
		duration: "2 Days 2 Nights",
		groupSize: "2-6 People",
		location: "Goa",
		highlights: ["Beach Activities", "Water Sports", "Nightlife"],
	},
	{
		id: 4,
		name: "A day in NAMSAI (Lathao & Tengapani)",
		image: "https://talesofthehiddentrails.wordpress.com/wp-content/uploads/2020/08/116132834_283557032935433_5540850363813794187_n.jpg",
		duration: "1 Days",
		groupSize: "4-10 People",
		location: "Kerala",
		highlights: ["Houseboat Stay", "Ayurveda", "Nature Walks"],
	},
	{
		id: 5,
		name: "Explore flora & fauna of NAMDAPHA national park",
		image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7HTp6fGoLiDGZ82z7BboPdMgFR8rjU3Iq6EVmhtYHyLsmBy7N0-0p7n8v7jC1_b8t27C6zpL2gSTLp66kqrs-lS2pVmy200DLobPTthyZ-Vz_aF1HNkjeOlvzW__iJ10JGF9QJOtk-tJn/s1600/1E1A5586.jpeg",
		duration: "7 Days 6 Nights",
		groupSize: "6-15 People",
		location: "Rajasthan",
		highlights: ["Camel Safari", "Desert Camping", "Folk Culture"],
	},
	{
		id: 6,
		name: "Road to BOMDILA & TAWANG",
		image: "https://www.kiomoi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fkmadmin%2Fimage%2Fupload%2Fc_scale%2Cw_832%2Ff_auto%2Fv1695293116%2Fkiomoi%2Ftawang_monastery_arunachal_pradesh_4051.webp&w=1920&q=75",
		duration: "5 Days 4 Nights",
		groupSize: "4-8 People",
		location: "Ladakh",
		highlights: ["High Altitude", "Buddhist Culture", "Adventure Sports"],
	},
];

export const TourPackages = () => {
	return (
		<section className="py-20 bg-[#f1f9fc]">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						Our Top Destinations
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
										<h3 className="text-2xl font-thin text-white mb-2 drop-shadow">
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
										<Link to={`/packages/${pkg.id}`}>
											<Button
												variant="travel"
												className=" w-full transition-transform duration-300 border border-white/20 rounded-full"
											>
												More Info
											</Button>
										</Link>
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