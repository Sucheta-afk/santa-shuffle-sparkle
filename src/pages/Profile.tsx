import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sparkles, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import Snowfall from "@/components/Snowfall";

const Profile = () => {
  const generateElfName = () => {
    const adjectives = ["Jolly", "Merry", "Sparkly", "Twinkle", "Frosty", "Snowy", "Cheerful", "Magical"];
    const nouns = ["Tinsel", "Cookie", "Snowflake", "Jingle", "Candy", "Mistletoe", "Holly", "Star"];
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adj} ${noun}`;
  };

  return (
    <div className="min-h-screen relative">
      <Snowfall />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-secondary to-primary py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/" className="text-white/80 hover:text-white mb-4 inline-block">
              ← Back to Tree
            </Link>
            <h1 className="text-4xl font-bold text-white mb-2">
              ✨ Create Your Mystical Profile
            </h1>
            <p className="text-white/90 text-lg">
              Craft your magical Secret Santa persona
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto px-4 py-12">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Your Secret Santa Identity</CardTitle>
              <CardDescription>
                Create a fun persona that will enchant your gift exchange
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="w-32 h-32 border-4 border-primary">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-4xl bg-gradient-to-br from-primary to-secondary text-white">
                    🎅
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline" className="gap-2">
                  <Upload className="w-4 h-4" />
                  Upload Photo
                </Button>
              </div>

              {/* Name Fields */}
              <div className="space-y-2">
                <Label htmlFor="display-name" className="text-base">Display Name *</Label>
                <Input 
                  id="display-name" 
                  placeholder="Your real name"
                  className="text-base"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="elf-name" className="text-base">Elf Name (Fun alias!)</Label>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="gap-1 text-accent hover:text-accent"
                    onClick={() => {
                      const input = document.getElementById('elf-name') as HTMLInputElement;
                      if (input) input.value = generateElfName();
                    }}
                  >
                    <Sparkles className="w-4 h-4" />
                    Generate
                  </Button>
                </div>
                <Input 
                  id="elf-name" 
                  placeholder="e.g., Jolly Tinsel"
                  className="text-base"
                />
                <p className="text-sm text-muted-foreground">
                  A magical name to use in your Secret Santa events
                </p>
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <Label htmlFor="bio" className="text-base">About Me</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Tell everyone a bit about yourself..."
                  className="min-h-[100px] text-base"
                />
              </div>

              {/* Interests */}
              <div className="space-y-2">
                <Label htmlFor="interests" className="text-base">Hobbies & Interests</Label>
                <Textarea 
                  id="interests" 
                  placeholder="What do you enjoy? (helps your Secret Santa!)"
                  className="min-h-[80px] text-base"
                />
              </div>

              {/* Favorite Things */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fav-color" className="text-base">Favorite Color</Label>
                  <Input 
                    id="fav-color" 
                    placeholder="e.g., Red"
                    className="text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fav-treat" className="text-base">Favorite Holiday Treat</Label>
                  <Input 
                    id="fav-treat" 
                    placeholder="e.g., Gingerbread"
                    className="text-base"
                  />
                </div>
              </div>

              <div className="pt-6 space-y-3">
                <Button className="w-full text-base">
                  Save Profile
                </Button>
                <Link to="/" className="block">
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
  );
};

export default Profile;
