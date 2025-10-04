import React from "react";
import SectionTitle from "./SectionTitle";

const members = [
    {
        id: 1,
        name: "John Doe",
        role: "Author, Adventures",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
    },
    {
        id: 2,
        name: "Emma Smith",
        role: "Adviser, Photographer",
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2",
    },
    {
        id: 3,
        name: "Alex Brown",
        role: "Photographer",
        img: "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
    },
    {
        id: 4,
        name: "Lily Johnson",
        role: "Adviser, Adventures",
        img: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=4",
    },
];

export default function OurTeam() {
    return (
        <section className="py-20 bg-gray-100 text-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle title="Explore With The Team" subtitle="Experts Insights and Advice" />
                
                <div
                    role="list"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center"
                >
                    {members.map((m) => (
                        <div key={m.id} role="listitem" className="text-center">
                            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-100 mx-auto border border-4 border-[#31b7d0]">
                                <img
                                    src={m.img}
                                    alt={`${m.name} avatar`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="mt-4 font-semibold text-gray-900">
                                {m.name}
                            </div>
                            <div className="text-sm text-gray-500">{m.role}</div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    <button className="bg-yellow-300 hover:bg-yellow-400 text-sm font-semibold px-6 py-2 rounded shadow">
                        VIEW ALL EXPERTS
                    </button>
                </div>
            </div>
        </section>
    );
}