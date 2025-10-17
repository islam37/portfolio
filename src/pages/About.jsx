import React from "react";
import { FaCode, FaGraduationCap, FaLightbulb, FaRocket } from "react-icons/fa";

const About = () => {
  const stats = [
    { number: "10+", label: "Projects Completed", icon: <FaCode className="w-6 h-6" /> },
    { number: "2+", label: "Years Learning", icon: <FaGraduationCap className="w-6 h-6" /> },
    { number: "5+", label: "Technologies", icon: <FaLightbulb className="w-6 h-6" /> },
    { number: "100%", label: "Dedicated", icon: <FaRocket className="w-6 h-6" /> },
  ];

  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "React.js", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Responsive Design", level: 95 },
    { name: "Backend Fundamentals", level: 75 },
  ];

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>
        
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
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-700"></div>
            </div>
            <span className="text-gray-300 font-semibold text-sm tracking-wider">ABOUT ME</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
          </h1>
          
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:border-cyan-400/30 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></div>
                Who I Am
              </h2>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I am a passionate <strong className="text-cyan-400">Frontend Web Developer</strong> and 
                  Computer Science student with strong expertise in <strong className="text-cyan-400">React.js, JavaScript (ES6+), and Tailwind CSS</strong>.
                </p>
                
                <p>
                  While I specialize in frontend development, I also possess solid knowledge of 
                  <strong className="text-purple-400"> MERN stack fundamentals</strong> including Node.js, 
                  Express.js, and MongoDB, enabling me to understand full-stack development workflows.
                </p>
                
                <p>
                  I thrive on solving complex problems and building <strong className="text-blue-400">responsive, 
                  interactive web applications</strong> that provide exceptional user experiences.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <div className="text-cyan-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-8">
            {/* Skills Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:border-purple-400/30 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                Technical Skills
              </h2>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl border border-cyan-400/20 p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <FaRocket className="text-cyan-400" />
                My Mission
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To create <strong className="text-cyan-400">efficient, user-friendly, and modern</strong> web experiences 
                while continuously expanding my expertise in both frontend excellence and backend capabilities. 
                I'm committed to writing clean, maintainable code and staying at the forefront of web technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex items-center gap-4 text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">AVAILABLE FOR NEW OPPORTUNITIES</span>
            </div>
            
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-2xl font-bold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-3xl"
            >
              Let's Work Together
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default About;