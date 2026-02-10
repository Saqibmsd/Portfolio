"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Button from "../../common/Button";

const PricingSection = () => {
  // 1. Define the container variants (handles the staggering)
// 1. Define the container variants (handles the staggering)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        delayChildren: 0.1, // Optional: delays the start of the first card
      },
    },
  };
  // 2. Define the item variants (handles the individual card animation)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  const plans = [
    {
      name: "Basic Plan",
      price: "$1990",
      tagline: "Start Your Journey",
      features: [
        "Basic brand consultation",
        "Access to design resources",
        "One revision on initial concept",
        "Basic chat and support",
      ],
      isPopular: false,
    },
    {
      name: "Pro Plan",
      price: "$2990",
      tagline: "Ideal for businesses.",
      features: [
        "Full brand identity design",
        "UI/UX design for website or app",
        "Up to three revisions",
        "Brand guidelines & assets",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise Plan",
      price: "$4990",
      tagline: "Complete branding solution.",
      features: [
        "Custom brand strategy & identity",
        "Digital experience design",
        "Unlimited revisions",
        "Priority support",
      ],
      isPopular: false,
    },
  ];

  return (
    /* CHANGE: Added px-4 md:px-6 to prevent cards from touching screen edges on mobile */
    <section
    id="pricing"
      className="bg-[#0a0a0a] text-white py-16 md:py-24 rounded-b-[40px] md:rounded-b-[80px] relative z-30 w-full px-4 md:px-6"
    >
      {/* Header */}
      {/* CHANGE: Added mb-12 md:mb-16 for tighter mobile spacing */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-sm mb-4">
          Pricing
        </p>
        {/* CHANGE: Scaled heading (text-3xl md:text-6xl) */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
          Simple Packages for Every Stage
        </h2>
      </div>

      {/* Pricing Grid */}
      {/* CHANGE: Ensured gap-6 on mobile and gap-8 on desktop */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Animates when 20% of grid is visible
        className="max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 lg:gap-8"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            /* CHANGE: Responsive rounding (rounded-[2rem] md:rounded-[2.5rem]) and padding (p-8 md:p-10) */
            className={`rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-6 lg:p-10 flex flex-col transition-all duration-500 ${
              plan.isPopular
                ? "bg-[#ff5c00] text-white shadow-2xl shadow-orange-600/20"
                : "bg-[#141414] text-white hover:bg-[#181818]"
            }`}
          >
            {/* Plan Info */}
            <div className="mb-4 lg:mb-8">
              <h3 className="font-semibold text-lg mb-4 md:mb-2 lg:mb-4">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                {/* CHANGE: Scaled price text slightly for mobile (text-4xl md:text-5xl) */}
                <span className="text-4xl md:text-1xl lg:text-5xl font-bold">
                  {plan.price}
                </span>
                <span
                  className={
                    plan.isPopular ? "text-orange-100" : "text-gray-500"
                  }
                >
                  / Monthly
                </span>
              </div>
              <p
                className={`text-sm ${plan.isPopular ? "text-orange-100" : "text-gray-400"}`}
              >
                {plan.tagline}
              </p>
            </div>

            {/* CHANGE: Added h-[1px] to make the divider visible */}
            <div
              className={`w-full h-[1px] mb-8 md:mb-4 lg:mb-6 ${plan.isPopular ? "bg-white/20" : "bg-zinc-800"}`}
            ></div>

            {/* Features List */}
            {/* CHANGE: Reduced bottom margin on mobile (mb-8 md:mb-12) */}
            <ul className="space-y-4 md:space-y-1 lg:space-y-4 mb-8 md:mb-2 lg:mb-12 flex-grow">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 md:gap-1 lg;gap text-sm"
                >
                  <div
                    className={`rounded-full p-1 shrink-0 ${plan.isPopular ? "bg-white text-orange-600" : "bg-orange-600 text-white"}`}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
           <Button href="/#pricing" text="Get Started" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PricingSection;
