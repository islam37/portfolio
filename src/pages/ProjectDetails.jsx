import { useParams, Link } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCode,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";
const projectData = [
  {
    id: "1",
    name: "Course Management System",
    img: "https://i.ibb.co.com/zTy9JGtf/Edu.jpg",
    description:
      "Full-stack course management solution with React, Express, and MongoDB.",
    tech: ["React", "Express", "MongoDB", "Node.js", "Tailwind CSS"],
    category: "Full Stack",
    live: "https://course-management-system-5c841.web.app/",
    github: "https://github.com/islam37/Course-Management-Systems-client",
    challenges:
      "Implementing secure authentication and efficient CRUD operations for managing courses, students, and instructors.",
    features: [
      "Responsive design (mobile, tablet, desktop)",
      "Login/Register with Firebase Auth (email & social login)",
      "Browse latest & popular courses",
      "Enroll/Unenroll courses with seat limit",
      "Add/Edit/Delete courses (for logged-in users)",
      "Dynamic page titles, toast notifications, and animations",
    ],
  },

  {
     
    id: "2",
    name: "ForumFlow",
    img: "https://i.ibb.co.com/YFYqM0gM/Forum-Flow.jpg",
    description:
      "Responsive MERN forum platform with posts, comments, voting, membership badges and admin tools.",
    tech: [
      "React",
      "Firebase",
      "Tailwind CSS",
      "Express",
      "Node.js",
      "MongoDB",
      "Axios",
      "TanStack Query",
      "React-Hook-Form",
      "React-Select",
      "React-Share"
    ],
    category: "Full Stack",
    live: "https://forumflow-89be8.web.app/",
    github: "https://github.com/islam37/ForumFlow-client",
    projectOverview:
      "ForumFlow is a fully responsive online platform built with the MERN stack where users can post messages, comment, upvote/downvote, and interact. It supports authentication, membership badges, dashboards, search, and admin moderation tools.",
    challenges:
      "Building reliable pagination and performant search, securing API endpoints with JWT + Firebase auth, implementing voting and comment moderation while preventing abuse, and designing the admin workflows for reported content and role management.",
    features: [
      // User features
      "Responsive design for mobile, tablet, and desktop",
      "User authentication (email/password & social login via Firebase)",
      "Membership system with badges (Bronze & Gold)",
      "Create, view, edit, and delete posts",
      "Tag-based search and popular-posts sorting",
      "Pagination for posts (5 posts per page)",
      "Commenting system with voting (upvote/downvote)",
      "Share posts on social media (via react-share)",
      "User dashboard with: My Profile, Add Post, My Posts",
      // Admin features
      "Admin dashboard with profile and statistics",
      "Manage users: assign admin role, check subscription status",
      "Reported comments management and moderation tools",
      "Make announcements",
      "Add/manage tags for posts",
      // Security & infra
      "JWT authentication for secure API access",
      "Table pagination for admin lists (users, posts, reports)",
      "Deployed on Firebase (frontend) and Vercel / Node server (backend)"
    ]
  },

  {
  id: "3",
  name: "Book Recipe",
  img: "https://i.ibb.co.com/tTB7SBWV/bookRec.jpg",
  description:
    "A full-stack recipe management application built with React, Express, and MongoDB. Users can create, view, edit, and delete recipes through an intuitive, responsive interface.",
  tech: ["JavaScript", "React", "Tailwind CSS", "MongoDB", "Express", "Node.js"],
  category: "Full Stack",
  live: "https://recipe-book-app-54aa2.web.app/",
  github: "https://github.com/islam37/Book-Recipe",
  challenges:
    "Designing a seamless CRUD flow, handling real-time updates efficiently, ensuring responsive layout consistency, and managing recipe data through MongoDB collections.",
  features: [
    "Add new recipes with title, ingredients, and instructions",
    "View all recipes in a clean and responsive UI",
    "Update existing recipes easily",
    "Delete unwanted recipes permanently",
    "Fully responsive design using Tailwind CSS",
    "Backend powered by Express.js and MongoDB",
    "Secure CRUD operations using REST API endpoints",
    "Deployed frontend on Firebase and backend on Vercel"
  ],
},

{
  id: "4",
  name: "Portfolio Website",
  img: "https://i.ibb.co.com/tMbBtCT8/porfolio.jpg",
  description: "A personal portfolio website to showcase my work and skills.",
  tech: ["HTML", "CSS", "JavaScript", "React"],
  category: "Frontend",
  live: "https://islamuddin-portfolio.netlify.app/",
  github: "https://github.com/islam37/portfolio",
  challenges:
    "Creating a visually appealing layout, ensuring responsiveness across devices, and optimizing performance.",
  features: [
    "Home, About, Projects, and Contact sections",
    "Smooth scrolling and animations",
    "Responsive design for mobile and desktop",
    "Contact form with email validation",
    "Deployed on netlify for fast accessibility",
  ],
}
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link
            to="/projects"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 py-20 relative overflow-hidden">
      {/* 🪄 Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>

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

        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* 💠 Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 z-10">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl text-gray-300 hover:text-white hover:border-cyan-400/30 transition-all duration-300 mb-10 group"
        >
          <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* 🧩 Project Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500">
          <img
            src={project.img}
            alt={project.name}
            className="w-full h-72 object-cover"
          />

          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`px-4 py-1 rounded-full text-xs font-semibold ${
                  project.category === "Full Stack"
                    ? "bg-green-500/20 text-green-400 border border-green-400/30"
                    : "bg-blue-500/20 text-blue-400 border border-blue-400/30"
                }`}
              >
                {project.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-white mb-4">{project.name}</h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {project.description}
            </p>

            {/* 🔧 Tech Stack */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <FaCode className="text-cyan-400" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 🌐 Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center gap-3"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/5 border border-white/10 text-gray-300 px-6 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-cyan-400/30 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center gap-3"
              >
                <FaGithub />
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 📋 Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Left side — Features & Challenges */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Features */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaRocket className="text-cyan-400" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-xl hover:border-cyan-400/20 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaLightbulb className="text-yellow-400" />
                Challenges & Solutions
              </h3>
              <p className="text-gray-300 leading-relaxed">{project.challenges}</p>
            </div>
          </div>

          {/* Right side — Improvements */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaLightbulb className="text-purple-400" />
              Future Enhancements
            </h3>
            <p className="text-gray-300 leading-relaxed">{project.improvements}</p>
          </div>
        </div>

        {/* 🔚 Bottom Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
          <Link
            to="/projects"
            className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl text-gray-300 hover:text-white hover:border-cyan-400/30 transition-all duration-300 group"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            All Projects
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            Start a Project
            <FaRocket className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
