
import React, { useState, useEffect } from "react";
import { Menu, X, Shield, Zap, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
}

const navigationItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Universes", href: "#events" },
  { name: "Timeline", href: "#timeline" },
  { name: "Characters", href: "#about" },
  { name: "Heroes", href: "#team" },
  { name: "Allies", href: "#sponsors" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentUniverse, setCurrentUniverse] = useState("Earth-616");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    // Multiverse universe switch effect
    const universeInterval = setInterval(() => {
      const universes = ["Earth-616", "Earth-199999", "Earth-1610", "Earth-838"];
      setCurrentUniverse(universes[Math.floor(Math.random() * universes.length)]);
    }, 5000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(universeInterval);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-marvel-dark/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Captain America Shield Logo */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-marvel-red via-white to-marvel-blue border-2 border-marvel-red flex items-center justify-center animate-shield-spin">
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <span className="text-marvel-blue text-xs font-bold">A</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-marvel text-2xl md:text-3xl text-marvel-red">
                DevArena <span className="text-xs align-super font-sans">3.0</span>
              </span>
              <span className="text-[10px] text-white/60 -mt-1">{currentUniverse}</span>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-300 hover:text-marvel-red"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#register" 
              className="border border-marvel-red inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 text-white hover:bg-marvel-red/20"
            >
              <div className="hero-number w-5 h-5 mr-2 text-xs">A</div>
              Assemble
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
          "absolute top-full left-0 right-0 bg-marvel-dark/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden md:hidden",
          mobileMenuOpen ? "max-h-[400px] border-b border-marvel-red/20" : "max-h-0"
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
            className="block py-3 mt-2 text-marvel-red flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="hero-number w-5 h-5 mr-2 text-xs">A</div>
            Assemble Now
          </a>
        </div>
        
        {/* Marvel icons at bottom of mobile menu */}
        <div className="flex justify-center space-x-8 py-4">
          <div className="avengers-shield w-8 h-8"></div>
          <div className="iron-man-circle w-6 h-6"></div>
          <Shield className="w-6 h-6 text-marvel-blue" />
          <Globe className="w-6 h-6 text-marvel-gold" />
          <Zap className="w-6 h-6 text-marvel-red" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
