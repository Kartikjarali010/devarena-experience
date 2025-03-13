
import React, { useEffect } from "react";
import { Code, Cpu, Heart, Trophy, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: <Trophy className="h-5 w-5" />,
    title: "Competitive Challenges",
    description: "Test your skills in coding, design, and problem-solving through gamified tech challenges."
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Community Building",
    description: "Connect with like-minded tech enthusiasts and industry professionals."
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Innovation-Focused",
    description: "Push the boundaries of what's possible with technology and creative thinking."
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Cutting-Edge Tech",
    description: "Hands-on experience with the latest technologies and development tools."
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "Skill Development",
    description: "Enhance your technical abilities through practical, real-world challenges."
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Passion for Technology",
    description: "Celebrate and nurture the love for technology and innovation."
  },
];

const About = () => {
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
    <section id="about" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-10">
              <h2 className="text-sm uppercase tracking-wider text-white/50 mb-3 reveal slide-right">About DevTrack</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 reveal slide-right" data-delay="1">
                The <span className="text-gradient">Visionary</span> Club Behind DevArena
              </h3>
              <div className="space-y-4">
                <p className="text-white/80 reveal slide-right" data-delay="2">
                  DevTrack is REVA University's premier technology club, dedicated to fostering innovation, 
                  technical excellence, and community building among tech enthusiasts.
                </p>
                <p className="text-white/70 reveal slide-right" data-delay="3">
                  Founded in 2018, DevTrack has evolved into a hub for students passionate about cutting-edge 
                  technology, offering workshops, hackathons, and mentorship programs throughout the academic year.
                </p>
                <p className="text-white/70 reveal slide-right" data-delay="4">
                  DevArena is our flagship event, now in its third edition, inspired by the challenges of 
                  Squid Game but reimagined for the tech world. It brings together students, developers, 
                  designers, and tech enthusiasts for three days of intense competition and creativity.
                </p>
              </div>
              
              <div className="mt-8 reveal slide-right" data-delay="5">
                <a 
                  href="#team" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <span>Meet Our Team</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="glass-panel p-5 rounded-xl transition-all duration-300 group hover:border-squid-pink/50 reveal slide-left"
                  data-delay={index % 3 + 1}
                >
                  <div className={cn(
                    "p-3 rounded-lg inline-flex mb-4 transition-all duration-300",
                    index % 3 === 0 ? "bg-squid-pink/10 text-squid-pink group-hover:bg-squid-pink/20" :
                    index % 3 === 1 ? "bg-squid-blue/10 text-squid-blue group-hover:bg-squid-blue/20" :
                    "bg-white/10 text-white group-hover:bg-white/20"
                  )}>
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-medium mb-2 group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-white/60">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
