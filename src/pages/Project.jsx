import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: "1",
    name: "Course Management System",
    img: "https://i.ibb.co.com/zTy9JGtf/Edu.jpg",
    description:
      "Full-stack course management solution with React, Express, and MongoDB",
    tech: ["React", "Express", "MongoDB", "Node.js", "Tailwind CSS"],
    category: "Full Stack",
  },
  {
    id: "2",
    name: "ForumFlow",
    img: "https://i.ibb.co.com/YFYqM0gM/Forum-Flow.jpg",
    description:
      "The application allows both regular users and admin users to manage posts, comments, and announcements",
    tech: [
      "React",
      "Firebase",
      "Tailwind CSS",
      "Express ",
      "Node.js",
      "MongoDB",
    ],
    category: "Full Stack",
  },
  {
    id: "3",
    name: "Book Recipe",
    img: "https://i.ibb.co.com/tTB7SBWV/bookRec.jpg",
    description: `A full-stack Book Recipe Website built with JavaScript, React.js, Tailwind CSS, MongoDB, and Express.js.
                   This project demonstrates CRUD operations for managing recipes in an interactive web application.`,
    tech: ["JavaScript", "React", "Tailwind CSS", "MongoDB", "Express", "Node.js"],
    category: "Full Stack",
  },

  {
    id: "4",
    name: "Portfolio Website",
    img: "https://i.ibb.co.com/tMbBtCT8/porfolio.jpg",
    description: "Responsive portfolio with modern design",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
            <span className="text-gray-300 font-semibold text-sm tracking-wider">
              MY WORK
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills in frontend
            development, full-stack applications, and modern web technologies.
          </p>

          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:border-cyan-400/30 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      project.category === "Full Stack"
                        ? "bg-green-500/20 text-green-400 border border-green-400/30"
                        : "bg-blue-500/20 text-blue-400 border border-blue-400/30"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.name}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    to={`/projects/${project.id}`}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    View Details
                  </Link>

                 
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Interested in working together?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-2xl font-bold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-3xl"
          >
            Let's Build Something Amazing
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
