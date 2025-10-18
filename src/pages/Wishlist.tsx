import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import Snowfall from "@/components/Snowfall";
import { useState } from "react";

interface WishlistItem {
  id: number;
  title: string;
  description: string;
  link?: string;
}

const Wishlist = () => {
  const [items, setItems] = useState<WishlistItem[]>([
    { id: 1, title: "Cozy Winter Scarf", description: "Something warm and colorful", link: "" }
  ]);

  const addItem = () => {
    setItems([...items, { id: Date.now(), title: "", description: "", link: "" }]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen relative">
      <Snowfall />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-accent to-primary py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/" className="text-white/80 hover:text-white mb-4 inline-block">
              ← Back to Tree
            </Link>
            <h1 className="text-4xl font-bold text-white mb-2">
              🎁 My Wishlist
            </h1>
            <p className="text-white/90 text-lg">
              Help your Secret Santa find the perfect gift!
            </p>
          </div>
        </div>

        {/* Wishlist Form */}
        <div className="max-w-3xl mx-auto px-4 py-12">
          <Card className="border-2 mb-6">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">Gift Ideas</CardTitle>
                  <CardDescription>
                    Add hints about what you'd love to receive this season
                  </CardDescription>
                </div>
                <Button onClick={addItem} className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Item
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {items.map((item, index) => (
                <Card key={item.id} className="border bg-muted/30">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Gift className="w-5 h-5 text-primary" />
                        Item {index + 1}
                      </h3>
                      {items.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="h-8 w-8 p-0"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`title-${item.id}`} className="text-base">
                        Item Name *
                      </Label>
                      <Input 
                        id={`title-${item.id}`}
                        placeholder="e.g., Cozy Winter Scarf"
                        defaultValue={item.title}
                        className="text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`description-${item.id}`} className="text-base">
                        Description
                      </Label>
                      <Textarea 
                        id={`description-${item.id}`}
                        placeholder="Add details like color, size, or why you want it..."
                        defaultValue={item.description}
                        className="min-h-[80px] text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`link-${item.id}`} className="text-base">
                        Link (Optional)
                      </Label>
                      <Input 
                        id={`link-${item.id}`}
                        type="url"
                        placeholder="https://..."
                        defaultValue={item.link}
                        className="text-base"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}

              {items.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  <Gift className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No items yet. Click "Add Item" to get started!</p>
                </div>
              )}

              <div className="pt-6 space-y-3">
                <Button className="w-full text-base">
                  Save Wishlist
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

export default Wishlist;
