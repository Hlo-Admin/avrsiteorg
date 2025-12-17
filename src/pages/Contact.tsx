import { useState } from "react";
import { z } from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000, { message: "Message must be less than 1000 characters" })
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Here you would typically send the data to your backend
      // For now, we'll just show a success message
      console.log("Form submitted:", validatedData);
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contact Aravindh Ravichandran | Startup Advisory & Business Inquiries"
        description="Get in touch with Aravindh Ravichandran (AVR) for startup advisory, podcast collaborations, speaking engagements, and Rook/Realm by Rook inquiries. Reach out via email or contact form for business opportunities, media requests, and partnerships."
        keywords="contact Aravindh Ravichandran, AVR contact, startup advisory, podcast collaboration, speaking engagements, business inquiries, contact form, business email, startup consultation, entrepreneur contact, business inquiries USA, media inquiries, partnership opportunities"
        canonicalUrl="https://aravindh.org/contact"
        ogImage="https://aravindh.org/assets/AVR_3.png"
        geoLocation={{
          region: "US",
          placename: "United States"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://aravindh.org" },
          { name: "Contact", url: "https://aravindh.org/contact" }
        ]}
        faq={[
          {
            question: "How can I contact Aravindh Ravichandran?",
            answer: "You can contact Aravindh Ravichandran via email at avr@aravindh.org or use the contact form on this page for startup advisory, podcast collaborations, speaking engagements, and business inquiries."
          },
          {
            question: "What types of inquiries does AVR accept?",
            answer: "AVR accepts inquiries for startup advisory services, podcast collaborations, speaking engagements, business partnerships, media requests, and general business inquiries related to Rook and Realm by Rook."
          },
          {
            question: "What is the response time for contact inquiries?",
            answer: "Response times vary, but AVR typically responds to business inquiries within 2-3 business days. For urgent matters, please indicate this in your message."
          }
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Aravindh Ravichandran",
            "description": "Contact page for startup advisory, podcast collaborations, and business inquiries",
            "url": "https://aravindh.org/contact",
            "mainEntity": {
              "@type": "Person",
              "name": "Aravindh Ravichandran",
              "email": "avr@aravindh.org"
            }
          }
        ]}
      />
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12 md:py-20 pt-24">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl pt-8 font-bold text-foreground mb-4">
              Contact
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              We'd love to hear from you!
            </p>
            <p className="text-base text-foreground/90 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
              For guest requests, business inquiries, collaboration, or feedback about AVR, please fill out the form below or reach us directly.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-border/30 mb-8 animate-fade-in-scale" style={{ animationDelay: "0.3s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-background/50 border-border/50 ${errors.name ? 'border-destructive' : ''}`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-background/50 border-border/50 ${errors.email ? 'border-destructive' : ''}`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-background/50 border-border/50 min-h-[150px] ${errors.message ? 'border-destructive' : ''}`}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Direct Contact */}
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/30 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-xl font-semibold text-foreground mb-3 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Direct Email
            </h2>
            <a 
              href="mailto:avr@aravindh.org" 
              className="text-foreground hover:text-foreground/80 transition-colors duration-300 text-lg font-semibold"
            >
              avr@aravindh.org
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
