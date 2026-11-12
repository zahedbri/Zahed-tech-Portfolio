import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ExternalLink, Github, ArrowRight, Layers, Sparkles, Check, Database, Server } from 'lucide-react';

export const ProjectsShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Generative AI & LLMs', 'EdTech Platforms', 'Cloud & Architecture'];

  const filteredProjects: ProjectItem[] = useMemo(() => {
    const list = PORTFOLIO_DATA.projects as ProjectItem[];
    if (activeFilter === 'All') return list;
    return list.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-16 lg:py-24 border-b border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs font-semibold tracking-wide text-blue-700 dark:text-blue-400 mb-2">
              Generative AI & EdTech Projects
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Systems & Architectures
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Production-grade AI assistants, admission compliance evaluators, and high-velocity recruitment workflows solving core operational bottlenecks in global higher education.
            </p>
          </div>

          {/* Interactive Filter Controls: Segmented Buttons */}
          <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800/80 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between p-6 sm:p-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-200 hover:shadow-md"
            >
              {/* Card Header */}
              <div>
                {/* Zero-Pill Unboxed Metadata with Typographic Separator */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                  <span className="text-blue-700 dark:text-blue-400 font-semibold">{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.period}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.role}</span>
                </div>

                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.liveUrl && (
                    <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 shrink-0">
                      Live
                    </span>
                  )}
                </div>

                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Highlights / Bullets */}
                <div className="space-y-1.5 mb-5 text-xs text-slate-600 dark:text-slate-300">
                  {project.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">›</span>
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack - subtle mono tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[11px] font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Impact Metric & Actions */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Metric: </span>
                  <span className="line-clamp-1">{project.impactMetric}</span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-lg transition-colors"
                  >
                    <span>Architecture & Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="Visit Live Application"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
