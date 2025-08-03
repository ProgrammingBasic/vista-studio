'use client';

import {
    Bike,
    Mountain,
    Waves,
    Users,
} from 'lucide-react';

const activities = [
    {
        icon: <Bike size={40} color='#31b7d0' className="mx-auto" />,
        title: 'Cycling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ratione.',
    },
    {
        icon: <Mountain size={40} color='#31b7d0' className=" mx-auto" />,
        title: 'Mountain Trekking',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ratione.',
    },
    {
        icon: <Waves size={40} color='#31b7d0' className=" mx-auto" />,
        title: 'River Rafting',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ratione.',
    },
    {
        icon: <Users size={40} color='#31b7d0' className=" mx-auto" />,
        title: 'Meet The Locals',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ratione.',
    },
];

export default function ActivitiesSection() {
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
                        {activity.icon}
                        <h3 className="text-lg font-semibold">{activity.title}</h3>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                        <a
                            href="#"
                            className="text-teal-500 hover:underline text-sm font-medium mt-10 inline-block"
                        >
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
