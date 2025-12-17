import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import avrLogo from "@/assets/AVR_Black.png";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    // { label: "Host", path: "/host" },
    { label: "Podcasts", path: "/podcasts" },
    { label: "Venture", path: "/venture" },
    { label: "Happenings", path: "/happenings" },
    { label: "Hire Me for Events", path: "/hire-me-for-events" },
    { label: "Archery", path: "/archery" },
    { label: "Books", path: "/books" },
    { label: "Chronicles of Echelon", path: "/chronicles-of-echelon" },
    { label: "Sponsorship", path: "/sponsorship" },
    { label: "Contact", path: "/contact" },
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border/30 shadow-lg animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="transition-all duration-300 hover:opacity-80 hover:scale-105 active:scale-95"
          >
            <img 
              src={avrLogo} 
              alt="Aravindh Ravichandran" 
              className="h-8 sm:h-10 w-auto transition-all duration-300"
            />
          </Link>
          
          {/* Universal Navigation Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2.5 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2">
              <Menu className="h-5 w-5 text-primary transition-transform duration-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-56 glass-strong border-border/30 shadow-xl backdrop-blur-xl mt-2"
            >
              {menuItems.map((item, index) => (
                <DropdownMenuItem key={item.path} asChild>
                  <Link
                    to={item.path}
                    className={`w-full cursor-pointer transition-all duration-300 py-2.5 px-3 rounded-md ${
                      isActive(item.path) 
                        ? "text-primary font-semibold bg-primary/10" 
                        : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.05}s`,
                      animation: 'fade-in 0.3s ease-out forwards'
                    }}
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
