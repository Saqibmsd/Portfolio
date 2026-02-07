"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../../common/Button";

const DesignSection = () => {
  const sectionRef = useRef(null);

  // State to track if we are on desktop
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check width on mount and on resize
    const checkRes = () => setIsDesktop(window.innerWidth >= 768);
    checkRes();
    window.addEventListener("resize", checkRes);
    return () => window.removeEventListener("resize", checkRes);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const moveLeft = useTransform(scrollYProgress, [0.1, 0.4], [300, -0]);
  const moveRight = useTransform(scrollYProgress, [0.1, 0.4], [-300, 0]);

  const projects = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000",
      alt: "Fashion Layout",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000",
      alt: "Audio Product",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=1000",
      alt: "Skincare Product",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0a0a0a] text-white px-6 py-12 md:py-20 overflow-hidden"
    >
      {/* --- Top Header --- */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-[1450px] mx-auto flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10 mb-12 md:mb-16"
      >
        <div className="md:w-3/5">
          <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
            Behind the Designs
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.2] md:leading-[1.1] tracking-tight">
            Shaping Experiences That <br className="hidden md:block" /> Make
            Life Simpler
          </h2>
        </div>

        <div className="md:w-1/3 flex flex-col items-start">
          <p className="text-gray-400 text-base md:text-lg lg:text-1xl xl:text-2xl leading-relaxed mb-6 md:mb-8">
            I'm a product designer focused on building clean, intuitive
            interfaces that solve real-world problems.
          </p>
          <Button href="/projects/dream-area" text="Read more" />
        </div>
      </motion.div>

      {/* --- Image Grid --- */}
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project, index) => {
          let motionStyle = {};

          // MODIFIED: Only assign motion values if isDesktop is true
          if (isDesktop) {
            if (index === 0) motionStyle = { x: moveLeft };
            if (index === 2) motionStyle = { x: moveRight };
          }

          return (
            <motion.div
              key={project.id}
              style={motionStyle}
              className={`group relative rounded-2xl aspect-[3/4] bg-zinc-900 overflow-hidden ${
                index === 1 ? "z-20" : "z-10"
              }`}
              // This triggers all children to look for the "hover" variant
              initial="initial"
              whileHover="hover"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden z-0">
                <motion.img
                  src={project.img}
                  alt={project.alt}
                  className="w-full h-full object-cover cursor-pointer"
                  variants={{
                    initial: {
                      filter: "grayscale(100%)",
                      scale: 1,
                      y: 0,
                    },
                    hover: {
                      filter: "grayscale(0%)",
                      scale: 1.1,
                      y: -10,
                    },
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1], // Smooth cubic-bezier
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DesignSection;
