import React from 'react';

const CoreValues = () => {
  const values = [
    { title: "Mission", desc: "To help brands express their unique value with clarity and beauty." },
    { title: "Vision", desc: "A world where thoughtful design drives meaningful connections." },
    { title: "Values", desc: "Simplicity, empathy, creativity, and strategic thinking." },
    { title: "Design Philosophy", desc: "Good design solves problems and tells stories that stick." }
  ];

  return (
    /* MODIFIED: Used min-h to prevent content overflow on mobile and corrected pt/mt */
    <section className="relative w-full min-h-[800px] md:h-[900px] overflow-hidden -mt-24 md:-mt-32 pt-32 md:pt-40 z-10">
      {/* 1. Full-Width Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68bd341e34845d434f3fb083_1.avif" 
          alt="My Core Values"
          className="w-full h-full object-cover"
        />
        {/* MODIFIED: Increased gradient strength for better mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      {/* 2. Content Container */}
      {/* MODIFIED: pb-20 for extra room on mobile */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-20 px-6">
        
        {/* Header Text */}
        {/* MODIFIED: items-start for mobile, items-end for desktop */}
        <div className="max-w-[1450px] w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 border-b border-white/20 pb-8">
          <div className="text-left">
            <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs mb-2">Values</p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">My Core Values</h2>
          </div>
          <div className="max-w-md mt-6 md:mt-0">
            {/* MODIFIED: Aligned text left for consistency on mobile */}
            <p className="text-gray-300 text-base md:text-md lg:text-1xl xl:text-2xl leading-relaxed">
              My mission, vision, and values are at the core of every project—guiding how I think, create, and collaborate to build brands that matter.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="max-w-[1450px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              {/* MODIFIED: Added a small hover accent to the cards */}
              <h3 className="text-[#ff5c00] lg:text-white group-hover:text-[#ff5c00] font-bold text-xs mb-3 uppercase tracking-wider transition-colors">
                {v.title}
              </h3>
              <p className="text-gray-300 md:text-gray-400 text-sm leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;