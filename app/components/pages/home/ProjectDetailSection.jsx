import React from "react";
import Button from "../../common/Button";

const ProjectDetailSection = () => {
  return (
    /* MODIFIED: Added px-6 and standardized vertical padding */
    <section className="bg-[#0a0a0a] text-white py-12 md:py-20 px-6">
      {/* --- Dream Area --- */}

      {/* --- Dream Header --- */}
      <div className="max-w-[1450px] mx-auto flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10 border-t border-zinc-800 pt-12 md:pt-16 mb-12 md:mb-16">
        <div className="md:w-3/5">
          <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
            Featured Projects
          </p>
          {/* MODIFIED: Reduced size on mobile (text-3xl) */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
            Designing Bold Brands <br className="hidden md:block" /> That Leave
            a Lasting Impression
          </h2>
        </div>

        <div className="md:w-1/3">
          <p className="text-gray-400 text-base md:text-lg lg:text-1xl xl:text-2xl leading-relaxed">
            With a passion for clarity, aesthetics, and emotion-driven design, I
            partner with founders and teams to create visual identities that
            truly connect.
          </p>
        </div>
      </div>
      {/* MODIFIED: Changed mb-30 to mb-20 md:mb-32 and added gap-8 for mobile */}
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center mb-10 md:mb-20">
        <div className="lg:col-span-7">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3]">
            <img
              src="https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68bd341e34845d434f3fb083_1.avif"
              alt="Dream Area Project"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-end self-stretch">
          <div className="w-full h-[2px] bg-orange-600 mb-6 md:mb-8 max-w-[200px] md:max-w-[280px]"></div>
          {/* MODIFIED: Adjusted heading size for mobile */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 tracking-tight">
            Dream Area
          </h2>
          <p className="text-gray-400 text-base md:text-lg xl:text-2xl leading-relaxed mb-8 md:mb-10 max-w-md">
            The image shows flowing shapes in iridescent hues, from deep blues
            and purples to vibrant pinks and oranges, creating an ethereal
            effect.
          </p>
          <Button href="/projects/dream-area" text="Read more" />
        </div>
      </div>

      {/* --- Star Blox --- */}
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center mb-10 md:mb-20">
        {/* MODIFIED: Added order-last lg:order-first to ensure text is below image on mobile */}
        <div className="lg:col-span-5 flex flex-col justify-end self-stretch order-last lg:order-first">
          <div className="w-full h-[2px] bg-orange-600 mb-6 md:mb-8 max-w-[200px] md:max-w-[280px]"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 tracking-tight">
            Star Blox
          </h2>
          <p className="text-gray-400 text-base md:text-lg xl:text-2xl leading-relaxed mb-8 md:mb-10 max-w-md">
            The image shows flowing shapes in iridescent hues, from deep blues
            and purples to vibrant pinks and oranges, creating an ethereal
            effect.
          </p>
          <Button href="/projects/star-blox" text="Read more" />
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3]">
            <img
              src="https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68bd33e0e57b111749f34daf_0.avif"
              alt="Star Blox Project"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* --- Nova Scene --- */}
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3]">
            <img
              src="https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68b3d62a11187a9979efda31_1.avif"
              alt="Nova Scene Project"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-end self-stretch">
          <div className="w-full h-[2px] bg-orange-600 mb-6 md:mb-8 max-w-[200px] md:max-w-[280px]"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 tracking-tight">
            Nova Scene
          </h2>
          <p className="text-gray-400 text-base md:text-lg xl:text-2xl leading-relaxed mb-8 md:mb-10 max-w-md">
            The image shows flowing shapes in iridescent hues, from deep blues
            and purples to vibrant pinks and oranges, creating an ethereal
            effect.
          </p>
          <Button href="/projects/nova-scene" text="Read more" />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailSection;
