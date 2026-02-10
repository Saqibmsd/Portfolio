"use client";
import React, { useRef } from "react";
import Button from "../../common/Button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// UPDATED: Now accepts children to wrap the entire project block
const AnimatedProjectWrapper = ({ children }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"], // Adjusted for smoother trigger
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const translateZ = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  const springConfig = { stiffness: 60, damping: 25, mass: 1 };
  const smoothScale = useSpring(scale, springConfig);
  const smoothTranslateY = useSpring(translateY, springConfig);
  const smoothTranslateZ = useSpring(translateZ, springConfig);

  return (
    <div
      ref={targetRef}
      style={{
        perspective: "1500px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          scale: smoothScale,
          opacity: opacity,
          y: smoothTranslateY,
          z: smoothTranslateZ,
          willChange: "transform, opacity",
        }}
        className="origin-top"
      >
        {children}
      </motion.div>
    </div>
  );
};

const ProjectDetailSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const circleScale = useTransform(scrollYProgress, [0, 0.25], [1, 20]);
  const circleOpacity = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]);
  const circleDisplay = useTransform(scrollYProgress, (pos) =>
    pos >= 0.3 ? "none" : "flex"
  );

  return (
    <section
      ref={containerRef}
      id="projects"
      className="bg-[#0a0a0a] text-white py-12 md:py-20 px-4 md:px-6"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none z-0">
        <motion.div
          style={{
            scale: circleScale,
            opacity: circleOpacity,
            display: circleDisplay,
          }}
          className="w-40 h-40 md:w-64 md:h-64 -mt-65 md:mt-40 border-[40px] md:border-[60px] border-[#ff5c00] rounded-full flex-shrink-0"
        />
      </div>

      <div className="relative z-10 py-16 md:py-20">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-[1450px] -mt-[125vh] md:-mt-[125vh] lg:-mt-[120vh] mx-auto flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10 md:border-t border-zinc-800 pt-12 md:pt-16 mb-12 md:mb-16"
        >
          <div className="md:w-3/5">
            <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
              Featured Projects
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
              Designing Bold Brands <br className="hidden md:block" /> That
              Leave a Lasting Impression
            </h2>
          </div>

          <div className="md:w-1/3">
            <p className="text-gray-400 text-base md:text-lg lg:text-1xl xl:text-2xl leading-relaxed">
              With a passion for clarity, aesthetics, and emotion-driven design,
              I partner with founders and teams to create visual identities that
              truly connect.
            </p>
          </div>
        </motion.div>

        <div className="relative z-10 md:mt-30">
          {/* --- Dream Area --- */}
          <AnimatedProjectWrapper>
            <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center mb-10 md:mb-15 lg:20 mt-20 md:mt-60">
              <div className="lg:col-span-7">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3]">
                  <motion.img
                    src="https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68bd341e34845d434f3fb083_1.avif"
                    alt="Dream Area Project"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-end self-stretch">
                <div className="w-full h-[4px] bg-orange-600 mb-6 md:mb-8 max-w-auto md:max-w-[280px]"></div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 tracking-tight">
                  Dream Area
                </h2>
                <p className="text-gray-400 text-base md:text-lg xl:text-2xl leading-relaxed mb-8 md:mb-10 max-w-md">
                  The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.
                </p>
                <Button href="/projects/dream-area" text="Read more" />
              </div>
            </div>
          </AnimatedProjectWrapper>

          {/* --- Star Blox --- */}
          <AnimatedProjectWrapper>
            <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center mb-10 md:mb-20">
              <div className="lg:col-span-5 flex flex-col justify-end self-stretch order-last lg:order-first">
                <div className="w-full h-[4px] bg-orange-600 mb-6 md:mb-8 max-w-auto md:max-w-[280px]"></div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 tracking-tight">
                  Star Blox
                </h2>
                <p className="text-gray-400 text-base md:text-lg xl:text-2xl leading-relaxed mb-8 md:mb-10 max-w-md">
                  The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.
                </p>
                <Button href="/projects/star-blox" text="Read more" />
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3]">
                  <motion.img
                    src="https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68bd33e0e57b111749f34daf_0.avif"
                    alt="Star Blox Project"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </AnimatedProjectWrapper>

          {/* --- Nova Scene --- */}
          <AnimatedProjectWrapper>
            <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3]">
                  <motion.img
                    src="https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68b3d62a11187a9979efda31_1.avif"
                    alt="Nova Scene Project"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-end self-stretch">
                <div className="w-full h-[4px] bg-orange-600 mb-6 md:mb-8 max-w-auto md:max-w-[280px]"></div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 tracking-tight">
                  Nova Scene
                </h2>
                <p className="text-gray-400 text-base md:text-lg xl:text-2xl leading-relaxed mb-8 md:mb-10 max-w-md">
                  The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.
                </p>
                <Button href="/projects/nova-scene" text="Read more" />
              </div>
            </div>
          </AnimatedProjectWrapper>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailSection;