import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { MapPin, Calendar, Briefcase, ArrowUpRight } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-16 lg:py-24 border-b border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wide text-blue-700 dark:text-blue-400 mb-2">
            Commercial Track Record
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience & Leadership
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            22 years of demonstrable achievement scaling global education recruitment channels, structuring transnational institutional agreements, and driving software delivery.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                  exp.isCurrent
                    ? 'bg-blue-600 border-white dark:border-slate-950 ring-4 ring-blue-100 dark:ring-blue-950'
                    : 'bg-slate-300 dark:bg-slate-700 border-white dark:border-slate-950'
                }`}
              />

              <div className="p-6 sm:p-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Subtitle Focus */}
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4 italic">
                  Focus: {exp.businessFocus}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold leading-relaxed shrink-0">
                        ›
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
