import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Loader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loader after a short delay
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="relative flex items-center justify-center">
             {/* Logo Wrapper with pulsing animation */}
            <motion.div 
               animate={{ 
                 scale: [1, 1.1, 1],
                 opacity: [0.8, 1, 0.8]
               }}
               transition={{
                 duration: 2,
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
               className="relative z-10"
            >
               <img src="/20260311_183353.png" alt="The Fifth Byte Logo" className="h-24 w-auto drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            </motion.div>
            
            {/* Spinning ring animation around logo */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-0 h-40 w-40 -mx-8 -my-8 rounded-full border-t-2 border-b-2 border-blue-500 opacity-30"
            />
            
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-0 h-48 w-48 -mx-12 -my-12 rounded-full border-l-2 border-r-2 border-purple-500 opacity-20"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
