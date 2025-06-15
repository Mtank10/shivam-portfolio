"use client";
import Navbar from './components/Navbar';
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <Navbar />
      <Header />
      <AboutSection />
      <SkillsSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}