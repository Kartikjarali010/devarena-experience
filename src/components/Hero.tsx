
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Shield, Zap } from "lucide-react";

interface CountdownData {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Hero = () => {
  // Set event date - example: 3 months from now
  const eventDate = new Date();
  eventDate.setMonth(eventDate.getMonth() + 3);
  
  const [countdown, setCountdown] = useState<CountdownData>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  // Add multiverse portal effect state
  const [portalActive, setPortalActive] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +eventDate - +new Date();
      
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Portal animation timing
    const portalInterval = setInterval(() => {
      setPortalActive(prev => !prev);
    }, 7000);

    return () => {
      clearInterval(timer);
      clearInterval(portalInterval);
    };
  }, [eventDate]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden py-20 md:py-0">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-marvel-dark overflow-hidden">
        {/* Multiverse portal effect */}
        <div className={cn(
          "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe')] bg-cover bg-center opacity-20 transition-all duration-1000",
          portalActive && "scale-110 rotate-3"
        )}></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-marvel-dark via-transparent to-marvel-dark"></div>
        
        {/* Marvel character silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-[url('https://images.unsplash.com/photo-1624213111452-35e8d3d5cc40')] bg-cover bg-bottom opacity-30"></div>
        
        {/* Energy portals from multiverse */}
        <div className={cn(
          "absolute top-1/4 left-1/4 w-80 h-80 bg-marvel-red/20 rounded-full filter blur-3xl transform-gpu transition-all duration-2000 animate-float",
          portalActive && "scale-125 brightness-150"
        )}></div>
        <div className={cn(
          "absolute bottom-1/4 right-1/4 w-96 h-96 bg-marvel-blue/20 rounded-full filter blur-3xl transform-gpu transition-all duration-2000",
          portalActive && "scale-110 brightness-125"
        )} style={{ animationDelay: "2s" }}></div>
        
        {/* Marvel-themed decorative elements */}
        <div className="absolute top-1/3 right-[10%] avengers-shield opacity-40 animate-shield-spin"></div>
        <div className="absolute bottom-1/3 left-[10%] iron-man-circle opacity-40"></div>
        <div className="absolute top-2/3 right-[30%]">
          <Shield className="w-16 h-16 text-marvel-blue opacity-30" />
        </div>
        
        {/* Thor's lightning */}
        <div className="absolute top-1/5 left-[20%]">
          <Zap className="w-12 h-12 text-marvel-gold animate-pulse opacity-30" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="space-y-2 animate-fade-in">
          <p className="inline-block px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm text-xs font-medium border border-white/10 mb-6">
            The Multiverse Saga • 3<sup>rd</sup> Edition
          </p>
          <h1 className="font-marvel text-4xl md:text-6xl lg:text-7xl tracking-tight mb-4 text-shadow">
            <span className="text-gradient">DevArena</span> Multiverse
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-8">
            Where technology heroes from across the multiverse unite
          </p>
          
          {/* Marvel Hero Icons */}
          <div className="flex justify-center gap-3 mb-8">
            <div className="hero-number w-10 h-10 animate-hero-pulse" style={{ animationDelay: "0s" }}>I</div>
            <div className="hero-number w-10 h-10 animate-hero-pulse" style={{ animationDelay: "0.5s" }}>T</div>
            <div className="hero-number w-10 h-10 animate-hero-pulse" style={{ animationDelay: "1s" }}>H</div>
            <div className="hero-number w-10 h-10 animate-hero-pulse" style={{ animationDelay: "1.5s" }}>S</div>
            <div className="hero-number w-10 h-10 animate-hero-pulse" style={{ animationDelay: "2s" }}>B</div>
          </div>
          
          {/* Countdown timer */}
          <div className="mt-12 mb-10">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { label: "Days", value: countdown.days, color: "border-marvel-red" },
                { label: "Hours", value: countdown.hours, color: "border-marvel-blue" },
                { label: "Minutes", value: countdown.minutes, color: "border-marvel-gold" },
                { label: "Seconds", value: countdown.seconds, color: "border-marvel-red" },
              ].map((item) => (
                <div 
                  key={item.label}
                  className={cn(
                    "glass-panel rounded-lg w-20 md:w-24 h-24 md:h-28 flex flex-col items-center justify-center animate-pulse-glow",
                    item.color
                  )}
                >
                  <span className="font-marvel text-2xl md:text-3xl font-bold">{item.value}</span>
                  <span className="text-xs md:text-sm text-white/70">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a 
              href="#register" 
              className="marvel-border font-marvel px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-marvel-red/20"
            >
              Assemble Now
            </a>
            <a 
              href="#events" 
              className="marvel-border-blue font-marvel px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-marvel-blue/20"
            >
              Explore Universes
            </a>
          </div>
        </div>
      </div>
      
      {/* Portal effect overlay */}
      <div className={cn(
        "absolute inset-0 bg-marvel-red/5 mix-blend-overlay transition-opacity duration-2000 pointer-events-none",
        portalActive ? "opacity-100" : "opacity-0"
      )}></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#events" 
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-bounce"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
