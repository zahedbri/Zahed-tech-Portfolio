import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Sun, Moon, Menu, X, ArrowUpRight, FileDown } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center text-xs font-black shadow-xs">
              ZH
            </span>
            <span>{PORTFOLIO_DATA.profile.fullName}</span>
          </a>

          {/* Zone 2: 5 Clean Single-Line Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a
              href="#about"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
            >
              Projects
            </a>
            <a
              href="#competencies"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
            >
              Competencies
            </a>
            <a
              href="#experience"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
            >
              Experience
            </a>
            <a
              href="#education"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
            >
              Education & AI
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action + Theme Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleDarkMode}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href={PORTFOLIO_DATA.profile.cvPdfPath}
              download="Mohammed_Zahed_Hossain_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors whitespace-nowrap shrink-0"
            >
              <FileDown className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Resume PDF</span>
            </a>

            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-blue-600 rounded-lg hover:bg-slate-800 dark:hover:bg-blue-500 transition-colors shadow-xs whitespace-nowrap shrink-0"
            >
              Get in Touch
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              Projects
            </a>
            <a
              href="#competencies"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              Competencies
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              Experience
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              Education & AI
            </a>
          </nav>
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <a
              href={PORTFOLIO_DATA.profile.cvPdfPath}
              download="Mohammed_Zahed_Hossain_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              <FileDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Download CV (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Contact Mohammed
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
