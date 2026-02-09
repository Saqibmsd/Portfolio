"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* Button Component */
const HeaderButton = () => {
  return (
    <motion.button
      whileHover="hover"
      initial="initial"
      className="relative group flex items-center gap-3 bg-white text-black p-1 pr-6 rounded-full overflow-hidden shadow-lg"
    >
      <motion.div
        variants={{
          initial: {
            x: "10%",
            width: "30px",
            opacity: 0,
          },
          hover: {
            x: 0,
            width: "calc(100% - 8px)",
            opacity: 1,
          },
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1 h-[calc(100%-8px)] rounded-full bg-[#FF5F00] z-0"
      />

      <motion.div
        variants={{
          initial: { backgroundColor: "#FF5F00", color: "#ffffff" },
          hover: { backgroundColor: "#FF5F00", color: "#ffffff" },
        }}
        transition={{ duration: 0.4 }}
        className="relative z-10 p-2 rounded-full flex items-center justify-center overflow-hidden"
      >
        <motion.div
          variants={{
            initial: { x: 0 },
            hover: { x: [0, 20, -20, 0] },
          }}
          transition={{ duration: 0.4, times: [0, 0.3, 0.31, 1] }}
        >
          <ArrowRight size={19} />
        </motion.div>
      </motion.div>

      <div className="relative z-10 overflow-hidden h-[20px]">
        <motion.div
          variants={{
            initial: { y: 0 },
            hover: { y: -20 },
          }}
          transition={{ duration: 0.4 }}
          className="flex flex-col"
        >
          <span className="font-bold text-sm leading-[20px] text-black block">
            Contact me
          </span>
          <span className="font-bold text-sm leading-[20px] text-white block">
            Contact me
          </span>
        </motion.div>
      </div>
    </motion.button>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does a brand identity project take?",
      answer:
        "A typical brand identity project takes anywhere from 3 to 6 weeks, depending on the scope of work and how quickly feedback is provided. We ensure the process is smooth and collaborative, so you feel confident at every stage.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes, we offer flexible payment structures usually split into discovery, design, and delivery milestones.",
    },
    {
      question: "Can you also design my website?",
      answer:
        "I specialize in creating cohesive digital experiences that bridge the gap between brand identity and web design.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, I partner with founders and teams globally using asynchronous workflows and video calls.",
    },
    {
      question: "What do I need to get started?",
      answer:
        "Just a clear vision of your goals. We handle the heavy lifting of strategy and discovery together.",
    },
  ];

  return (
    /* CHANGE: Adjusted responsive padding (py-16 md:py-24), margins (-mt-24 md:-mt-32), and rounding (rounded-b-[40px] md:rounded-b-[80px]) */
    <section className="bg-[#141414] text-white py-16 md:py-24 relative w-full overflow-hidden -mt-24 md:-mt-32 pt-32 md:pt-48 z-20 rounded-b-[40px] md:rounded-b-[80px] px-1 md:px-6">
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left Side Header */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs mb-4">
            Frequently Asked Questions
          </p>
          {/* CHANGE: Responsive text scaling (text-3xl md:text-5xl) */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight mb-8 md:mb-10">
            Answers to Common Questions
          </h2>

          <HeaderButton />
        </motion.div>

        {/* Right Side Accordion */}
        <div className="lg:col-span-7 space-y-3 md:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                key={index}
                /* CHANGE: Adjusted rounding for mobile (rounded-2xl md:rounded-3xl) */
                className={`rounded-xl md:rounded-[2.r5em] transition-all duration-500 border-2 ${
                  isOpen
                    ? "bg-[#111111] border-[#ff5c00]"
                    : "bg-[#0f0f0f] border-transparent hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  /* CHANGE: Adjusted button padding for mobile (p-4 md:p-6) and gap */
                  className="w-full p-4 md:p-6 flex items-center justify-start gap-4 text-left group"
                >
                  {/* The Icon: White Plus or Orange X */}
                  <span
                    className={`text-xl md:text-2xl font-light transition-all duration-300 shrink-0 ${
                      isOpen ? "text-[#ff5c00] rotate-0" : "text-white"
                    }`}
                  >
                    {isOpen ? "x" : "+"}
                  </span>

                  {/* CHANGE: Responsive text size (text-base md:text-xl) */}
                  <span className="text-base md:text-xl font-bold tracking-tight">
                    {faq.question}
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {/* CHANGE: Adjusted padding-bottom and text sizes for mobile */}
                  <p className="px-6 md:px-14 pb-6 text-gray-400 text-sm md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
