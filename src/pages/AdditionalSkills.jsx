import { SiC, SiCplusplus, SiPython } from "react-icons/si";
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaLaptopCode, FaAward } from "react-icons/fa";
import { BiBrain, BiBook, BiTrendingUp } from "react-icons/bi";
import { MdComputer, MdSchool, MdWorkspaces } from "react-icons/md";
import React from "react";

const additionalSkills = [
  { 
    name: "C Programming", 
    icon: <SiC className="w-12 h-12" />,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-400/30",
    level: "Advanced",
    description: "Systems programming & Algorithm implementation"
  },
  { 
    name: "C++", 
    icon: <SiCplusplus className="w-12 h-12" />,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-400/30",
    level: "Advanced",
    description: "OOP, Data Structures & Competitive Programming"
  },
  { 
    name: "Python", 
    icon: <SiPython className="w-12 h-12" />,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
    borderColor: "border-yellow-400/30",
    level: "Intermediate",
    description: "AI/ML, Scripting & Data Analysis"
  },
  { 
    name: "AI & ML", 
    icon: <BiBrain className="w-12 h-12" />,
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    borderColor: "border-green-400/30",
    level: "Learning",
    description: "Machine Learning Fundamentals & Applications"
  },
];

const academicStats = [
  { icon: <FaUniversity className="w-6 h-6" />, label: "University", value: "Metropolitan University", sub: "Sylhet, Bangladesh" },
  { icon: <FaGraduationCap className="w-6 h-6" />, label: "Program", value: "BSc in CSE", sub: "Computer Science & Engineering" },
  { icon: <FaCalendarAlt className="w-6 h-6" />, label: "Current Year", value: "4th Year Running", sub: "Final Year Student" },
  { icon: <BiBook className="w-6 h-6" />, label: "Focus Area", value: "Web Development", sub: "Frontend Specialization" }
];

const coreSubjects = [
  { name: "Data Structures & Algorithms", icon: <BiTrendingUp className="w-5 h-5" />, status: "Completed" },
  { name: "Web Development", icon: <FaLaptopCode className="w-5 h-5" />, status: "Completed" },
  { name: "Database Management", icon: <MdComputer className="w-5 h-5" />, status: "Completed" },
  { name: "Computer Networks", icon: <MdWorkspaces className="w-5 h-5" />, status: "Ongoing" },
  { name: "Operating Systems", icon: <MdComputer className="w-5 h-5" />, status: "Ongoing" },
  { name: "AI & Machine Learning", icon: <BiBrain className="w-5 h-5" />, status: "Ongoing" },
  { name: "Cloud Computing", icon: <MdWorkspaces className="w-5 h-5" />, status: "Upcoming" }
];

const AdditionalSkills = () => {
  return (
    <section
      id="additional-skills"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 8}s`
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-600/15 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-700"></div>
            </div>
            <span className="text-sm font-semibold text-gray-300 tracking-wider">ADDITIONAL SKILLS & EDUCATION</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Beyond <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Frontend</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            While specializing in frontend development, my Computer Science education at Metropolitan University, Sylhet 
            has provided me with a comprehensive understanding of various programming paradigms and computer science fundamentals.
          </p>
          
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
        </div>

        {/* Academic Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {academicStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center hover:border-cyan-400/30 transition-all duration-300 group"
            >
              <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm font-medium mb-1">{stat.label}</div>
              <div className="text-gray-500 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <FaLaptopCode className="text-cyan-400" />
            Programming & Technical Skills
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-3xl ${skill.bgColor.replace('bg-', 'bg-').replace('/20', '/40')} opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}></div>
                
                {/* Skill Card */}
                <div className={`relative p-6 rounded-3xl backdrop-blur-sm border ${skill.borderColor} ${skill.bgColor} transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-2xl h-full`}>
                  {/* Icon Container */}
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${skill.color} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      {skill.icon}
                    </div>
                  </div>
                  
                  {/* Skill Name */}
                  <h4 className="font-bold text-white text-center text-lg mb-2 group-hover:text-gray-100 transition-colors duration-300">
                    {skill.name}
                  </h4>
                  
                  {/* Level */}
                  <div className="text-center mb-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      skill.level === 'Advanced' ? 'bg-green-500/20 text-green-400 border border-green-400/30' :
                      skill.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30' :
                      'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm text-center leading-relaxed">
                    {skill.description}
                  </p>
                  
                  {/* Animated Border Bottom */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 ${skill.bgColor.replace('bg-', 'bg-').replace('/20', '')} group-hover:w-16 transition-all duration-500 rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Competencies */}
        <div className="backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8 lg:p-12 relative overflow-hidden">
          {/* Content Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400"></div>
          </div>
          
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <MdSchool className="text-cyan-400" />
                Computer Science <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Foundation</span>
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                My CSE background provides a strong theoretical foundation that enhances my practical frontend development skills
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Core CS Subjects */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
                  Core CS Curriculum
                </h4>
                
                <div className="space-y-4">
                  {coreSubjects.map((subject, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group border border-white/5 hover:border-cyan-400/20"
                    >
                      <div className={`p-2 rounded-lg ${
                        subject.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                        'bg-blue-500/20 text-blue-400'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        {subject.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                            {subject.name}
                          </span>
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                            subject.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {subject.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complementary Skills */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                  Complementary Abilities
                </h4>
                
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500">
                    <h5 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                      <BiTrendingUp className="text-cyan-400" />
                      Problem Solving Mindset
                    </h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Strong analytical skills developed through competitive programming and algorithm design, 
                      enabling efficient problem-solving in development projects.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-500">
                    <h5 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                      <FaAward className="text-purple-400" />
                      Systematic Thinking
                    </h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Understanding of software engineering principles, system design, and architecture 
                      that complements frontend development with robust backend knowledge.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-400/20 hover:border-green-400/40 transition-all duration-500">
                    <h5 className="font-bold text-white text-lg mb-2">🏊‍♂️ Athletic Discipline</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Competitive swimming has instilled discipline, perseverance, and strategic thinking - 
                      qualities that enhance my approach to coding challenges and project management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-4">The Complete Developer</h4>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                  "My additional skills in various programming languages and computer science fundamentals, 
                  combined with my frontend specialization, allow me to understand projects from multiple perspectives. 
                  This comprehensive approach enables me to create more efficient, scalable, and well-architected web applications."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default AdditionalSkills;