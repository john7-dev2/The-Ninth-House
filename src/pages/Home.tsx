import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Music, Cake, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroCafe from "@/assets/hero-cafe.jpg";
import dessertFeatured from "@/assets/dessert-featured.jpg";
import liveMusic from "@/assets/live-music.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCafe}
            alt="The Ninth House Cafe Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-warm-white mb-6">
            The Ninth House
          </h1>
          <p className="text-xl md:text-2xl text-warm-white/90 mb-8 font-light">
            Aesthetic vibes in green & white
          </p>
          <div className="flex items-center justify-center gap-2 text-warm-white/80 mb-8">
            <MapPin className="w-5 h-5" />
            <span>Sector 144, Noida</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-warm-white text-warm-white hover:bg-warm-white/10">
              <Link to="/events">Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Welcome to Our Space</h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                At The Ninth House, we believe in creating moments that matter. Our carefully curated 
                space blends modern aesthetics with warm hospitality, offering you a perfect retreat 
                from the everyday hustle.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From artisan coffee to delectable desserts, every element is thoughtfully designed 
                to provide you with an unforgettable experience.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={dessertFeatured}
                alt="Featured Dessert"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Artisan Beverages</h3>
                <p className="text-muted-foreground">
                  Expertly crafted coffee, refreshing drinks, and specialty beverages made with premium ingredients.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Live Events</h3>
                <p className="text-muted-foreground">
                  Experience soul-stirring Ghazal nights, live music performances, and special occasions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cake className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Gourmet Delights</h3>
                <p className="text-muted-foreground">
                  Indulge in our curated menu of desserts, appetizers, and meals crafted to perfection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={liveMusic}
                alt="Live Music at The Ninth House"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">An Experience Like No Other</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Join us for intimate live music sessions, celebrate special occasions with friends, 
                or simply unwind with a cup of perfectly brewed coffee. Every visit promises 
                something special.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/events">Explore Our Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">The Ninth House</h3>
              <p className="opacity-90">
                Aesthetic vibes in green & white
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                <Link to="/menu" className="opacity-90 hover:opacity-100 transition-opacity">Menu</Link>
                <Link to="/events" className="opacity-90 hover:opacity-100 transition-opacity">Events</Link>
                <Link to="/gallery" className="opacity-90 hover:opacity-100 transition-opacity">Gallery</Link>
                <Link to="/contact" className="opacity-90 hover:opacity-100 transition-opacity">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Visit Us</h4>
              <p className="opacity-90 mb-2">Sector 144, Noida</p>
              <p className="opacity-90">Open Daily: 10 AM - 11 PM</p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center opacity-90">
            <p>&copy; 2024 The Ninth House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
