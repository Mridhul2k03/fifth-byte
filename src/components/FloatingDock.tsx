import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, FolderGit2, Info, Layers, Phone } from "lucide-react";

export function FloatingDock() {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "About", href: "/about", icon: Info },
    { name: "Technologies", href: "/technologies", icon: Layers },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-4 sm:px-0 pointer-events-none">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="flex items-center gap-2 p-2 rounded-2xl bg-black/40 backdrop-blur-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] pointer-events-auto"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.href;
          const isHovered = hoveredIndex === index;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className="relative group p-3 rounded-xl transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              {/* Hover Glow */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="active-nav-glow"
                    className="absolute inset-0 bg-white/10 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>

              {/* Icon */}
              <motion.div
                animate={{
                  scale: isHovered ? 1.2 : isActive ? 1.1 : 1,
                  y: isHovered ? -4 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative z-10 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white'}`}
              >
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>

              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium whitespace-nowrap shadow-xl pointer-events-none"
                  >
                    {item.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
