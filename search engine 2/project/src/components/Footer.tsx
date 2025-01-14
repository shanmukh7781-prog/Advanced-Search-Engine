import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-100 border-t">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex gap-6 mb-3 sm:mb-0">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">About</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms</Link>
          </motion.div>
        </div>
        
        <div className="flex gap-6">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/advertising" className="text-sm text-gray-600 hover:text-gray-900">Advertising</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/settings" className="text-sm text-gray-600 hover:text-gray-900">Settings</Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;