import React, { useEffect, useState } from 'react'
import { Wifi, Car, Coffee, Dog, Clock, Mountain, MapPin, Phone, Mail, MessageSquare } from 'lucide-react'
import { getDocs, limit, query, where } from 'firebase/firestore';
import { accomodationRef } from '@/lib/database';
import { useParams } from 'react-router-dom';



const menu = [
    { name: 'About', href: '#', current: true },
    { name: 'Rooms', href: '#', current: false },
    { name: 'Facilities', href: '#facilities', current: false },
    { name: 'Gallery', href: '#gallery', current: false },
    { name: 'Location', href: '#location', current: false },
    { name: 'Rules/Notes', href: '#notes', current: false },
]

// const facilities = [
//     { name: 'Free Wi-Fi', icon: Wifi },
//     { name: 'Free Parking', icon: Car },
//     { name: 'Breakfast Included', icon: Coffee },
//     { name: 'Pet Friendly', icon: Dog },
//     { name: '24/7 Check-in', icon: Clock },
//     { name: 'Mountain View', icon: Mountain },
// ];


const iconMap = {
    Wifi,
    Car,
    Coffee,
    Dog,
    Clock,
    Mountain
}


function StayDetails() {
    const { slug } = useParams()
    const [accommodation, setAccommodation] = useState<any | null>(null)
    const [loading, setLoading] = useState(true)


    function IconRenderer({ name, className, strokeWidth = 1.5 }) {
        const Icon = iconMap[name];
        if (!Icon) return <span className="h-8 w-8 text-gray-400">?</span>;
        return <Icon className={className} strokeWidth={strokeWidth} />;
    }

    useEffect(() => {
        const fetchAccommodation = async () => {
            setLoading(true)
            try {
                const q = query(accomodationRef, where("slug", "==", slug), limit(1))
                const querySnapshot = await getDocs(q)

                if (!querySnapshot.empty) {
                    const doc = querySnapshot.docs[0]
                    const data = { id: doc.id, ...doc.data() }
                    console.log(data)
                    setAccommodation(data)
                } else {
                    console.warn("No accommodation found for slug:", slug)
                    setAccommodation(null)
                }
            } catch (error) {
                console.error("Error fetching accommodation:", error)
            } finally {
                setLoading(false)
            }
        }

        if (slug) fetchAccommodation()
    }, [slug])

    if (loading) return <p>Loading...</p>
    if (!accommodation) return <p>No accommodation found</p>


    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden h-[40vh] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&h=1080&fit=crop" // Placeholder image
                        alt="Stay Details Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div> {/* Transparent overlay */}
                </div>

                <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {accommodation.name}
                    </h1>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        Find out more about your chosen accommodation.
                    </p>
                </div>
            </section>
            <div className='bg-gray-600 leading-10 text-white'>
                <div className="menu container  mx-auto px-4">
                    <div className="grid grid-cols-6">
                        <div className='col-span-5 uppercase flex items-center divide-x divide-white/20'>
                            {
                                menu.map((item) => (
                                    <a href={item.href} key={item.name} className='px-5 py-1 text-center hover:bg-white/10 transition-colors duration-200'>{item.name}</a>
                                ))
                            }
                        </div>
                        <div className='col-span-1'>

                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="grid grid-cols-6 gap-2 container">
                    <div className='col-span-4'>
                        <div className="about py-20">
                            <h2 className="relative inline-block z-0 text-4xl md:text-5xl font-bold text-foreground mb-2 uppercase font-primary tracking-wide pb-4 before:content-[''] before:absolute before:w-48 before:h-6 before:bg-yellow-400/70 before:bottom-2 before:left-0  before:-z-10">
                                About The Stay
                            </h2>
                            <p className='leading-10'>
                                {accommodation.description}
                            </p>
                        </div>
                        <div className='grid grid-cols-2' id='gallery'>
                            {
                                accommodation.images.map((imageUrl, index) => (
                                <img key={index} src={imageUrl.url} alt={`Gallery Image ${index + 1}`} className='w-full h-auto object-cover' />
                                ))
                            }
                            {/* <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop" alt="Gallery Image 1" className='w-full h-auto object-cover' />
                            <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&h=600&fit=crop" alt="Gallery Image 2" className='w-full h-auto object-cover' />
                            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop" alt="Gallery Image 3" className='w-full h-auto object-cover' />
                            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop" alt="Gallery Image 4" className='w-full h-auto object-cover' /> */}
                        </div>
                        <div id='facilities' className='py-20'>
                            <div className='mb-10'>
                                <h2 className="relative inline-block z-0 text-4xl md:text-5xl font-bold text-foreground mb-2 uppercase font-primary tracking-wide pb-4 before:content-[''] before:absolute before:w-48 before:h-6 before:bg-yellow-400/70 before:bottom-2 before:left-0  before:-z-10">
                                    Facilities
                                </h2>
                                <p className='text-gray-500 text-lg mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam.</p>
                            </div>
                            <div className='grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10'>
                                {accommodation.facilities.map((facility) => (
                                    <div key={facility.name} className='flex items-center gap-4'>
                                        {/* <facility.icon className='h-8 w-8 text-primary' strokeWidth={1.5} /> */}
                                        <IconRenderer name={facility.iconName} className="h-8 w-8 text-primary" />
                                        <span className='text-lg text-foreground'>{facility.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div id='location' className='py-20'>
                            <div className="mb-10">
                                <h2 className="relative inline-block z-0 text-4xl md:text-5xl font-bold text-foreground mb-2 uppercase font-primary tracking-wide pb-4 before:content-[''] before:absolute before:w-48 before:h-6 before:bg-yellow-400/70 before:bottom-2 before:left-0  before:-z-10">
                                    Location
                                </h2>
                                <p className='text-gray-500 text-lg mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam.</p>
                            </div>
                            <div className="location-card bg-gray-100 p-6 rounded-lg shadow-sm">
                                <div className="relative h-80 w-full overflow-hidden rounded-md mb-6">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789!2d77.1734!3d31.1048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3dc0053ad%3A0x3e1cf40b65b80aaa!2sShimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1635678901234!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-md"
                                    ></iframe>
                                </div>
                                <div className="space-y-4 text-foreground">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold">Address</h4>
                                            <p className="text-muted-foreground">{accommodation.location.address}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                                        <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">{accommodation.host.contact}</a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                                        <a href="mailto:contact@staydetails.com" className="text-muted-foreground hover:text-primary transition-colors">contact@staydetails.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border border-blue-500 rounded-md py-20 px-10 mb-20' id='notes'>
                            <div className="mb-10">
                                <h2 className='text-5xl'>House Rules/Notes</h2>
                                <p className='mb-5 text-gray-500 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in.</p>
                                <p className='text-gray-500 text-lg mt-4'>{accommodation.notes}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div id="hostcard" className="sticky top-10 p-6">
                            <div className="bg-[#f1f9fc] rounded-lg shadow-md p-8">
                                <div className="flex flex-col items-center text-center">
                                    <img
                                        src={accommodation.host.image.url}
                                        alt="Host"
                                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mb-4"
                                    />
                                    <h3 className="text-2xl font-bold text-foreground mb-1">{accommodation.host.name}</h3>
                                    <p className="text-muted-foreground mb-6">Your Host</p>

                                    <div className="w-full space-y-4 text-left">
                                        <a href="tel:+919876543210" className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                                            <Phone className="h-6 w-6 text-primary" />
                                            <span className="text-muted-foreground">{accommodation.host.contact}</span>
                                        </a>
                                        <a href={`https://wa.me/${accommodation.host.contact}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                                            <MessageSquare className="h-6 w-6 text-green-500" />
                                            <span className="text-muted-foreground">Chat on WhatsApp</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default StayDetails


