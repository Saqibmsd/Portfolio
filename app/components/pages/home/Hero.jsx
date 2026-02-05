"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = ["Digital Creater", "Creative Agency"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const Brands = () => {
    const brandList = [
      { name: "VERSACE", className: "font-serif tracking-widest" },
      { name: "ZARA", className: "font-sans font-bold tracking-tighter" },
      { name: "GUCCI", className: "font-serif font-semibold" },
      { name: "PRADA", className: "font-serif font-black" },
      { name: "CALVIN KLEIN", className: "font-sans font-bold" },
    ];

    const duplicatedBrands = [...brandList, ...brandList];

    return (
      <div className="w-full overflow-hidden max-w-[1550px] mx-auto bg-[#0a0a0a]">
        {/* MODIFIED: Adjusted border radius for mobile (rounded-b-[40px]) vs desktop */}
        <div className="relative bg-[#141414] w-full py-8 md:py-16 overflow-hidden rounded-b-[40px] md:rounded-b-[80px]">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-20 pointer-events-none bg-gradient-to-r from-[#141414] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-20 pointer-events-none bg-gradient-to-l from-[#141414] to-transparent" />

          <div className="flex">
            <motion.div
              className="flex items-center no-scrollbar"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {duplicatedBrands.map((brand, i) => (
                <div key={i} className="flex-shrink-0 select-none pr-10 md:pr-20 lg:pr-28">
                  <h2 className={`text-white text-xl md:text-3xl lg:text-[44px] ${brand.className}`}>
                    {brand.name}
                  </h2>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  if (!mounted) return <section className="min-h-screen w-full bg-[#141414]" />;

  return (
    <div className="w-full overflow-hidden max-w-[1550px] mx-auto flex flex-col min-h-screen">
      {/* MODIFIED: Changed h-[100vh] to min-h-screen and adjusted mobile radius */}
      <section className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden rounded-b-[40px] md:rounded-b-[80px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover grayscale-[30%] opacity-60"
          />
        </div>

        {/* MODIFIED: Added px-6 for mobile spacing and adjusted gap/margins */}
        <div className="relative z-10 w-full pb-8 md:pb-12 px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12 mb-8 md:mb-16">
            <div className="flex-1 text-start">
              {/* MODIFIED: Scaled text-sm to text-xl */}
              <p className="text-[#FF5F00] text-sm md:text-xl font-bold mb-2 uppercase tracking-widest">
                Hey, I'm a
              </p>
              {/* MODIFIED: Scaled text-4xl (mobile) to text-[100px] (desktop) */}
              <h1 className="text-white font-black leading-[0.9] md:leading-[0.8] tracking-tighter text-4xl md:text-5xl lg:text-[70px] xl:text-[100px]">
                <span className="inline-flex min-h-[1em]">
                  <AnimatePresence mode="wait">
                    <motion.span key={index} className="inline-flex" initial="hidden" animate="visible" exit="exit">
                      {phrases[index].split("").map((char, charIndex) => (
                        <motion.span
                          key={`${index}-${charIndex}`}
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { delay: charIndex * 0.12 } },
                            exit: { opacity: 0, transition: { delay: (phrases[index].length - charIndex) * 0.12 } },
                          }}
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
            </div>

            <div className="flex-1 max-w-sm text-start">
              {/* MODIFIED: Reduced mobile h2 size */}
              <h2 className="text-white font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight mb-4">
                Great design should feel invisible.
              </h2>
              <p className="text-white/50 text-base md:text-sm lg:text-lg leading-relaxed">
                From logo to language, I build brands that connect and convert.
              </p>
            </div>
          </div>
        </div>

        {/* MODIFIED: Adjusted grid gaps and padding for mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-12 gap-y-8 pt-8 border-t border-white/10 z-10 w-full px-6 pb-12 items-center justify-between">
          {[
            { id: "#01", title: "Brand Strategy" },
            { id: "#02", title: "Brand Identity Design" },
            { id: "#03", title: "Packaging Design" },
            { id: "#04", title: "Creative Direction" },
          ].map((service) => (
            <div key={service.id} className="flex flex-col group">
              <span className="text-[#FF5F00] font-black text-[10px] md:text-xs mb-2 uppercase tracking-widest">
                {service.id}
              </span>
              {/* MODIFIED: Reduced font size on mobile for service titles */}
              <h3 className="text-white font-bold text-sm md:text-xl group-hover:text-[#FF5F00] transition-colors cursor-default">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <Brands />
    </div>
  );
};

export default Hero;