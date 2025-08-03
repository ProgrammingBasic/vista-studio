import { Card } from "@/components/ui/card";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=300&fit=crop",
    title: "Mountain Trekking",
    category: "Adventure"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=300&fit=crop",
    title: "Wildlife Safari",
    category: "Nature"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15?w=400&h=300&fit=crop",
    title: "Cultural Immersion",
    category: "Culture"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=300&fit=crop",
    title: "Water Adventures",
    category: "Water Sports"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop",
    title: "Camping Under Stars",
    category: "Camping"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
    title: "Scenic Photography",
    category: "Photography"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    title: "Local Interactions",
    category: "Community"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
    title: "Summit Success",
    category: "Achievement"
  }
];

export const ExperienceGallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className=" mx-auto px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Witness the adventures and memories created by our fellow travelers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <Card 
              key={experience.id}
              className={`group overflow-hidden border-0 shadow-card-travel hover:shadow-hover-travel transition-all duration-500 cursor-pointer ${
                index % 4 === 0 || index % 4 === 3 ? 'md:row-span-2 h-96' : 'h-48'
              }`}
              onMouseEnter={() => setHoveredId(experience.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-full overflow-hidden">
                <img 
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredId === experience.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
                <div className={`absolute bottom-4 left-4 right-4 transform transition-all duration-300 ${
                  hoveredId === experience.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <span className="inline-block px-2 py-1 bg-travel-ocean/80 text-white text-xs font-medium rounded mb-2">
                    {experience.category}
                  </span>
                  <h3 className="text-white font-semibold">
                    {experience.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};