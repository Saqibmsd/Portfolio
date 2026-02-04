import React from "react";
import { motion } from "framer-motion";
import Button from "../../common/Button";

const PricingSection = () => {
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
      tagline: "Ideal for businesses ready to scale.",
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
    <section className="bg-[#0a0a0a] text-white py-24 rounded-b-[80px] relative z-30 w-full">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs mb-4">
          Pricing
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Simple Packages for Every Stage
        </h2>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-[2.5rem] p-10 flex flex-col transition-all duration-500 ${
              plan.isPopular
                ? "bg-[#ff5c00] text-white  shadow-2xl shadow-orange-600/20"
                : "bg-[#141414] text-white hover:bg-[#181818]"
            }`}
          >
            {/* Plan Info */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-4">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">{plan.price}</span>
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

            <div
              className={`w-full mb-8 ${plan.isPopular ? "bg-white/20" : "bg-zinc-800"}`}
            ></div>

            {/* Features List */}
            <ul className="space-y-4 mb-12 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <div
                    className={`rounded-full p-1 ${plan.isPopular ? "bg-white text-orange-600" : "bg-orange-600 text-white"}`}
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
            <Button href="/projects/nova-scene" text="Get Strted" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
