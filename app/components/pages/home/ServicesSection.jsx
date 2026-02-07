"use client"
import React, { useRef, useState, useEffect } from "react";
import Button from "../../common/Button";
import { motion, useScroll, useTransform } from "framer-motion";

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkRes = () => setIsDesktop(window.innerWidth >= 768);
    checkRes();
    window.addEventListener("resize", checkRes);
    return () => window.removeEventListener("resize", checkRes);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax movement for side cards on desktop
  const moveLeft = useTransform(scrollYProgress, [0.1, 0.4], [150, 0]);
  const moveRight = useTransform(scrollYProgress, [0.1, 0.4], [-150, 0]);

  const services = [
    {
      id: 1,
      tagline: "Your brand, visually defined.",
      title: "Brand Identity Design",
      img: "/path-to-your-image1.jpg", // Add your image paths here
      description: "Logos, typography, color systems, complete visual direction, and brand storytelling.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      id: 2,
      tagline: "Clarity behind the visuals.",
      title: "Brand Strategy",
      img: "/path-to-your-image2.jpg",
      description: "Positioning, messaging, and creative direction aligned with your goals.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 3,
      tagline: "Ongoing expert guidance.",
      title: "Creative Consulting",
      img: "/path-to-your-image3.jpg",
      description: "Ongoing design support, art direction, and guidance for your brand team.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.674a1 1 0 00.707-.293l4.81-4.81a1 1 0 000-1.414l-4.81-4.81A1 1 0 0014.337 6H9.663a1 1 0 00-.707.293l-4.81 4.81a1 1 0 000 1.414l4.81 4.81a1 1 0 00.707.293z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="relative z-10 bg-[#0a0a0a] text-white py-16 md:py-20 rounded-b-[40px] md:rounded-b-[80px] px-6">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-[1450px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 mb-16 md:mb-20"
      >
        <div className="max-w-xl">
          <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Services</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">How I Can Help You</h2>
        </div>
        <div className="max-w-md flex flex-col items-start">
          <p className="text-gray-400 text-base md:text-lg lg:text-1xl xl:text-2xl leading-relaxed mb-6 md:mb-8">
            From strategy to visuals, I offer tailored services to help your brand grow with clarity and impact.
          </p>
          <Button href="/projects/dream-area" text="Get in touch" />
        </div>
      </motion.div>

      <div className="max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => {
          let motionStyle = {};
          if (isDesktop) {
            if (index === 0) motionStyle = { x: moveLeft };
            if (index === 2) motionStyle = { x: moveRight };
          }

          return (
            <motion.div
              key={service.id}
              style={motionStyle}
              initial="initial"
              whileHover="hover"
              className={`group flex flex-col bg-[#141414] rounded-[2rem] md:rounded-[2.5rem] p-6 lg:p-10 min-h-[300px] lg:min-h-[480px] hover:ring-1 hover:ring-orange-600/30 transition-all duration-500 overflow-hidden ${
                index === 1 ? "z-20" : "z-10"
              }`}
            >
              {/* Image Section with Hover Effect */}
              {/* <div className="relative w-full h-48 mb-8 rounded-xl overflow-hidden">
                <motion.img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  variants={{
                    initial: { filter: "grayscale(100%)", scale: 1 },
                    hover: { filter: "grayscale(0%)", scale: 1.1 },
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                />
              </div> */}

              {/* Icon Circle */}
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#ff5c00] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-600/20">
                {service.icon}
              </div>

              {/* Content */}
              <div className="mt-8 lg:mt-25">
                <div className="w-full h-[1px] bg-orange-600/40 mb-6 md:mb-8"></div>
                <p className="text-[#ff5c00] font-semibold text-xs lg:text-sm mb-2">{service.tagline}</p>
                <h3 className="text-2xl md:text-xl lg-text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">{service.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;