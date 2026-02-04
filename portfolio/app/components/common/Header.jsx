 "use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useCart } from "../../context/CartContext";

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
            Get in touch
          </span>
          <span className="font-bold text-sm leading-[20px] text-white block">
            Get in touch
          </span>
        </motion.div>
      </div>
    </motion.button>
  );
};

/* Main Header */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { newItemsCount } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <header className={`w-full ${isScrolled ? "fixed bg-black/95 backdrop-blur-sm shadow-md" : "absolute bg-transparent"} top-0 z-50 overflow-visible transition-colors duration-300`}>
      <div className="mx-auto flex items-center justify-between h-20 px-2">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-white uppercase"
          >
            Portfolio<span className="text-xs align-top">®</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-colors ${
                pathname === link.href
                  ? "text-white"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <HeaderButton />
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="text-white font-black">PORTFOLIO</span>
            <X
              size={32}
              className="text-white"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-bold text-white hover:text-[#FF5F00]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <HeaderButton />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
