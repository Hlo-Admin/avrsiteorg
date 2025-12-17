import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Mic, Building2, Award } from "lucide-react";
import portraitImage from "@/assets/AVR_3.png";
import rookLogo from "@/assets/rook-logo.png";
import realmLogo from "@/assets/realm-logo.png";
import podcastThumb1 from "@/assets/podcast-thumb-1.png";
import podcastThumb2 from "@/assets/podcast-thumb-2.png";
import podcastThumb3 from "@/assets/podcast-thumb-3.png";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import Avr from "@/assets/AVR_speaking.png";
const Home = () => {
   const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/arav.vr",
      icon: Instagram
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/AravAVR",
      icon: Twitter
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@ardh",
      icon: Youtube
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/avra",
      icon: Linkedin
    },
    {
      name: "Threads",
      url: "https://threads.com/arav.vr",
      icon: Instagram
    },
    {
      name: "Bluesky",
      url: "https://bsky.app/profile/ardh.bsky.social",
      icon: Twitter
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Aravindh Ravichandran: Startup Advisor, SaaS Founder, Podcast Host | Realm by Rook"
        description="Book startup mentoring, listen to top podcasts, and discover robust SaaS tools by Realm by Rook founder Aravindh Ravichandran. Transform your venture today. Serial entrepreneur, global advisor, SaaS founder, and podcast host helping ambitious founders launch, grow, and transform ventures with clarity, speed, and smart execution."
        keywords="Aravindh Ravichandran, AVR, startup advisor, SaaS founder, podcast host, entrepreneur, Rook, Realm by Rook, business automation, startup mentoring, startup consultant, business advisor, SaaS entrepreneur, podcast creator, startup stories, sports29, business growth, venture capital, startup funding, entrepreneurship, business strategy, digital transformation, tech entrepreneur, founder coach, startup mentor, business advisor USA, entrepreneur consultant, startup advisor United States"
        canonicalUrl="https://aravindh.org"
        ogImage="https://aravindh.org/assets/AVR_3.png"
        geoLocation={{
          region: "US",
          placename: "United States",
          position: "40.7128;-74.0060"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://aravindh.org" }
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Aravindh Ravichandran",
            "alternateName": "AVR",
            "url": "https://aravindh.org",
            "image": "https://aravindh.org/assets/AVR_3.png",
            "jobTitle": "Founder & CEO",
            "description": "Serial entrepreneur, startup advisor, SaaS founder, and podcast host",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Realm by Rook",
              "url": "https://realmrook.com"
            },
            "sameAs": [
              "https://x.com/AravAVR",
              "https://instagram.com/arav.vr",
              "https://youtube.com/@ardh",
              "https://linkedin.com/in/avra",
              "https://threads.com/arav.vr",
              "https://bsky.app/profile/ardh.bsky.social",
              "https://realmrook.com"
            ],
            "knowsAbout": [
              "Startup Advisory",
              "SaaS Development",
              "Podcast Production",
              "Business Strategy",
              "Entrepreneurship",
              "Venture Building"
            ],
            "award": "Excellence in Finance Startups Award at FiNext Conference 2024",
            "alumniOf": {
              "@type": "Organization",
              "name": "Realm by Rook"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Aravindh Ravichandran - Startup Advisory Services",
            "description": "Professional startup advisory and mentoring services",
            "url": "https://aravindh.org",
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "serviceType": [
              "Startup Advisory",
              "Business Mentoring",
              "SaaS Consulting",
              "Podcast Hosting",
              "Event Speaking"
            ]
          }
        ]}
      />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 animate-gradient pointer-events-none"></div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-6 md:space-y-8 animate-fade-in text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight">
                  Build, Scale, Win With Aravindh Ravichandran
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
                  Serial entrepreneur, global advisor, SaaS founder, and podcast host. I help ambitious founders launch, grow, and transform ventures with clarity, speed, and smart execution.
                </p>
                <div className="pt-2 md:pt-4">
                  <Button 
                    size="lg" 
                    className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 bg-primary text-primary-foreground hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-glow-intense hover-glow-intense w-full sm:w-auto"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Book Your Startup Advisory Call
                  </Button>
                </div>
                {/* Social Proof */}
                <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-foreground/70 pt-2 md:pt-4 justify-center md:justify-start">
                  <span className="flex items-center gap-1">✓ <span>Trusted by 100+ founders</span></span>
                  <span className="flex items-center gap-1">✓ <span>Featured on 22+ podcasts</span></span>
                  <span className="flex items-center gap-1">✓ <span>CEO of Rook</span></span>
                </div>
              </div>

              {/* Right: Portrait with VFX */}
              <div className="relative animate-fade-in pt-8 md:pt-0 order-first md:order-last" style={{ animationDelay: '0.2s' }}>
                <div className="relative group">
                  {/* Enhanced VFX Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 rounded-full blur-3xl animate-pulse-glow group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl animate-gradient"></div>
                  
                  {/* Portrait Image */}
                  <div className="relative float-subtle">
                    <img 
                      src={portraitImage} 
                      alt="Aravindh Ravichandran - Serial entrepreneur and startup advisor" 
                      className="relative rounded-2xl w-full max-w-md mx-auto shadow-2xl hover:shadow-glow-intense transition-all duration-500 hover:scale-[1.02] hover-lift-strong"
                    />
                    {/* Shimmer overlay */}
                    <div className="absolute inset-0 rounded-2xl shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-12 sm:py-16 border-y border-border/30 glass">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {[
                { icon: Users, label: "100+ founders advised", color: "text-primary" },
                { icon: Mic, label: "22+ successful podcast shows", color: "text-primary" },
                { icon: Building2, label: "Founder, CEO of Rook", color: "text-primary" },
                { icon: Award, label: "Award Winning Entrepreneur", color: "text-primary" },
              ].map((metric, index) => {
                const [ref, isVisible] = useScrollReveal(0.1);
                return (
                  <div 
                    key={index} 
                    ref={ref}
                    className={`flex flex-col items-center text-center space-y-3 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    } hover:scale-110 hover-glow`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300 animate-glow-pulse">
                      <metric.icon className={`h-8 w-8 sm:h-10 sm:w-10 ${metric.color} transition-transform duration-300 group-hover:scale-110`} />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base font-medium text-foreground/80 leading-tight">{metric.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Podcast Shows */}
        <section className="py-16 sm:py-20 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold gradient-text text-center mb-12 sm:mb-16 animate-fade-in">
              Discover My Podcast Shows
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Startup Stories: Realm by Rook",
                  description: "Transformative journeys and lessons from the world of founders, innovators, and scaling startups.",
                  link: "https://realmrook.com/podcasts",
                  thumbnail: podcastThumb1
                },
                {
                  title: "Sports29 by AVR",
                  description: "Untold athlete origins, grit, and victory. Where sport meets story.",
                  link: "https://sports29.aravindh.org",
                  thumbnail: podcastThumb2
                },
                {
                  title: "AVR x Amrish",
                  description: "Unfiltered conversations on entrepreneurship, mindset, and global perspectives.",
                  link: "https://instagram.com/arav.vr",
                  thumbnail: podcastThumb3
                },
              ].map((show, index) => {
                const [ref, isVisible] = useScrollReveal(0.1);
                return (
                  <Card 
                    key={index} 
                    ref={ref}
                    className={`glass hover-lift-strong transition-all duration-500 border-border/30 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 0.15}s` }}
                  >
                    <CardContent className="p-6 sm:p-8 space-y-4">
                      {/* Podcast Thumbnail */}
                      <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 group relative">
                        <img 
                          src={show.thumbnail} 
                          alt={`${show.title} podcast cover`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-primary">{show.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{show.description}</p>
                      <Button 
                        variant="outline" 
                        className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-2 hover:border-primary hover:scale-105 active:scale-95"
                        onClick={() => window.open(show.link, '_blank')}
                      >
                        Listen Now
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Venture Spotlight */}
        <section className="py-16 sm:py-20 glass relative">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold gradient-text text-center mb-12 sm:mb-16 animate-fade-in">
              My Ventures
            </h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {[
                {
                  logo: rookLogo,
                  alt: "Rook",
                  description: "We craft focused SaaS products that empower creators, freelancers, and founders to get more done with less.",
                  link: "https://rookhq.com",
                  label: "Visit Rook"
                },
                {
                  logo: realmLogo,
                  alt: "Realm by Rook",
                  description: "At Realm by Rook, we blend creativity and technology to build experiences that inspire action.",
                  link: "https://realmrook.com",
                  label: "Visit Realm by Rook"
                }
              ].map((venture, index) => {
                const [ref, isVisible] = useScrollReveal(0.1);
                return (
                  <Card 
                    key={index}
                    ref={ref}
                    className={`glass-strong hover-lift-strong transition-all duration-500 border-border/30 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="p-6 sm:p-8 space-y-4 text-center">
                      <div className="flex justify-center mb-4">
                        <img 
                          src={venture.logo} 
                          alt={venture.alt} 
                          className="h-12 sm:h-16 w-auto transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {venture.description}
                      </p>
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-2 border-primary hover:border-primary hover:scale-105 active:scale-95 hover-glow"
                        onClick={() => window.open(venture.link, '_blank')}
                      >
                        {venture.label}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Book Me for Your Event */}
        <section className="py-16 sm:py-20 bg-[#fdf4ee] relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-6 sm:space-y-8 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6">
                  Book Aravindh Ravichandran for Your Event
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
                  Inspirational startup mentor, podcast host, and SaaS entrepreneur. Available for keynote talks, panel moderation, fireside chats, and growth workshops.
                </p>
                <div className="grid md:grid-cols-1 gap-4 sm:gap-6 my-8 sm:my-12 text-left">
                  {[
                    "Keynotes on startup growth, SaaS scaling, and content virality",
                    "Podcast-style storytelling for events",
                    "Workshops for founders, teams, and creators"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <div className="text-sm sm:text-base text-[#55185d] font-semibold">{item}</div>
                    </div>
                  ))}
                </div>
                <Button 
                  size="lg" 
                  className="bg-[#55185d] text-white hover:bg-[#55185d]/90 hover:scale-105 active:scale-95 transition-all duration-300 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base shadow-lg hover:shadow-glow-intense hover-glow-intense w-full sm:w-auto"
                  onClick={() => window.location.href = '/hire-me-for-events'}
                >
                  View Full Profile & Book an Event
                </Button>
              </div>
              {/* Right: Image */}
              <div className="flex justify-center md:justify-end pt-8 md:pt-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
                  <img 
                    src={Avr} 
                    alt="Aravindh Ravichandran speaking at an event" 
                    className="relative rounded-2xl w-full max-w-xs shadow-2xl hover:shadow-glow-intense transition-all duration-500 hover:scale-[1.02] hover-lift-strong"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Happenings Preview */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold gradient-text text-center mb-12 sm:mb-16 animate-fade-in">
              Latest Happenings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-8 sm:mb-12">
              {[
                { type: "Podcast", title: "New Episode: Sports29", date: "Oct 2025" },
                { type: "Media", title: "Featured in Finext Award", date: "Feb 2024" },
                { type: "Speaking", title: "Startup Summit 2024", date: "Jan 2026" },
                { type: "Impact", title: "Community Initiative Launch", date: "May 2026" },
              ].map((happening, index) => {
                const [ref, isVisible] = useScrollReveal(0.1);
                return (
                  <Card 
                    key={index}
                    ref={ref}
                    className={`glass hover-lift transition-all duration-500 border-border/30 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4 sm:p-6 space-y-2">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider">{happening.type}</p>
                      <h3 className="text-sm sm:text-base font-bold text-foreground">{happening.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{happening.date}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="text-center">
              <Button 
                variant="outline"
                size="lg"
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-2 border-primary hover:scale-105 active:scale-95 hover-glow"
                onClick={() => window.location.href = '/happenings'}
              >
                See All Happenings
              </Button>
            </div>
          </div>
        </section>


          {/* Social Links */}
        <section className="py-16 sm:py-20 glass relative">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text text-center mb-8 sm:mb-12 animate-fade-in">
                Connect With Me
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {socialLinks.map((social, index) => {
                  const [ref, isVisible] = useScrollReveal(0.1);
                  return (
                    <div
                      key={index}
                      ref={ref}
                      className={`transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 glass-strong rounded-lg hover-lift-strong transition-all duration-500 border-border/30"
                      >
                        <div className="p-2 bg-primary rounded-lg transition-transform duration-300 group-hover:scale-110">
                          <social.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{social.name}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

  

      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
