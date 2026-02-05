import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your vision, audience, and goals."
    },
    {
      number: "02",
      title: "Strategy",
      description: "Defining your unique positioning and messaging."
    },
    {
      number: "03",
      title: "Design",
      description: "Creating your visual identity system and touchpoints."
    },
    {
      number: "04",
      title: "Delivery",
      description: "Providing all assets, brand guidelines, and support."
    },
    {
      number: "05",
      title: "Ongoing Support",
      description: "I stay available for updates, extensions, and evolution."
    }
  ];

  return (
    /* MODIFIED: Standardized rounded corners and padding for mobile */
    <section className="bg-[#1b1a1a] text-white relative z-30 py-16 md:py-24 rounded-b-[40px] md:rounded-b-[80px] px-6">
      {/* --- Header Area --- */}
      <div className="max-w-[1450px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 mb-16 md:mb-20">
        <div className="max-w-xl">
          <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Step-by-Step</p>
          {/* MODIFIED: Responsive heading size */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
            My Process, Step by Step
          </h2>
        </div>
        
        <div className="max-w-md">
          <p className="text-gray-400 text-base md:text-lg lg:text-1xl xl:text-2xl leading-relaxed">
            From first ideas to final assets, I follow a clear, collaborative 
            process—built to turn your vision into a brand that works and lasts.
          </p>
        </div>
      </div>

      {/* --- Process List --- */}
      <div className="max-w-[1450px] mx-auto space-y-4 md:space-y-6">
        {steps.map((step, index) => (
          <div 
            key={index} 
            /* MODIFIED: Responsive padding */
            className="group bg-[#111111] rounded-2xl md:rounded-3xl p-6 md:p-12 transition-all duration-300 hover:bg-[#181818] border border-transparent hover:border-white/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-8">
              
              {/* Number and Title Section */}
              <div className="md:col-span-5 flex items-center gap-6 md:gap-8">
                {/* Vertical Orange Accent Line */}
                <div className="w-[2px] h-8 md:h-10 bg-[#ff5c00] shadow-[0_0_10px_rgba(255,92,0,0.5)] shrink-0"></div>
                
                <div className="flex items-baseline gap-4 md:gap-6">
                  <span className="text-2xl md:text-4xl font-bold text-white leading-none">
                    {step.number}
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold tracking-tight">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Description Section */}
              <div className="md:col-span-7">
                {/* MODIFIED: Removed border on mobile (border-l-0) and adjusted spacing */}
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed md:pl-12 border-l-0 md:border-l border-zinc-800 ms-6">
                  {step.description}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;