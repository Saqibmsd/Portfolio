import React from 'react';

const ApproachSection = () => {
  const approaches = [
    {
      title: "Strategy First",
      description: "Every design decision is rooted in a clear brand strategy. No guesswork.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800", // Replace with your watch image
      size: "lg:col-span-8",
      bg: "bg-zinc-900"
    },
    {
      title: "Design That Resonates",
      description: "Visuals that connect emotionally and communicate clearly.",
      size: "lg:col-span-4",
      bg: "bg-[#ff5c00]" // Solid Orange
    },
    {
      title: "Future-Proof Systems",
      description: "Design that's flexible, scalable, and easy to use.",
      size: "lg:col-span-4",
      bg: "bg-gradient-to-b from-[#ff5c00] to-black" // Orange Gradient
    },
    {
      title: "Consistency Across Touchpoints",
      description: "From logo to social templates, I help you stay on-brand everywhere.",
      image: "https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68bd341e34845d434f3fb083_1.avif", // Replace with your bike image
      size: "lg:col-span-8",
      bg: "bg-zinc-900"
    }
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-24">
      {/* Header Area */}
      <div className="max-w-[1450px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
        <div className="max-w-xl">
          <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-sm mb-4">
            Intentional. Collaborative. Built to Last.
          </p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            How I Approach Every Project
          </h2>
        </div>
        <div className="max-w-sm md:mt-12">
          <p className="text-gray-400 text-lg leading-relaxed">
            I design with clarity and purpose—blending strategy and style to 
            build brands that look great and work everywhere.
          </p>
        </div>
      </div>

      {/* Grid Area */}
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {approaches.map((item, index) => (
          <div 
            key={index} 
            className={`${item.size} relative overflow-hidden rounded-[2.5rem] p-10 min-h-[450px] flex flex-col justify-end group cursor-default ${item.bg}`}
          >
            {/* Background Image if exists */}
            {item.image && (
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
            )}

            {/* Content */}
            <div className="relative z-10">
              <div className="w-full h-[1px] bg-orange-600/50 mb-6"></div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm md:text-base max-w-xs">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApproachSection;