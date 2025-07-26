"use client";
import React from 'react';

const techStack = [
  { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400', description: 'Building interactive UIs with hooks, context, and modern patterns' },
  { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-gray-900', description: 'SSR, SSG, API routes, and performance optimization' },
  { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-500', description: 'Server-side JavaScript and Express.js development' },
  { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-700', description: 'NoSQL database design and Mongoose ODM' },
  { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-blue-500', description: 'Utility-first CSS framework for rapid UI development' },
  { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-orange-500', description: 'ES6+, async/await, and modern JavaScript features' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <div className={`text-4xl mr-4 p-3 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center`}>
                  <span className="text-white font-bold">{tech.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-100">{tech.name}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-100">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['HTML5', 'CSS3', 'Git', 'RESTful APIs', 'Responsive Design', 'Vercel',].map((tech) => (
              <span
                key={tech}
                className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 