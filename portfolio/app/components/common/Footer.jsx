import React from 'react';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaFacebookF, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white py-15 w-full border-t border-white/5">
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black tracking-tighter text-white uppercase">
             Portfolio<span className="text-xs text-[#ff5c00] align-top">®</span>
          </h2>
          <div className="space-y-4">
            <p className="text-xl font-medium">Great design should feel invisible.</p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems.
            </p>
          </div>
          {/* <p className="text-gray-600 text-xs pt-4">
            © Copyright Portfolio | Design by M.Saqib | Intern in Safecare
          </p> */}
        </div>

        {/* Column 2: Menu */}
        <div className="space-y-6 lg:pl-12">
          <h3 className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs">Menu</h3>
          <ul className="space-y-4 text-sm font-medium">
            {['Home', 'About Me', 'Services', 'Projects', 'Pricing'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Pages */}
        <div className="space-y-6 lg:pl-12">
          <h3 className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs">Pages</h3>
          <ul className="space-y-4 text-sm font-medium">
            {['Home', 'License', 'Changelog', 'Style Guide', 'Contact Me'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Social */}
        <div className="space-y-6 lg:pl-12">
          <h3 className="text-[#ff5c00] font-bold uppercase tracking-widest text-xs">Social</h3>
          <ul className="space-y-4 text-sm font-medium">
            {[
              { name: 'Linkedin', icon: <FaLinkedinIn /> },
              { name: 'Instagram', icon: <FaInstagram /> },
              { name: 'Twitter', icon: <FaTwitter /> },
              { name: 'Facebook', icon: <FaFacebookF /> },
              { name: 'Tiktok', icon: <FaTiktok /> },
            ].map((social) => (
              <li key={social.name}>
                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
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