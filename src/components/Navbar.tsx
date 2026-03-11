import { useState, useEffect } from "react";
import { Menu, X, Hexagon, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);
      
      // Hide navbar when scrolling down past 100px, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // also close mobile menu
      } else {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Technologies", href: "/technologies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg"
          : "bg-transparent py-6"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer transition-all">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-linear-to-tr from-indigo-600 via-purple-600 to-pink-500 shadow-lg shadow-purple-500/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Hexagon className="w-6 h-6 text-white absolute" strokeWidth={2.5} />
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-gray-100 to-gray-400 group-hover:from-white group-hover:to-purple-200 transition-colors duration-300">
              TFB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors rounded-full hover:bg-white/5 group ${
                  location.pathname === item.href ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 h-[2px] bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 -translate-x-1/2 ${
                  location.pathname === item.href ? "w-3/4 opacity-100" : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
                }`} />
              </Link>
            ))}
            
            <div className="pl-4">
              <Link to="/contact" className="inline-block px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-slate-950/95 backdrop-blur-2xl border-t border-b border-white/5 px-4 py-6 shadow-2xl flex flex-col space-y-1">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-300 group ${
                location.pathname === item.href ? "text-white bg-white/5" : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className={`font-semibold text-lg transition-transform duration-300 ${
                location.pathname === item.href ? "translate-x-2 text-purple-400" : "group-hover:translate-x-2"
              }`}>
                {item.name}
              </span>
              <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                location.pathname === item.href ? "opacity-100 -translate-x-2 text-purple-400" : "opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 text-purple-400"
              }`} />
            </Link>
          ))}
          <div className="pt-6 mt-4 border-t border-white/10 px-2">
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex justify-center items-center py-4 rounded-xl bg-linear-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all active:scale-95"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
