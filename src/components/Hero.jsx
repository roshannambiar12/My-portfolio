"use client"
import Image from "next/image";
import roshan from "../assets/roshanimage.jpg";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Server, Smartphone, Globe, Zap, Download, GraduationCap, Briefcase, Calendar } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleCVDownload = () => {
    
    const link = document.createElement('a');
    link.href = '/Roshancv3.pdf'; 
    link.download = 'Roshan_TP_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const techStack = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400', description: 'Building interactive UIs with hooks, context, and modern patterns' },
    { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-gray-900', description: 'SSR, SSG, API routes, and performance optimization' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-500', description: 'Server-side JavaScript and Express.js development' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-700', description: 'NoSQL database design and Mongoose ODM' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-blue-500', description: 'Utility-first CSS framework for rapid UI development' },
    { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-orange-500', description: 'ES6+, async/await, and modern JavaScript features' },
  ];

  const projects = [
     {
      title: 'Basic Simple Website',
      description: 'A simple website for restaurant, SEO optimization, and responsive design.',
      tech: ['Next.js'],
      gradient: 'from-green-500 to-blue-500',
      icon: <Globe className="w-8 h-8" />,
    },
  ];

  const journeyData = {
    education: [
      {
        degree: 'Bachelor of Computer Science Engineering (BTech)',
        institution: 'APJ Abdul Kalam Technological University, Kerala, India',
        year: '2018 - 2022',
        description: 'Focused on computer programming, software development, and database management.',
      },
    ],
   experience: [
  {
    role: 'Web Developer',
    company: 'Egniol Services Pvt Ltd',
    year: 'Jan 2025 – Present',
    description: 'Building and maintaining many responsive web applications with Nextjs, Tailwind css and React a focus on performance and user experiencen.',
  },
  {
    role: 'Web Developer ',
    company: 'IVTREE Pvt Ltd',
    year: 'Jul 2024 – Dec 2024',
    description: 'Contributed to front-end development projects, ensuring cross-browser compatibility and responsive design.',
  },
  {
    role: 'Web Developer',
    company: 'Tech Octanet Services Pvt Ltd',
    year: 'May 2024 – Jun 2024',
    description: 'Assisted in developing and optimizing web interfaces using modern frontend technologies.',
  },
  {
    role: 'Support Associate',
    company: 'Speridian Technologies',
    year: 'Apr 2023 – Apr 2024',
    description: 'Provided technical support and assisted with maintaining internal systems and documentation.',
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Luminar Technolab',
    year: 'Jan 2023 – Jul 2023',
    description: 'Trained in full-stack development and participated in real-time projects using technologies like React, Node.js, and MongoDB.',
  },
]
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    
    // Here you would typically send the data to your backend
    alert('Thank you for your message! I\'ll get back to you soon.');
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
              
              {/* CV Download Button */}
              <button
                onClick={handleCVDownload}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={handleCVDownload}
                className="flex items-center gap-2 w-full text-left px-3 py-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative text-center px-4 max-w-4xl mx-auto">
          {/* <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Code className="w-16 h-16 text-white" />
            </div>
          </div> */}
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Roshan T P
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300">
            MEARN Stack Developer
          </div>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-400 leading-relaxed">
            Passionate about creating dynamic web applications with modern technologies. 
            Specialized in   Next.js, React.js and Tailwind CSS with a focus on 
            building exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-purple-500 hover:bg-purple-500/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Replace this div with your actual image */}
              <div className="w-full h-96 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                {/* Add your image here */}
                <Image 
                  src={roshan} 
                  alt="Roshan T P" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient with icon if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* <div className="w-full h-full bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 rounded-2xl flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <Code className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-white font-semibold">Your Photo Here</p>
                  </div>
                </div> */}
              </div>
              {/* <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <Database className="w-12 h-12 text-white" />
              </div> */}
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-100">
                MEARN Stack Developer & Next.js Enthusiast
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate full-stack developer with expertise in the MEARN stack 
                and modern frontend technologies. 
                I specialize in creating responsive, user-friendly web applications using 
                cutting-edge frameworks and tools.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in web development has been primarily focused on frontend development, 
                where I've honed my skills in creating beautiful, interactive user interfaces 
                and seamless user experiences. I'm always eager to learn new technologies 
                and take on challenging projects that push the boundaries of what's possible on the web.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {[
                  { icon: <Code className="w-5 h-5" />, text: 'Frontend Development' },
                  { icon: <Smartphone className="w-5 h-5" />, text: 'Responsive Design' },
                  { icon: <Zap className="w-5 h-5" />, text: 'Performance Optimization' },
                  { icon: <Globe className="w-5 h-5" />, text: 'Modern Frameworks' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-green-400">
                    {item.icon}
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-4 hover:shadow-2xl"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105`}>
                  {project.icon}
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 px-3 py-1 rounded-full text-xs font-medium text-gray-300 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                    <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View More Projects
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Get In Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-100">Let's Work Together</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you're looking for a developer to join your team or need help 
                  with a specific project, feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-6 h-6" />, text: 'roshannambiar12@gmail.com', href: 'mailto:roshannambiar12@gmail.com' },
                  { icon: <Phone className="w-6 h-6" />, text: '+91 9995595860', href: 'tel:+919995595860' },
                  { icon: <MapPin className="w-6 h-6" />, text: 'Kannur, Kerala, India | Currently in Ahmedabad,Gujarat', href: '#' },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
                  >
                    <div className="p-3 bg-gray-800 rounded-full group-hover:bg-purple-600 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </a>
                ))}
              </div>
              
              <div className="flex gap-4 pt-8">
                {[
                  { icon: <Github className="w-6 h-6" />, href: 'https://github.com/roshannambiar12' },
                  { icon: <Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/roshan-tp-2b1b60247' },
                  { icon: <Mail className="w-6 h-6" />, href: 'roshannambiar12@gmail.com' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-4 bg-gray-800 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Journey Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-100">My Journey</h3>
              
              {/* Education */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-600 rounded-full">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-blue-400">Education</h4>
                </div>
                
                <div className="space-y-4 ml-8">
                  {journeyData.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-purple-500/30 pl-4 pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-400 font-medium">{edu.year}</span>
                      </div>
                      <h5 className="font-semibold text-gray-200 mb-1">{edu.degree}</h5>
                      <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                      <p className="text-gray-500 text-xs">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Experience */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-600 rounded-full">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-green-400">Experience</h4>
                </div>
                
                <div className="space-y-4 ml-8">
                  {journeyData.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-purple-500/30 pl-4 pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-400 font-medium">{exp.year}</span>
                      </div>
                      <h5 className="font-semibold text-gray-200 mb-1">{exp.role}</h5>
                      <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
                      <p className="text-gray-500 text-xs">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800/50 border-t border-gray-700/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            &copy;  Roshan T P. Built with Next.js & Tailwind CSS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;