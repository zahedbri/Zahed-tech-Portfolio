import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Languages, Sparkles } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  const { education, certifications, languages } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-16 lg:py-24 border-b border-slate-200/70 dark:border-slate-800/70 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wide text-blue-700 dark:text-blue-400 mb-2">
            Academic Foundation & Continuous AI Mastery
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education, Certifications & Languages
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A solid grounding in business marketing and software engineering, actively upgraded with modern artificial intelligence certifications from Accenture and Minca Ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: AI Certifications & Accreditations (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Professional & Artificial Intelligence Certifications</span>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-blue-500/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {cert.degree}
                    </h3>
                    <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 shrink-0">
                      {cert.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{cert.institution}</span>
                    <span aria-hidden="true">·</span>
                    <span>{cert.location}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Degrees */}
            <div className="pt-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-4">
                <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Degrees & Software Engineering Diplomas</span>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 shrink-0">
                        {edu.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{edu.institution}</span>
                      <span aria-hidden="true">·</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Languages & Global Reach (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Languages className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>International Languages</span>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Multilingual capacity facilitates direct negotiations with education ministries, university councils, and regional agent networks across South Asia and the Middle East.
              </p>

              <div className="space-y-3 pt-2">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800/80 last:border-0">
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {lang.language}
                    </span>
                    <span className="text-xs font-mono font-medium text-blue-700 dark:text-blue-400">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Strategic Note */}
            <div className="p-6 bg-blue-50/70 dark:bg-blue-950/30 rounded-2xl border border-blue-200/80 dark:border-blue-900/40">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Executive Thesis</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                "In global education, AI is not merely a conversational wrapper—it is an operational multiplier for eligibility verification, conversion velocity, and personalized international student advisory."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
