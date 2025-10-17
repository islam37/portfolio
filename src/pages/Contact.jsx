import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaGithub, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaPhoneAlt className="w-6 h-6" />,
      title: "Phone",
      value: "+8801568289690",
      link: "tel:+8801568289690",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-400/30",
      description: "Call me directly for quick conversations"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+8801568289690",
      link: "https://wa.me/8801568289690",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-400/30",
      description: "Message me anytime for quick responses"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      value: "islamuddin3725@gmail.com",
      link: "mailto:islamuddin3725@gmail.com",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-400/30",
      description: "Send detailed project proposals and inquiries"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Location",
      value: "Sylhet, Bangladesh",
      link: "#",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-400/30",
      description: "Based in Sylhet, available for remote work worldwide"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/islam-uddin-8a9798284/",
      name: "LinkedIn",
      color: "hover:text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-400/30"
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/islam37",
      name: "GitHub",
      color: "hover:text-gray-300",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-400/30"
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/8801568289690",
      name: "WhatsApp",
      color: "hover:text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-400/30"
    }
  ];

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden" id="contact">
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
              animationDuration: `${8 + Math.random() * 8}s`
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-700"></div>
            </div>
            <span className="text-gray-300 font-semibold text-sm tracking-wider">GET IN TOUCH</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
            I'm always available for new opportunities and interesting projects.
          </p>
          
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : '_self'}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className={`group p-8 rounded-3xl ${method.bgColor} border ${method.borderColor} hover:scale-105 transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm`}
            >
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white text-2xl">
                    {method.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                    {method.title}
                  </h3>
                  
                  <p className="text-lg font-semibold text-gray-200 mb-3 group-hover:text-white transition-colors duration-300">
                    {method.value}
                  </p>
                  
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {method.description}
                  </p>
                </div>
              </div>
              
              {/* Hover Indicator */}
              <div className={`w-0 group-hover:w-full h-1 bg-gradient-to-r ${method.color} mt-6 transition-all duration-500 rounded-full`}></div>
            </a>
          ))}
        </div>

        {/* Social Links & Quick Actions */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Social Links */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></div>
              Follow & Connect
            </h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connect with me on professional networks and platforms to stay updated with my latest work and projects.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-3 p-4 rounded-2xl ${social.bgColor} border ${social.borderColor} text-gray-400 ${social.color} hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 flex-1 text-center`}
                >
                  {social.icon}
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl border border-cyan-400/20 p-8">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
              Quick Actions
            </h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Prefer instant communication? Reach out directly through these quick channels for faster responses.
            </p>
            
            <div className="space-y-4">
              <a
                href="https://wa.me/8801568289690"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 text-center"
              >
                <FaWhatsapp className="w-5 h-5" />
                Message on WhatsApp
              </a>
              
              <a
                href="mailto:islamuddin3725@gmail.com"
                className="w-full bg-white/5 border border-white/10 text-gray-300 px-6 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-cyan-400/30 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 text-center"
              >
                <FaEnvelope className="w-5 h-5" />
                Send an Email
              </a>
            </div>
          </div>
        </div>

        {/* Availability Status */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 font-semibold">CURRENTLY AVAILABLE</span>
            </div>
            
            <div className="w-px h-6 bg-white/20"></div>
            
            <div className="flex items-center gap-2 text-cyan-400">
              <FaCommentDots className="w-4 h-4" />
              <span className="text-sm font-medium">Quick Response Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default Contact;