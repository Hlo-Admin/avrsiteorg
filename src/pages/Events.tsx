import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mic, Users, Award, Globe } from "lucide-react";
import { useState } from "react";
import AVRSpeaking from "@/assets/book_avr.jpg";

const Events = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    organization: "",
    date: "",
    topic: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:events@aravindh.org?subject=Event Booking Request: ${formData.eventName}&body=Event Name: ${formData.eventName}%0D%0AOrganization: ${formData.organization}%0D%0ADate: ${formData.date}%0D%0ATopic: ${formData.topic}%0D%0AContact Email: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf4ee]">
      <SEO 
        title="Hire Aravindh Ravichandran for Your Event | Keynotes, Workshops & Speaking"
        description="Book Aravindh Ravichandran for keynote speaking, startup panels, workshops, and fireside chats. Available globally for online, hybrid, and in-person events. Topics include startup growth, SaaS scaling, content virality, team building, and entrepreneurial mindset."
        keywords="Aravindh Ravichandran events, keynote speaker, startup mentor speaking, SaaS workshops, event booking, hire speaker, business keynote speaker, startup conference speaker, entrepreneur speaker, SaaS expert speaker, business workshop facilitator, fireside chat host, panel moderator, startup event speaker, business conference speaker USA, tech event speaker, entrepreneurship speaker"
        canonicalUrl="https://aravindh.org/hire-me-for-events"
        ogImage="https://aravindh.org/assets/book_avr.jpg"
        geoLocation={{
          region: "US",
          placename: "United States"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://aravindh.org" },
          { name: "Hire Me for Events", url: "https://aravindh.org/hire-me-for-events" }
        ]}
        faq={[
          {
            question: "What types of events does Aravindh Ravichandran speak at?",
            answer: "AVR speaks at startup conferences, business workshops, tech events, fireside chats, panel discussions, and custom corporate events. Available for online, hybrid, and in-person formats globally."
          },
          {
            question: "What topics does AVR cover in speaking engagements?",
            answer: "Popular topics include startup growth and scaling strategies, SaaS product development, content virality and marketing, building high-performance teams, podcast-style storytelling, and entrepreneurial mindset and resilience."
          },
          {
            question: "How do I book Aravindh Ravichandran for an event?",
            answer: "Fill out the booking request form on this page with your event details, or email directly to events@aravindh.org. Include event name, organization, preferred date, topic, and contact information."
          },
          {
            question: "Is AVR available for international events?",
            answer: "Yes, AVR is available for events globally, including online, hybrid, and in-person formats. Early booking is recommended due to limited availability."
          }
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Event Speaking Services",
            "provider": {
              "@type": "Person",
              "name": "Aravindh Ravichandran",
              "url": "https://aravindh.org"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "offers": {
              "@type": "Offer",
              "description": "Keynote speaking, workshops, panel moderation, and fireside chats"
            }
          }
        ]}
      />
      <Navigation />
      
      <main className="flex-1 pt-12">
        {/* Hero Section */}
        <section className="py-12">
            <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center  text-center md:text-left space-y-8 md:space-y-0 md:space-x-12 animate-fade-in">
              <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold text-[#55185d] leading-tight">
                Hire Aravindh Ravichandran for Your Event
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto md:mx-0 mt-6">
                With proven impact in entrepreneurship, SaaS, and viral media, I deliver events that drive results, inspire teams, and elevate brands.
              </p>
              </div>
              <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
              <img
                src={AVRSpeaking}
                alt="Aravindh Ravichandran speaking at an event"
                className="rounded-xl shadow-lg w-80 object-cover"
              />
              </div>
            </div>
            </div>
        </section>

        {/* Services Section */}
        <section className="py-12 bg-white/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#55185d] text-center mb-12">
              What I Offer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Mic, title: "Keynote Speaking", desc: "Inspiring talks on startup growth and innovation" },
                { icon: Users, title: "Startup Panels", desc: "Expert panel moderation and industry insights" },
                { icon: Award, title: "Fireside Chats", desc: "Intimate conversations on entrepreneurship" },
                { icon: Globe, title: "Custom Workshops", desc: "Growth, teams, and storytelling training" }
              ].map((service, index) => (
                <Card key={index} className="hover:scale-105 transition-all duration-300 bg-white border-[#55185d]/20">
                  <CardContent className="p-6 text-center space-y-4">
                    <service.icon className="h-12 w-12 text-[#55185d] mx-auto" />
                    <h3 className="text-xl font-bold text-[#55185d]">{service.title}</h3>
                    <p className="text-foreground/70">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#55185d] text-center mb-8">
                Popular Topics
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Startup Growth & Scaling Strategies",
                  "SaaS Product Development",
                  "Content Virality & Marketing",
                  "Building High-Performance Teams",
                  "Podcast-Style Storytelling",
                  "Entrepreneurial Mindset & Resilience"
                ].map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white/70 rounded-lg">
                    <div className="w-2 h-2 bg-[#55185d] rounded-full"></div>
                    <span className="text-foreground/80">{topic}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-foreground/70 mt-8">
                Available for online, hybrid, or in-person events (global availability)
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-12 bg-white/50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#55185d] text-center mb-8">
                Request Booking
              </h2>
              <Card className="bg-white border-[#55185d]/20">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="eventName" className="text-[#55185d]">Event Name *</Label>
                      <Input 
                        id="eventName"
                        required
                        value={formData.eventName}
                        onChange={(e) => setFormData({...formData, eventName: e.target.value})}
                        className="mt-2 border-[#55185d]/20 focus:border-[#55185d]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="organization" className="text-[#55185d]">Organization *</Label>
                      <Input 
                        id="organization"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        className="mt-2 border-[#55185d]/20 focus:border-[#55185d]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="date" className="text-[#55185d]">Preferred Date *</Label>
                      <Input 
                        id="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="mt-2 border-[#55185d]/20 focus:border-[#55185d]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="topic" className="text-[#55185d]">Preferred Topic/Theme *</Label>
                      <Textarea 
                        id="topic"
                        required
                        value={formData.topic}
                        onChange={(e) => setFormData({...formData, topic: e.target.value})}
                        className="mt-2 border-[#55185d]/20 focus:border-[#55185d]"
                        rows={4}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#55185d]">Your Email *</Label>
                      <Input 
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="mt-2 border-[#55185d]/20 focus:border-[#55185d]"
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-[#55185d] text-white hover:bg-[#55185d]/90 hover:scale-105 transition-all duration-300 py-6"
                    >
                      Submit Booking Request
                    </Button>
                  </form>
                  <p className="text-center text-sm text-foreground/60 mt-6">
                    Or email directly: <a href="mailto:events@aravindh.org" className="text-[#55185d] underline">events@aravindh.org</a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <p className="text-center text-foreground/70 italic">
              Availability is limited—early booking recommended.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
