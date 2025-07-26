"use client";
import React, { useRef } from 'react';
import Image from "next/image";
import roshan from "../assets/roshanimage.jpg";
import { Code, Smartphone, Zap, Globe } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="about"
      ref={ref}
      className="py-20 px-4 bg-gray-800/50 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            variants={itemVariants}
          >
           <div className="group w-full h-96  rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <Image
              src={roshan}
              alt="Roshan T P"
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          </div>

          </motion.div>
          <motion.div className="space-y-6" variants={itemVariants}>
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
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-green-400"
                  variants={itemVariants}
                >
                  {item.icon}
                  <span className="text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;