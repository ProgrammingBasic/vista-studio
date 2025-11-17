import { useRef, useState } from "react";
import Tent from "@/assets/icons/tent.png"
import ValueForMoney from "@/assets/icons/exchange.png"
import Experience from "@/assets/icons/landscape.png"
import Bags from "@/assets/icons/luggage.png"
import BackgroundImage from "@/assets/topography.svg"

function FarEast() {


    const features = [
        {
            title: 'Conscious Customization',
            subtitle: 'Tailored to your ethical choices',
            bullets: [
                'Hassle-free, end-to-end travel itinerary planning',
                'Unique itineraries and immersive experiences',
                'Climate action with every trip you plan'
            ],
            Icon: Bags,
        },
        {
            title: 'Nature-Based Experiences',
            subtitle: 'Properties with a view and a local touch',
            bullets: [
                'Nature-centric stays with a unique vibe',
                'Cultural insights from the local host',
                'Local cuisine and beverages as per choice'
            ],
            Icon: Experience,
        },
        {
            title: 'FarEast Travel Experience',
            subtitle: 'Trust our guest-centric approach',
            bullets: [
                '600+ positive reviews from satisfied travelers',
                'Guest-centric focus tailored to your desires',
                'Local experts focused on your experience'
            ],
            Icon: Tent,
        },
        {
            title: 'Value for Money',
            subtitle: 'Good value for the price you pay',
            bullets: [
                'High-quality accommodation',
                'Convenient transportation with a polite driver',
                'Exciting activities included in the package'
            ],
            Icon: ValueForMoney,
        },
    ]

    const sustainabilityItems = [
        {
            id: 1,
            title: "Waste Management",
            description: "We take efforts to promote and help channelize better waste management, food securing methods, water preservation plans and secure livelihoods",
            image: 'https://t3.ftcdn.net/jpg/05/73/57/76/360_F_573577614_3xNASp9y2eCUSXstGdXf9sKlW3ZYVyUr.jpg'
        },
        {
            id: 2,
            title: "Tree Plantation",
            description: "We take efforts to promote and help channelize better waste management, food securing methods, water preservation plans and secure livelihoods",
            image: 'https://holdenfg.org/wp-content/uploads/2022/04/CMHA_tree_planting_523-1-scaled.jpg'
        },
        {
            id: 3,
            title: "Renewable Energy",
            description: "We take efforts to promote and help channelize better waste management, food securing methods, water preservation plans and secure livelihoods",
            image: 'https://knowledge.wharton.upenn.edu/wp-content/uploads/2015/04/2015-04-19-IGEL-banner-art.jpg'
        },
    ]

    return (
        <section className="pt-20 bg-[#f1f9fc]">
            {/* <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why FarEast</h2>
                    <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Discover our specially crafted tour packages for unforgettable adventures
                    </p>
                </div>

                <div className="grid gap-12 md:grid-cols-2">
                    {features.map(({ title, subtitle, bullets, Icon }) => (
                        <div key={title} className="flex flex-col items-start gap-5 bg-white p-10 rounded-lg">
                            <div className="relative shrink-0">
                                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#e6f7fb] text-[#31b7d0] shadow-sm">
                                   
                                    <img src={Icon} alt="" className='w-16' />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
                                <p className="text-xs uppercase tracking-wide text-muted-foreground mt-1">
                                    {subtitle}
                                </p>
                                <ul className="mt-4 space-y-2 text-muted-foreground">
                                    {bullets.map((b) => (
                                        <li key={b} className="flex gap-2">
                                            <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-[#31b7d0]" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
            <div
                id="sustainability"
                className='relative z-0 bg-[#31b7d0] md:h-[1100px] w-full container mx-auto mt-20 rounded-lg py-20 mb-[360px] text-white'
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    // backgroundImage: `url('https://preview.redd.it/northeast-could-be-indias-best-travel-destination-but-it-v0-mto6jsbkuere1.jpeg?width=640&crop=smart&auto=webp&s=38826870944ef2bcae70ec282e6828e7f135caea')`,
                    backgroundRepeat: 'repeat',
                    // backgroundPosition:'center',
                    // backgroundSize:'cover'
                }}
            >
                <div className='absolute inset-0 z-0 bg-teal-900/70 pointer-events-none rounded-lg' />
                <div className='relative z-10 text-center'>
                    <h2 className='text-5xl'>Sustainable NorthEast India</h2>
                    <p className='max-w-xl mx-auto my-5'>Support community-led climate action to minimise impact on climate change in India and the rest of the planet.</p>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
                        <div className="h-72 md:h-96">
                            <iframe
                                className="w-full h-full rounded-lg border-8 border-primary"
                                src="https://www.youtube.com/embed/hcU8fU0RnKM"
                                title="YouTube video player 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="h-72 md:h-96">
                            <iframe
                                className="w-full h-full rounded-lg border-8 border-primary"
                                src="https://www.youtube.com/embed/d_-ueA_BBks"
                                title="YouTube video player 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <p className="mt-10 max-w-6xl mx-auto">Our commitment extends beyond showcasing the stunning landscapes of NorthEast India. We are dedicated to responsible tourism that empowers local communities and preserves the natural environment for generations to come. We actively partner with local experts and communities to drive sustainable initiatives. These projects are fundamental to our mission, ensuring that every journey with us contributes positively to the region and its inhabitants.</p>
                    <h3 className="mt-10 text-4xl">Our Ongoing Projects</h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 z-10 relative absolute -bottom-[4rem]'>
                    {
                        sustainabilityItems.map(item => (


                            <div className='h-96 w-full span-col-1 p-5 bg-white rounded-lg text-black shadow-xl' key={item.id}>
                                <div className='image-holder h-44  overflow-hidden mb-10 rounded-lg'>
                                    <img src={item.image} alt="" className='w-full' />
                                </div>
                                <h3 className='text-2xl mb-3 text-primary'>{item.title}</h3>
                                <p className='text-gray-600 md:text-md text-sm'>{item.description}</p>
                            </div>

                        ))
                    }


                </div>
            </div>
        </section>
    )
}

export default FarEast