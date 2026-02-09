"use client";

import React, { useRef } from "react"; // Added useRef
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const CoreValues = () => {
   // 1. Create a reference to the section
    const containerRef = useRef(null);
  
    // 2. Track scroll specifically for this container
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"], // Starts when top of section enters bottom of viewport
    });
  
    // 3. Smooth out the progress and map it to scale
    const smoothProgress = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 50,
    });
  
    // Maps the scroll progress (0 to 1) to a scale (1 to 1.3)
    // When you scroll down, it zooms in; when you scroll back up, it zooms out.
    const scale = useTransform(smoothProgress, [0, 1], [1, 1.3]);
  const values = [
    {
      title: "Mission",
      desc: "To help brands express their unique value with clarity and beauty.",
    },
    {
      title: "Vision",
      desc: "A world where thoughtful design drives meaningful connections.",
    },
    {
      title: "Values",
      desc: "Simplicity, empathy, creativity, and strategic thinking.",
    },
    {
      title: "Design Philosophy",
      desc: "Good design solves problems and tells stories that stick.",
    },
  ];

  // 1. Define the container variants (handles the staggering)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card (in seconds)
      },
    },
  };

  // 2. Define the item variants (handles the individual card animation)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    /* MODIFIED: Used min-h to prevent content overflow on mobile and corrected pt/mt */
    <section
      ref={containerRef} 
      className="relative w-full min-h-[800px] md:h-[900px] overflow-hidden -mt-24 md:-mt-32 pt-32 md:pt-40 z-10">
      {/* 1. Full-Width Background Image */}
      {/* Background Image Container */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <motion.img
                src="https://cdn.prod.website-files.com/68b29a3a3c940a53d3f1b4e0/68b3b782c3319daa27b71702_1.webp"
                alt="Hero Background"
                className="w-full h-full object-cover opacity-60"
                style={{ scale }} // Applying the dynamic scale
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

      {/* 2. Content Container */}
      {/* MODIFIED: pb-20 for extra room on mobile */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-20 px-1 md:px-6"
      >
        {/* Header Text */}
        {/* MODIFIED: items-start for mobile, items-end for desktop */}
        <div className="max-w-[1450px] w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 border-b border-white/20 pb-8">
          <div className="text-left">
            <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs mb-2">
              Values
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
              My Core Values
            </h2>
          </div>
          <div className="max-w-md mt-6 md:mt-0">
            {/* MODIFIED: Aligned text left for consistency on mobile */}
            <p className="text-gray-300 text-base md:text-md lg:text-1xl xl:text-2xl leading-relaxed">
              My mission, vision, and values are at the core of every
              project—guiding how I think, create, and collaborate to build
              brands that matter.
            </p>
          </div>
        </div>
        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animates when 20% of grid is visible
          className="max-w-[1450px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
         >
          {values.map((v, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <h3 className="text-[#ff5c00] lg:text-white group-hover:text-[#ff5c00] font-bold text-xs mb-3 uppercase tracking-wider transition-colors">
                {v.title}
              </h3>
              <p className="text-gray-300 md:text-gray-400 text-sm leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoreValues;
