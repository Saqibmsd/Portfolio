"use client";

import React, { useRef } from "react"; // Added useRef
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Button from "../../common/Button";

const ContactCTA = () => {
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

  return (
    // 4. Attach the ref here
    <section
      ref={containerRef}
      className="relative w-full h-[700px] md:h-[900px] overflow-hidden -mt-32 z-0"
    >
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

      {/* Centered Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-1 md:px-6 pt-32">
        <motion.p
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs md:text-sm mb-4"
        >
          Start Your Brand
        </motion.p>

        <motion.h2
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          Start Your Brand
        </motion.h2>

        <motion.p
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white/90 text-sm md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Ready to make something amazing together? Whether you're starting
          fresh or evolving your brand, I'm here to help.
        </motion.p>

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Button href="/contact" text="Get in Touch" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
