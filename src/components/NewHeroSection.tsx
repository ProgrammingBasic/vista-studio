import React from 'react';
import { BotMessageSquare, NotebookPen } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`
                }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content Container */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div className="max-w-4xl text-center text-white bg-black bg-opacity-30 p-10 py-12 rounded-lg shadow-lg">
                    {/* Main Heading */}
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 uppercase leading-relaxed tracking-wider">
                        FEEL THE NEW ADVENTURE AND NEW DESTINATION EVERYTIME
                    </h1>

                    {/* Subheading */}
                    <p className="text-base md:text-lg mb-8 opacity-80">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, repellendus!
                    </p>

                    {/* Call to Action Button */}
                    <div className='space-x-4 flex justify-center'>
                        <Link to="/chat" className=" flex bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded transition-colors duration-300 uppercase">
                            <BotMessageSquare className='mr-2'/>
                            Start Chatting
                        </Link>
                        <Link to="/create-plan" className="flex bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded transition-colors duration-300 uppercase">
                            <NotebookPen className='mr-2'/>
                            Plan your Journey
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;