import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';

import Slider1 from '@/assets/gallery/slider1.jpg';
import Slider2 from '@/assets/gallery/slider2.jpg';

const Gallery = () => {
  const galleryImages = [Slider2, Slider1];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === galleryImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Gallery"
          subtitle="Explore our collection of stunning travel moments and destinations"
        />
      </div>
      <div className="mt-10 max-w-7xl mx-auto relative group">
        <div className="w-full h-full overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {galleryImages.map((image, index) => (
              <div className="w-full flex-shrink-0" key={index}>
                <img
                  src={image}
                  alt={`Slider Image ${index + 1}`}
                  className="w-full h-[600px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div onClick={prevSlide} className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>

        </div>
        <div onClick={nextSlide} className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Gallery;