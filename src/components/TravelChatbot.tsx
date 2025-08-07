import { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import HeroSection from "./HeroSection";
import heroBg from "@/assets/tawang-hero-bg.jpg";
import { run_query } from "@/lib/ai_chat.js";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const TravelChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! What do you want to know?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatSectionRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [inputFocused, setInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Random responses for simulation
  // const randomResponses = [
  //   "Tawang is a beautiful destination with stunning monasteries and mountain views. The best time to visit is between March to October.",
  //   "The Tawang Monastery is one of the largest Buddhist monasteries in the world and a must-visit attraction.",
  //   "You can reach Tawang by road from Guwahati (about 480 km) or by taking a flight to Tezpur and then driving.",
  //   "Popular activities in Tawang include visiting the monastery, exploring Sela Pass, and enjoying the local culture.",
  //   "The weather in Tawang varies by season. Summers are pleasant while winters can be quite cold with possible snowfall.",
  //   "Local cuisine includes momos, thukpa, and various Tibetan delicacies. Don't miss trying the local yak cheese!",
  //   "Accommodation options range from budget guesthouses to comfortable hotels. Advance booking is recommended during peak season.",
  // ];

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);
    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);

  const handleSendMessage = async (messageText: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Use run_query to get AI response
    const aiResponse = await run_query(messageText);
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: aiResponse,
      isUser: false,
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages(prev => [...prev, aiMessage]);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
    setTimeout(() => {
      scrollToBottom();
      if (messagesContainerRef.current && inputRef.current) {
        const messagesTop = messagesContainerRef.current.getBoundingClientRect().top;
        const inputTop = inputRef.current.getBoundingClientRect().top;
        const availableHeight = inputTop - messagesTop;
        messagesContainerRef.current.style.height = availableHeight + 'px';
      }
    }, 100);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
    if (messagesContainerRef.current) {
      messagesContainerRef.current.style.height = '';
    }
  };

  return (
    <div style={{ height: 'calc(var(--vh, 1vh) * 100)' }} className="flex flex-col relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Hero Section - 30% */}
        <div className="h-[30%]">
          <HeroSection />
        </div>

        {/* Chat Container - 70% */}
        <div className="h-[70%] flex items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-4xl h-full flex flex-col bg-white/30 bg-opacity-30 border border-white/20 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl">
            {/* Messages Container */}
            <div
              ref={el => { chatContainerRef.current = el; messagesContainerRef.current = el; }}
              className="flex-1 overflow-y-auto p-6 space-y-4"
            >
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.text}
                  isUser={message.isUser}
                />
              ))}
              {isTyping && (
                <ChatMessage
                  message=""
                  isUser={false}
                  isTyping={true}
                />
              )}
            </div>

            {/* Input Section */}
            <div className="border-t border-white/60 flex-shrink-0 p-4">
              <ChatInput
                onSendMessage={handleSendMessage}
                disabled={isTyping}
                inputRef={inputRef}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelChatbot;