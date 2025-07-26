"use client";
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, GraduationCap, Briefcase, Calendar } from 'lucide-react';

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
  alert('Thank you for your message! I\'ll get back to you soon.');
  e.target.reset();
};

const ContactSection = () => {
  return (
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
                { icon: <Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/roshan-tp' },
                { icon: <Mail className="w-6 h-6" />, href: 'mailto:roshannambiar12@gmail.com' },
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
  );
};

export default ContactSection; 