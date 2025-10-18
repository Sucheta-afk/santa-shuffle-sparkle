import { cn } from "@/lib/utils";

interface OrnamentButtonProps {
  imageSrc: string;
  label: string;
  onClick: () => void;
  position: { top: string; left: string };
  delay?: string;
}

const OrnamentButton = ({ imageSrc, label, onClick, position, delay = "0s" }: OrnamentButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute group cursor-pointer transition-transform hover:scale-110"
      style={{ 
        ...position,
        animationDelay: delay 
      }}
    >
      <div className="relative animate-float">
        <img 
          src={imageSrc} 
          alt={label}
          className="w-20 h-20 md:w-24 md:h-24 drop-shadow-2xl"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-xs md:text-sm font-bold text-center px-2 drop-shadow-lg">
            {label}
          </span>
        </div>
      </div>
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white px-3 py-1 rounded-full text-xs">
        {label}
      </div>
    </button>
  );
};

export default OrnamentButton;
