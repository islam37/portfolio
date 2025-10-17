import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaDownload,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaBlog,
  FaGraduationCap,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const isActivePath = (path) => location.pathname === path;

  const handleDownloadResume = () => {
    const resumeUrl = "/cv/cv.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Islam_Uddin_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome className="w-4 h-4" /> },
    { path: "/about", label: "About", icon: <FaUser className="w-4 h-4" /> },
    { path: "/skills", label: "Skills", icon: <FaCode className="w-4 h-4" /> },
    { path: "/academics", label: "Academic-Journey", icon: <FaGraduationCap className="w-4 h-4" /> }, // ✅ single Academics (renamed)
    { path: "/projects", label: "Projects", icon: <FaProjectDiagram className="w-4 h-4" /> },
    { path: "/blogs", label: "Blogs", icon: <FaBlog className="w-4 h-4" /> },
    { path: "/contact", label: "Contact", icon: <FaEnvelope className="w-4 h-4" /> },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl 
      bg-gradient-to-b from-[#0a0a0f]/90 to-[#111122]/80 
      border-b border-white/10 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 text-white"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="font-bold text-lg">IU</span>
            </div>
            <div className="flex flex-col leading-5">
              <span className="font-bold text-lg">Islam Uddin</span>
              <span className="text-xs text-gray-400">Frontend Developer</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-2" ref={dropdownRef}>
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-200 
                      ${isActivePath(item.path)
                        ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* DOWNLOAD CV */}
            <button
              onClick={handleDownloadResume}
              className="ml-4 flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 
              text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <FaDownload className="w-4 h-4" /> Download CV
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden mt-2 bg-[#0f0f17]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-6 py-4 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:scale-[1.02] transition-all duration-200"
                >
                  <FaDownload className="w-4 h-4" />
                  Download CV
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
