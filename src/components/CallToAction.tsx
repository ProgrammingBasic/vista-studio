import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop"
          alt="Adventure calling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-travel-ocean/90 via-travel-teal/80 to-travel-ocean/90"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready for Your Next Adventure?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
          Don't wait for the perfect moment - create it! Book your dream destination 
          today and embark on a journey that will change your perspective forever.
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
            className="px-8 py-4 text-lg border-white/30 text-white hover:bg-white/20"
          >
            View All Packages
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/90">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <span>info@adventuretours.com</span>
          </div>
        </div>

        <div className="mt-8 text-white/70 text-sm">
          <p>Available 24/7 • Instant Confirmation • Best Price Guarantee</p>
        </div>
      </div>
    </section>
  );
};