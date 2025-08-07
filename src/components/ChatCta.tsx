// ChatCTA.js
import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';

export default function ChatCTA() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/chat');
    };

    return (
        <div className="w-full max-w-5xl mx-auto my-10 text-center px-4 md:py-20 py-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Plan Smarter. Travel Better. Ask Away.
                </h2>
                <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6 rounded-full"></div>
                
            </div>

            <div
                onClick={handleClick}
                className="relative cursor-pointer bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-8 border border-gray-200 text-left hover:bg-gray-50"
            >
                <p className="text-xl text-gray-500 mb-12">
                    💬  Need help planning your perfect trip? Ask us anything!
                </p>
                {/* Send Icon Button */}
                <div className="absolute bottom-4 right-4">
                    <Send className="h-6 w-6 text-blue-600 hover:text-blue-800 transition-colors duration-200" />
                </div>
            </div>
        </div>
    );
}

