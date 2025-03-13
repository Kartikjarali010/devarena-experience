
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
}

const navigationItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Events", href: "#events" },
  { name: "Timeline", href: "#timeline" },
  { name: "About", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Sponsors", href: "#sponsors" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-squid-dark/80 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-xl md:text-2xl text-gradient">
              DevArena <span className="text-xs align-super">3.0</span>
            </span>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-300 hover:text-squid-pink"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#register" 
              className="squid-border inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
            >
              Register
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 bg-squid-dark/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden md:hidden",
          mobileMenuOpen ? "max-h-[400px] border-b border-white/10" : "max-h-0"
        )}
      >
        <div className="px-4 py-2 space-y-1">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-3 text-white/70 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#register"
            className="block py-3 mt-2 text-squid-pink"
            onClick={() => setMobileMenuOpen(false)}
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
