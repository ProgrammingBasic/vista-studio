import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#31b7d0] text-white">
      {/* Newsletter Section */}
      {/* <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Join Our Newsletter</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Get exclusive travel deals, destination guides, and adventure tips delivered to your inbox
            </p>
          </div>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button variant="secondary" className="bg-white text-travel-ocean hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div> */}
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl font-bold mb-4">NorthEast Collective</h4>
              <p className="text-white/80 leading-relaxed">
                Your gateway to extraordinary adventures. We curate unforgettable travel experiences 
                with premium vehicles and handpicked accommodations.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Services</h5>
            <ul className="space-y-3">
              {[
                { name: "Vehicle Rentals", path: "/travel" },
                { name: "Accommodation Booking", path: "/stay" },
                { name: "Tour Packages", path: "/packages" },
                { name: "Create Your Plan", path: "/create-plan" },
                { name: "Travel Guides", path: "/destinations" },
                { name: "24/7 Support", path: "/contact" }
              ].map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-white/80 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Popular Destinations */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Destinations</h5>
            <ul className="space-y-3">
              {[
                { name: "Tawang", path: "/destination/tawang" },
                { name: "Mechuka", path: "/destination/mechuka" },
                { name: "Ziro", path: "/destination/ziro" },
                { name: "Namsai", path: "/destination/namsai" },
                { name: "Namdapha", path: "/destination/namdapha" },
                { name: "All Destinations", path: "/destinations" }
              ].map((destination, index) => (
                <li key={index}>
                  <Link to={destination.path} className="text-white/80 hover:text-white transition-colors">
                    {destination.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Contact Us</h5>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-300" />
                <span className="text-white/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-300" />
                <span className="text-white/80">hello@wanderlust.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-travel-teal mt-1" />
                <span className="text-white/80">
                  123 Adventure Street<br />
                  Travel City, TC 12345
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 NorthEast Collective. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};