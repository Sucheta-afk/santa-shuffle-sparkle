import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Snowfall from "@/components/Snowfall";
import { Link } from "react-router-dom";
import giftIcon from "@/assets/gift-icon.png";

const JoinEvent = () => {
  return (
    <div className="min-h-screen relative">
      <Snowfall />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-secondary to-primary py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/dashboard" className="text-white/80 hover:text-white mb-4 inline-block">
              ← Back to Dashboard
            </Link>
            <h1 className="text-4xl font-bold text-white mb-2">
              🎄 Join Secret Santa Event
            </h1>
            <p className="text-white/90 text-lg">
              Enter your event code to join the fun
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <img 
                src={giftIcon} 
                alt="Gift" 
                className="w-64 h-64 object-contain animate-float"
              />
            </div>

            {/* Right Side - Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Enter Event Code</CardTitle>
                <CardDescription>
                  You should have received a unique code from the event organizer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="event-code" className="text-base">Event Code *</Label>
                  <Input 
                    id="event-code" 
                    placeholder="e.g., SANTA-2024-XYZ"
                    className="text-lg font-mono uppercase tracking-wider"
                  />
                  <p className="text-sm text-muted-foreground">
                    Not case sensitive
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="display-name" className="text-base">Your Display Name *</Label>
                  <Input 
                    id="display-name" 
                    placeholder="How you want to be called"
                    className="text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wishlist" className="text-base">Your Wishlist (Optional)</Label>
                  <Textarea 
                    id="wishlist" 
                    placeholder="Add hints about what you'd like to receive..."
                    className="min-h-[100px] text-base"
                  />
                  <p className="text-sm text-muted-foreground">
                    This will be shared with your Secret Santa
                  </p>
                </div>

                <div className="pt-4 space-y-3">
                  <Button className="w-full text-base">
                    Join Event
                  </Button>
                  <Link to="/dashboard" className="block">
                    <Button variant="outline" className="w-full text-base">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinEvent;
