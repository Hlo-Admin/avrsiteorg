import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Youtube, Instagram, Target, Award, Star, Edit3, Medal} from "lucide-react";

import V1 from "@/assets/archery/5.png";
import V2 from "@/assets/archery/6.png";

import Reel1 from "@/assets/archery/1.png";
import Reel2 from "@/assets/archery/2.png";
import Reel3 from "@/assets/archery/3.png";

const Archery = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdf4ee]">
      <SEO 
        title="Archery Journey | Aravindh Ravichandran - Competitive Recurve Archer"
        description="Follow my competitive recurve archery journey. Training, competitions, technique, and mindset on YouTube and Instagram. Discover archery training tips, competition insights, and the mental game of competitive archery from a dedicated recurve archer."
        keywords="Aravindh Ravichandran archery, recurve archery, competitive archer, archery training, archery journey, recurve bow, archery technique, competitive archery, archery competitions, archery training tips, archery mindset, archery YouTube, archery Instagram, archery athlete, archery USA, competitive archery training"
        canonicalUrl="https://aravindh.org/archery"
        ogImage="https://aravindh.org/assets/archery/1.png"
        geoLocation={{
          region: "US",
          placename: "United States"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://aravindh.org" },
          { name: "Archery", url: "https://aravindh.org/archery" }
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "SportsActivity",
            "name": "Competitive Recurve Archery",
            "sport": "Archery",
            "participant": {
              "@type": "Person",
              "name": "Aravindh Ravichandran",
              "url": "https://aravindh.org"
            }
          }
        ]}
      />
      <Navigation />
      
      <main className="flex-1 pt-12">
        {/* Hero Section */}
        <section className="pt-20 pb-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <Target className="h-20 w-20 text-[#55185d] mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-[#55185d] leading-tight">
                My Archery Journey
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                I am a competitive recurve archer sharing my journey, technique, and victories.
              </p>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Follow my archery adventure for real progress and mindset on YouTube and Instagram.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-12 bg-white/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#55185d] text-center mb-12">
                Training Philosophy
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Edit3, title: "Precision", desc: "Every arrow is a lesson in focus and control" },
                  { icon: Star, title: "Perseverance", desc: "Consistent practice builds championship mindset" },
                  { icon: Medal, title: "Excellence", desc: "Pursuit of mastery in every shot" }
                ].map((item, index) => (
                  <Card key={index} className="hover:scale-105 transition-all duration-300 bg-white border-[#55185d]/20">
                    <CardContent className="p-6 text-center space-y-4">
                      <item.icon className="h-12 w-12 text-[#55185d] mx-auto" />
                      <h3 className="text-xl font-bold text-[#55185d]">{item.title}</h3>
                      <p className="text-foreground/70">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#55185d] text-center mb-12">
                Latest from YouTube & Instagram
              </h2>
              
              {/* YouTube Section */}
              <div className="mb-12">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Youtube className="h-8 w-8 text-[#55185d]" />
                  <h3 className="text-2xl font-bold text-[#55185d]">Recent Videos</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                    {
                      id: 1,
                      title: "Can You Hit 6 Tiny Targets in a Row? | Archery Precision Challenge",
                      description: "Latest archery training and competition footage",
                      thumbnail: V1,
                      url: "https://www.youtube.com/watch?v=25bK790z5Wc"
                    },
                    {
                      id: 2,
                      title: "Day 1 to Day 3 of My Olympic Dream | The First Step on the Archery Field!",
                      description: "Highlights from recent tournaments and events",
                      thumbnail: V2,
                      url: "https://www.youtube.com/watch?v=rspoGRHidLM"
                    }
                    ].map((video) => (
                    <Card key={video.id} className="bg-white border-[#55185d]/20 hover:scale-105 transition-all duration-300">
                      <CardContent className="p-6">
                        <a onClick={() => window.open(video.url, "_blank")}>

                        
                      <div
                        className="aspect-video bg-gradient-to-br from-[#55185d]/10 to-[#55185d]/5 rounded-lg flex items-center justify-center mb-4 cursor-pointer"
                        
                      >
                        <img src={video.thumbnail} alt={video.title} className="h-full w-full object-cover rounded-lg" />
                      </div>
                      <h4 className="text-lg font-bold text-[#55185d] text-center mb-2">{video.title}</h4>
                      </a>
                      {/* <p className="text-center text-foreground/70">{video.description}</p> */}
                      </CardContent>
                    </Card>
                    ))}
                </div>
                <div className="text-center mt-6">
                  <Button 
                    className="bg-[#55185d] text-white hover:bg-[#55185d]/90 hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('https://youtube.com/@arvd', '_blank')}
                  >
                    <Youtube className="h-5 w-5 mr-2" />
                    Subscribe on YouTube
                  </Button>
                </div>
              </div>

              {/* Instagram Section */}
              <div>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Instagram className="h-8 w-8 text-[#55185d]" />
                  <h3 className="text-2xl font-bold text-[#55185d]">Recent Posts</h3>
                </div>
               <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
                {[
                  { id: 1, url: "https://www.instagram.com/reel/DL7r8D5z2ye/", thumb: Reel1 },
                  { id: 2, url: "https://www.instagram.com/reel/DO-_0WeE7OQ/", thumb: Reel3 },
                  { id: 3, url: "https://www.instagram.com/p/DCElXR2zHzP/", thumb: Reel2 },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative mb-4 w-60 aspect-[9/16] rounded-lg overflow-hidden border hover:scale-105 transition-all duration-300">
                      <img
                        src={item.thumb}
                        alt={`Instagram Reel ${item.id}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Optional Instagram icon overlay */}
                      <div className="absolute top-2 right-2 bg-white/70 rounded-full p-1">
                        <Instagram className="h-6 w-6 text-[#55185d]" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
                <div className="text-center mt-6">
                  <Button 
                    className="bg-[#55185d] text-white hover:bg-[#55185d]/90 hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('https://instagram.com/arav.vr', '_blank')}
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    Follow on Instagram
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Message */}
        <section className="py-12 bg-white/50">
          <div className="container mx-auto px-6">
            <p className="text-center text-lg text-foreground/70 italic max-w-2xl mx-auto">
              "Join me in the pursuit of precision, perseverance, and excellence."
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Archery;
