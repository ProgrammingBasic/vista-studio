import { Shield, Clock, MapPin, Users, Tent, Home, Building, Coffee } from "lucide-react";
import HeroSection from "@/components/HeroSection";

// We will dynamically generate the image paths instead of importing them one by one.
// This assumes you have 38 images named 1.jpg, 2.jpg, ..., 38.jpg in your assets folder.
const totalImages = 38;
const images = Array.from({ length: totalImages }, (_, i) => `/src/assets/stories/${i + 1}.jpg`);

const Media = () => {

  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <HeroSection
        title="Our Stories"
        subtitle="A visual journey through our latest adventures and cherished moments."
      />

      {/* Image Grid Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {images.map((imageSrc, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1">
                <img
                  src={imageSrc}
                  alt={`Story image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;