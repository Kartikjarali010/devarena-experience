
import React, { useEffect } from "react";
import { Clock, CalendarDays, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  day: number;
  highlight?: boolean;
}

const timelineEvents: TimelineEvent[] = [
  // Day 1
  { time: "09:00 AM", title: "Opening Ceremony", description: "Welcome address and introduction to DevArena 3.0", day: 1, highlight: true },
  { time: "10:30 AM", title: "Syntax Showdown Begins", description: "First coding challenge of Day 1 kicks off", day: 1 },
  { time: "12:30 PM", title: "Lunch Break", description: "Networking lunch with industry professionals", day: 1 },
  { time: "01:30 PM", title: "Logic Labyrinth", description: "Algorithmic puzzle solving contest", day: 1 },
  { time: "04:00 PM", title: "Bit Battles", description: "Low-level programming challenges", day: 1 },
  { time: "06:30 PM", title: "Day 1 Awards", description: "Recognition of Day 1 winners and qualifiers", day: 1, highlight: true },
  
  // Day 2
  { time: "09:30 AM", title: "REVA Got Talent Kickoff", description: "Introduction to Day 2 challenges", day: 2, highlight: true },
  { time: "10:00 AM", title: "UI Ultimatum", description: "Design challenge begins", day: 2 },
  { time: "01:00 PM", title: "Lunch & Networking", description: "Connect with sponsors and industry experts", day: 2 },
  { time: "02:00 PM", title: "Pitch Perfect", description: "Tech idea presentations begin", day: 2 },
  { time: "04:30 PM", title: "Hack The System", description: "Ethical hacking competition", day: 2 },
  { time: "07:00 PM", title: "Talent Showcase", description: "Finalists present their work to the audience", day: 2, highlight: true },
  
  // Day 3
  { time: "10:00 AM", title: "Final Frontier Begins", description: "Introduction to the final day's challenges", day: 3, highlight: true },
  { time: "11:00 AM", title: "The Glass Bridge", description: "High-stakes debugging challenge", day: 3 },
  { time: "01:30 PM", title: "Final Lunch", description: "Last networking opportunity of the event", day: 3 },
  { time: "02:30 PM", title: "Red Light, Green Code", description: "Stop-and-go programming challenge", day: 3 },
  { time: "04:30 PM", title: "DevArena Finals", description: "The ultimate challenge for the remaining contestants", day: 3, highlight: true },
  { time: "07:00 PM", title: "Closing Ceremony", description: "Awards presentation and closing remarks", day: 3, highlight: true },
];

const Timeline = () => {
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
    <section id="timeline" className="relative py-20 md:py-32 bg-marvel-dark">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86')] bg-cover bg-center opacity-20"></div>
        <div className="absolute top-1/3 left-20 w-40 h-40 bg-marvel-purple rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-40 w-60 h-60 bg-marvel-blue/30 rounded-full filter blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-marvel-gold mb-3 reveal slide-up">Sacred Timeline</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 reveal slide-up" data-delay="1">
            <span className="text-marvel-red">Event</span> <span className="text-white">Chronology</span>
          </h3>
          <p className="max-w-2xl mx-auto text-white/70 reveal slide-up" data-delay="2">
            Follow the sacred timeline of DevArena events across all moments that branch from this reality.
            Be cautious of timeline violations!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8 reveal slide-up" data-delay="3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-marvel-dark border border-marvel-blue">
              <CalendarDays className="h-4 w-4 text-marvel-blue" />
              <span className="text-sm">September 15-17, 2023</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-marvel-dark border border-marvel-gold">
              <Clock className="h-4 w-4 text-marvel-gold" />
              <span className="text-sm">9:00 AM - 7:00 PM</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-marvel-dark border border-marvel-red">
              <MapPin className="h-4 w-4 text-marvel-red" />
              <span className="text-sm">REVA University, Bangalore</span>
            </div>
          </div>
        </div>
        
        {/* Timeline visualization */}
        <div className="relative mt-12 border-l-4 border-marvel-cosmic ml-6 md:ml-0 md:border-l-0 md:flex md:justify-center">
          {/* Time Variance Authority central line (visible only on md+) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-marvel-gold via-marvel-red to-marvel-blue"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
            {timelineEvents.map((event, index) => {
              // Alternate sides for medium screens and up
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={`event-${index}`}
                  className={cn(
                    "relative mb-8 md:mb-16 reveal",
                    isLeft ? "md:pr-10 md:text-right md:slide-right" : "md:pl-10 md:ml-auto md:slide-left",
                    event.highlight ? "md:translate-y-4" : ""
                  )}
                  data-delay={index % 3}
                >
                  {/* Connection to timeline */}
                  <div 
                    className={cn(
                      "hidden md:block absolute top-6 w-10 h-1",
                      isLeft ? "right-0 bg-gradient-to-r from-transparent to-marvel-gold" : "left-0 bg-gradient-to-l from-transparent to-marvel-red"
                    )}
                  ></div>
                  
                  {/* Event marker */}
                  <div 
                    className={cn(
                      "absolute -left-[29px] md:static md:hidden w-14 h-14 flex items-center justify-center rounded-full",
                      event.day === 1 ? "bg-marvel-red" : event.day === 2 ? "bg-marvel-gold" : "bg-marvel-blue"
                    )}
                  >
                    <div className="w-10 h-10 rounded-full bg-marvel-dark flex items-center justify-center">
                      <span className="text-lg font-marvel">{event.day}</span>
                    </div>
                  </div>
                  
                  {/* Circle on the timeline for desktop */}
                  <div 
                    className={cn(
                      "hidden md:block absolute top-6 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full border-4 border-marvel-dark",
                      event.day === 1 ? "bg-marvel-red" : event.day === 2 ? "bg-marvel-gold" : "bg-marvel-blue"
                    )}
                  ></div>
                  
                  {/* Event content */}
                  <div 
                    className={cn(
                      "ml-10 md:ml-0 p-4 rounded-lg transition-all group hover:scale-105 duration-300",
                      event.highlight ? "marvel-border" : "border border-white/10"
                    )}
                  >
                    <div className="text-xs text-white/50 mb-1">{event.time}</div>
                    <h5 className={cn(
                      "text-base font-medium transition-colors duration-300",
                      event.day === 1 ? "text-marvel-red" : event.day === 2 ? "text-marvel-gold" : "text-marvel-blue"
                    )}>
                      {event.title}
                    </h5>
                    <p className="text-sm text-white/60 mt-1">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Time Variance Authority logo */}
        <div className="flex justify-center mt-16">
          <div className="w-20 h-20 rounded-full bg-marvel-cosmic border-4 border-marvel-gold flex items-center justify-center">
            <div className="text-2xl font-marvel text-white">TVA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
