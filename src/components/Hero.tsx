import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarDays, MapPin, Users, ArrowRight, Scale } from "lucide-react";


export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/q3eL0FUrlRs?si=W5-yb_PXRxGQYNtq&controls=0&autoplay=1&mute=1&loop=1&playlist=q3eL0FUrlRs&start=8&modestbranding=1&showinfo=0&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the video covers the area
            pointerEvents: "none",
            transform: "scale(1.3)", // Zoom in the video (adjust as needed)
            transformOrigin: "center center",// Slightly scale the video for a better effect
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Explore the World
          <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            With Vista Travel
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover breathtaking destinations with our premium vehicle rentals and curated accommodations
        </p>
        
       <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            variant="hero" 
            size="lg" 
            className="px-8 py-4 text-lg group"
          >
            Book Your Tour Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-4 text-lg border-white/30 bg-white/30 text-white hover:bg-white/20"
          >
            View All Packages
          </Button>
        </div>
        {/* Booking Form */}
        {/* <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-travel border border-white/20">
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
        </div> */}
      </div>
    </section>
  );
};
