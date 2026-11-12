import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { Competencies } from './components/Competencies';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationCertifications } from './components/EducationCertifications';
import { InteractiveContactForm } from './components/InteractiveContactForm';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Top Bar Navigation (Strict 3-zone contract) */}
      <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      {/* Main Content Sections */}
      <main>
        {/* Split Hero with Circular Portrait & Adjacent Proof Metric Strip */}
        <Hero />

        {/* Responsive Grid Projects Showcase with Segmented Filter & Interactive Demos */}
        <ProjectsShowcase />

        {/* 6 Executive Competency Pillars */}
        <Competencies />

        {/* Career & Employment History Timeline */}
        <ExperienceTimeline />

        {/* Education, AI Certifications & Languages */}
        <EducationCertifications />

        {/* Interactive Contact Form with Real-Time Validation */}
        <InteractiveContactForm />
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
