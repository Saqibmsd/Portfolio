import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="bg-[#0a0a0a] text-white h-screen relative w-full h-[500px] md:h-[700px] overflow-hidden -mt-32 pt-55 z-10">
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Content & Socials */}
        <div className="space-y-8">
          <div>
            <p className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs mb-4">
              Contact me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Let's Create Something Meaningful
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-lg mb-4">
              Whether you're starting from scratch or need a brand refresh, I'm here to help bring your vision to life.
            </p>
            <p className="text-gray-500 text-sm md:text-base">
              Ready to talk? Fill out the form or drop me a message—let's see how we can work together.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaTiktok, FaYoutube].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="w-12 h-12 bg-[#141414] rounded-full flex items-center justify-center text-gray-400 hover:bg-[#ff5c00] hover:text-white transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-[#111111] p-4 md:p-6 rounded-[2.5rem] border border-white/5">
          <form className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">First Name</label>
                <input 
                  type="text" 
                  placeholder="Tony" 
                  className="w-full bg-[#1a1a1a] border-none rounded-2xl py-2 px-3 text-white placeholder:text-gray-700 focus:ring-2 focus:ring-[#ff5c00] outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Montana" 
                  className="w-full bg-[#1a1a1a] border-none rounded-2xl py-2 px-3 text-white placeholder:text-gray-700 focus:ring-2 focus:ring-[#ff5c00] outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Email</label>
              <input 
                type="email" 
                placeholder="tonymontana@domain.com" 
                className="w-full bg-[#1a1a1a] border-none rounded-2xl py-2 px-3 text-white placeholder:text-gray-700 focus:ring-2 focus:ring-[#ff5c00] outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Message</label>
              <textarea 
                rows="3" 
                placeholder="Type your message..." 
                className="w-full bg-[#1a1a1a] border-none rounded-2xl py-2 px-3 text-white placeholder:text-gray-700 focus:ring-2 focus:ring-[#ff5c00] outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#ff5c00] hover:bg-orange-600 text-white font-bold py-3 rounded-2xl transition-all duration-300 shadow-lg shadow-orange-600/20"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;