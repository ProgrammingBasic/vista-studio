import React from "react";
import SectionTitle from "./SectionTitle";
import Team1 from "@/assets/team/team1.jpg";
import Team2 from "@/assets/team/team2.jpg";
import Team3 from "@/assets/team/team3.jpg";
import Team5 from "@/assets/team/team5.jpg";


const members = [
    {
        id: 1,
        name: "Dina Brah",
        role: "Author, Adventures",
        img: Team1,
    },
    {
        id: 2,
        name: "Agraj Mipun",
        role: "Adviser, Photographer",
        img: Team2,
    },
    {
        id: 3,
        name: "Joyshree Gogoi",
        role: "Photographer",
        img: Team3,
    },
    {
        id: 4,
        name: "Maqsood Ahmed",
        role: "Adviser, Adventures",
        img: Team5
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