"use client";
import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Set first item open by default like in the image

  const faqs = [
    {
      question: "How long does a brand identity project take?",
      answer: "A typical brand identity project takes anywhere from 3 to 6 weeks, depending on the scope of work and how quickly feedback is provided. We ensure the process is smooth and collaborative, so you feel confident at every stage."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment structures usually split into discovery, design, and delivery milestones."
    },
    {
      question: "Can you also design my website?",
      answer: "I specialize in creating cohesive digital experiences that bridge the gap between brand identity and web design."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, I partner with founders and teams globally using asynchronous workflows and video calls."
    },
    {
      question: "What do I need to get started?",
      answer: "Just a clear vision of your goals. We handle the heavy lifting of strategy and discovery together."
    }
  ];

  return (
    <section className="bg-[#141414] text-white py-24 relative w-full overflow-hidden -mt-32 pt-55 z-20 rounded-b-[80px]">
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Side Header */}
        <div className="lg:col-span-5">
          <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs mb-4">
            Frequently Asked Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-10">
            Answers to Common Questions
          </h2>

          <button className="bg-white text-black hover:bg-[#ff5c00] hover:text-white px-8 py-3 rounded-full flex items-center gap-4 transition-all duration-300 font-bold group">
            <div className="bg-[#ff5c00] text-white rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-white group-hover:text-[#ff5c00] transition-colors">
              <span className="text-lg">→</span>
            </div>
            Contact me
          </button>
        </div>

        {/* Right Side Accordion */}
        <div className="lg:col-span-7 space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-4xl transition-all duration-500 border-2 ${
                  isOpen
                    ? "bg-[#111111] border-[#ff5c00]"
                    : "bg-[#0f0f0f] border-transparent hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-2 md:p-6 flex items-center justify-start gap-4 text-left group"
                >
                  {/* The Icon: White Plus or Orange X */}
                  <span
                    className={`text-2xl font-light transition-all duration-300 ${
                      isOpen ? "text-[#ff5c00] rotate-0" : "text-white"
                    }`}
                  >
                    {isOpen ? "x" : "+"}
                  </span>

                  <span className="text-lg md:text-xl font-bold tracking-tight">
                    {faq.question}
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-8 pb-2 text-gray-400 text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;