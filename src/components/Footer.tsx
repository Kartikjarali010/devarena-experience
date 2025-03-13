
import React from "react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-squid-dark border-t border-white/5">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-gradient text-xl font-bold mb-4">DevArena</h3>
            <p className="text-white/60 text-sm mb-4">
              A three-day tech event inspired by Squid Game, hosted by DevTrack at REVA University.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-squid-pink transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-squid-pink transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-squid-pink transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-squid-pink transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/60 hover:text-white text-sm transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#events" className="text-white/60 hover:text-white text-sm transition-colors duration-300">Events</a>
              </li>
              <li>
                <a href="#timeline" className="text-white/60 hover:text-white text-sm transition-colors duration-300">Timeline</a>
              </li>
              <li>
                <a href="#about" className="text-white/60 hover:text-white text-sm transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#team" className="text-white/60 hover:text-white text-sm transition-colors duration-300">Team</a>
              </li>
              <li>
                <a href="#sponsors" className="text-white/60 hover:text-white text-sm transition-colors duration-300">Sponsors</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-white/60 text-sm">info@devarena.com</li>
              <li className="text-white/60 text-sm">+91 98765 43210</li>
              <li className="text-white/60 text-sm">
                REVA University,<br />
                Rukmini Knowledge Park,<br />
                Kattigenahalli, Bangalore
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">
              Subscribe to our newsletter for updates about DevArena and other tech events.
            </p>
            <form className="flex">
              <input 
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm flex-grow focus:outline-none focus:border-squid-pink"
              />
              <button 
                type="submit"
                className="bg-squid-pink text-white rounded-r-lg px-4 py-2 text-sm transition-colors duration-300 hover:bg-pink-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            &copy; {currentYear} DevArena. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors duration-300">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
