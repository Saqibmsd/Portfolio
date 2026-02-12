"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

// --- HeaderButton ---
const HeaderButton = ({ onClick }) => {
  return (
    <motion.button
      whileHover="hover"
      initial="initial"
      onClick={onClick}
      className="relative group flex items-center gap-3 bg-white text-black p-1 pr-6 rounded-full overflow-hidden shadow-lg cursor-pointer"
    >
      <motion.div
        variants={{
          initial: { x: "10%", width: "30px", opacity: 0 },
          hover: { x: 0, width: "calc(100% - 8px)", opacity: 1 },
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1 h-[calc(100%-8px)] rounded-full bg-[#FF5F00] z-0"
      />
      <motion.div
        variants={{
          initial: { backgroundColor: "#FF5F00", color: "#ffffff" },
          hover: { backgroundColor: "#FF5F00", color: "#ffffff" },
        }}
        transition={{ duration: 0.4 }}
        className="relative z-10 p-2 rounded-full flex items-center justify-center"
      >
        <motion.div
          variants={{
            initial: { x: 0 },
            hover: { x: [0, 20, -20, 0] },
          }}
          transition={{ duration: 0.4, times: [0, 0.3, 0.31, 1] }}
        >
          <ArrowRight size={19} />
        </motion.div>
      </motion.div>
      <div className="relative z-10 overflow-hidden h-[20px]">
        <motion.div
          variants={{
            initial: { y: 0 },
            hover: { y: -20 },
          }}
          transition={{ duration: 0.4 }}
          className="flex flex-col"
        >
          <span className="font-bold text-sm leading-[20px] text-black block">
            View Site
          </span>
          <span className="font-bold text-sm leading-[20px] text-white block">
            View Site
          </span>
        </motion.div>
      </div>
    </motion.button>
  );
};

// --- Updated handleScroll ---
const handleScroll = (e, href, router) => {
  if (href.startsWith("/#")) {
    const hash = href.replace("/", "");
    const id = hash.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      if (e) e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", hash);
    }
  } else if (href === "/") {
    if (e) e.preventDefault();
    router.push("/");
  }
};

// --- Hero Component ---
const NovaHero = () => {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Result Section Images Array
  const resultImages = [
    "https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68bd33eae013dd378a870fe1_2.avif",
    "https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68bd33edafa2d3baffce6e25_3.avif",
    "https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68bd33f1924c1f3a2bd8bd0f_4.avif",
    "https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68bd33f34447266cc1fc81b1_5.avif",
  ];

  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 200, damping: 50 });
  const scale = useTransform(smoothScrollY, [0, 300], [1, 1.2]);

  const phrases = ["Star Blox", "Cosmic Blox"];

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return <section className="min-h-screen w-full bg-[#141414]" />;

  return (
    <div className="w-full overflow-hidden flex flex-col min-h-screen bg-black">
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden rounded-b-[40px] md:rounded-b-[80px] pt-20 md:pt-2">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src="https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68bd33e0e57b111749f34daf_0.avif"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-60"
            style={{ scale }}
          />
        </div>

        <div className="relative z-10 w-full pb-18 md:pb-12">
          <div className="max-w-[1550px] mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12 mb-8 md:mb-16">
              <div className="flex-1 text-start">
                <p className="text-[#FF5F00] text-sm md:text-xl font-bold mb-2 uppercase tracking-widest">
                  2025
                </p>
                <h1 className="text-white font-black leading-[0.9] md:leading-[0.8] tracking-tighter text-4xl md:text-5xl lg:text-[70px] xl:text-[100px]">
                  <span className="inline-flex min-h-[1em]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={index}
                        className="inline-flex"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        {phrases[index].split("").map((char, charIndex) => (
                          <motion.span
                            key={`${index}-${charIndex}`}
                            variants={{
                              hidden: { opacity: 0 },
                              visible: {
                                opacity: 1,
                                transition: { delay: charIndex * 0.1 },
                              },
                              exit: {
                                opacity: 0,
                                transition: {
                                  delay:
                                    (phrases[index].length - charIndex) * 0.1,
                                },
                              },
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
                <h2 className="text-white font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight mb-4">
                  Where ideas become stellar realities.
                </h2>
                <p className="text-white/50 text-base md:text-sm lg:text-lg leading-relaxed">
                  From concept to creation, we build experiences that shine.
                </p>
              </div>
            </div>

            <div className="w-full border-t border-white/10 z-10 pt-8 pb-12">
              <div className="max-w-[1550px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-12 gap-y-8 items-center justify-between">
                  {[
                    { id: "#Clint", title: "Mariana" },
                    { id: "#Category", title: "Branding" },
                    { id: "#Year", title: "2025" },
                  ].map((service) => (
                    <div key={service.id} className="flex flex-col group">
                      <span className="text-[#FF5F00] font-black text-[10px] md:text-xs mb-2 uppercase tracking-widest">
                        {service.id}
                      </span>
                      <h3 className="text-white font-bold text-sm md:text-xl group-hover:text-[#FF5F00] transition-colors cursor-default">
                        {service.title}
                      </h3>
                    </div>
                  ))}
                  <div className="w-fit scale-100 origin-left">
                    <HeaderButton
                      onClick={(e) => handleScroll(e, "/", router)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CHALLENGE */}
      <section className="w-full text-white py-24 px-4 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-md">
              The image features flowing abstract shapes in vibrant iridescent
              colors, blending deep blues, purples, pinks, and warm orange tones
              to create a modern and visually captivating digital artwork.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10 text-white/80 text-base md:text-lg leading-relaxed"
          >
            <p>
              This artwork presents a dynamic composition of smooth, flowing
              forms designed in a spectrum of luminous colors. The elegant
              ribbon-like structures move seamlessly, symbolizing creativity,
              innovation, and digital fluidity. The harmonious blend of shades
              creates a visually immersive experience that reflects modern
              design aesthetics.
            </p>
            <p>
              The main challenge was to transform abstract visual concepts into
              a meaningful and engaging digital experience. The goal was to
              maintain artistic depth while ensuring the design remained
              user-friendly, responsive, and optimized for performance across
              all devices.
            </p>
          </motion.div>
        </div>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-4">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-6">
              <span className="flex-1 lg:flex-none md:w-80 h-[2px] bg-[#FF5F00] order-2 md:order-1"></span>

              <h3 className="text-2xl md:text-3xl font-bold whitespace-nowrap order-1 md:order-2">
                challange
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10 text-white/80 text-base md:text-lg leading-relaxed"
          >
            <p>
              Our design approach focused on balancing artistic expression with
              functional usability. By carefully refining shapes, colors, and
              transitions, we created a visually striking interface that
              enhances user interaction and strengthens brand identity.
            </p>
            <p>
              The primary goal of the Star-Blox project was to develop a modern,
              visually appealing website that communicates creativity,
              professionalism, and innovation. We aimed to deliver a platform
              that attracts visitors, improves brand visibility, and supports
              long-term digital growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: GOAL */}
      <section className="w-full py-24 px-4 md:px-10 text-white">
        <div className="max-w-[1400px] mx-auto space-y-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full h-[280px] md:h-[450px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68bd33e6a4b3ba36eee3e838_1.avif"
              alt="Product"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <span className="flex-1 lg:flex-none md:w-80 h-[2px] bg-[#FF5F00] order-2 md:order-1"></span>

              <h3 className="text-2xl md:text-3xl font-bold whitespace-nowrap order-1 md:order-2">
                Goal
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/70 leading-relaxed text-base md:text-lg"
            >
              Our team successfully delivered a custom-designed website that is
              visually engaging, easy to navigate, and fully optimized for
              search engines. The new Star-Blox platform now effectively
              showcases services and creative work, leading to increased organic
              traffic, higher user engagement, and strong client satisfaction.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION 4: RESULT */}
      <section className="w-full py-24 px-4 md:px-10 text-white">
        <div className="max-w-[1400px] mx-auto">
          {/* 2x2 Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {resultImages.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] md:aspect-square lg:aspect-[1.1/1] rounded-[40px] overflow-hidden bg-zinc-900"
              >
                <img
                  src={src}
                  alt={`Result visual ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Content Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <span className="flex-1 lg:flex-none md:w-80 h-[2px] bg-[#FF5F00] order-2 md:order-1"></span>

              <h3 className="text-2xl md:text-3xl font-bold whitespace-nowrap order-1 md:order-2">
                Result
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-white/80 leading-relaxed text-sm md:text-[15px] lg:text-lg">
                We delivered a high-performance, visually compelling website
                optimized for speed, accessibility, and search engines. The new
                Star Blox platform increased brand visibility, boosted organic
                traffic, and strengthened customer engagement. The client
                reported higher conversions and outstanding user feedback.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NovaHero;
