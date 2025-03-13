
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventDays from "@/components/EventDays";
import Timeline from "@/components/Timeline";
import About from "@/components/About";
import Team from "@/components/Team";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
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
    
    return () => {
      // Clean up
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.unobserve(el);
      });
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
    <div className="min-h-screen bg-squid-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <EventDays />
      <Timeline />
      <About />
      <Team />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
