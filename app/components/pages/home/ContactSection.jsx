"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const ContactSection = () => {
  return (
    /* CHANGE: Removed h-screen and fixed h-[500px] to allow content to grow on mobile. Added min-h values instead. */
    /* CHANGE: Adjusted padding and negative margin (-mt-24 md:-mt-32) for better section overlap on mobile. */
    <section id="contact" className="bg-[#0a0a0a] text-white relative w-full overflow-hidden -mt-24 md:-mt-32 pt-32 md:pt-48 pb-40 z-10 px-4 md:px-6">
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Side: Content & Socials */}
        {/* CHANGE: Added text-left consistency and spacing adjustments */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          <div>
            <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs mb-4">
              Contact me
            </p>
            {/* CHANGE: Responsive font scaling (text-3xl md:text-5xl) */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight mb-6">
              Let's Create Something Meaningful
            </h2>
            {/* CHANGE: Responsive text size (text-base md:text-xl) */}
            <p className="text-gray-300 text-base md:text-lg lg:text-1xl xl:text-2xl leading-relaxed max-w-lg mb-4">
              Whether you're starting from scratch or need a brand refresh, I'm
              here to help bring your vision to life.
            </p>
            <p className="text-gray-500 text-base md:text-lg lg:text-1xl xl:text-2xl">
              Ready to talk? Fill out the form or drop me a message—let's see
              how we can work together.
            </p>
          </div>

          {/* Social Icons */}
          {/* CHANGE: Icons slightly smaller on mobile (w-10 h-10) for better fit */}
          <div className="flex gap-3 md:gap-4">
            {[FaFacebookF, FaInstagram, FaTiktok, FaYoutube].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 bg-[#141414] rounded-full flex items-center justify-center text-gray-400 hover:bg-[#ff5c00] hover:text-white transition-all duration-300"
                >
                  <Icon size={18} className="md:size-[20px]" />
                </a>
              ),
            )}
          </div>
        </motion.div>

        {/* Right Side: Form */}
        {/* CHANGE: Adjusted rounding (rounded-3xl md:rounded-[2.5rem]) and padding for mobile */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#111111] p-6 md:p-6 xl:p-10 rounded-3xl md:rounded-[2.5rem] border border-white/5"
        >
          <form className="space-y-4">
            {/* CHANGE: Form inputs now stack on small mobile but go side-by-side on md breakpoint */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-1">
                <label className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 ml-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Muhammad"
                  className="w-full bg-[#1a1a1a] border-none rounded-xl md:rounded-2xl py-3 px-4 lg:py-1 lg:px-4 text-white placeholder:text-gray-700 focus:ring-2 focus:ring-[#ff5c00] outline-none transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 ml-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Saqib"
                  className="w-full bg-[#1a1a1a] border-none rounded-xl md:rounded-2xl py-3 px-4 lg:py-1 lg:px-4 text-white placeholder:text-gray-700 focus:ring-2 focus:ring-[#ff5c00] outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 ml-1">
                Email
              </label>
              <input
                type="email"
                placeholder="saqibmsd143@gmail.com"
                className="w-full bg-[#1a1a1a] border-none rounded-xl md:rounded-2xl py-3 px-4 lg:py-1 lg:px-4 text-white placeholder:text-gray-700 focus:ring-2 focus:ring-[#ff5c00] outline-none transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 ml-1">
                Message
              </label>
              <textarea
                rows="3"
                placeholder="Type your message..."
                className="w-full bg-[#1a1a1a] border-none rounded-xl md:rounded-2xl py-3 px-4 lg:py-1 lg:px-4 text-white placeholder:text-gray-700 focus:ring-2 focus:ring-[#ff5c00] outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* CHANGE: Added pt-2 for spacing and ensured py-4 for a larger touch target on mobile */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#ff5c00] hover:bg-orange-600 text-white font-bold py-3 rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg shadow-orange-600/20 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
