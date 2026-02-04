import React from "react";
import Button from "../../common/Button";

const ProjectDetailSection = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-20">
      {/* /////////////////////////////////////// */}
      {/* Dream Area */}
      {/* //////////////////////////////////////// */}

      <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-30">
        {/* Left Side: Large Featured Image */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3]">
            <img
              src="https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68bd341e34845d434f3fb083_1.avif"
              alt="Dream Area Project"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:col-span-5 flex flex-col justify-end self-stretch">
          {/* Accent Line */}
          <div className="w-full h-[2px] bg-orange-600 mb-8 max-w-[280px]"></div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Dream Area
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
            The image shows flowing shapes in iridescent hues, from deep blues
            and purples to vibrant pinks and oranges, creating an ethereal
            effect.
          </p>

          {/* Pill-shaped Button */}
          <Button href="/projects/dream-area" text="Read more" />
        </div>
      </div>

      {/* /////////////////////////////////////// */}
      {/* Star Blox */}
      {/* //////////////////////////////////////// */}

      <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-30">
        {/* left Side: Content */}
        <div className="lg:col-span-5 flex flex-col justify-end self-stretch">
          {/* Accent Line */}
          <div className="w-full h-[2px] bg-orange-600 mb-8 max-w-[280px]"></div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Star Blox
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
            The image shows flowing shapes in iridescent hues, from deep blues
            and purples to vibrant pinks and oranges, creating an ethereal
            effect.
          </p>

          {/* Pill-shaped Button */}
          <Button href="/projects/star-blox" text="Read more" />
        </div>
        {/* Right Side: Large Featured Image */}
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

      {/* /////////////////////////////////////// */}
      {/* Nova Scene */}
      {/* //////////////////////////////////////// */}

      <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-30">
        {/* Left Side: Large Featured Image */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3]">
            <img
              src="https://cdn.prod.website-files.com/68b3d5ef92d2b3414ccebad2/68b3d62a11187a9979efda31_1.avif"
              alt="Nova Scene Project"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:col-span-5 flex flex-col justify-end self-stretch">
          {/* Accent Line */}
          <div className="w-full h-[2px] bg-orange-600 mb-8 max-w-[280px]"></div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Nova Scene
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
            The image shows flowing shapes in iridescent hues, from deep blues
            and purples to vibrant pinks and oranges, creating an ethereal
            effect.
          </p>

          {/* Pill-shaped Button */}
          <Button href="/projects/nova-scene" text="Read more" />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailSection;
