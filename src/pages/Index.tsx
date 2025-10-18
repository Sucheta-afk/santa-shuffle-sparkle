import { useNavigate } from "react-router-dom";
import Snowfall from "@/components/Snowfall";
import OrnamentButton from "@/components/OrnamentButton";
import christmasTree from "@/assets/christmas-tree.png";
import ornamentRed from "@/assets/ornament-red.png";
import ornamentGreen from "@/assets/ornament-green.png";
import ornamentGold from "@/assets/ornament-gold.png";
import ornamentBlue from "@/assets/ornament-blue.png";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      <Snowfall />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-2">
            🎄 Secret Santa Connect
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Tap an ornament to begin your magical journey
          </p>
        </div>

        {/* Interactive Christmas Tree with Ornaments */}
        <div className="relative w-full max-w-md mx-auto animate-scale-in">
          {/* Tree Image */}
          <img 
            src={christmasTree} 
            alt="Christmas Tree"
            className="w-full h-auto"
          />

          {/* Ornament Buttons positioned on tree */}
          <OrnamentButton
            imageSrc={ornamentRed}
            label="Join Event"
            onClick={() => navigate('/join-event')}
            position={{ top: '25%', left: '60%' }}
            delay="0.1s"
          />

          <OrnamentButton
            imageSrc={ornamentGreen}
            label="Create Event"
            onClick={() => navigate('/create-event')}
            position={{ top: '25%', left: '20%' }}
            delay="0.2s"
          />

          <OrnamentButton
            imageSrc={ornamentGold}
            label="My Profile"
            onClick={() => navigate('/profile')}
            position={{ top: '45%', left: '70%' }}
            delay="0.3s"
          />

          <OrnamentButton
            imageSrc={ornamentBlue}
            label="My Wishlist"
            onClick={() => navigate('/wishlist')}
            position={{ top: '50%', left: '15%' }}
            delay="0.4s"
          />
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Create your mystical profile, add wishlist items, and join the most magical Secret Santa experience! ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
