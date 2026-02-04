import React from 'react';
import Button from "../../common/Button";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      tagline: "Your brand, visually defined.",
      title: "Brand Identity Design",
      description: "Logos, typography, color systems, complete visual direction, and brand storytelling.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      id: 2,
      tagline: "Clarity behind the visuals.",
      title: "Brand Strategy",
      description: "Positioning, messaging, and creative direction aligned with your goals.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 3,
      tagline: "Ongoing expert guidance.",
      title: "Creative Consulting",
      description: "Ongoing design support, art direction, and guidance for your brand team.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.674a1 1 0 00.707-.293l4.81-4.81a1 1 0 000-1.414l-4.81-4.81A1 1 0 0014.337 6H9.663a1 1 0 00-.707.293l-4.81 4.81a1 1 0 000 1.414l4.81 4.81a1 1 0 00.707.293z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative z-10 bg-[#0a0a0a] text-white py-20 rounded-b-[80px]">
      {/* --- Header Area --- */}
      <div className="max-w-[1450px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
        <div className="max-w-xl">
          <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-sm mb-4">Services</p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            How I Can Help You
          </h2>
        </div>
        
        <div className="max-w-md flex flex-col items-start md:items-end">
          <p className="text-gray-400 text-lg leading-relaxed mb-8 md:text-right">
            From strategy to visuals, I offer tailored services to help your brand grow with clarity and impact.
          </p>
          {/* Pill-shaped Button */}
                    <Button href="/projects/dream-area" text="Get in touch" />
        </div>
      </div>

      {/* --- Services Grid --- */}
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-[#141414] rounded-[2.5rem] p-10 flex flex-col min-h-[480px] hover:ring-1 hover:ring-orange-600/30 transition-all duration-500"
          >
            {/* Orange Icon Circle */}
            <div className="w-16 h-16 bg-[#ff5c00] rounded-full flex items-center justify-center mb-auto shadow-lg shadow-orange-600/20">
              {service.icon}
            </div>

            {/* Content Bottom */}
            <div className="mt-12">
              <div className="w-full h-[1px] bg-orange-600/40 mb-8"></div>
              <p className="text-[#ff5c00] font-semibold text-sm mb-2">{service.tagline}</p>
              <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;