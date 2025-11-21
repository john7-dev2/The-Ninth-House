import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Music, Users } from "lucide-react";
import liveMusic from "@/assets/live-music.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Ghazal Night",
      date: "Every Friday",
      time: "8:00 PM - 11:00 PM",
      description: "Experience the soulful magic of live Ghazal performances by renowned artists. A perfect evening for poetry and music lovers.",
      category: "Music",
      capacity: "Limited Seating",
    },
    {
      title: "Live Acoustic Sessions",
      date: "Every Saturday",
      time: "7:00 PM - 10:00 PM",
      description: "Unwind with live acoustic music performances featuring local and visiting artists in an intimate setting.",
      category: "Music",
      capacity: "Open Seating",
    },
    {
      title: "Sunday Brunch & Jazz",
      date: "Every Sunday",
      time: "11:00 AM - 3:00 PM",
      description: "Enjoy a relaxed Sunday brunch accompanied by smooth jazz music. Perfect for family gatherings.",
      category: "Food & Music",
      capacity: "Reservations Required",
    },
    {
      title: "Open Mic Night",
      date: "First Wednesday",
      time: "7:00 PM - 10:00 PM",
      description: "Share your talent! Poetry, music, comedy - all welcome. Sign up starts at 6:30 PM.",
      category: "Community",
      capacity: "Open to All",
    },
  ];

  const pastEvents = [
    {
      title: "Friendship Day Celebration",
      date: "August 2024",
      description: "A memorable evening celebrating friendship with live music, special menu, and games.",
    },
    {
      title: "Independence Day Special",
      date: "August 2024",
      description: "Patriotic music performances and a special Indian fusion menu.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Events</h1>
          <p className="text-xl text-muted-foreground">
            Where music meets memories
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 relative h-96 rounded-2xl overflow-hidden shadow-xl">
          <img
            src={liveMusic}
            alt="Live Music Event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent flex items-end">
            <div className="p-8 text-warm-white">
              <h2 className="text-3xl font-bold mb-2">Live Entertainment</h2>
              <p className="text-lg">Experience unforgettable evenings with us</p>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl">{event.title}</CardTitle>
                    <Badge className="bg-primary text-primary-foreground">{event.category}</Badge>
                  </div>
                  <CardDescription className="text-base">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{event.capacity}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Past Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="border-border bg-secondary/30">
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Event Info */}
        <div className="p-8 bg-primary text-primary-foreground rounded-2xl text-center">
          <Music className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Private Events & Bookings</h3>
          <p className="text-lg mb-4 opacity-90">
            Looking to host a private event? We offer customizable packages for birthdays, 
            corporate events, and special celebrations.
          </p>
          <p className="text-lg opacity-90">
            Contact us to discuss your requirements and make your event memorable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
