import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Snowfall from "@/components/Snowfall";
import heroImage from "@/assets/christmas-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Snowfall />
      
      {/* Hero Section */}
      <div className="relative z-10">
        <div 
          className="h-[60vh] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
              🎄 Secret Santa Connect
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-fade-in">
              Spread holiday cheer remotely! Organize magical Secret Santa events 
              with friends, family, or colleagues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg text-lg px-8"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all animate-fade-in border-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Create or Join</h3>
              <p className="text-muted-foreground text-lg">
                Start a new Secret Santa event or join an existing one with a unique code
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all animate-fade-in border-2" style={{ animationDelay: "0.1s" }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-secondary/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Get Matched</h3>
              <p className="text-muted-foreground text-lg">
                Our magical system randomly assigns each person a gift recipient
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all animate-fade-in border-2" style={{ animationDelay: "0.2s" }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                <Gift className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Spread Joy</h3>
              <p className="text-muted-foreground text-lg">
                Exchange gifts and make memories this holiday season!
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary via-primary/90 to-secondary py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start the Fun?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands spreading holiday cheer this season
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-6"
            >
              Create Your First Event
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
