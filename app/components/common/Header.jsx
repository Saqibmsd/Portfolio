"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useCart } from "../../context/CartContext";

const HeaderButton = ({ onClick }) => {
  return (
    <motion.button
      whileHover="hover"
      initial="initial"
      onClick={onClick}
      className="relative group flex items-center gap-3 bg-white text-black p-1 pr-6 rounded-full overflow-hidden shadow-lg"
    >
      <motion.div
        variants={{
          initial: { x: "10%", width: "30px", opacity: 0 },
          hover: { x: 0, width: "calc(100% - 8px)", opacity: 1 },
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
        className="relative z-10 p-2 rounded-full flex items-center justify-center"
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
          <span className="font-bold text-sm leading-[20px] text-black block">Get in touch</span>
          <span className="font-bold text-sm leading-[20px] text-white block">Get in touch</span>
        </motion.div>
      </div>
    </motion.button>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fix 1: Improved Scroll Listener for Home Section
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
      
      // If we are at the very top, force "home" to be active
      if (window.scrollY < 50) {
        setActiveHash("#home");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fix 2: Better Observer Settings
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // More sensitive to top-down scrolling
      threshold: [0, 0.1], 
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // Only update if we aren't at the very top (let the scroll listener handle that)
        if (entry.isIntersecting && window.scrollY >= 50) {
          setActiveHash(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["home", "projects", "services", "process", "pricing", "contact"];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e, href) => {
    if (href.startsWith("/#")) {
      const hash = href.replace("/", ""); // e.g. "#contact"
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        if (e) e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", hash);
        setActiveHash(hash);
        setIsMenuOpen(false);
      }
    } else {
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Projects", href: "/#projects" },
    { name: "Services", href: "/#services" },
    { name: "Process", href: "/#process" },
    { name: "Pricing", href: "/#pricing" },
  ];

  if (!mounted) return null;

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled && !isMenuOpen ? "bg-black/60 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1550px] mx-auto flex items-center justify-between h-20 px-4 md:px-6">
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
          Portfolio
          <span className={`align-top text-[10px] md:text-xs ${isScrolled ? "text-[#FF5F00]" : "text-white"}`}>®</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const linkHash = link.href.replace("/", "");
            const isActive = activeHash === linkHash;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-sm font-bold transition-colors duration-300 ${
                  isActive ? "text-[#FF5F00]" : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <HeaderButton onClick={(e) => handleScroll(e, "/#contact")} />
          </div>
          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] md:hidden bg-[#0a0a0a] flex flex-col p-4"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-white font-black tracking-tighter text-2xl">PORTFOLIO<span className="text-[#FF5F00]">.</span></span>
              <button onClick={() => setIsMenuOpen(false)} className="bg-white/10 p-2 rounded-full text-white"><X size={24} /></button>
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link, i) => {
                const linkHash = link.href.replace("/", "");
                const isActive = activeHash === linkHash;
                return (
                  <motion.div key={link.name} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 + i * 0.1 }}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className={`text-3xl font-black uppercase transition-all ${
                        isActive ? "text-[#FF5F00] translate-x-4" : "text-white/40 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="mt-auto border-t border-white/10 pt-10">
              <p className="text-white/40 text-xs uppercase mb-6 font-bold">Start a project</p>
              <div className="w-fit scale-110 origin-left">
                <HeaderButton onClick={(e) => handleScroll(e, "/#contact")} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;