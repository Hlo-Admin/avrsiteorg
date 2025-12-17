import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Legal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Legal Information & Copyright | Sports29 by AVR"
        description="Legal information, copyright details, and rights inquiries for Sports29 by AVR podcast series and Aravindh Initiative content. Contact us for licensing, permissions, and takedown requests. All content is protected by copyright under applicable law."
        keywords="Sports29 legal, copyright, podcast rights, Aravindh Initiative, legal information, copyright notice, content rights, podcast copyright, intellectual property, content licensing, rights inquiries, takedown requests, copyright protection USA"
        canonicalUrl="https://aravindh.org/legal"
        geoLocation={{
          region: "US",
          placename: "United States"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://aravindh.org" },
          { name: "Legal", url: "https://aravindh.org/legal" }
        ]}
        faq={[
          {
            question: "Who owns the copyright to Sports29 by AVR content?",
            answer: "All podcast content, titles, descriptions, and associated assets are owned by Aravindh Initiative 2025. All content is original and protected by copyright under applicable law."
          },
          {
            question: "Can I use Sports29 podcast content without permission?",
            answer: "No unauthorized reproduction, distribution, or public airing of Sports29 by AVR podcasts is allowed. For licensing and permissions, please contact avr@aravindh.org."
          },
          {
            question: "How do I request rights or report copyright infringement?",
            answer: "For rights inquiries, licensing requests, or takedown requests, please contact us at avr@aravindh.org with details of your request."
          }
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Legal Information",
            "description": "Legal information, copyright details, and rights inquiries",
            "url": "https://aravindh.org/legal"
          }
        ]}
      />
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl font-bold mb-12 text-center animate-fade-in">
            Legal Information
          </h1>
          
          <div className="bg-card rounded-lg p-8 md:p-12 space-y-6 text-foreground/90 leading-relaxed animate-fade-in">
            <p>
              Sports29 by AVR is operated as part of the Aravindh Initiative. All podcast content is original and protected by copyright under applicable law.
            </p>
            
            <p>
              All podcast titles, descriptions, and associated assets are owned by Aravindh Initiative 2025.
            </p>
            
            <p>
              Spotify®, Amazon Music® names and logos are trademarks of their respective owners and are used here for linking purposes only.
            </p>
            
            <p>
              No unauthorized reproduction, distribution, or public airing of Sports29 by AVR podcasts is allowed.
            </p>
            
            <p className="font-medium">
              For rights inquiries or takedown requests, contact us at{" "}
              <a 
                href="mailto:avr@aravindh.org" 
                className="text-accent-foreground hover:text-foreground transition-colors underline"
              >
                avr@aravindh.org
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Legal;
