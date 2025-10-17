import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiTypescript } from "react-icons/si";
import React from "react";

const Banner = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Optimized roles focusing on frontend with full-stack capability
  const roles = [
    "Frontend Developer",
    "React.js Specialist",
    "Full Stack Developer",
    "Web Application Developer",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Tech stack icons with real colors - Frontend first
  const techIcons = [
    { icon: FaReact, color: "text-[#61DAFB]", name: "React", delay: "delay-0" },
    { icon: FaJs, color: "text-[#F7DF1E]", name: "JavaScript", delay: "delay-100" },
    { icon: SiTypescript, color: "text-[#3178C6]", name: "TypeScript", delay: "delay-200" },
    { icon: SiTailwindcss, color: "text-[#06B6D4]", name: "Tailwind", delay: "delay-300" },
    { icon: FaHtml5, color: "text-[#E34F26]", name: "HTML5", delay: "delay-400" },
    { icon: FaCss3Alt, color: "text-[#1572B6]", name: "CSS3", delay: "delay-500" },
    { icon: FaNodeJs, color: "text-[#339933]", name: "Node.js", delay: "delay-600" },
    { icon: SiExpress, color: "text-gray-800", name: "Express", delay: "delay-700" },
    { icon: SiMongodb, color: "text-[#47A248]", name: "MongoDB", delay: "delay-800" },
    { icon: SiFirebase, color: "text-[#FFCA28]", name: "Firebase", delay: "delay-900" },
  ];

  // Social links
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/islam37", color: "hover:text-gray-800" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/islam-uddin-8a9798284/", color: "hover:text-blue-600" },
    { icon: FaTwitter, href: "https://x.com/IslamUddinIT?s=09", color: "hover:text-blue-400" },
  ];

  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden pt-12">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_30%,transparent_100%)]"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-10 left-8 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-8 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Text Content */}
        <div className={`space-y-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
            </div>
            <span className="text-gray-300 font-semibold text-sm tracking-wider">OPEN FOR OPPORTUNITIES</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Islam Uddin
              </span>
            </h1>

            {/* Animated Role */}
            <div className="h-20 flex items-center">
              <h2 className="text-xl lg:text-3xl text-gray-300 font-medium">
                I'm a{" "}
                <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent inline-block min-w-[280px] animate-typing">
                  {roles[currentRole]}
                </span>
              </h2>
            </div>
          </div>

          {/* Optimized Description */}
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            I'm a <strong className="text-cyan-400">Frontend-focused Developer</strong> with 
            expertise in <strong className="text-cyan-400">React.js</strong> and modern web technologies. 
            I create <strong className="text-cyan-400">responsive, high-performance applications</strong> with 
            great user experiences. While I specialize in frontend development, I also have 
            <strong className="text-purple-400"> full-stack capabilities</strong> with Node.js, Express, 
            MongoDB, and Firebase, allowing me to build complete web solutions.
          </p>

          {/* Key Specializations */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
              <span className="text-gray-300 font-medium text-sm">React.js Specialist</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
              <span className="text-gray-300 font-medium text-sm">Modern UI/UX</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-150 transition-transform"></div>
              <span className="text-gray-300 font-medium text-sm">Full Stack Capable</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform"></div>
              <span className="text-gray-300 font-medium text-sm">Performance Focused</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/contact"
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-center backdrop-blur-sm border border-cyan-400/20"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Hire Me
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              to="/projects"
              className="group border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-2xl font-bold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 backdrop-blur-sm bg-white/5"
            >
              <span>View Projects</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-6">
            <span className="text-gray-400 font-semibold text-sm">Connect with me:</span>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-500 hover:scale-110 hover:text-white transition-all duration-300 p-2 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm ${social.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Profile & Tech Stack - Position Adjusted */}
        <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} -mt-8 lg:-mt-12`}>
          
          <div className="relative mx-auto w-80 h-80 lg:w-[400px] lg:h-[400px]">
            {/* Background Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
            
            {/* Main Profile Container */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 p-2 shadow-2xl z-10 backdrop-blur-sm">
              <div className="w-full h-full bg-slate-900 rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src="https://i.ibb.co.com/9kcZGFCb/profile.jpg"
                  alt="Islam Uddin - Frontend Developer"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Floating Tech Icons - Adjusted for smaller container */}
            {techIcons.map((tech, index) => {
              const IconComponent = tech.icon;
              const angle = (index * 360) / techIcons.length;
              const radius = 180;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={index}
                  className={`absolute w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-white/20 hover:scale-125 hover:bg-white/20 hover:shadow-3xl transition-all duration-500 animate-float ${tech.delay} z-20 group`}
                  style={{
                    left: `calc(50% + ${x}px - 24px)`,
                    top: `calc(50% + ${y}px - 24px)`,
                  }}
                  title={tech.name}
                >
                  <IconComponent className={`text-xl ${tech.color} group-hover:scale-110 transition-transform`} />
                </div>
              );
            })}

            {/* Experience & Specialization Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-2xl border border-white/20 z-30 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                </div>
                <span className="text-white font-bold text-base">Frontend Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400 text-xs font-semibold tracking-wider">EXPLORE MORE</span>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
            <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;