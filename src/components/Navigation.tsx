import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            Wanderlust
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/90 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">Destinations</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">Vehicles</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">Stays</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">About</a>
          </div>
          
          {/* Contact & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-white/90">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="hidden md:inline-flex border-white/30 text-white hover:bg-white/20"
            >
              Contact Us
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4">
            <a href="#" className="block text-white/90 hover:text-white transition-colors">Home</a>
            <a href="#" className="block text-white/90 hover:text-white transition-colors">Destinations</a>
            <a href="#" className="block text-white/90 hover:text-white transition-colors">Vehicles</a>
            <a href="#" className="block text-white/90 hover:text-white transition-colors">Stays</a>
            <a href="#" className="block text-white/90 hover:text-white transition-colors">About</a>
            <div className="pt-4 border-t border-white/20">
              <div className="flex items-center space-x-2 text-white/90 mb-4">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/20">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};