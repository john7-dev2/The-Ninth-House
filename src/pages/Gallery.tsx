import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = {
    food: [
      { id: 1, alt: "Signature Latte with Art" },
      { id: 2, alt: "Tiramisu Dessert" },
      { id: 3, alt: "Club Sandwich Platter" },
      { id: 4, alt: "Margherita Pizza" },
      { id: 5, alt: "Cold Brew Coffee" },
      { id: 6, alt: "Red Velvet Cake" },
    ],
    ambiance: [
      { id: 1, alt: "Cozy Corner Seating" },
      { id: 2, alt: "Green Interior Design" },
      { id: 3, alt: "Window Seating Area" },
      { id: 4, alt: "Coffee Bar Counter" },
      { id: 5, alt: "Outdoor Seating" },
      { id: 6, alt: "Evening Ambiance" },
    ],
    events: [
      { id: 1, alt: "Ghazal Night Performance" },
      { id: 2, alt: "Live Acoustic Session" },
      { id: 3, alt: "Friendship Day Celebration" },
      { id: 4, alt: "Open Mic Night" },
      { id: 5, alt: "Sunday Brunch" },
      { id: 6, alt: "Independence Day Event" },
    ],
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Gallery</h1>
          <p className="text-xl text-muted-foreground">
            Moments captured at The Ninth House
          </p>
        </div>

        <Tabs defaultValue="food" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="food">Food & Drinks</TabsTrigger>
            <TabsTrigger value="ambiance">Ambiance</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="food">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.food.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow aspect-square"
                  onClick={() => setSelectedImage(item.alt)}
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-muted-foreground font-medium">{item.alt}</p>
                      <p className="text-sm text-muted-foreground/60 mt-2">Food & Beverage</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ambiance">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.ambiance.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow aspect-square"
                  onClick={() => setSelectedImage(item.alt)}
                >
                  <div className="w-full h-full bg-gradient-to-br from-sage/20 to-cream/40 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-muted-foreground font-medium">{item.alt}</p>
                      <p className="text-sm text-muted-foreground/60 mt-2">Interior</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.events.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow aspect-square"
                  onClick={() => setSelectedImage(item.alt)}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gold/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-muted-foreground font-medium">{item.alt}</p>
                      <p className="text-sm text-muted-foreground/60 mt-2">Event</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 p-8 bg-secondary/30 rounded-2xl text-center">
          <p className="text-muted-foreground text-lg mb-4">
            These are placeholder representations. Follow us on Instagram @theninthousenoida 
            to see our latest photos and updates!
          </p>
          <a
            href="https://instagram.com/theninthousenoida"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-semibold text-lg"
          >
            Visit our Instagram →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
