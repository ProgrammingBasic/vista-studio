import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Header */}
      <div className="bg-black/90 text-white py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Left Side - Social Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Center - Site Name */}
            <div className="text-lg font-bold">
              {/* Vista Travel */}
            </div>

            {/* Right Side - Contact Info */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-3 h-3" />
                <span>info@vistatravel.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#31b7d0] shadow-lg' : 'bg-[#31b7d0] backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Logo/Brand */}
            <div className="text-2xl font-bold text-white">
              Far East
            </div>
            
            {/* Center - Main Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-white/90 hover:text-[#ffff00] transition-colors font-medium">Home</a>
              <a href="/packages" className="text-white/90 hover:text-[#ffff00] transition-colors font-medium">Our Packages</a>
              <a href="/travel" className="text-white/90 hover:text-[#ffff00] transition-colors font-medium">Vehicles</a>
              <a href="/stay" className="text-white/90 hover:text-[#ffff00] transition-colors font-medium">Stays</a>
              <a href="/create-plan" className="text-white/90 hover:text-[#ffff00] transition-colors font-medium">Create Your Plan</a>
            </div>
            
            {/* Right Side - CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                className="hidden md:inline-flex border-white/30 bg-transparent text-white hover:bg-white/20"
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
            <div className="md:hidden mt-4 py-4 space-y-4 bg-black/95 rounded-lg">
              <a href="/" className="block text-white/90 hover:text-white transition-colors px-4 py-2">Home</a>
              <a href="/packages" className="block text-white/90 hover:text-white transition-colors px-4 py-2">Our Packages</a>
              <a href="/travel" className="block text-white/90 hover:text-white transition-colors px-4 py-2">Vehicles</a>
              <a href="/stay" className="block text-white/90 hover:text-white transition-colors px-4 py-2">Stays</a>
              <a href="/create-plan" className="block text-white/90 hover:text-white transition-colors px-4 py-2">Create Your Plan</a>
              <div className="pt-4 border-t border-white/20 px-4">
                <Button variant="outline" size="sm" className="w-full border-white/30 text-white hover:bg-white/20">
                  Contact Us
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};