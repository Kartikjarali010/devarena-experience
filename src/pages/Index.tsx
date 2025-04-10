
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventDays from "@/components/EventDays";
import Timeline from "@/components/Timeline";
import About from "@/components/About";
import Team from "@/components/Team";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
  // State for multiverse reality shifts
  const [realityShift, setRealityShift] = useState(false);
  // State for current universe
  const [currentUniverse, setCurrentUniverse] = useState("Earth-616");
  
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });
    
    // Multiverse reality shift effect
    const realityInterval = setInterval(() => {
      setRealityShift(prev => !prev);
      
      // Apply brief flash effect on reality shift
      const overlay = document.createElement('div');
      overlay.className = 'fixed inset-0 bg-white/5 z-[9999] pointer-events-none';
      document.body.appendChild(overlay);
      
      setTimeout(() => {
        overlay.remove();
      }, 200);
      
      // Change universe on reality shift
      const universes = [
        "Earth-616", // Main Marvel Universe
        "Earth-199999", // MCU
        "Earth-1610", // Ultimate Marvel
        "Earth-838", // Illuminati Universe
        "Earth-TRN732", // Spider-Verse
        "Earth-15513", // Battleworld
      ];
      setCurrentUniverse(universes[Math.floor(Math.random() * universes.length)]);
      
    }, 45000); // Reality shifts happen every 45 seconds
    
    return () => {
      // Clean up
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.unobserve(el);
      });
      clearInterval(realityInterval);
    };
  }, []);
  
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for fixed header
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className={`min-h-screen bg-marvel-dark text-white overflow-x-hidden transition-all duration-1000 ${realityShift ? 'hue-rotate-[5deg]' : ''}`}>
      {/* Multiverse overlay effect */}
      <div className={`fixed inset-0 bg-marvel-red/5 mix-blend-overlay pointer-events-none multiverse-flash z-10`}></div>
      
      {/* Universe identifier */}
      <div className="fixed top-24 right-5 z-50 glass-panel rounded-lg px-3 py-1 text-xs font-marvel">
        <span className="text-marvel-gold">Current Universe: </span>
        <span className="text-white">{currentUniverse}</span>
      </div>
      
      <Navbar />
      <Hero />
      <EventDays />
      <Timeline />
      <About />
      <Team />
      <Sponsors />
      <Footer />
      
      {/* Enhanced multiverse decorations */}
      <div className="fixed right-5 top-1/4 w-24 h-24 portal-ring opacity-20 pointer-events-none z-0"></div>
      <div className="fixed left-5 bottom-1/4 w-32 h-32 dr-strange-circle opacity-20 pointer-events-none z-0"></div>
      
      {/* Infinity stones decoration */}
      <div className="fixed left-5 top-1/3 flex flex-col gap-3 opacity-20 pointer-events-none z-0">
        <div className="infinity-stone stone-space w-6 h-6"></div>
        <div className="infinity-stone stone-mind w-6 h-6"></div>
        <div className="infinity-stone stone-reality w-6 h-6"></div>
      </div>
      <div className="fixed right-5 bottom-1/3 flex flex-col gap-3 opacity-20 pointer-events-none z-0">
        <div className="infinity-stone stone-power w-6 h-6"></div>
        <div className="infinity-stone stone-time w-6 h-6"></div>
        <div className="infinity-stone stone-soul w-6 h-6"></div>
      </div>
      
      {/* Quantum realm particles */}
      <div className="quantum-particles fixed inset-0 pointer-events-none z-0"></div>
    </div>
  );
};

export default Index;
