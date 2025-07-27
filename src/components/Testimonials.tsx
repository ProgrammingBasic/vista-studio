import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The Himalayan adventure was beyond my expectations! The team's attention to detail and local knowledge made our journey unforgettable. Highly recommended!"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Excellent service and perfectly organized trip to Spiti Valley. The accommodations were comfortable and the guides were very knowledgeable."
  },
  {
    id: 3,
    name: "Anjali Patel",
    location: "Ahmedabad",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Our Kerala backwater experience was magical! The houseboat stay and local cuisine were absolutely amazing. Will definitely book again."
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The Ladakh expedition was a dream come true! Professional guidance, safety measures, and breathtaking views made it an adventure of a lifetime."
  },
  {
    id: 5,
    name: "Meera Reddy",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The Rajasthan desert safari exceeded all expectations. The cultural experiences and desert camping were perfectly arranged. Truly memorable!"
  },
  {
    id: 6,
    name: "Arjun Menon",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Fantastic trip to Goa! The balance of adventure and relaxation was perfect. Great team and seamless booking process."
  }
];

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsPerView = 3;
  const maxSlide = Math.max(0, testimonials.length - testimonialsPerView);

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Travelers Say
          </h2>
          <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read about the amazing experiences of our satisfied customers
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{ transform: `translateX(-${currentSlide * (100 / testimonialsPerView)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-0 flex-shrink-0" style={{ width: `${100 / testimonialsPerView}%` }}>
                <Card className="group border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentSlide === index ? 'bg-travel-ocean' : 'bg-muted-foreground/30'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};