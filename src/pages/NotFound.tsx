import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
           animate={{ 
             rotate: [0, 5, -5, 0],
           }}
           transition={{ 
             duration: 5, 
             repeat: Infinity,
             ease: "easeInOut" 
           }}
           className="mb-8 relative inline-block"
        >
          <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl bg-blue-500/10 rounded-full" />
        </motion.div>
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </motion.button>
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};
