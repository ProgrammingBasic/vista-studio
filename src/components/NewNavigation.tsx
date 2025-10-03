import React, { useState } from 'react';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('HOME');

    const navItems = ['HOME', 'ADVENTURES', 'TOUR PACKAGES', 'GALLERY', 'ABOUT', 'CONTACT'];

    return (
        <div className="w-full">
            {/* Top Banner */}
            <div className="bg-cyan-500 py-6 flex justify-center items-center">
                <div className="flex flex-col items-center space-x-2">
                    <svg
                        className="w-12 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5M2 12l10 5 10-5M2 7v5l10 5 10-5V7M2 12v5l10 5 10-5V12" />
                    </svg>
                    <span className="text-white font-bold text-2xl uppercase tracking-widest">Far East Expedition</span>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="bg-black text-white">
                <ul className="flex justify-center space-x-1 leading-8">
                    {navItems.map((item) => (
                        <li key={item}>
                            <button
                                onClick={() => setActiveTab(item)}
                                className={`py-2 px-8 font-medium transition-colors duration-300 ${activeTab === item
                                        ? 'bg-yellow-400 text-black'
                                        : 'hover:bg-gray-800'
                                    }`}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;