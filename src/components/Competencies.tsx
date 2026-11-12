import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export const Competencies: React.FC = () => {
  const { competencies } = PORTFOLIO_DATA;

  return (
    <section id="competencies" className="py-16 lg:py-24 border-b border-slate-200/70 dark:border-slate-800/70 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wide text-blue-700 dark:text-blue-400 mb-2">
            Executive Leadership & Technical Depth
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Core Competencies & Capabilities
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A rare intersection of 22 years in international education commercialization, multi-million pound student recruitment channels, and modern Generative AI engineering.
          </p>
        </div>

        {/* 6-Card Grid: 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {competencies.map((comp, index) => {
            const indexFormatted = String(index + 1).padStart(2, '0');

            return (
              <div
                key={comp.id}
                className="flex flex-col justify-between p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      {indexFormatted}.
                    </span>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                      {comp.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {comp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {comp.description}
                  </p>

                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    {comp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
