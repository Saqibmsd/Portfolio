

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Circle = () => {
  // Assuming this is used within a scroll context or tracking global scroll
  // If this is for a specific section, you'd add a ref to useScroll
  const { scrollYProgress } = useScroll();

  // 1. Scale rapidly to fill the screen
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 25]);

  // 2. Hide it smoothly (changed 0.4, 0.4 to 0.4, 0.5 to avoid a "pop")
  const opacity = useTransform(scrollYProgress, [0.4, 0.5], [1, 0]);

  // 3. Map 'display' to remove it from the DOM flow
  const display = useTransform(scrollYProgress, (pos) =>
    pos >= 0.5 ? "none" : "block"
  );

  return (
    <motion.div 
      style={{ display, opacity }}
      className="absolute inset-0 flex items-start justify-center overflow-hidden -z-10 pointer-events-none mt-16"
    >
      <motion.div
        style={{ scale }}
        className="w-40 h-40 md:w-64 md:h-64 border-[40px] md:border-[60px] border-[#ff5c00] rounded-full flex-shrink-0"
      />
    </motion.div>
  );
};

export default Circle;
