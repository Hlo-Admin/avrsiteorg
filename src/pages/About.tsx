import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import portraitImage from "@/assets/avr.jpg";

const About = () => {
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
        title="About Aravindh Ravichandran: Entrepreneur, Advisor & Podcast Host | AVR"
        description="Meet Aravindh Ravichandran (AVR): Serial entrepreneur, startup advisor, SaaS founder behind Rook & Realm by Rook. Host of Startup Stories, Sports29 podcasts. Multidisciplinary Indian entrepreneur, advisor, writer, and podcast creator with deep passion for technology, sports, and social impact."
        keywords="Aravindh Ravichandran, AVR, entrepreneur, startup advisor, SaaS founder, podcast host, Rook, Realm by Rook, Indian entrepreneur, business advisor, tech entrepreneur, startup mentor, podcast creator, business leader, entrepreneur profile, startup consultant, SaaS entrepreneur, business advisor USA, entrepreneur biography, startup founder story"
        canonicalUrl="https://aravindh.org/about"
        ogImage="https://aravindh.org/assets/avr.jpg"
        type="profile"
        geoLocation={{
          region: "US",
          placename: "United States"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://aravindh.org" },
          { name: "About", url: "https://aravindh.org/about" }
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Aravindh Ravichandran",
            "alternateName": "AVR",
            "description": "Serial Entrepreneur, Startup Advisor, SaaS Founder, Podcast Host",
            "url": "https://aravindh.org",
            "image": "https://aravindh.org/assets/avr.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://instagram.com/arav.vr",
              "https://x.com/AravAVR",
              "https://youtube.com/@ardh",
              "https://linkedin.com/in/avra",
              "https://threads.com/arav.vr",
              "https://bsky.app/profile/ardh.bsky.social",
              "https://realmrook.com"
            ],
            "jobTitle": "Founder & CEO",
            "worksFor": {
              "@type": "Organization",
              "name": "Realm by Rook",
              "url": "https://realmrook.com"
            },
            "knowsAbout": [
              "Entrepreneurship",
              "Startup Advisory",
              "SaaS Development",
              "Podcast Production",
              "Business Strategy",
              "Technology",
              "Sports",
              "Social Impact"
            ],
            "award": "Excellence in Finance Startups Award at FiNext Conference 2024"
          }
        ]}
      />
      <Navigation />
      
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="pt-20 pb-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-primary animate-fade-in">
                About Aravindh Ravichandran (AVR)
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Serial Entrepreneur, Startup Advisor, SaaS Founder, Podcast Host
              </p>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto gap-12">
            
            {/* Portrait */}
            <div className="flex-shrink-0 flex justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl animate-pulse-glow"></div>
                <img
                  src={portraitImage}
                  alt="Aravindh Ravichandran - Serial entrepreneur, startup advisor, and podcast host"
                  className="relative rounded-3xl w-80 h-96 object-cover shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Aravindh Ravichandran, known as AVR, is a multidisciplinary Indian entrepreneur, advisor, writer, and podcast creator. With a deep passion for technology, sports, and social impact, Aravindh has helped launch and scale ventures in SaaS, media, and advisory championing growth, automation, and positive change.
              </p>
              <p>
                From founding Rook and its vertical Realm by Rook, to hosting acclaimed digital shows like Startup Stories, Sports29, and AVR x Amrish, Aravindh brings vision, mentorship, and powerful storytelling to every project. His guidance has shaped hundreds of founders, and his voice resonates through the entrepreneurial, athletic, and innovation communities.
              </p>
              <p>
                Outside business, Aravindh leads impact projects through the Aravindh Initiative, promoting blood donation, mentoring up and coming talent, and advancing thought leadership through podcasts and media. His story is one of determination, curiosity, and creating lasting value.
              </p>
            </div>

          </div>
        </div>
        </section>    

        {/* Social Links */}
        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                Connect With Me
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-card border border-border/50 rounded-lg hover:scale-105 hover:shadow-xl hover:border-primary transition-all duration-300"
                  >
                    <div className="p-2 bg-primary rounded-lg">
                      <social.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                Core Values & Mission
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  "Empowering Founders",
                  "Building Automated Futures",
                  "Storytelling with Impact",
                  "Championing Sport, Technology, and Social Good"
                ].map((value, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-card border border-border/50 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-primary">{value}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
