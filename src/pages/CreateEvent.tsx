import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Snowfall from "@/components/Snowfall";
import { Link } from "react-router-dom";

const CreateEvent = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="min-h-screen relative">
      <Snowfall />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/" className="text-white/80 hover:text-white mb-4 inline-block">
              ← Back to Tree
            </Link>
            <h1 className="text-4xl font-bold text-white mb-2">
              🎁 Create New Event
            </h1>
            <p className="text-white/90 text-lg">
              Set up your Secret Santa event details
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto px-4 py-12">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Event Details</CardTitle>
              <CardDescription>
                Fill in the information to create your Secret Santa event
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="event-name" className="text-base">Event Name *</Label>
                <Input 
                  id="event-name" 
                  placeholder="e.g., Office Christmas Party 2024"
                  className="text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-base">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Add some details about your event..."
                  className="min-h-[100px] text-base"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-base">Gift Exchange Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal text-base",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="max-participants" className="text-base">Max Participants</Label>
                  <Input 
                    id="max-participants" 
                    type="number" 
                    placeholder="e.g., 20"
                    min="3"
                    className="text-base"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-base">Suggested Budget (Optional)</Label>
                <Input 
                  id="budget" 
                  placeholder="e.g., $25"
                  className="text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rules" className="text-base">Special Rules or Notes</Label>
                <Textarea 
                  id="rules" 
                  placeholder="Any special instructions for participants..."
                  className="min-h-[80px] text-base"
                />
              </div>

              <div className="pt-6 flex gap-4">
                <Link to="/" className="flex-1">
                  <Button variant="outline" className="w-full text-base">
                    Cancel
                  </Button>
                </Link>
                <Button className="flex-1 text-base">
                  Create Event
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
