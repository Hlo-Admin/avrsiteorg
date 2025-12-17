import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Mail, Star } from "lucide-react";

const Books = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdf4ee]">
      <SEO 
        title="Love He Never Told | Debut Novel by Aravindh Ravichandran"
        description="Request an advance review copy of 'Love He Never Told' - a debut novel by Aravindh Ravichandran exploring untold emotions and journeys. Limited pre-release slots available for handpicked readers. Discover AVR's literary debut and upcoming publication."
        keywords="Love He Never Told, Aravindh Ravichandran book, debut novel, advance review copy, AVR book, new novel, upcoming book, debut author, literary fiction, book review copy, novel pre-release, author debut, new book release, debut novel USA"
        canonicalUrl="https://aravindh.org/books"
        ogImage="https://aravindh.org/assets/book_avr.jpg"
        geoLocation={{
          region: "US",
          placename: "United States"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://aravindh.org" },
          { name: "Books", url: "https://aravindh.org/books" }
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Book",
            "name": "Love He Never Told",
            "author": {
              "@type": "Person",
              "name": "Aravindh Ravichandran",
              "url": "https://aravindh.org"
            },
            "bookFormat": "https://schema.org/Hardcover",
            "description": "A debut novel exploring untold emotions and journeys",
            "publisher": {
              "@type": "Organization",
              "name": "Aravindh Initiative"
            }
          }
        ]}
      />
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="pt-20 pb-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <BookOpen className="h-20 w-20 text-[#55185d] mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-[#55185d] leading-tight">
                Love He Never Told
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                Debut novel coming soon
              </p>
            </div>
          </div>
        </section>

        {/* Book Description */}
        <section className="py-12 bg-white/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <Card className="bg-white border-[#55185d]/20">
                <CardContent className="p-12 space-y-6 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#55185d]">
                    About the Book
                  </h2>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    This book explores untold emotions and journeys. Request an advance review copy before official release (limited slots, handpicked readers only).
                  </p>
                  <div className="flex items-center justify-center gap-2 text-[#55185d] pt-4">
                    <Star className="h-5 w-5 fill-[#55185d]" />
                    <Star className="h-5 w-5 fill-[#55185d]" />
                    <Star className="h-5 w-5 fill-[#55185d]" />
                    <Star className="h-5 w-5 fill-[#55185d]" />
                    <Star className="h-5 w-5 fill-[#55185d]" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Request Review Copy */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#55185d]">
                Request an Advance Review Copy
              </h2>
              <Card className="bg-white/70 border-[#55185d]/20">
                <CardContent className="p-8 space-y-6">
                  <Mail className="h-16 w-16 text-[#55185d] mx-auto" />
                  <p className="text-foreground/70">
                    Pre-release reviews are limited. We hand-select readers for feedback prior to launch.
                  </p>
                  <Button 
                    size="lg"
                    className="w-full bg-[#55185d] text-white hover:bg-[#55185d]/90 hover:scale-105 transition-all duration-300 py-6"
                    onClick={() => window.location.href = 'mailto:avr@aravindh.org?subject=Review Copy Request: Love He Never Told&body=I would like to request an advance review copy of "Love He Never Told"'}
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Request Review Copy
                  </Button>
                  <p className="text-sm text-foreground/60">
                    Email: <a href="mailto:avr@aravindh.org" className="text-[#55185d] underline">avr@aravindh.org</a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sign Up for Updates */}
        <section className="py-12 bg-white/50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#55185d]">
                Stay Updated
              </h2>
              <p className="text-foreground/70">
                Sign up for updates about publication and upcoming works.
              </p>
              <Button 
                variant="outline"
                className="border-2 border-[#55185d] text-[#55185d] hover:bg-[#55185d] hover:text-white transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Books;
