"use client";
import React, { useRef } from "react";
import Button from "../../common/Button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Destructure 'src', 'alt', and 'className' directly from props
const ParallaxImage = ({ src, alt, className }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // REDUCED RANGE: From 15% down to 5% for a subtle, high-end look
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div 
      ref={ref} 
      className="relative w-full h-full overflow-hidden"
      style={{ isolation: 'isolate' }}
    >
      <motion.img
        src={src}
        alt={alt}
        className={`${className} absolute inset-0 w-full object-cover`}
        style={{ 
          y,
          height: "110%", // Reduced from 120% since we move less now
          top: "-5%",    // Centers the image so it has room to move up/down
          willChange: "transform"
        }}
      />
    </div>
  );
};
const ApproachSection = () => {
  const approaches = [
    {
      title: "Strategy First",
      description:
        "Every design decision is rooted in a clear brand strategy. No guesswork.",
      image:
        "https://cdn.prod.website-files.com/68b29a3a3c940a53d3f1b4e0/68bd3840319fe6b1e02aa14a_1.avif",
      size: "lg:col-span-8",
      bg: "bg-zinc-900",
    },
    {
      title: "Design That Resonates",
      description: "Visuals that connect emotionally and communicate clearly.",
      size: "lg:col-span-4",
      bg: "bg-gradient-to-b from-[#ff5c00] to-black",
    },
    {
      title: "Future-Proof Systems",
      description: "Design that's flexible, scalable, and easy to use.",
      size: "lg:col-span-4",
      bg: "bg-gradient-to-b from-[#ff5c00] to-black",
    },
    {
      title: "Consistency Across Touchpoints",
      description:
        "From logo to social templates, I help you stay on-brand everywhere.",
      image:
        "https://cdn.prod.website-files.com/68b29a3a3c940a53d3f1b4e0/68b328d0ca27902565def169_3.webp",
      size: "lg:col-span-8",
      bg: "bg-zinc-900",
    },
  ];

  return (
    /* MODIFIED: Added px-6 and adjusted py for mobile */
    <section className="bg-[#0a0a0a] text-white py-16 md:py-24 px-4 md:px-6">
      {/* Header Area */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-[1450px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 mb-12 md:mb-16"
       >
        <div className="max-w-xl">
          {/* MODIFIED: Scaled text size for mobile */}
          <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
            Intentional. Collaborative. Built to Last.
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
            How I Approach Every <br className="hidden md:block" /> Project
          </h2>
        </div>
        <div className="max-w-sm md:mt-12">
          {/* MODIFIED: Optimized text size for mobile */}
          <p className="text-gray-400 text-base md:text-lg lg:text-1xl xl:text-2xl leading-relaxed mb-6 md:mb-8">
            I design with clarity and purpose—blending strategy and style to
            build brands that look great and work everywhere.
          </p>
          <Button href="/projects/dream-area" text="Read more" />
        </div>
      </motion.div>

      {/* Grid Area */}
      <motion.div
       className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {approaches.map((item, index) => (
          <div
            key={index}
            /* MODIFIED: Responsive min-height and border radius */
            className={`${item.size} relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 min-h-[350px] md:min-h-[450px] flex flex-col justify-end group cursor-default ${item.bg}`}
           >
            {/* Background Image if exists */}
            {item.image && (
              <div className="absolute inset-0 z-0">
                <ParallaxImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
            )}

            {/* Content */}
            <div className="relative z-10">
              <div className="w-full h-[1px] bg-orange-600/50 mb-6"></div>
              {/* MODIFIED: Scaled title size */}
              <h3 className="text-xl md:text-3xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-xs md:text-base max-w-xs">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ApproachSection;
