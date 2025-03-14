
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
          ? "bg-[#0B0C0D]/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Squid Game Triangle Logo */}
            <div className="w-7 h-7 relative">
              <div className="absolute w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-[#FF0F7B]"></div>
            </div>
            
            <span className="font-squid text-xl md:text-2xl text-[#FF0F7B]">
              DevArena <span className="text-xs align-super font-sans">3.0</span>
            </span>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-300 hover:text-[#FF0F7B]"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#register" 
              className="border border-[#FF0F7B] inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 text-white hover:bg-[#FF0F7B]/20"
            >
              <div className="squid-number w-5 h-5 mr-2 text-xs">456</div>
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
          "absolute top-full left-0 right-0 bg-[#0B0C0D]/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden md:hidden",
          mobileMenuOpen ? "max-h-[400px] border-b border-[#FF0F7B]/20" : "max-h-0"
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
            className="block py-3 mt-2 text-[#FF0F7B] flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="squid-number w-5 h-5 mr-2 text-xs">456</div>
            Register
          </a>
        </div>
        
        {/* Squid Game Shapes at bottom of mobile menu */}
        <div className="flex justify-center space-x-8 py-4">
          <div className="w-6 h-6 squid-circle opacity-70"></div>
          <div className="w-6 h-6 squid-triangle opacity-70"></div>
          <div className="w-6 h-6 squid-square opacity-70"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
