import SectionTitle from '@/components/SectionTitle';
import { title } from 'process';
import React from 'react'
import { useParams } from 'react-router-dom'
function ExperienceDetails() {
    const { slug } = useParams();
    console.log(slug);


    const detailsData = [
        {
            image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
            text: "Our journeys are designed to be immersive, taking you beyond the usual tourist spots. We believe in creating authentic experiences that connect you with the local culture, traditions, and people. From staying in family-run homestays to participating in local festivals, we ensure your travel is both meaningful and memorable.",
            reverse: false,
            title: "We do it differently"
        },
        {
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
            text: "Adventure awaits at every corner of Northeast India. Whether it's trekking through pristine forests, rafting in roaring rivers, or exploring ancient caves, we have something for every thrill-seeker. Our expert guides prioritize your safety while ensuring you have an adrenaline-pumping experience.",
            reverse: true,
            title: " Adventure awaits"
        }
    ];



    return (
        <div>
            <section className="relative overflow-hidden h-[40vh] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661963482383-8e6273c1be23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172" // Placeholder image of a team
                        alt="About Us Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div> {/* Transparent overlay */}
                </div>

                <div className="relative text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">Tailor-made Travel</h1>
                </div>
            </section>
            <section className=''>
                <div className='container mx-auto py-10 md:max-w-4xl'>
                    <p className="text-gray-700 leading-relaxed">Dong Experience is one of the many projects that Discover FarEast has curated and executed that pledges to bring development into this remote corner. Dong and surrounding areas are in dire need of basic facilities like Better Schools, better transport and opportunities of employment. Dong Experience shall attract tremendous publicity, which shall right away bring a rise in the current state of Tourism Sector here.</p>
                </div>

                <div>
                    {detailsData.map((item, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2  items-center container md:max-w-6xl mx-auto my-10">
                            <div className={item.reverse ? 'md:order-2' : ''}>
                                <img
                                    src={item.image}
                                    alt={`Experience detail ${index + 1}`}
                                    className="w-full h-96 object-cover shadow-lg"
                                />
                            </div>
                            <div className={`item.reverse ? 'md:order-1' : '' p-10 bg-gray-200`}>
                                <h3 className="relative inline-block z-0 text-3xl md:text-4xl font-bold text-foreground mb-2 uppercase font-primary tracking-wide pb-4 before:content-[''] before:absolute before:w-48 before:h-6 before:bg-yellow-400/70 before:bottom-2 before:left-0  before:-z-10">{item.title}</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
            <div className=" px-6 text-center mt-20 py-20 bg-gray-200">
                <SectionTitle title="INTEREST IN MAKING YOUR OUR EXPERIENCE?" subtitle="Create your own customize plan for the experince" />
                {/* <h2 className="text-4xl md:text-4xl uppercase font-bold text-foreground mb-6 leading-tight">
                        Want to work with us?
                    </h2> */}

                <a href='/create-plan'>
                    <button className='bg-yellow-400 text-black px-10 py-3 rounded-noen hover:bg-yellow-300 transition-colors duration-200 uppercase tracking-wider'>CREATE YOUR PLAN</button>
                </a>
            </div>
        </div>
    )
}

export default ExperienceDetails