"use client";
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import ImpactReport from '../components/ImpactReport'; 
import ContactForm from '@/components/ContactForm';

const Page = () => {
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
    link.href = '/Roshancv33.pdf';
    link.download = 'Roshan_TP_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Header
        scrollToSection={scrollToSection}
        handleCVDownload={handleCVDownload}
        scrollY={scrollY}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeroSection scrollToSection={scrollToSection} />    
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
       <ImpactReport /> 
      <ContactSection />
       <ContactForm />
    </div>
  );
};

export default Page;