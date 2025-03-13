
import React, { useEffect } from "react";
import { CalendarDays, ShieldCheck, Trophy, MousePointer, BrainCircuit, Code, PencilRuler, Cpu, Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventGame {
  icon: React.ReactNode;
  name: string;
  description: string;
}

interface EventDay {
  id: number;
  name: string;
  title: string;
  accent: string;
  description: string;
  date: string;
  games: EventGame[];
}

const eventDays: EventDay[] = [
  {
    id: 1,
    name: "Day 1",
    title: "Code Royale",
    accent: "pink",
    description: "Dive into algorithmic challenges and coding puzzles that will test your logic and problem-solving skills.",
    date: "September 15, 2023",
    games: [
      {
        icon: <Code className="h-5 w-5" />,
        name: "Syntax Showdown",
        description: "Speed coding challenge where participants race to implement solutions in limited time."
      },
      {
        icon: <BrainCircuit className="h-5 w-5" />,
        name: "Logic Labyrinth",
        description: "Navigate through complex algorithmic mazes to find the most efficient solution."
      },
      {
        icon: <Cpu className="h-5 w-5" />,
        name: "Bit Battles",
        description: "Low-level programming challenges focusing on memory optimization and efficiency."
      }
    ]
  },
  {
    id: 2,
    name: "Day 2",
    title: "REVA Got Talent",
    accent: "blue",
    description: "Showcase your technical creativity and innovation in this talent show for developers and designers.",
    date: "September 16, 2023",
    games: [
      {
        icon: <PencilRuler className="h-5 w-5" />,
        name: "UI Ultimatum",
        description: "Design challenge to create the most intuitive and visually appealing interface."
      },
      {
        icon: <MousePointer className="h-5 w-5" />,
        name: "Pitch Perfect",
        description: "Present your innovative tech ideas to a panel of industry experts."
      },
      {
        icon: <ShieldCheck className="h-5 w-5" />,
        name: "Hack The System",
        description: "Ethical hacking competition to identify and fix security vulnerabilities."
      }
    ]
  },
  {
    id: 3,
    name: "Day 3",
    title: "Final Frontier",
    accent: "gradient",
    description: "The culmination of DevArena where finalists compete in the ultimate tech challenge.",
    date: "September 17, 2023",
    games: [
      {
        icon: <Trophy className="h-5 w-5" />,
        name: "The Glass Bridge",
        description: "A high-stakes debugging challenge where one wrong move means elimination."
      },
      {
        icon: <Gamepad2 className="h-5 w-5" />,
        name: "Red Light, Green Code",
        description: "Stop-and-go programming where code must freeze at random intervals."
      },
      {
        icon: <CalendarDays className="h-5 w-5" />,
        name: "DevArena Finals",
        description: "The ultimate challenge combining all skills tested throughout the event."
      }
    ]
  }
];

const EventDays = () => {
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
    <section id="events" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-white/50 mb-3 reveal slide-up">Experience the Challenge</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 reveal slide-up" data-delay="1">
            Three Days of <span className="text-gradient">Epic</span> Tech Battles
          </h3>
          <p className="max-w-2xl mx-auto text-white/70 reveal slide-up" data-delay="2">
            Inspired by Squid Game, DevArena brings you three intense days of tech competitions, 
            challenges, and games designed to test your skills and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {eventDays.map((day, index) => (
            <div 
              key={day.id}
              className={cn(
                "glass-panel rounded-xl overflow-hidden transition-all duration-500 group reveal",
                index === 0 ? "slide-right" : index === 2 ? "slide-left" : "slide-up",
                day.accent === "pink" ? "hover:border-squid-pink/50" : 
                day.accent === "blue" ? "hover:border-squid-blue/50" : 
                "hover:border-gradient-to-r hover:from-squid-pink/50 hover:to-squid-blue/50"
              )}
              data-delay={index + 1}
            >
              <div className={cn(
                "h-2",
                day.accent === "pink" ? "bg-squid-pink" : 
                day.accent === "blue" ? "bg-squid-blue" : 
                "bg-gradient-to-r from-squid-pink to-squid-blue"
              )} />
              
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/50">{day.name}</span>
                  <span className="text-xs text-white/50">{day.date}</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">{day.title}</h4>
                <p className="text-white/70 mb-6 text-sm">{day.description}</p>
                
                <div className="space-y-4">
                  {day.games.map((game, gameIndex) => (
                    <div key={gameIndex} className="flex items-start gap-3 group/game">
                      <div className={cn(
                        "mt-1 p-2 rounded-md transition-all duration-300",
                        day.accent === "pink" ? "bg-squid-pink/10 text-squid-pink group-hover/game:bg-squid-pink/20" : 
                        day.accent === "blue" ? "bg-squid-blue/10 text-squid-blue group-hover/game:bg-squid-blue/20" : 
                        gameIndex === 0 ? "bg-squid-pink/10 text-squid-pink group-hover/game:bg-squid-pink/20" :
                        gameIndex === 1 ? "bg-squid-blue/10 text-squid-blue group-hover/game:bg-squid-blue/20" :
                        "bg-white/10 text-white group-hover/game:bg-white/20"
                      )}>
                        {game.icon}
                      </div>
                      <div>
                        <h5 className="font-medium text-white group-hover/game:text-gradient transition-all duration-300">{game.name}</h5>
                        <p className="text-xs text-white/60">{game.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDays;
