import React from 'react';
import SectionTitle from './SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bike, Mountain, Leaf, Compass } from 'lucide-react';

import Image1 from "@/assets/tabs/1.jpg"
import Image2 from "@/assets/tabs/2.jpg"
import Image3 from "@/assets/tabs/3.jpg"
import Image4 from "@/assets/tabs/4.jpg"
import Image5 from "@/assets/tabs/5.jpg"
import Image6 from "@/assets/tabs/6.jpg"
import Image7 from "@/assets/tabs/7.jpg"
import Image8 from "@/assets/tabs/8.jpg"
import Image9 from "@/assets/tabs/9.jpg"
import Adv1 from "@/assets/tabs/A1.jpg"
import Adv2 from "@/assets/tabs/A2.JPG"
import Adv3 from "@/assets/tabs/A3.jpg"
import Adv4 from "@/assets/tabs/A4.jpg"
import Adv5 from "@/assets/tabs/A5.jpg"
import s1 from "@/assets/tabs/s1.jpg"
import s2 from "@/assets/tabs/s2.jpg"
import s3 from "@/assets/tabs/s3.jpg"
import s4 from "@/assets/tabs/s4.jpg"
import s5 from "@/assets/tabs/s5.jpg"



const tabData = {
    cycling: [
        {
            title: "Mountain Biking",
            image: Image3,
        },
        {
            title: "Road Cycling",
            image: Image2,
        },
        {
            title: "City Ride",
            image: Image5,
        },
        {
            title: "Gravel Path",
            image: s2
        },
        {
            title: "Downhill Race",
            image: Image7
        },
        {
            title: "BMX Tricks",
            image: Image8
        },
    ],
    hiking: [
        {
            title: "Forest Trail",
            image: Image8
        },
        {
            title: "Mountain Peak",
            image: "https://www.swantour.com/blogs/wp-content/uploads/2019/01/How-to-Reach-North-East-India.jpg",
        },
        {
            title: "Coastal Walk",
            image: "https://static.wixstatic.com/media/11062b_65a97671b8d64580af34a8cd40a55e40~mv2.jpeg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_65a97671b8d64580af34a8cd40a55e40~mv2.jpeg",
        },
        {
            title: "Desert Trek",
            image: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/12/North-East-India-Trekking.jpg?resize=800%2C517&ssl=1",
        },
        {
            title: "Waterfall Discovery",
            image: "https://media1.thrillophilia.com/filestore/9vo5a62jnvrpkkswa81cy7oo556k_1623305706_moderate_trek.png?w=400&dpr=2",
        },
        {
            title: "Winter Expedition",
            image: "https://unconventionalandvivid.com/wp-content/uploads/2018/07/IMG_5629-01-1024x682.jpeg",
        },
    ],
    sustainability: [
        {
            title: "Eco-friendly Stay",
            image: s1,
        },
        {
            title: "Community Work",
            image: s2,
        },
        {
            title: "Renewable Energy",
            image: s3,
        },
        {
            title: "Local Farming",
            image: s4,
        },
        {
            title: "Wildlife Conservation",
            image: s5,
        },
        {
            title: "Tree Planting",
            image: Image8,
        },
    ],
    adventure: [
        {
            title: "River Rafting",
            image: Adv1,
        },
        {
            title: "Paragliding",
            image: Adv2,
        },
        {
            title: "Kayaking",
            image: Adv3,
        },
        {
            title: "Rock Climbing",
            image: Adv4,
        },
        {
            title: "Zip Lining",
            image: Adv5,
        },
        {
            title: "Scuba Diving",
            image: s4,
        },
    ],
};

const TravelGrid = () => {
    return (
        <section className='bg-blue-50 py-20 px-4'>
            <SectionTitle title="Things We Do" subtitle="Comprehensive travel solutions designed to make your journey seamless and unforgettable" />
            <Tabs defaultValue="cycling" className="max-w-7xl mx-auto">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 max-w-2xl mx-auto mb-8 bg-white">
                    <TabsTrigger value="cycling" className="group">
                        <Bike className="mr-2 h-4 w-4 transition-colors group-data-[state=active]:text-teal-400" />
                        Cycling
                    </TabsTrigger>
                    <TabsTrigger value="hiking" className="group">
                        <Mountain className="mr-2 h-4 w-4 transition-colors group-data-[state=active]:text-teal-400" />
                        Hiking
                    </TabsTrigger>
                    <TabsTrigger value="sustainability" className="group">
                        <Leaf className="mr-2 h-4 w-4 transition-colors group-data-[state=active]:text-teal-400" />
                        Sustainability
                    </TabsTrigger>
                    <TabsTrigger value="adventure" className="group">
                        <Compass className="mr-2 h-4 w-4 transition-colors group-data-[state=active]:text-teal-400" />
                        Adventure
                    </TabsTrigger>
                </TabsList>
                {Object.entries(tabData).map(([key, images]) => (
                    <TabsContent key={key} value={key}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {images.map((post, idx) => (
                                <div key={idx} className="relative overflow-hidden group rounded-lg h-80">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-xl md:text-2xl font-bold">{post.title}</h3>
                                    </div> */}
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
};

export default TravelGrid;