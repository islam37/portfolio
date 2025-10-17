import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import React from "react";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { 
    name: "HTML5", 
    icon: <FaHtml5 className="w-12 h-12" />,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-200"
  },
  { 
    name: "CSS3", 
    icon: <FaCss3Alt className="w-12 h-12" />,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-200"
  },
  { 
    name: "JavaScript", 
    icon: <FaJs className="w-12 h-12" />,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-200"
  },
  { 
    name: "React.js", 
    icon: <FaReact className="w-12 h-12" />,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-200"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-12 h-12" />,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-200"
  },
  { 
    name: "Node.js", 
    icon: <FaNodeJs className="w-12 h-12" />,
    color: "text-green-600",
    bgColor: "bg-green-600/10",
    borderColor: "border-green-200"
  },
  {
    name: "Express.js",
    icon: <SiExpress className="w-12 h-12" />,
    color: "text-gray-800",
    bgColor: "bg-gray-800/10",
    borderColor: "border-gray-200"
  },
  { 
    name: "MongoDB", 
    icon: <SiMongodb className="w-12 h-12" />,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-200"
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-12 h-12" />,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-200"
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">TECHNOLOGIES</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Expertise <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Area</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I work with to create exceptional digital experiences
          </p>

          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="group relative">
              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color.replace(
                  "text-",
                  "bg-"
                )} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
              ></div>

              {/* Skill Card */}
              <div
                className={`relative p-6 rounded-2xl backdrop-blur-sm border ${skill.borderColor} ${skill.bgColor} transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-2xl`}
              >
                {/* Icon Container */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${skill.color} transform group-hover:scale-110 transition-all duration-300`}
                  >
                    {skill.icon}
                  </div>
                </div>

                {/* Skill Name */}
                <p className="font-semibold text-white text-center text-lg group-hover:text-gray-100 transition-colors duration-300">
                  {skill.name}
                </p>

                {/* Subtle Hover Indicator */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 ${skill.bgColor.replace(
                    "bg-",
                    "bg-"
                  ).replace("/10", "")} group-hover:w-8 transition-all duration-300 rounded-full`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default Skills;
