import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Target, Zap, Shield, Users, TrendingUp, User, Award, Lightbulb, Handshake } from "lucide-react";
import rookLogo from "@/assets/rook-logo.png";
import realmLogo from "@/assets/realm-logo.png";

const Venture = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="My Ventures: Rook & Realm by Rook | Business Automation SaaS | AVR"
        description="Explore Rook's frictionless SaaS for modern businesses and Realm by Rook's custom growth solutions for legal, media, and marketing industries. Built by Aravindh Ravichandran. Discover innovative business automation tools, no-code platforms, and startup solutions designed to empower creators, freelancers, and founders."
        keywords="Rook, Realm by Rook, SaaS, business automation, no-code platform, startup tools, Aravindh Ravichandran, AVR, business software, automation tools, SaaS platform, startup software, business tools, no-code tools, business automation software USA, startup automation, creator tools, freelancer tools, business productivity software"
        canonicalUrl="https://aravindh.org/venture"
        ogImage="https://aravindh.org/assets/rook-logo.png"
        geoLocation={{
          region: "US",
          placename: "United States"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://aravindh.org" },
          { name: "Venture", url: "https://aravindh.org/venture" }
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Rook",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              url: "https://rookhq.com"
            },
            creator: {
              "@type": "Person",
              name: "Aravindh Ravichandran",
              url: "https://aravindh.org"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Realm by Rook",
            url: "https://realmrook.com",
            founder: {
              "@type": "Person",
              name: "Aravindh Ravichandran",
              url: "https://aravindh.org"
            },
            description: "Custom growth solutions for legal, media, and marketing industries"
          }
        ]}
      />
      <Navigation />

      <main className="flex-1 pt-16">
        {/* Page Header */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-primary text-center mb-6 animate-fade-in">
              My Ventures
            </h1>
            <p
              className="text-lg md:text-xl text-foreground/70 text-center max-w-3xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Building the future of business automation and vertical SaaS solutions
            </p>
          </div>
        </section>

        {/* Rook Section */}
        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <img src={rookLogo} alt="Rook" className="h-20 w-auto mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Simple Tools. Monumental Impact.</h2>
                <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                  We craft focused SaaS products that empower creators, freelancers, and founders to get more done with
                  less.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: User,
                    title: "People First",
                    description: "We put people first building products with empathy and care.",
                  },
                  {
                    icon: Award,
                    title: "Excellence",
                    description: "We take pride in our craft, striving for excellence in every detail.",
                  },
                  {
                    icon: Zap,
                    title: "Sustainability",
                    description: "We build for lasting impact on people and the planet.",
                  },
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className="hover:scale-105 hover:shadow-xl transition-all duration-300 bg-card border-border/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8 space-y-4 text-center">
                      <feature.icon className="h-12 w-12 text-primary mx-auto" />
                      <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="px-8 py-6 text-base hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => window.open("https://rookhq.com", "_blank")}
                >
                  Visit Rook
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Realm by Rook Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <img src={realmLogo} alt="Realm by Rook" className="h-20 w-auto mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Become A Top 1% Brand.</h2>
                <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                  At Realm by Rook, we blend creativity and technology to build experiences that inspire action.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: Target,
                    title: "Driven by Results",
                    description: "We deliver measurable growth and real impact.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Innovation in Action",
                    description: "We turn ideas into powerful solutions.",
                  },
                  {
                    icon: Handshake,
                    title: "Partnership that Matters",
                    description: "We build trust and long term value.",
                  },
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className="hover:scale-105 hover:shadow-xl transition-all duration-300 bg-card border-border/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8 space-y-4 text-center">
                      <feature.icon className="h-12 w-12 text-primary mx-auto" />
                      <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
                <Button
                  size="lg"
                  className="px-8 py-6 text-base hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => window.open("https://realmrook.com", "_blank")}
                >
                  Visit Realm by Rook
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision Section */}
        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-primary">Future Vision & Growth</h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Driving innovation through smart technology, scalable solutions, and a commitment to deliver value
                faster and better.
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-primary">Innovation at Core</p>
                  <p className="text-muted-foreground">Constantly refining our products and services to stay ahead.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-primary">Customer-First Approach</p>
                  <p className="text-muted-foreground">Guided by real feedback to deliver meaningful results.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-primary">Built for Professionals</p>
                  <p className="text-muted-foreground">Crafted by experts who understand what businesses truly need.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Preview */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  quote:
                    "Working with this team was a seamless experience. They understood our vision and delivered a sleek, high-converting landing page that perfectly represents our brand. The custom SaaS tool they built has significantly improved our internal processes and made student onboarding much easier. Highly professional, responsive, and results-driven!",
                  author: "Ashwin",
                  role: "Founder, ICM",
                },
                {
                  quote:
                    "We wanted a clean, modern Shopify store to showcase our products, and they delivered exactly what we needed. The website is fast, visually appealing, and user-friendly. Their team was supportive throughout the project and quick to address our feedback. Thanks for making our online store a success!",
                  author: "Gowri Shankar",
                  role: "CEO, ZGuard",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="hover:scale-105 hover:shadow-xl transition-all duration-300 bg-card border-border/50"
                >
                  <CardContent className="p-8 space-y-4">
                    <p className="text-lg text-foreground/80 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Venture;
