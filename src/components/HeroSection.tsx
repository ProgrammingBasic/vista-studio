import { MapPin, Shield } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const HeroSection = ({
  title = "Our Stories",
  subtitle = "Comfortable accommodations for your mountain adventures",
}: HeroSectionProps) => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1661812984751-41bdee4dd5cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Camping under stars"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{title}</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          {subtitle}
        </p>
        <div className="flex items-center justify-center gap-4 text-white/80">
          <div className="flex items-center gap-1">
            <MapPin className="h-5 w-5" />
            <span>Premium Locations</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="h-5 w-5" />
            <span>Safety Assured</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;