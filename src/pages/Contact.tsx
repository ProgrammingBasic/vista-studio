import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <div className="bg-white">
      <HeroSection
        title="Get In Touch"
        subtitle="We're here to help and answer any question you might have. We look forward to hearing from you."
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600">
                  Have a question or a project in mind? Use the form or the
                  details below to get in touch.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-travel-teal/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-travel-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">8486 4567 60</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-travel-teal/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-travel-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">
                      Info.discoverfareast@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-travel-teal/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-travel-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">Tinsukia, Assam</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <form className="space-y-6">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={5} />
                <Button type="submit" className="w-full bg-travel-ocean hover:bg-travel-ocean/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;