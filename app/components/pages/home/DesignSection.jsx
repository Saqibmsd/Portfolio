"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "../../common/Button";

const DesignSection = () => {
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
    <section className="bg-[#0a0a0a] text-white py-20">
      {/* --- Top Header --- */}
      <div className="max-w-[1450px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
        <div className="md:w-3/5">
          <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-sm mb-4">
            Behind the Designs
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight">
            Shaping Experiences That <br className="hidden md:block" /> Make
            Life Simpler
          </h2>
        </div>

        <div className="md:w-1/3 flex flex-col items-start">
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I'm a product designer focused on building clean, intuitive
            interfaces that solve real-world problems.
          </p>
          <Button href="/projects/dream-area" text="Read more" />
        </div>
      </div>

      {/* --- Image Grid --- */}
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -10 }}
            className="rounded-2xl overflow-hidden aspect-[3/4] bg-zinc-900"
          >
            <img
              src={project.img}
              alt={project.alt}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-pointer scale-105 hover:scale-100"
            />
          </motion.div>
        ))}
      </div>

      {/* --- Bottom Header --- */}
      <div className="max-w-[1450px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10 border-t border-zinc-800 pt-16">
        <div className="md:w-3/5">
          <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-sm mb-4">
            Featured Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Designing Bold Brands <br className="hidden md:block" /> That Leave
            a Lasting Impression
          </h2>
        </div>

        <div className="md:w-1/3">
          <p className="text-gray-400 text-lg leading-relaxed">
            With a passion for clarity, aesthetics, and emotion-driven design, I
            partner with founders and teams to create visual identities that
            truly connect.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
