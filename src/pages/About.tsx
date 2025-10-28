import React from 'react'
import { Button } from '@/components/ui/button'
import SectionTitle from '@/components/SectionTitle'

function About() {
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
                    <h1 className="text-4xl md:text-6xl font-bold text-white">About Us</h1>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 ">
                        {/* Left Column */}
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                                We Make<br />Your Travel<br />Adventure
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <Button variant="travel" size="lg" className='border-none px-10 bg-yellow-300 text-black uppercase rounded-none shadow-none hover:bg-yellow-400 transition-colors duration-200'>Learn More</Button>
                        </div>

                        {/* Right Column */}
                        <div>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. We focus on creating authentic and immersive experiences.
                            </p>
                            <img
                                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop"
                                alt="Travel Adventure"
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto px-6 mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 ">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                                Easy to<br />Book a Trip
                            </h2>
                        </div>
                        <div>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. We focus on creating authentic and immersive experiences.
                            </p>
                            <a className='text-teal-500 mt-4'>Read More</a>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto px-6 mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                        <img src="https://images.unsplash.com/photo-1469545638519-c8c20fba687d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                            alt="Travel Adventure"
                            className="w-full h-96 md:h-[520px] object-cover rounded-lg shadow-lg" />
                        <img src="https://plus.unsplash.com/premium_photo-1722038420033-4ef4446283b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=978"
                            alt="Travel Adventure"
                            className="w-full h-96 md:h-[520px] object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto px-6 mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 ">
                        <div>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. We focus on creating authentic and immersive experiences.
                            </p>
                            <a className='text-teal-500 mt-4 inline-block'>Read More</a>
                        </div>
                        <div className='flex justify-center'>
                            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                                Belief on<br />Your Eyes
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto mb-20 bg-gray-200 p-20 rounded-md">
                    <div className='text-center'>
                    <SectionTitle title="WHAT YOU'LL LEARN HERE" subtitle="EXPERT INSIGHT AND ADVICE" /> 

                        {/* <h2 className='md:text-4xl font-bold tracking-wider'>WHAT YOU'LL LEARN HERE</h2> */}
                        {/* <p className='text-primary'>EXPERT INSIGHT AND ADVICE</p> */}
                    </div>
                    <div>
                        <p className="text-muted-foreground mb-8 leading-relaxed">Dong Experience is one of the many projects that Discover FarEast has curated and executed that pledges to bring development into this remote corner. Dong and surrounding areas are in dire need of basic facilities like Better Schools, better transport and opportunities of employment. Dong Experience shall attract tremendous publicity, which shall right away bring a rise in the current state of Tourism Sector here.</p>
                        <h3 className='md:text-3xl font-bold tracking-wider'>You will find in this trip</h3>
                        <ul className="list-disc list-inside space-y-4  text-muted-foreground mt-6 max-w-5xl">
                            <li className='text-muted-foreground'>
                                Experience on of the best roads of Arunachal Pradesh following the route “Tezu-Lohit Viewpoint- Hawa pass- Salangam (Pit stop for lunch) – Khupa – Hayuliang-Hawai –Walong”
                            </li>
                            <li>
                                The Magnificent Lohit River joins us and flows side by side on our
                                route throughout, starting from Hawa Pass.
                            </li>
                            <li>
                                Witness a lonely road with frequent view of Army trucks. Lush green
                                forest which gets denser as the altitude increases contributes in a
                                soothing experience inspite of the sleepiness from the tiring long
                                drive.
                            </li>
                            <li>
                                Take a short stop to feel the cold splash of water from the waterfalls
                                that flows onto the road directly from the mountains accompanying us
                                alongside the entire route. Witness the sight of hanging bridges, a
                                lot of them!
                            </li>
                            <li>
                                Fuel up at the easternmost Petrol pump of the country at Khupa. Also,
                                at Khupa you find the only petrol pump in the entire Anjaw district.
                            </li>
                        </ul>

                        <p className="text-muted-foreground mb-8 leading-relaxed mt-6">Dong Experience is one of the many projects that Discover FarEast has curated and executed that pledges to bring development into this remote corner. Dong and surrounding areas are in dire need of basic facilities like Better Schools, better transport and opportunities of employment. Dong Experience shall attract tremendous publicity, which shall right away bring a rise in the current state of Tourism Sector here.</p>
                        <p className='mt-5 font-semibold md:text-2xl'>We do things differently, So Only!</p>

                        <h3 className='md:text-3xl font-bold tracking-wider mt-10 mb-5'>You will find in this trip</h3>
                        <p className="text-muted-foreground mb-8 leading-relaxed">Dong Experience is an accumulation of the various recreational and engaging activities which will be a part, while we chose to scrap few days from our lives to come and experience an ECO-Sustainable time. It is ideated in such a way that like minded nature lovers, aware environmentalists and creative youth all across , would look forward to come and connect every year. And to make their visit to this corner worthwhile, we have formulated a carefully planned itinerary which is sure to make every moment count.</p>
                        <p className="text-muted-foreground mb-8 leading-relaxed">Dong Experience is an accumulation of the various recreational and engaging activities which will be a part, while we chose to scrap few days from our lives to come and experience an ECO-Sustainable time. It is ideated in such a way that like minded nature lovers, aware environmentalists and creative youth all across , would look forward to come and connect every year. And to make their visit to this corner worthwhile, we have formulated a carefully planned itinerary which is sure to make every moment count.</p>
                        <p className='text-muted-foreground mb-8 leading-relaxe'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis neque, numquam excepturi minima voluptatem dolor?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, cupiditate.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-6xl mx-auto px-6 mb-20 text-center">
                    {/* <SectionTitle title="WANT TO WORK WITH US?" subtitle="Connect With Us" />  */}
                    <h2 className="text-4xl md:text-4xl uppercase font-bold text-foreground mb-6 leading-tight">
                        Want to work with us?
                    </h2>
                    <p className='text-muted-foreground mb-8 leading-relaxe'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis neque, numquam excepturi minima voluptatem dolor?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, cupiditate.</p>
                    <a href='/contact'>
                        <button className='bg-yellow-400 text-black px-10 py-3 rounded-noen hover:bg-yellow-300 transition-colors duration-200 uppercase tracking-wider'>Contact Us</button>
                    </a>
                </div>

            </section>
        </div>
    )
}

export default About