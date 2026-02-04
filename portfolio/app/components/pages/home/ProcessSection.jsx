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
    <section className="bg-[#1b1a1a] text-white relative z-30 py-24 rounded-b-[80px]">
      {/* --- Header Area --- */}
      <div className="max-w-[1450px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
        <div className="max-w-xl">
          <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-sm mb-4">Step-by-Step</p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            My Process, Step by Step
          </h2>
        </div>
        
        <div className="max-w-md">
          <p className="text-gray-400 text-lg leading-relaxed">
            From first ideas to final assets, I follow a clear, collaborative 
            process—built to turn your vision into a brand that works and lasts.
          </p>
        </div>
      </div>

      {/* --- Process List --- */}
      <div className="max-w-[1450px] mx-auto space-y-4">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="group bg-[#111111] rounded-3xl p-8 md:p-12 transition-all duration-300 hover:bg-[#181818] border border-transparent hover:border-white/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
              
              {/* Number and Title Section */}
              <div className="md:col-span-5 flex items-center gap-8">
                {/* Vertical Orange Accent Line */}
                <div className="w-[2px] h-10 bg-[#ff5c00] shadow-[0_0_10px_rgba(255,92,0,0.5)]"></div>
                
                <div className="flex items-baseline gap-6">
                  <span className="text-3xl md:text-4xl font-bold text-white leading-none">
                    {step.number}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Description Section */}
              <div className="md:col-span-7">
                <p className="text-gray-400 text-base md:text-lg leading-relaxed md:pl-12 border-l-0 md:border-l border-zinc-800">
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