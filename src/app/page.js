import React from 'react';
import Navbar from '../components/navbar';
import HeroSection from '@/components/HeroSection/hero-section';
import AboutSection from '@/components/AboutSection/about';
import SkillSection from '@/components/SkillSection/skill-section';
import WorkSection from '@/components/WorkSection/work';
import ContactSection from '@/components/ContactSection/contact';

const HomePage = () => {
  
  return (
    <div>
      <Navbar  />
     <HeroSection/>
     <AboutSection/>
     <SkillSection/>
     <WorkSection/>
      <ContactSection/>
    </div>
  );
};

export default HomePage;



