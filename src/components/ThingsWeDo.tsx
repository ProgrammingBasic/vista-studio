import React from 'react';
import SectionTitle from './SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bike, Mountain, Leaf, Compass } from 'lucide-react';

const tabData = {
    cycling: [
        {
            title: "Mountain Biking",
            image: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Road Cycling",
            image: "https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "City Ride",
            image: "https://images.pexels.com/photos/38296/cycling-bicycle-riding-sport-38296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Gravel Path",
            image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Downhill Race",
            image: "https://images.pexels.com/photos/248559/pexels-photo-248559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "BMX Tricks",
            image: "https://images.pexels.com/photos/3621234/pexels-photo-3621234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ],
    hiking: [
        {
            title: "Forest Trail",
            image: "https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Mountain Peak",
            image: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Coastal Walk",
            image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Desert Trek",
            image: "https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Waterfall Discovery",
            image: "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Winter Expedition",
            image: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ],
    sustainability: [
        {
            title: "Eco-friendly Stay",
            image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Community Work",
            image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Renewable Energy",
            image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Local Farming",
            image: "https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Wildlife Conservation",
            image: "https://images.pexels.com/photos/1484771/pexels-photo-1484771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Tree Planting",
            image: "https://images.pexels.com/photos/41951/solar-system-solar-energy-power-generation-41951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ],
    adventure: [
        {
            title: "River Rafting",
            image: "https://images.pexels.com/photos/1687831/pexels-photo-1687831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Paragliding",
            image: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Kayaking",
            image: "https://images.pexels.com/photos/2409038/pexels-photo-2409038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Rock Climbing",
            image: "https://images.pexels.com/photos/225769/pexels-photo-225769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Zip Lining",
            image: "https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Scuba Diving",
            image: "https://images.pexels.com/photos/1268076/pexels-photo-1268076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ],
};

const TravelGrid = () => {
    return (
        <section className='bg-blue-50 py-20 px-4'>
            <SectionTitle title="Things We Do" subtitle="Comprehensive travel solutions designed to make your journey seamless and unforgettable" />
            <Tabs defaultValue="cycling" className="max-w-7xl mx-auto">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 max-w-2xl mx-auto mb-8">
                    <TabsTrigger value="cycling" className="group">
                        <Bike className="mr-2 h-4 w-4 transition-colors group-data-[state=active]:text-teal-600" />
                        Cycling
                    </TabsTrigger>
                    <TabsTrigger value="hiking" className="group">
                        <Mountain className="mr-2 h-4 w-4 transition-colors group-data-[state=active]:text-teal-600" />
                        Hiking
                    </TabsTrigger>
                    <TabsTrigger value="sustainability" className="group">
                        <Leaf className="mr-2 h-4 w-4 transition-colors group-data-[state=active]:text-teal-600" />
                        Sustainability
                    </TabsTrigger>
                    <TabsTrigger value="adventure" className="group">
                        <Compass className="mr-2 h-4 w-4 transition-colors group-data-[state=active]:text-teal-600" />
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
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-xl md:text-2xl font-bold">{post.title}</h3>
                                    </div>
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