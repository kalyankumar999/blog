import React from "react";

import HeroSection from "../components/HeroSection/hero-section";
import AboutSection from "../components/AboutSection/about";
import SkillSection from "../components/SkillSection/skill-section";
import WorkSection from "../components/WorkSection/work";
import ContactSection from "../components/ContactSection/contact";
import GallerySection from "../components/GallerySection/gallery";

const HomePage = () => {
  return (
    <div>
      
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <WorkSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
