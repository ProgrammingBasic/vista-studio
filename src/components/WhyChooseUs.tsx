import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Wide Tour Selection",
    description: "Embark on a Himalayan odyssey with our wide tour selection in the mystical state of Arunachal Pradesh."
  },
  {
    icon: Zap,
    title: "Fast Booking",
    description: "With our fast and seamless booking process the adventure of a lifetime awaits!"
  },
  {
    icon: Heart,
    title: "Personalized Trips",
    description: "Our personalized trips ensures that every step you take will be a testament to the rich legacy of this majestic mountain range."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Experience the difference with our exceptional service and commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group bg-white/10 backdrop-blur-sm border-white/20 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 hover:-translate-y-3"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-ocean rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="px-8">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};