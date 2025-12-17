import { Instagram, Youtube, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import avrImage from "@/assets/AVR_3.png";
import xLogoWhite from "@/assets/x-logo-white.png";

const Host = () => {
  const socialLinks = [
    { 
      icon: Instagram, 
      url: "https://instagram.com/aravavr",
      label: "Instagram",
      color: "hover:bg-pink-500/10"
    },
    { 
      type: "image",
      image: xLogoWhite,
      url: "https://x.com/AravAVR",
      label: "X",
      color: "hover:bg-foreground/10"
    },
    { 
      icon: Youtube, 
      url: "https://youtube.com/@Arvd",
      label: "YouTube",
      color: "hover:bg-red-500/10"
    },
    { 
      icon: Linkedin, 
      url: "https://linkedin.com/in/avra",
      label: "LinkedIn",
      color: "hover:bg-blue-500/10"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/95">
      <SEO 
        title="Meet the Host - Aravindh Ravichandran (AVR) | Sports29"
        description="Learn about Aravindh Ravichandran (AVR), archer, entrepreneur, writer, and humanitarian. Host of Sports29 podcast series and founder of Rook. Visionary serial entrepreneur, tech product leader, and philanthropist championing transformative social causes."
        keywords="Aravindh Ravichandran, AVR, Sports29 host, entrepreneur, archer, Rook founder, humanitarian, podcast host, startup founder, serial entrepreneur, tech entrepreneur, philanthropist, business leader, entrepreneur profile, startup advisor, SaaS founder, humanitarian work, entrepreneur USA"
        canonicalUrl="https://aravindh.org/host"
        ogImage="https://aravindh.org/assets/AVR_3.png"
        geoLocation={{
          region: "US",
          placename: "United States"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://aravindh.org" },
          { name: "Host", url: "https://aravindh.org/host" }
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Aravindh Ravichandran",
            "alternateName": "AVR",
            "description": "Archer, entrepreneur, writer, and humanitarian. Host of Sports29 podcast series and founder of Rook.",
            "url": "https://aravindh.org",
            "image": "https://aravindh.org/assets/AVR_3.png",
            "jobTitle": "Founder & CEO",
            "award": "Excellence in Finance Startups Award at FiNext Conference 2024",
            "knowsAbout": [
              "Entrepreneurship",
              "Archery",
              "Podcast Hosting",
              "Philanthropy",
              "SaaS Development",
              "Business Strategy"
            ]
          }
        ]}
      />
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24 pt-32">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section with Profile */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-8 relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-1 ring-border/20 mx-auto">
                <img 
                  src={avrImage} 
                  alt="Aravindh Ravichandran" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Aravindh Ravichandran
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light mb-2">
              AVR
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80">
              Archer · Entrepreneur · Writer · Humanitarian
            </p>
          </div>

          {/* Bio Section - Clean Grid */}
          <section className="mb-20 space-y-6 max-w-3xl mx-auto">
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:border-border/40 transition-all duration-300">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                Aravindh Ravichandran is a visionary serial entrepreneur, tech product leader, and founder of Rook, renowned for building innovative digital solutions and SaaS tools.
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:border-border/40 transition-all duration-300">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                Beyond entrepreneurship, Aravindh is also recognized for philanthropy, notably through the Aravindh Initiative, which champions transformative social causes like blood donation.
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:border-border/40 transition-all duration-300">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                He has received multiple honors, including the Excellence in Finance Startups Award at FiNext Conference 2024 in Dubai, and continues to advocate for innovation, collaboration, and positive change across industries.
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:border-border/40 transition-all duration-300">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                His ethos combines relentless curiosity, a commitment to authentic impact, and a belief in building ventures that leave lasting legacies for future generations.
              </p>
            </div>
          </section>

          {/* Social Media Section - Minimalist */}
          <section className="max-w-xl mx-auto">
            <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-10 border border-border/20">
              <h2 className="text-center text-2xl font-semibold text-foreground mb-8">
                Connect
              </h2>
              <div className="flex justify-center items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 rounded-xl border border-border/20 hover:border-border/40 transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.type === "image" ? (
                      <img 
                        src={social.image} 
                        alt={social.label}
                        className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    ) : (
                      <social.icon 
                        className="w-6 h-6 text-foreground/70 group-hover:text-foreground transition-colors" 
                      />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Host;
