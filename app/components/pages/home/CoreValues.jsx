import React from 'react';

const CoreValues = () => {
  const values = [
    { title: "Mission", desc: "To help brands express their unique value with clarity and beauty." },
    { title: "Vision", desc: "A world where thoughtful design drives meaningful connections." },
    { title: "Values", desc: "Simplicity, empathy, creativity, and strategic thinking." },
    { title: "Design Philosophy", desc: "Good design solves problems and tells stories that stick." }
  ];

  return (
    <section className="h-screen relative w-full h-[700px] md:h-[900px] overflow-hidden -mt-32 pt-55 z-10">
      {/* 1. Full-Width Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68bd341e34845d434f3fb083_1.avif" 
          alt="My Core Values"
          className="w-full h-full object-cover"
        />
        {/* Subtle dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      {/* 2. Content Centered at Bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 px-6">
        
        {/* Header Text */}
        <div className="max-w-[1450px] w-full flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/20 pb-8">
          <div className="text-left">
            <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs mb-2">Values</p>
            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">My Core Values</h2>
          </div>
          <div className="max-w-md mt-4 md:mt-0">
            <p className="text-gray-300 text-sm md:text-base text-left md:text-right leading-relaxed">
              My mission, vision, and values are at the core of every project—guiding how I think, create, and collaborate to build brands that matter.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="max-w-[1450px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-wider">{v.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;