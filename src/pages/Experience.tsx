import React from 'react'
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';

const experiences = [
    {
        title: "Cultural Immersion",
        subtitle: "Connect with Local Traditions",
        description: "Dive deep into the heart of Northeast India. Our cultural immersion experiences allow you to live with local communities, participate in their daily lives, and understand their unique traditions and customs firsthand.",
        image: "https://images.unsplash.com/photo-1759738103333-1c836a32f848?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        imageAlt: "A person participating in a local cultural ceremony.",
        reverse: false
    },
    {
        title: "Adventure & Trekking",
        subtitle: "Explore the Untamed Wilderness",
        description: "For the thrill-seekers, we offer a range of adventure activities from high-altitude treks in the Himalayas to river rafting in roaring rivers. Challenge yourself and witness landscapes that will take your breath away.",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
        imageAlt: "A group of trekkers on a mountain path.",
        reverse: true
    }
];

function Experience() {

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden h-[40vh] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop" // Placeholder image of a team
                        alt="About Us Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div> {/* Transparent overlay */}
                </div>

                <div className="relative text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">Experiences</h1>
                </div>
            </section>

            <section className='py-20'>
                <div>
                    <SectionTitle title="YOU LIKE TO TRAVEL" subtitle="FUN ACTIVITIES TO TRY IN NORTHEAST INDIA" />     
                </div>
                <div className='container mx-auto space-y-16'>
                    {experiences.map((exp, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            {/* Image Column */}
                            <div className={exp.reverse ? 'md:order-2' : ''}>
                                <img
                                    src={exp.image}
                                    alt={exp.imageAlt}
                                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                                />
                            </div>
                            {/* Content Column */}
                            <div className={exp.reverse ? 'md:order-1' : ''}>
                                <h2 className="text-4xl font-bold text-foreground mb-2">{exp.title}</h2>
                                <p className="text-sm uppercase text-primary font-medium mb-4 tracking-wider">{exp.subtitle}</p>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {exp.description}
                                </p>
                                <Button variant="travel" size="lg" className='border-none px-10 bg-yellow-300 text-black uppercase rounded-none shadow-none hover:bg-yellow-400 transition-colors duration-200'>
                                    Read More
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Experience