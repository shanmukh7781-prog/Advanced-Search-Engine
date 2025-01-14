import React from 'react';
import { motion } from 'framer-motion';
import { useAnimatedCircles } from '../hooks/useAnimatedCircles';

const AnimatedBackground = () => {
  const circles = useAnimatedCircles(10);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20"
          initial={circle.initial}
          animate={circle.animate}
          transition={circle.transition}
          style={circle.style}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;