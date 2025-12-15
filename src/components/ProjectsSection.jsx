"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Egniol Website',
    description: 'A simple website for a restaurant, featuring SEO optimization and a responsive design.',
    tech: ['Next.js', 'React.js', 'Tailwind CSS'],
    gradient: 'from-cyan-500 to-light-blue-500',
    link: 'https://www.egniol.co.in/',
  },
   {
    title: 'Yashwik Website',
    description: 'A simple website for a restaurant, featuring SEO optimization and a responsive design.',
    tech: ['Next.js', 'React.js', 'Tailwind CSS'],
    gradient: 'from-lime-500 to-brown-500',
    link: 'https://www.yashvik.co.in',
  },
  {
    title: 'Gujju bhai Website',
    description: 'A simple website for a restaurant, featuring SEO optimization and a responsive design.',
    tech: ['Next.js', 'React.js', 'Tailwind CSS'],
    gradient: 'from-red-500 to-yellow-500',
    link: 'https://www.gujjubhai.co/privacy-policy',
  },
  // {
  //   title: 'Link 2 Campus Website',
  //   description: 'A streamlined website for Link 2 Campus, built with a focus on SEO and responsiveness.',
  //   tech: ['Next.js', 'React.js', 'Tailwind CSS'],
  //   gradient: 'from-purple-500 to-indigo-500',
  //   link: 'https://www.link2campus.com/',
  // },
  // {
  //   title: 'Egniol Digital Website',
  //   description: 'A professional website for a digital agency, optimized for search engines and all devices.',
  //   tech: ['Next.js', 'React.js', 'Tailwind CSS'],
  //   gradient: 'from-red-500 to-yellow-500',
  //   link: 'https://egnioldigital.com/',
  // },
  // {
  //   title: 'LIGMR France Website',
  //   description: 'An educational website for LIGMR France, designed to be responsive and SEO-friendly.',
  //   tech: ['Next.js', 'React.js', 'Tailwind CSS'],
  //   gradient: 'from-cyan-500 to-light-blue-500',
  //   link: 'https://lyoninstitute.edu.eu/',
  // },
  {
    title: 'Vardan Website',
    description: 'A sleek website for MSME Vardan, with a focus on SEO and responsive design.',
    tech: ['Next.js', 'React.js', 'Tailwind CSS'],
    gradient: 'from-pink-500 to-amber-500',
    link: 'https://www.msmevardan.com/',
  },
  // {
  //   title: 'Varniraj Website',
  //   description: 'A modern, responsive website for Varniraj, optimized for high search engine rankings.',
  //   tech: ['Next.js', 'React.js', 'Tailwind CSS'],
  //   gradient: 'from-orange-500 to-amber-500',
  //   link: 'https://www.varniraj.org/',
  // },
  // {
  //   title: 'Egniol Agro Website',
  //   description: 'A clean and responsive website for Egniol Agro, complete with SEO optimization.',
  //   tech: ['Next.js', 'React.js', 'Tailwind CSS'],
  //   gradient: 'from-lime-500 to-emerald-500',
  //   link: 'https://www.egniolagro.com/',
  // },
  // {
  //   title: 'Egniol Campus',
  //   description: 'An educational website for Egniol, designed to be responsive and SEO-friendly.',
  //   tech: ['React.js', 'Node.js', 'Express'],
  //   gradient: 'from-cyan-500 to-light-blue-500',
  //   link: 'https://www.egniolcampus.com/',
  // },
];

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4  bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              variants={cardVariants}
            >
              <div className={`h-40 bg-gradient-to-br ${project.gradient} p-6`}>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 px-3 py-1 rounded-full text-xs font-medium text-gray-300 group-hover:bg-purple-600 group-hover:text-white transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {/* <a href="#" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium">
                    <Github className="w-4 h-4" />
                    Code
                  </a> */}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center">
          <motion.button
            className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full font-semibold text-white shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(128, 0, 128, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            View More Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
};
// s
export default ProjectsSection;