import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Star, User, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import heroCafe from "@/assets/hero-cafe.jpg";
import dessertFeatured from "@/assets/dessert-featured.jpg";
import liveMusic from "@/assets/live-music.jpg";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Drinks", "Desserts", "Food", "Live Music", "Events"];

  const dishes = [
    {
      id: 1,
      name: "Artisan Coffee",
      image: heroCafe,
      category: "Drinks",
      description: "Perfectly brewed coffee with rich flavors"
    },
    {
      id: 2,
      name: "Signature Desserts",
      image: dessertFeatured,
      category: "Desserts",
      description: "Indulgent sweet treats"
    },
    {
      id: 3,
      name: "Gourmet Dishes",
      image: liveMusic,
      category: "Food",
      description: "Delicious meals crafted with care"
    },
    {
      id: 4,
      name: "Refreshing Mocktails",
      image: heroCafe,
      category: "Drinks",
      description: "Creative non-alcoholic beverages"
    },
    {
      id: 5,
      name: "Ghazal Nights",
      image: liveMusic,
      category: "Events",
      description: "Soul-stirring musical evenings"
    },
    {
      id: 6,
      name: "Live Music Sessions",
      image: liveMusic,
      category: "Live Music",
      description: "Intimate performances in a cozy setting"
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      text: "The Ghazal nights here are absolutely magical! The ambiance, the music, and the food - everything is perfect. A must-visit in Noida.",
      dish: "Ghazal Night Experience",
    },
    {
      id: 2,
      name: "Rahul Verma",
      rating: 5,
      text: "The aesthetic vibes in green & white are so soothing. Their coffee is amazing and the desserts are to die for!",
      dish: "Coffee & Desserts",
    },
    {
      id: 3,
      name: "Ananya Gupta",
      rating: 5,
      text: "Perfect spot for hanging out with friends. The live music sessions are incredible and the food quality is consistently excellent.",
      dish: "Live Music & Food",
    },
  ];

  const galleryImages = [
    { id: 1, image: heroCafe },
    { id: 2, image: dessertFeatured },
    { id: 3, image: liveMusic },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="inline-block">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-xl md:text-2xl">👑</span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                The Ninth House
              </h1>
              
              <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                ✨ Aesthetic vibes in green & white 🌿<br/>
                📍 Sector 144, Noida<br/>
                Experience soul-stirring Ghazal nights, artisan coffee, and gourmet delights in our cozy space.
              </p>
              
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold w-full sm:w-auto shadow-lg"
              >
                Order Now
              </Button>

              {/* Decorative Images */}
              <div className="hidden sm:flex gap-4 pt-8">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-lg rotate-[-5deg]">
                  <img src={heroCafe} alt="Food" className="w-full h-full object-cover" />
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-lg rotate-[5deg] mt-8">
                  <img src={dessertFeatured} alt="Food" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image with Play Button */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src={heroCafe}
                  alt="Featured Dish"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all shadow-xl">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-foreground ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>
              
              {/* Decorative Image */}
              <div className="hidden md:block absolute -right-8 -bottom-8 w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-lg rotate-[10deg]">
                <img src={liveMusic} alt="Food" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center mx-auto">
                <span className="text-xl md:text-2xl">🍽️</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto px-4">
              From Ghazal nights to artisan beverages and gourmet delights, experience the perfect blend of culture, taste, and aesthetic vibes.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Dishes Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {dishes.map((dish) => (
              <Card key={dish.id} className="overflow-hidden border-border bg-card hover:shadow-xl transition-all group">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all shadow-lg">
                    <span className="text-xl">❤️</span>
                  </button>
                </div>
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2">{dish.name}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-4">{dish.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    {dish.category === "Events" || dish.category === "Live Music" ? "Book Now" : "Order Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center mx-auto">
                <span className="text-xl md:text-2xl">📸</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              A Feast for Your Eyes
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <img
                  src={item.image}
                  alt={`Gallery ${item.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center mx-auto">
                <span className="text-xl md:text-2xl">💖</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              They Love's Us
            </h2>
            <p className="text-muted-foreground text-base md:text-lg px-4">
              Every visit here is like a treat of heaven. Here's what our customers say about us.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-border bg-card p-4 md:p-6 hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "fill-accent text-accent"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <h3 className="font-bold text-base md:text-lg mb-2">{testimonial.dish}</h3>
                  
                  <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">@customer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10 p-6 md:p-12 lg:p-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-xl md:text-2xl">🔥</span>
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Visit Us Today!
                </h2>
                
                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                  Experience the perfect blend of aesthetic vibes, soulful music, and delicious food. Join us for Ghazal nights, live music, or simply unwind with a cup of artisan coffee.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold w-full sm:w-auto shadow-lg"
                  >
                    View Menu
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold w-full sm:w-auto"
                  >
                    Book Event
                  </Button>
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src={dessertFeatured}
                    alt="Order Now"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative Image */}
                <div className="hidden md:block absolute -right-8 -top-8 w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-lg rotate-[-10deg]">
                  <img src={liveMusic} alt="Food" className="w-full h-full object-cover" />
                </div>
              </div>
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
