"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Button({ href = "#", text = "Read more" }) {
  return (
    <Link href={href}>
      <motion.button
        whileHover="hover"
        initial="initial"
        className="relative group flex items-center gap-3 bg-[#141414] text-black p-1 pr-6 rounded-full overflow-hidden shadow-lg"
      >
        {/* Expanding Orange Background */}
        <motion.div
          variants={{
            initial: { x: "10%", width: "30px", opacity: 0 },
            hover: { x: 0, width: "calc(100% - 8px)", opacity: 1 },
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1 h-[calc(100%-8px)] rounded-full bg-[#FF5F00] z-0"
        />

        {/* Icon Container */}
        <motion.div className="relative z-10 p-2 rounded-full flex items-center justify-center overflow-hidden bg-[#FF5F00] text-white">
          <motion.div
            variants={{
              initial: { x: 0 },
              hover: { x: [0, 25, -25, 0] },
            }}
            transition={{ duration: 0.4, times: [0, 0.3, 0.31, 1] }}
          >
            <ArrowRight size={19} />
          </motion.div>
        </motion.div>

        {/* Text Animation */}
        <div className="relative z-10 overflow-hidden h-[20px]">
          <motion.div
            variants={{
              initial: { y: 0 },
              hover: { y: -20 },
            }}
            transition={{ duration: 0.4 }}
            className="flex flex-col"
          >
            <span className="font-bold text-sm leading-[20px] text-white block">
              {text}
            </span>
            <span className="font-bold text-sm leading-[20px] text-white block">
              {text}
            </span>
          </motion.div>
        </div>
      </motion.button>
    </Link>
  );
}
