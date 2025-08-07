import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import aiAssistantLottie from "@/assets/ai_assistant.lottie";

const HeroSection = () => {
  return (
    <div className="relative h-[30vh] min-h-[200px] flex flex-col items-center justify-center p-4">
      {/* Animated AI Logo */}
      <DotLottieReact
        src={aiAssistantLottie}
        autoplay
        loop
        style={{ width: "7rem", height: "7rem" }} // 7rem = 112px, 40% bigger than 5rem
      />
      
      {/* Title */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-2 drop-shadow-lg">
         Let’s Plan Something Amazing Together ✈️
      </h1>
      
      {/* Subtitle */}
      <p className="text-sm md:text-base text-white/80 text-center max-w-md">
       <span className="text-[#ffff00]">AI-Powered</span>  Travel Planning at Your Fingertips
      </p>
    </div>
  );
};

export default HeroSection;