
import React, { useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const coreTeam: TeamMember[] = [
  {
    name: "Alex Johnson",
    role: "Event Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=80",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:alex@devarena.com"
    }
  },
  {
    name: "Samantha Lee",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:sam@devarena.com"
    }
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:michael@devarena.com"
    }
  },
  {
    name: "Priya Sharma",
    role: "Outreach Coordinator",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=400&auto=format&fit=crop&q=80",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:priya@devarena.com"
    }
  },
  {
    name: "David Wilson",
    role: "Game Designer",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&auto=format&fit=crop&q=80",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:david@devarena.com"
    }
  },
  {
    name: "Aisha Patel",
    role: "Marketing Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop&q=80",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:aisha@devarena.com"
    }
  },
  {
    name: "James Rodriguez",
    role: "Logistics Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&q=80",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:james@devarena.com"
    }
  },
  {
    name: "Zoe Wong",
    role: "Content Strategist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&auto=format&fit=crop&q=80",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:zoe@devarena.com"
    }
  }
];

const Team = () => {
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
    <section id="team" className="relative py-20 md:py-32 bg-squid-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-white/50 mb-3 reveal slide-up">The People Behind DevArena</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 reveal slide-up" data-delay="1">
            Meet Our <span className="text-gradient">Core Team</span>
          </h3>
          <p className="max-w-2xl mx-auto text-white/70 reveal slide-up" data-delay="2">
            Passionate individuals dedicated to creating an unforgettable tech experience
            inspired by Squid Game's challenges and DevTrack's innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {coreTeam.map((member, index) => (
            <div 
              key={index} 
              className={cn(
                "glass-panel rounded-xl p-5 transition-all duration-300 group reveal slide-up",
                index % 2 === 0 ? "hover:border-squid-pink/50" : "hover:border-squid-blue/50"
              )}
              data-delay={index % 4 + 1}
            >
              <div className="relative mb-5 group">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-squid-dark to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-lg" />
                
                <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {member.social.github && (
                    <a 
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a 
                      href={member.social.email}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="font-medium mb-1 group-hover:text-gradient transition-all duration-300">{member.name}</h4>
                <p className="text-sm text-white/60">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
