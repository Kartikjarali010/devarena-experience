
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
    <section id="timeline" className="relative py-20 md:py-32 bg-squid-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-white/50 mb-3 reveal slide-up">Event Schedule</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 reveal slide-up" data-delay="1">
            DevArena <span className="text-gradient">Timeline</span>
          </h3>
          <p className="max-w-2xl mx-auto text-white/70 reveal slide-up" data-delay="2">
            Plan your DevArena experience with our comprehensive event schedule.
            Don't miss any of the exciting challenges and activities!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8 reveal slide-up" data-delay="3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <CalendarDays className="h-4 w-4 text-squid-pink" />
              <span className="text-sm">September 15-17, 2023</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Clock className="h-4 w-4 text-squid-blue" />
              <span className="text-sm">9:00 AM - 7:00 PM</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <MapPin className="h-4 w-4 text-white" />
              <span className="text-sm">REVA University, Bangalore</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[1, 2, 3].map((day) => (
            <div key={day} className="glass-panel rounded-xl p-6 reveal slide-up" data-delay={day}>
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold">
                  Day {day}
                  <span className="text-gradient"> / </span>
                  <span className="text-white/80">
                    {day === 1 ? "Code Royale" : day === 2 ? "REVA Got Talent" : "Final Frontier"}
                  </span>
                </h4>
              </div>
              
              <div className="relative pl-6 border-l border-white/10">
                {timelineEvents
                  .filter(event => event.day === day)
                  .map((event, index) => (
                    <div 
                      key={`${day}-${index}`} 
                      className={cn(
                        "mb-8 last:mb-0 relative transition-all duration-300 group",
                        event.highlight ? "reveal slide-right" : "reveal slide-left"
                      )}
                      data-delay={index % 3 + 1}
                    >
                      <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-squid-dark border-2 border-white/30 group-hover:border-squid-pink group-hover:scale-125 transition-all duration-300" />
                      <div className="text-xs text-white/50 mb-1">{event.time}</div>
                      <h5 className="text-base font-medium text-white group-hover:text-squid-pink transition-colors duration-300">
                        {event.title}
                      </h5>
                      <p className="text-sm text-white/60 mt-1">{event.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
