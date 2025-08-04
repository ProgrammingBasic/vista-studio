'use client';

import {
    Bike,
    Mountain,
    Waves,
    Users,
    Play,
} from 'lucide-react';

import Cycle from '@/assets/icons/bicycle.png'
import Hiking from '@/assets/icons/hiking.png'
import Rafting from '@/assets/icons/rafting.png'
import Talking from '@/assets/icons/talking.png'
import { Link } from 'react-router-dom';
import video from '@/assets/tribe.mp4'
import { useState, useRef } from 'react';

const activities = [
    {
        icon: Cycle,
        title: 'Cycling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ratione.',
    },
    {
        icon: Hiking,
        title: 'Mountain Trekking',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ratione.',
    },
    {
        icon: Rafting,
        title: 'River Rafting',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ratione.',
    },
    {
        icon: Talking,
        title: 'Meet The Locals',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ratione.',
    },
];

export default function ActivitiesSection() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoHover = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    };

    const handleVideoLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }
    };

    return (
        <section className="py-20 px-4 bg-[#f1f9fc]">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    What We Do?
                </h2>
                <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive travel solutions designed to make your journey seamless and unforgettable
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

                {activities.map((activity, index) => (
                    <div key={index} className="space-y-4">
                        <div className="w-40 h-40 mx-auto mb-6 bg-gradient-ocean rounded-full flex items-center justify-center text-white">      
                            <img src={activity.icon} alt={activity.title} className="w-20 h-20" />
                        </div>
                        <h3 className="text-lg font-semibold tracking-wide">{activity.title}</h3>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                        <Link
                            to="#"
                            className="hover:underline text-sm font-medium mt-10 inline-block"
                            style={{
                                color: '#31b7d0',
                            }}
                        >
                            Read More
                        </Link>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center mt-16">
                <div 
                    className="relative w-96 h-64 rounded-lg overflow-hidden cursor-pointer group"
                    onMouseEnter={handleVideoHover}
                    onMouseLeave={handleVideoLeave}
                >
                    <video 
                        ref={videoRef}
                        src={video} 
                        muted 
                        className="w-full h-full object-cover transition-opacity duration-300"
                        style={{ opacity: isVideoPlaying ? 1 : 0.8 }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-10 transition-all duration-300">
                        <div className={`bg-white bg-opacity-90 rounded-full p-4 transition-all duration-300 ${isVideoPlaying ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                            <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                            Hover to play
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
}
