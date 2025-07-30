import { User } from "lucide-react";


const NeonAvatar = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Animated neon border with RGB wave effect */}
      <div className="relative">
        <div className="w-60 h-60 rounded-full border-4 animate-rgb-wave p-1">
          <div className="w-full h-full rounded-full bg-gradient-hero flex items-center justify-center overflow-hidden">
            {/* Placeholder avatar - you can replace with actual image */}
            <div className="w-58 h-58 rounded-full bg-muted flex items-center justify-center">
              <img src="https://avatars.githubusercontent.com/u/97917029?v=4" alt="Lucas Marujo" className="w-63 h-63 rounded-full" />
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 w-60 h-60 rounded-full animate-neon-pulse opacity-30 pointer-events-none"></div>
        
        {/* Pulsing background glow */}
        {/* <div className="absolute inset-[-20px] bg-gradient-neon rounded-full blur-xl animate-glow-pulse opacity-20 pointer-events-none"></div> */}
      </div>
    </div>
  );
};

export default NeonAvatar;