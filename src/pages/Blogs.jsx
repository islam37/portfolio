import React from 'react';

const Blogs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-6">
            <div className="max-w-4xl w-full text-center">
                {/* Header Section */}
                <div className="mb-12">
                    
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-2">
                        Welcome to my blog section! Exciting content is on the way.
                    </p>
                </div>

                {/* Coming Soon Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Coming Soon
                    </h2>
                    
                    <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
                        I'm working hard to bring you valuable content about web development, React, and modern frontend technologies. Stay tuned!
                    </p>
                    
                    <div className="flex justify-center space-x-4 mb-8">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                </div>

                {/* Blog Categories Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                        <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">React & JavaScript</h3>
                        <p className="text-gray-400">Deep dives into modern React patterns and JS best practices</p>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Web Development</h3>
                        <p className="text-gray-400">Frontend technologies, tools, and development workflows</p>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Tips & Tricks</h3>
                        <p className="text-gray-400">Productivity tips and development shortcuts</p>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/30">
                    <h3 className="text-2xl font-bold text-white mb-4">Get Notified When I Launch</h3>
                    <p className="text-gray-300 mb-6">Be the first to know when new articles are published</p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg">
                            Notify Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;