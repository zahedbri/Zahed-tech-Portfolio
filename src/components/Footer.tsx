import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileDown, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-900">
          <div>
            <div className="text-base font-bold text-slate-900 dark:text-white">
              {profile.fullName}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Business Development Leader · Education GTM · Generative AI & EdTech · London, UK
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#competencies" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Competencies
            </a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Education
            </a>
            <a
              href={profile.cvPdfPath}
              download="Mohammed_Zahed_Hossain_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500">
          <div>
            © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              GitHub
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={profile.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              ycc-navigator.com
            </a>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
