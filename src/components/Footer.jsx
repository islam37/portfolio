import { FaGithub, FaLinkedin, FaWhatsapp, FaHeart, FaCode } from "react-icons/fa";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/islam37", name: "GitHub" },
    { icon: <FaLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/islam-uddin-8a9798284/", name: "LinkedIn" },
    { icon: <FaWhatsapp className="w-5 h-5" />, href: "https://wa.me/8801568289690", name: "WhatsApp" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IU</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Islam Uddin</h3>
                <p className="text-cyan-400 text-sm">Frontend Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Creating modern, responsive web applications with React.js
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Let's Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              <p>📧 islamuddin3725@gmail.com</p>
              <p>📞 +8801568289690</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            &copy; {currentYear} Islam Uddin. All rights reserved.
          </div>
          <div className="text-gray-500 text-sm flex items-center gap-2">
            Made with <FaHeart className="text-red-400 w-3 h-3" /> and <FaCode className="text-cyan-400 w-3 h-3" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;