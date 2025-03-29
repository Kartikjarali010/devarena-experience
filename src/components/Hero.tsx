
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Shield } from "lucide-react";

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

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden py-20 md:py-0">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-marvel-dark overflow-hidden">
        {/* Hero background with Marvel characters */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1635805737707-575885ab0820')] bg-cover bg-center"></div>
        
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-marvel-red/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-marvel-blue/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        
        {/* Marvel-themed decorative elements */}
        <div className="absolute top-1/3 right-[10%] avengers-shield opacity-40 animate-shield-spin"></div>
        <div className="absolute bottom-1/3 left-[10%] iron-man-circle opacity-40"></div>
        <div className="absolute top-2/3 right-[30%]">
          <Shield className="w-16 h-16 text-marvel-blue opacity-30" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="space-y-2 animate-fade-in">
          <p className="inline-block px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm text-xs font-medium border border-white/10 mb-6">
            3<sup>rd</sup> Edition • Powered by DevTrack
          </p>
          <h1 className="font-marvel text-4xl md:text-6xl lg:text-7xl tracking-tight mb-4 text-shadow">
            <span className="text-gradient">DevArena</span> 2023
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-8">
            A three-day tech extravaganza inspired by Marvel
          </p>
          
          {/* Marvel Hero Icons */}
          <div className="flex justify-center gap-3 mb-8">
            <div className="hero-number w-10 h-10 animate-hero-pulse" style={{ animationDelay: "0s" }}>A</div>
            <div className="hero-number w-10 h-10 animate-hero-pulse" style={{ animationDelay: "0.5s" }}>X</div>
            <div className="hero-number w-10 h-10 animate-hero-pulse" style={{ animationDelay: "1s" }}>M</div>
            <div className="hero-number w-10 h-10 animate-hero-pulse" style={{ animationDelay: "1.5s" }}>H</div>
          </div>
          
          {/* Countdown timer */}
          <div className="mt-12 mb-10">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { label: "Days", value: countdown.days },
                { label: "Hours", value: countdown.hours },
                { label: "Minutes", value: countdown.minutes },
                { label: "Seconds", value: countdown.seconds },
              ].map((item) => (
                <div 
                  key={item.label}
                  className={cn(
                    "glass-panel rounded-lg w-20 md:w-24 h-24 md:h-28 flex flex-col items-center justify-center animate-pulse-glow",
                    item.label === "Days" ? "border-marvel-red" : 
                    item.label === "Hours" ? "border-marvel-blue" : 
                    item.label === "Minutes" ? "border-marvel-red" : "border-marvel-blue"
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
              Explore Events
            </a>
          </div>
        </div>
      </div>
      
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
