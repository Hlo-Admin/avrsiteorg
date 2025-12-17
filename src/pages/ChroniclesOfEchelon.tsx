import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Compass, Zap, Mountain } from "lucide-react";
import Favicon from "@/assets/chronicles-icon.png"

const ChroniclesOfEchelon = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdf4ee]">
      <SEO 
        title="Chronicles of Echelon | Aravindh Ravichandran - Personal Journey"
        description="Chronicles of Echelon - A commitment to self-improvement, pushing boundaries, and exploring new opportunities with full potential. Follow Aravindh Ravichandran's personal journey of growth, achievement, and continuous improvement."
        keywords="Chronicles of Echelon, Aravindh Ravichandran journey, self-improvement, personal growth, personal development, growth mindset, self-improvement journey, personal transformation, achievement journey, continuous improvement, personal excellence, growth journey USA"
        canonicalUrl="https://aravindh.org/chronicles-of-echelon"
        ogImage="https://aravindh.org/assets/chronicles-icon.png"
        geoLocation={{
          region: "US",
          placename: "United States"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://aravindh.org" },
          { name: "Chronicles of Echelon", url: "https://aravindh.org/chronicles-of-echelon" }
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Chronicles of Echelon",
            "description": "A commitment to self-improvement, pushing boundaries, and exploring new opportunities",
            "url": "https://aravindh.org/chronicles-of-echelon"
          }
        ]}
      />
      <Navigation />
      
      <main className="flex-1 pt-4">
        {/* Hero Section */}
        <section className="pt-24 pb-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              {/* Logo/Icon */}
              <div className="relative group mb-8">
                <div className="absolute inset-0 bg-[#55185d]/20 rounded-full blur-3xl animate-pulse-glow"></div>
                <div className="relative bg-white rounded-full p-4 inline-block shadow-2xl">
                  <img src={Favicon} alt="Icon" className="h-20 w-auto"/>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-[#55185d] leading-tight">
                Chronicles of Echelon
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                This is my commitment to the pursuit of self-improvement. CHRONICLES OF ECHELON is a promise to myself to push boundaries and explore new opportunities with my full potential.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-12 bg-white/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#55185d] text-center mb-12">
              Core Pillars
            </h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { icon: TrendingUp, title: "Growth", desc: "Continuous evolution and development" },
                { icon: Compass, title: "Exploration", desc: "Discovering new paths and possibilities" },
                { icon: Zap, title: "Excellence", desc: "Pursuing mastery in every endeavor" },
                { icon: Mountain, title: "Resilience", desc: "Overcoming challenges with strength" }
              ].map((pillar, index) => (
                <Card 
                  key={index} 
                  className="hover:scale-105 transition-all duration-300 bg-white border-[#55185d]/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <pillar.icon className="h-12 w-12 text-[#55185d] mx-auto" />
                    <h3 className="text-xl font-bold text-[#55185d]">{pillar.title}</h3>
                    <p className="text-foreground/70">{pillar.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#55185d] text-center mb-12">
              Key Milestones
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { year: "2024", title: "Entrepreneurial Evolution", desc: "Scaling ventures and expanding impact globally" },
                { year: "2023", title: "Media Mastery", desc: "Launching multiple successful podcast platforms" },
                { year: "2022", title: "Foundation Building", desc: "Establishing core business infrastructure and vision" },
                { year: "2020", title: "The Beginning", desc: "Committing to the journey of continuous improvement" }
              ].map((milestone, index) => (
                <Card 
                  key={index} 
                  className="hover:scale-105 transition-all duration-300 bg-white border-[#55185d]/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-24 text-3xl font-bold text-[#55185d]">{milestone.year}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#55185d] mb-2">{milestone.title}</h3>
                        <p className="text-foreground/70">{milestone.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Message */}
        <section className="py-12 bg-white/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-2xl md:text-3xl font-bold text-[#55185d] italic">
                "Explore, Learn, Evolve - Welcome to the Chronicles."
              </p>
              <div className="h-1 w-32 bg-[#55185d] mx-auto rounded-full"></div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChroniclesOfEchelon;
