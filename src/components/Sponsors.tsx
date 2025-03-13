
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

interface Sponsor {
  name: string;
  tier: "platinum" | "gold" | "silver";
  logo: string;
}

const sponsors: Sponsor[] = [
  {
    name: "TechCorp",
    tier: "platinum",
    logo: "https://placehold.co/200x80/2e2e2e/white?text=TechCorp"
  },
  {
    name: "Innovate Labs",
    tier: "platinum",
    logo: "https://placehold.co/200x80/2e2e2e/white?text=InnovateLabs"
  },
  {
    name: "DevFlow",
    tier: "gold",
    logo: "https://placehold.co/180x70/2e2e2e/white?text=DevFlow"
  },
  {
    name: "ByteWave",
    tier: "gold",
    logo: "https://placehold.co/180x70/2e2e2e/white?text=ByteWave"
  },
  {
    name: "CodeNest",
    tier: "gold",
    logo: "https://placehold.co/180x70/2e2e2e/white?text=CodeNest"
  },
  {
    name: "PixelPerfect",
    tier: "silver",
    logo: "https://placehold.co/160x60/2e2e2e/white?text=PixelPerfect"
  },
  {
    name: "QuickBuild",
    tier: "silver",
    logo: "https://placehold.co/160x60/2e2e2e/white?text=QuickBuild"
  },
  {
    name: "CloudScale",
    tier: "silver",
    logo: "https://placehold.co/160x60/2e2e2e/white?text=CloudScale"
  },
  {
    name: "NetMatrix",
    tier: "silver",
    logo: "https://placehold.co/160x60/2e2e2e/white?text=NetMatrix"
  }
];

const Sponsors = () => {
  useEffect(() => {
    const revealElements = () => {
      const elements = document.querySelectorAll('.reveal');
      
      elements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealElements);
    revealElements(); // Call once on load
    
    return () => window.removeEventListener('scroll', revealElements);
  }, []);
  
  return (
    <section id="sponsors" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-white/50 mb-3 reveal slide-up">Our Supporters</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 reveal slide-up" data-delay="1">
            <span className="text-gradient">Sponsors</span> & Partners
          </h3>
          <p className="max-w-2xl mx-auto text-white/70 reveal slide-up" data-delay="2">
            DevArena is made possible through the generous support of our sponsors and partners
            who share our vision for innovation in tech.
          </p>
        </div>
        
        {/* Platinum Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1.5 rounded-full glass-panel border border-squid-pink/30 text-sm reveal slide-up">
              <span className="text-gradient font-medium">Platinum Sponsors</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sponsors
              .filter(sponsor => sponsor.tier === "platinum")
              .map((sponsor, index) => (
                <div 
                  key={index}
                  className="glass-panel p-6 rounded-xl hover:border-squid-pink/50 transition-all duration-300 reveal slide-up"
                  data-delay={index + 1}
                >
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="h-16 mx-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
          </div>
        </div>
        
        {/* Gold Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1.5 rounded-full glass-panel border border-yellow-500/30 text-sm reveal slide-up">
              <span className="font-medium text-yellow-500">Gold Sponsors</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sponsors
              .filter(sponsor => sponsor.tier === "gold")
              .map((sponsor, index) => (
                <div 
                  key={index}
                  className="glass-panel p-5 rounded-xl hover:border-yellow-500/30 transition-all duration-300 reveal slide-up"
                  data-delay={index + 1}
                >
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="h-12 mx-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
          </div>
        </div>
        
        {/* Silver Sponsors */}
        <div>
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1.5 rounded-full glass-panel border border-gray-400/30 text-sm reveal slide-up">
              <span className="font-medium text-gray-400">Silver Sponsors</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {sponsors
              .filter(sponsor => sponsor.tier === "silver")
              .map((sponsor, index) => (
                <div 
                  key={index}
                  className="glass-panel p-4 rounded-xl hover:border-gray-400/30 transition-all duration-300 reveal slide-up"
                  data-delay={index % 2 + 1}
                >
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="h-10 mx-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-20 text-center max-w-2xl mx-auto glass-panel p-8 rounded-xl border border-white/10 reveal slide-up">
          <h4 className="text-xl md:text-2xl font-bold mb-4">Become a Sponsor</h4>
          <p className="text-white/70 mb-6">
            Interested in supporting DevArena and gaining exposure to the brightest tech talent?
            Reach out to explore our sponsorship opportunities.
          </p>
          <a 
            href="mailto:sponsors@devarena.com" 
            className="squid-border inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-squid-pink/10"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
