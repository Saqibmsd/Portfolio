"use client";
import { motion } from "framer-motion"; // Added this

const WorkScroller = () => {
  const workImages = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=500",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=500",
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 relative w-full h-[700px] md:h-[900px] overflow-hidden -mt-32 pt-55 z-20 rounded-b-[40px] md:rounded-b-[80px]">
      {/* Title Area */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-sm mb-4">
          Behind the Designs
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
          Explore More of My Work
        </h2>
      </motion.div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-hidden">
        {/* The Motion Scroller */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }} // Moves half the width of the doubled list
          transition={{
            ease: "linear",
            duration: 30, // Adjust this number to change speed
            repeat: Infinity,
          }}
        >
          {workImages.concat(workImages).map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[250px] md:w-[350px] px-3"
            >
              <div className="rounded-[2.5rem] overflow-hidden w-full max-w-sm aspect-[3/4] border-2 border-[#ff5c00]/20 hover:border-[#ff5c00] transition-colors duration-500">
                <img
                  src={src}
                  alt={`Work ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Optional: Gradient Overlays for a "Fade" effect on the edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default WorkScroller;
