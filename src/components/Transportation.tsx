import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import bikeIcon from "@/assets/bike-icon.png";
import carIcon from "@/assets/car-icon.png";
import motorcycleIcon from "@/assets/motorcycle-icon.png";

const transportOptions = [
	{
		id: 1,
		name: "Bicycle",
		icon: bikeIcon,
		price: "From ₹849/day",
		description: "Perfect for city exploration and eco-friendly adventures",
	},
	{
		id: 2,
		name: "Motorcycle",
		icon: motorcycleIcon,
		price: "From ₹1,249/day",
		description: "Freedom to explore winding mountain roads",
	},
	{
		id: 3,
		name: "Self Drive Car",
		icon: carIcon,
		price: "From ₹2,590/day",
		description: "Comfortable family travel with complete independence",
	},
	{
		id: 4,
		name: "SUV",
		icon: carIcon,
		price: "From ₹3,990/day",
		description: "Rugged vehicles for off-road adventures",
	},
	{
		id: 5,
		name: "MUV",
		icon: carIcon,
		price: "From ₹3,249/day",
		description: "Spacious multi-utility vehicles for group travel",
	},
	{
		id: 6,
		name: "Caravan",
		icon: carIcon,
		price: "Available on Demand",
		description: "Mobile homes for the ultimate road trip experience",
	},
];

export const Transportation = () => {
	return (
		<section className="py-20">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						Transportation
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full"></div>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Choose your perfect ride for an unforgettable journey
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{transportOptions.map((option) => (
						<Card
							key={option.id}
							className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-3xl bg-white/90 backdrop-blur-md"
						>
							<CardContent className="p-10 text-center flex flex-col items-center relative z-10">
								<div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
									<img
										src={option.icon}
										alt={option.name}
										className="w-12 h-12 object-contain"
									/>
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
									{option.name}
								</h3>
								<p className="text-lg font-semibold text-cyan-700 mb-3">
									{option.price}
								</p>
								<p className="text-gray-500 mb-8 leading-relaxed">
									{option.description}
								</p>
								<Button
									variant="travel"
									className="w-full rounded-full py-2 px-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-md hover:from-blue-500 hover:to-cyan-400 transition-all"
								>
									Book Now
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center mt-12">
					<Button
						variant="outline"
						size="lg"
						className="px-8 rounded-full border-cyan-400 text-cyan-700 hover:bg-cyan-50 transition-all"
					>
						Book Your Transport
					</Button>
				</div>
			</div>
		</section>
	);
};
