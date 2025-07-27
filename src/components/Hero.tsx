import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarDays, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/hero-mountains.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Mountain landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Book Your
          <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Adventure
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover breathtaking destinations with our premium vehicle rentals and curated accommodations
        </p>
        
        {/* Booking Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-travel border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Destination
              </label>
              <Input 
                placeholder="Where to?" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
            </div>
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                Check-in
              </label>
              <Input 
                type="date" 
                className="bg-white/20 border-white/30 text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                Check-out
              </label>
              <Input 
                type="date" 
                className="bg-white/20 border-white/30 text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium flex items-center gap-2">
                <Users className="w-4 h-4" />
                Guests
              </label>
              <Input 
                type="number" 
                placeholder="2" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
            </div>
          </div>
          <Button variant="hero" size="lg" className="w-full md:w-auto px-12 py-3 text-lg font-semibold">
            Search Adventures
          </Button>
        </div>
      </div>
    </section>
  );
};