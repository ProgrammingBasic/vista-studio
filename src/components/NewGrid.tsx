import React from 'react';
import SectionTitle from './SectionTitle';

const TravelGrid = () => {

    const posts = [
        {
            title: "Sunrise Track: Follow the sun",
            location: "Dong",
            date: "Aug 20, 2025",
            image: "https://ekaxp.in/wp-content/uploads/2023/03/Dong-Valley-Trek-15_Arunachal-Tour_Eka-Experiences.jpg",
            cols: "col-span-2 row-span-2"
        },
        {
            title: "Village Beautification",
            location: "Kaho",
            date: "Aug 20, 2025",
            image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
        },
        {
            title: "Under Xposed: Photo Safari tour",
            location: "Dong",
            date: "Aug 20, 2025",
            image: "https://images.pexels.com/photos/33252851/pexels-photo-33252851.jpeg",
        },
        {
            title: "Meet the Meyors: The Lost Tribe",
            location: "Walong and Kibithoo",
            date: "Aug 20, 2025",
            image: "https://images.pexels.com/photos/1050824/pexels-photo-1050824.jpeg",
        },
        {
            title: "Lest We Forget: A Day with Indian Army",
            location: "Kibithoo, Namti Plains",
            date: "Aug 20, 2025",
            image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
            cols: "col-span-2 row-span-2"
        },
        {
            title: "Catch And Release Angling: Hunt for Golden Mahseer",
            location: "Dong River",
            date: "Aug 20, 2025",
            image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
        }
    ];


    return (
        <section className='bg-blue-50 py-40 px-4'>
           
            <SectionTitle title="Things We Do" subtitle="Comprehensive travel solutions designed to make your journey seamless and unforgettable" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-7xl mx-auto p-4 h-[60rem]">
                {posts.map((post, idx) => (
                    <div key={idx} className={`relative overflow-hidden border-4 border-transparent hover:border-4 hover:border-[#31b7d0] group ${post.cols || ''}`}>
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                            <h3 className="text-xl md:text-2xl font-bold mb-2">{post.title}</h3>
                            <p className="text-sm opacity-90 group-hover:text-yellow-300">{post.location} | {post.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TravelGrid;