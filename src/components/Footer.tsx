import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

// WhatsApp SVG Icon wrapper
const WhatsApp = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1" />
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/20260312_115106.png" 
                alt="The Fifth Byte Logo" 
                className="h-10 w-auto" 
              />
            </div>
            <p className="text-gray-400 max-w-sm">
              Crafting premium digital experiences and software architecture for the startups of tomorrow.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-purple-400 transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-purple-400 transition-colors">Projects</Link></li>
              <li><Link to="/team" className="hover:text-purple-400 transition-colors">Team</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} The Fifth Byte. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/thefifthbyte/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-400 transition-colors group">
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/thefifthbyte/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-400 transition-colors group">
              <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Instagram</span>
            </a>
            <a href="https://wa.me/9567252212" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors group">
              <WhatsApp className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
