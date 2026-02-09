"use client";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your vision, audience, and goals.",
      image:
        "https://cdn.prod.website-files.com/68b29a3a3c940a53d3f1b4e0/68b32cb28ac16bc353df1972_1.webp",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Defining your unique positioning and messaging.",
      image:
        "https://cdn.prod.website-files.com/68b29a3a3c940a53d3f1b4e0/68b330756ddf3cfecfb4bf6d_2.avif",
    },
    {
      number: "03",
      title: "Design",
      description: "Creating your visual identity system and touchpoints.",
      image:
        "https://cdn.prod.website-files.com/68b29a3a3c940a53d3f1b4e0/68b3307656d5157f36f3a86c_3.avif",
    },
    {
      number: "04",
      title: "Delivery",
      description: "Providing all assets, brand guidelines, and support.",
      image:
        "https://cdn.prod.website-files.com/68b29a3a3c940a53d3f1b4e0/68b330764c03cecaab91f96f_4.avif",
    },
    {
      number: "05",
      title: "Ongoing Support",
      description: "I stay available for updates, extensions, and evolution.",
      image:
        "https://cdn.prod.website-files.com/68b29a3a3c940a53d3f1b4e0/68b33076057f18040482bd59_5.avif",
    },
  ];

  const bgVariants = {
    initial: { y: "100%" },
    hover: { y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  };

  const imageVariants = {
    initial: { opacity: 0, x: 40 },
    hover: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.1, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#1b1a1a] text-white relative z-30 py-16 md:py-24 rounded-b-[40px] md:rounded-b-[80px] px-1 md:px-6">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-[1450px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 mb-16 md:mb-20"
      >
        <div className="max-w-xl">
          <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
            Step-by-Step
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
            My Process, Step by Step
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-gray-400 text-base md:text-lg lg:text-1xl xl:text-2xl leading-relaxed">
            From first ideas to final assets, I follow a clear, collaborative
            process...
          </p>
        </div>
      </motion.div>

      <div className="max-w-[1450px] mx-auto space-y-4 md:space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true }}
            variants={{
              initial: { y: 50, opacity: 0 },
              animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
            }}
            className="group relative bg-[#111111] rounded-2xl md:rounded-[20px] p-2 overflow-hidden border-t-2 border-[#ff5c00] md:border-t-0 cursor-pointer"
          >
            <motion.div
              variants={bgVariants}
              className="absolute inset-0 bg-[#ff5c00] hidden md:block"
            />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-8">
              <div className="md:col-span-4 flex items-center gap-6 md:gap-8">
                <div className="hidden md:block w-[2px] h-10 bg-[#ff5c00] group-hover:bg-white transition-colors duration-300"></div>
                <div className="flex items-baseline gap-4 md:gap-6">
                  <span className="text-2xl md:text-5xl font-bold text-white">
                    {step.number}
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-white">
                    {step.title}
                  </h3>
                </div>
              </div>

              <div className="md:col-span-5">
                <p className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm md:text-lg md:pl-12 md:border-l border-zinc-800 group-hover:border-white/20">
                  {step.description}
                </p>
              </div>

              <div className="md:col-span-3 flex md:justify-end">
                {/* Fix: Removed style jsx. 
                   Used Tailwind 'md:' to apply motion-only styles on desktop.
                   On mobile, opacity and transform are set to 'initial' by default Tailwind.
                */}
                <motion.div
                  variants={imageVariants}
                  initial={false} // disables animation on mobile
                  className="w-full h-48 mt-4 md:mt-0 md:h-28 md:w-[280px] overflow-hidden rounded-2xl border-2 border-transparent group-hover:border-white/20 opacity-100 md:opacity-0"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
