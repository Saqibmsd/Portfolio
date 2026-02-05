import React from 'react';
import Button from "../../common/Button";

const ContactCTA = () => {
  return (
    <section className="relative w-full h-[700px] md:h-[900px] overflow-hidden -mt-32 z-0">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68bd341e34845d434f3fb083_1.avif" 
          alt="Start Your Brand"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Centered Content with extra Top Padding to account for the overlap */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-32">
        <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
          Start Your Brand
        </p>
        
        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6">
          Start Your Brand
        </h2>
        
        <p className="text-white/90 text-sm md:text-xl max-w-2xl mb-10 leading-relaxed">
          Ready to make something amazing together? Whether you're starting fresh 
          or evolving your brand, I'm here to help.
        </p>

        <Button href="/contact" text="Get in Touch" />
      </div>
    </section>
  );
};

export default ContactCTA;