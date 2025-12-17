import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Podcast, Newspaper, Calendar, Heart, Rocket, Award } from "lucide-react";
import rookLinksLogo from "@/assets/rook-links-logo.png";
import AwardImg from "@/assets/finextaward.jpg";
import Spotify from "@/assets/spotify-button.png"
import Amazon from "@/assets/amazon-music-button.png"

const Happenings = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Happenings: News, Podcasts, Events & Impact | Aravindh Ravichandran"
        description="Latest podcast releases, media features, speaking events, social impact projects, and Rook product updates by Aravindh Ravichandran (AVR). Stay updated with news, awards, podcast episodes, speaking engagements, and community initiatives."
        keywords="Aravindh Ravichandran news, AVR podcasts, startup events, social impact, Rook updates, Realm by Rook launches, AVR news, podcast releases, startup events, business news, entrepreneur updates, SaaS news, podcast episodes, speaking events, awards, media features, business updates USA"
        canonicalUrl="https://aravindh.org/happenings"
        ogImage="https://aravindh.org/assets/finextaward.jpg"
        type="website"
        geoLocation={{
          region: "US",
          placename: "United States"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://aravindh.org" },
          { name: "Happenings", url: "https://aravindh.org/happenings" }
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Happenings",
            "description": "Latest news, podcasts, events, and impact updates",
            "url": "https://aravindh.org/happenings"
          }
        ]}
      />
      <Navigation />
      
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="pt-20 pb-12">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-primary text-center mb-6 animate-fade-in">
              Happenings
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 text-center max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Latest updates from podcasts, media, events, and impact initiatives
            </p>
          </div>
        </section>

        {/* Latest Podcast Releases */}
        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-12">
                <Podcast className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-5xl font-bold text-primary">
                  Latest Podcast Releases
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    show: "Sports29 by AVR",
                    episode: "Episode 14: K Strug",
                    description: "Exploring the mental game of elite athletes",
                    date: "Oct 2025",
                    spotifylink : "#",
                    amazonlink : "#"
                  },
                  {
                    show: "Startup Stories: Realm by Rook",
                    episode: "Episode 8: Perplexity Startup Story",
                    description: "Aravind Srinivas & the Answer Engine Revolution",
                    date: "Oct 2025",
                    spotifylink: "https://open.spotify.com/episode/0i1wZqkYsuFx6B2n3cKpLS?si=qZ5d1Y6jTMOwLqcEwdZ7cA",
                    amazonlink: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/a95fd7e1-9cf2-43b6-aaca-7a942a140350/startup-stories-aravindh-ravichandran-perplexity-startup-story-aravind-srinivas-the-answer-engine-revolution"
                  },
                  {
                    show: "AVR x Amrish",
                    episode: "Episode 8: Global Markets",
                    description: "Navigating international expansion strategies",
                    date: "Nov 2025",
                    spotifylink : "#",
                    amazonlink : "#"
                  }
                ].map((podcast, index) => (
                  <Card 
                    key={index}
                    className="hover:scale-105 hover:shadow-xl transition-all duration-300 bg-card border-border/50"
                  >
                    <CardContent className="p-8 space-y-3">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider">{podcast.show}</p>
                      <h3 className="text-xl font-bold text-foreground">{podcast.episode}</h3>
                      <p className="text-muted-foreground">{podcast.description}</p>
                      <p className="text-sm text-foreground/60">{podcast.date}</p>
                      <div className="flex flex-row gap-1.5 justify-center items-center">
                        <a 
                          href={podcast.spotifylink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-300 hover:scale-105 hover:opacity-80 flex items-center"
                          aria-label={`Listen to on Spotify`}
                        >
                          <img 
                            src={Spotify} 
                            alt="Listen on Spotify" 
                            className="h-[52px] w-auto"
                          />
                        </a>
                        
                        <a 
                          href={podcast.amazonlink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-300 hover:scale-105 hover:opacity-80 flex items-center"
                          aria-label={`Listen to  on Amazon Music`}
                        >
                          <img 
                            src={Amazon} 
                            alt="Listen on Amazon Music" 
                            className="h-10 w-auto"
                          />
                        </a>
                      </div>
                    </CardContent>
                    
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  variant="outline"
                  size="lg"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors border-2 border-primary"
                  onClick={() => window.location.href = '/podcasts'}
                >
                  See All Podcasts
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Media & Press */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-12">
                <Newspaper className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-5xl font-bold text-primary">
                  Featured Media & Press Mentions
                </h2>
              </div>

              {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    outlet: "TechCrunch",
                    headline: "Rising SaaS Founders to Watch",
                    date: "Dec 2024"
                  },
                  {
                    outlet: "Inc42",
                    headline: "Podcast Revolution in Startup Ecosystem",
                    date: "Nov 2024"
                  },
                  {
                    outlet: "Forbes India",
                    headline: "Social Impact Meets Entrepreneurship",
                    date: "Oct 2024"
                  },
                  {
                    outlet: "YourStory",
                    headline: "The Future of Vertical SaaS",
                    date: "Sep 2024"
                  },
                  {
                    outlet: "Economic Times",
                    headline: "New Wave of Startup Mentors",
                    date: "Aug 2024"
                  },
                  {
                    outlet: "Business Insider",
                    headline: "Archery Athlete Turned Tech CEO",
                    date: "Jul 2024"
                  }
                ].map((press, index) => (
                  <Card 
                    key={index}
                    className="hover:scale-105 hover:shadow-xl transition-all duration-300 bg-card border-border/50"
                  >
                    <CardContent className="p-6 space-y-2">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider">{press.outlet}</p>
                      <h3 className="text-base font-bold text-foreground">{press.headline}</h3>
                      <p className="text-sm text-muted-foreground">{press.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div> */}

              {/* FiNext Award */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 hover:shadow-2xl transition-all duration-300 max-w-3xl mx-auto">
                <CardContent className="p-8 text-center space-y-4 flex flex-col md:flex-row">
                  <div>
                  <img src={AwardImg} alt="Awarm Image"/>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                  <h3 className="text-2xl font-bold  text-primary">FiNext Award Dubai</h3>
                  <p className="text-lg py-3 font-semibold text-foreground">Innovation in Technology and SaaS</p>
                  <p className="text-muted-foreground pb-4">
                    "AVR was honored with the FiNext Award in Dubai for innovation in technology and SaaS. 
                    A proud moment that reflects our dedication to building tools that matter."
                  </p>

                  <Button 
                    variant="outline"
                    className="border-2 border-primary hover:bg-primary hover:text-primary-foreground w-25"
                    onClick={() => window.open('https://finextcon.com/aravindh-ravichandran-receives-excellence-in-finance-startups-award-at-finext-conference-2024/', '_blank')}
                  >
                    Learn More
                  </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Upcoming Events & Speaking */}
        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-12">
                <Calendar className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-5xl font-bold text-primary">
                  Upcoming Events & Speaking
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    type: "Webinar",
                    title: "Scaling Your First SaaS Product",
                    venue: "Online",
                    date: "Nov 15, 2025"
                  },
                  {
                    type: "Conference",
                    title: "Startup Summit 2026",
                    venue: "Chennai, India",
                    date: "Mar 22, 2026"
                  },
                  {
                    type: "Podcast Interview",
                    title: "Guest on The Founder's Journey",
                    venue: "Online Recording",
                    date: "Feb 28, 2026"
                  },
                  {
                    type: "Workshop",
                    title: "Building Global Startups from India",
                    venue: "Yet To Decided",
                    date: "Yet To Decided"
                  }
                ].map((event, index) => (
                  <Card 
                    key={index}
                    className="hover:scale-105 hover:shadow-xl transition-all duration-300 bg-card border-border/50"
                  >
                    <CardContent className="p-8 space-y-3">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider">{event.type}</p>
                      <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                      <p className="text-muted-foreground">{event.venue}</p>
                      <p className="text-sm font-semibold text-foreground/80">{event.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Impact */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-12">
                <Heart className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-5xl font-bold text-primary">
                  Social Impact: Aravindh Initiative
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  {
                    title: "Blood Drive Campaign 2025",
                    description: "Organized community blood donation drives across 5 cities, collecting 500+ units to support local hospitals and emergency services.",
                    impact: "500+ lives potentially saved",
                    date: "Jan 2025"
                  },
                  {
                    title: "Startup Mentorship Program",
                    description: "Free 1-on-1 mentorship for underrepresented founders, providing guidance on fundraising, product development, and growth strategies.",
                    impact: "50+ founders mentored",
                    date: "Ongoing"
                  },
                  {
                    title: "Education Initiative",
                    description: "Providing free entrepreneurship workshops and resources to students in tier-2 and tier-3 cities across India.",
                    impact: "1000+ students reached",
                    date: "Dec 2024"
                  },
                  {
                    title: "Community Tech Support",
                    description: "Building open-source tools and resources for small businesses to adopt technology and automation without high costs.",
                    impact: "200+ businesses supported",
                    date: "Ongoing"
                  }
                ].map((initiative, index) => (
                  <Card 
                    key={index}
                    className="hover:scale-105 hover:shadow-xl transition-all duration-300 bg-card border-border/50"
                  >
                    <CardContent className="p-8 space-y-4">
                      <h3 className="text-xl font-bold text-primary">{initiative.title}</h3>
                      <p className="text-foreground/80">{initiative.description}</p>
                      <div className="flex justify-between items-center pt-4 border-t border-border/30">
                        <p className="text-sm font-semibold text-primary">{initiative.impact}</p>
                        <p className="text-sm text-muted-foreground">{initiative.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Updates */}
        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-12">
                <Rocket className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-5xl font-bold text-primary">
                  Product Updates & Launches
                </h2>
              </div>

              {/* Rook Links Announcement */}
              {/* <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 hover:shadow-2xl transition-all duration-300 mb-8">
                <CardContent className="p-8 md:p-12 space-y-6">
                  <div className="flex items-center justify-center mb-4">
                    <img 
                      src={rookLinksLogo} 
                      alt="Rook Links Logo" 
                      className="h-16 md:h-20 w-auto"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary text-center">
                    Coming Soon
                  </h3>
                  <div className="space-y-4 text-foreground/80 leading-relaxed text-center">
                    <p className="text-lg md:text-xl font-semibold">
                      Turn Your Instagram Grid Into a Visual Link Hub
                    </p>
                    <p>
                      Create clickable, shoppable, trackable Instagram tiles, with pixel-perfect polish.
                    </p>
                    <p className="font-semibold text-primary pt-4">
                      For early updates, visit:{" "}
                      <a 
                        href="https://links.rookhq.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline hover:text-primary/80 transition-colors"
                      >
                        links.rookhq.com
                      </a>
                      {" "}(Coming Soon)
                    </p>
                  </div>
                </CardContent>
              </Card> */}

              <div className="space-y-6">
                {[
                  {
                    product: "Rook Platform",
                    update: "Rook Links",
                    description: "Turn Your Instagram Grid Into a Visual Link Hub. Create clickable, shoppable, trackable Instagram tiles, with pixel-perfect polish. For early updates, visit: links.rookhq.com (Coming Soon)",
                    date: "Oct 2025"
                  }
                ].map((update, index) => (
                  <Card 
                    key={index}
                    className="hover:scale-102 hover:shadow-xl transition-all duration-300 bg-card border-border/50"
                  >
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider">{update.product}</p>
                          <h3 className="text-xl font-bold text-foreground">{update.update}</h3>
                          <p className="text-muted-foreground">{update.description}</p>
                        </div>
                        <div className="text-sm text-foreground/60 md:text-right">
                          {update.date}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button 
                  size="lg"
                  className="px-8 py-6 text-base hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => window.location.href = '/venture'}
                >
                  Explore Our Ventures
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Happenings;
