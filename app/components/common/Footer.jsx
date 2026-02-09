import React from 'react';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaFacebookF, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    /* CHANGE: Standardized padding (py-12 md:py-20) and added px-1 md:px-6 for mobile safety */
    <footer className="bg-[#141414] text-white py-12 md:py-20 w-full border-t border-white/5 px-1 md:px-6">
      
      {/* CHANGE: Added grid-cols-1 for mobile, md:grid-cols-2 for tablets, and lg:grid-cols-4 for desktop */}
      {/* CHANGE: text-center for mobile, md:text-left for larger screens */}
      <div className="max-w-[1550px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center md:text-left">
        
        {/* Column 1: Brand Info */}
        {/* CHANGE: Added items-center md:items-start to handle logo/text alignment */}
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-black tracking-tighter text-white uppercase">
              Portfolio<span className="text-xs text-[#ff5c00] align-top">®</span>
          </h2>
          <div className="space-y-4">
            <p className="text-xl font-medium">Great design should feel invisible.</p>
            {/* CHANGE: mx-auto for mobile max-width centering, md:mx-0 for desktop */}
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems.
            </p>
          </div>
          {/* CHANGE: Added max-w-xs to copyright for better mobile wrapping */}
          <p className="text-gray-600 text-[10px] md:text-xs pt-4 max-w-xs">
            © Copyright Portfolio | Design by M.Saqib | Intern in Safecare
          </p>
        </div>

        {/* Column 2: Menu */}
        {/* CHANGE: md:pl-12 ensures spacing only starts when items are side-by-side */}
        <div className="space-y-6 md:pl-12">
          <h3 className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs">Menu</h3>
          <ul className="space-y-4 text-sm font-medium">
            {['Home', 'About Me', 'Services', 'Projects', 'Pricing'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Pages */}
        {/* CHANGE: lg:pl-12 for deep spacing on desktops only */}
        <div className="space-y-6 lg:pl-12">
          <h3 className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs">Pages</h3>
          <ul className="space-y-4 text-sm font-medium">
            {['Home', 'License', 'Changelog', 'Style Guide', 'Contact Me'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Social */}
        <div className="space-y-6 lg:pl-12">
          <h3 className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs">Social</h3>
          {/* CHANGE: items-center md:items-start to keep icon list centered on mobile */}
          <ul className="space-y-4 text-sm font-medium flex flex-col items-center md:items-start">
            {[
              { name: 'Linkedin', icon: <FaLinkedinIn /> },
              { name: 'Instagram', icon: <FaInstagram /> },
              { name: 'Twitter', icon: <FaTwitter /> },
              { name: 'Facebook', icon: <FaFacebookF /> },
              { name: 'Tiktok', icon: <FaTiktok /> },
            ].map((social) => (
              <li key={social.name}>
                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 group">
                  <span className="text-gray-500 group-hover:text-[#ff5c00] transition-colors">{social.icon}</span>
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;