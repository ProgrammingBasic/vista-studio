import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`text-2xl font-bold transition-colors ${scrolled ? "text-black" : "text-white"}`}>
            Wanderlust
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className={`transition-colors ${scrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"}`}>Home</a>
            <a href="/packages" className={`transition-colors ${scrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"}`}>Our Packages</a>
            <a href="/travel" className={`transition-colors ${scrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"}`}>Vehicles</a>
            <a href="/stay" className={`transition-colors ${scrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"}`}>Stays</a>
            <a href="#" className={`transition-colors ${scrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"}`}>About</a>
          </div>
          
          {/* Contact & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className={`hidden md:flex items-center space-x-2 transition-colors ${scrolled ? "text-black/90" : "text-white/90"}`}>
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className={`hidden md:inline-flex border-white/30 bg-transparent transition-colors ${scrolled ? "text-black hover:bg-black/10" : "text-white hover:bg-white/20"}`}
            >
              Contact Us
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`md:hidden transition-colors ${scrolled ? "text-black" : "text-white"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4">
            <a href="#" className={`block transition-colors ${scrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"}`}>Home</a>
            <a href="#" className={`block transition-colors ${scrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"}`}>Destinations</a>
            <a href="#" className={`block transition-colors ${scrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"}`}>Vehicles</a>
            <a href="#" className={`block transition-colors ${scrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"}`}>Stays</a>
            <a href="#" className={`block transition-colors ${scrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"}`}>About</a>
            <div className="pt-4 border-t border-white/20">
              <div className={`flex items-center space-x-2 mb-4 transition-colors ${scrolled ? "text-black/90" : "text-white/90"}`}>
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <Button variant="outline" size="sm" className={`border-white/30 transition-colors ${scrolled ? "text-black hover:bg-black/10" : "text-white hover:bg-white/20"}`}>
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};