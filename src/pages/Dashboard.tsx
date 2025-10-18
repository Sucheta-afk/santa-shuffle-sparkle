import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Plus, Gift, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Snowfall from "@/components/Snowfall";

const Dashboard = () => {
  return (
    <div className="min-h-screen relative">
      <Snowfall />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-2">
              🎅 Welcome Back, Santa!
            </h1>
            <p className="text-white/90 text-lg">
              Ready to spread some holiday magic?
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Link to="/create-event">
              <Card className="hover:shadow-xl transition-all cursor-pointer border-2 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Plus className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Create New Event</h3>
                      <p className="text-muted-foreground">
                        Start a new Secret Santa event and invite friends
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/join-event">
              <Card className="hover:shadow-xl transition-all cursor-pointer border-2 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Gift className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Join Event</h3>
                      <p className="text-muted-foreground">
                        Enter an event code to join an existing Secret Santa
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* My Events */}
          <div>
            <h2 className="text-3xl font-bold mb-6">My Events</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sample Event Cards - Replace with real data */}
              <Card className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">Office Party 2024</CardTitle>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      Active
                    </span>
                  </div>
                  <CardDescription>Created by you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>12 participants</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Gift exchange: Dec 25</span>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">Family Secret Santa</CardTitle>
                    <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">
                      Upcoming
                    </span>
                  </div>
                  <CardDescription>Organized by Mom</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>8 participants</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Gift exchange: Dec 24</span>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all opacity-60">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">Friends Gathering</CardTitle>
                    <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
                      Completed
                    </span>
                  </div>
                  <CardDescription>Last year's event</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>15 participants</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Completed: Dec 23, 2023</span>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      View Memories
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
