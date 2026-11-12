import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, FileDown, ExternalLink, Mail, MapPin, Linkedin, Github, Globe, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { profile, stats } = PORTFOLIO_DATA;

  return (
    <section id="about" className="pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic & Strategic Narrative (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean, unboxed kicker without pills */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-700 dark:text-blue-400 mb-3.5">
              <span>Business Development Leader</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span>Education GTM</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span>Generative AI & EdTech</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-5 text-balance">
              Scaling Global Education GTM with Generative AI Architecture
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-2xl">
              Commercial leader with <strong>22 years of multi-sector experience</strong> and over a decade building high-growth education channels across the UK, South Asia, Middle East, and Asia-Pacific. Combining executive-level university and agency partnerships with hands-on <strong>Claude API</strong> generative AI engineering and modern cloud systems.
            </p>

            {/* Quick Strategic Focus Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Executive stakeholder advisory with UK, USA & APAC universities</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Production Claude API assistants grounded in official UCAS sources</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>13-point AI student compliance & eligibility cloud architectures</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Commercial GTM, agent co-sell networks & forecasting governance</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors shadow-xs"
              >
                <span>View Projects & Demos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profile.cvPdfPath}
                download="Mohammed_Zahed_Hossain_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors shadow-2xs"
              >
                <FileDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download Full CV (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>Direct Contact</span>
              </a>
            </div>

            {/* Social & Verified Professional Channels */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-medium text-slate-700 dark:text-slate-300">Direct Profiles:</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="GitHub Repositories"
              >
                <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <a
                href={profile.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="YCC Navigator Live Platform"
              >
                <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="hidden sm:inline">ycc-navigator.com</span>
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span className="hidden md:inline">{profile.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Circular Crop Profile Visual & Anchor Card (Col 5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
              {/* Circular Portrait with intentional styling */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5 group">
                  <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-sky-400 shadow-md">
                    <img
                      src={profile.avatarImage}
                      alt="Mohammed Zahed Hossain - Professional Portrait"
                      className="w-full h-full object-cover rounded-full bg-slate-100 dark:bg-slate-800 transition-transform duration-300 group-hover:scale-105"
                      loading="eager"
                    />
                  </div>
                  {/* Active / Verified Badge */}
                  <div className="absolute bottom-2 right-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full p-1.5 shadow-xs" title="Verified Professional Credentials">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {profile.fullName}
                </h2>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  Riz & Rim Solutions Ltd · London
                </p>

                {/* Quiet Credentials Metadata List */}
                <div className="w-full pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5 text-left text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 dark:text-slate-500">Location</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      London, United Kingdom
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 dark:text-slate-500">Core AI Engine</span>
                    <span className="font-mono text-slate-800 dark:text-slate-200">Claude API (Anthropic)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 dark:text-slate-500">Education</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">MBA Marketing · Software Eng Diplomas</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 dark:text-slate-500">AI Certifications</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">Accenture & Minca (2025-2026)</span>
                  </div>
                </div>

                {/* Quick Profile External Links */}
                <div className="w-full mt-4 pt-3 flex items-center justify-center gap-3">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-3 text-xs font-semibold text-center text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-3 text-xs font-semibold text-center text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Row Adjacency: 4-Column Metric Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {stat.unit}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-0.5">
                {stat.label}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
