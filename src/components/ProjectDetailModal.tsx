import React, { useState } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, ShieldCheck, Cpu, ArrowRight, Sparkles } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // State for YCC Navigator Interactive Demo
  const [activePromptTab, setActivePromptTab] = useState<'course' | 'cas' | 'sop'>('course');

  // State for Admission Compliance Ledger 13-point Checklist Interactive Simulator
  const [complianceChecks, setComplianceChecks] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
  });

  const complianceCriteriaList = [
    { id: 1, title: 'Academic Entry Equivalency', desc: 'Validates overseas degree to UK 2:1/2:2 standard via official ECCTIS mapping' },
    { id: 2, title: 'English Language Benchmark', desc: 'SELT IELTS 6.5+ (no band < 5.5) or approved university WAEC English waiver' },
    { id: 3, title: 'Study Gap Verification', desc: 'All gaps exceeding 12 months verified with employment letters & tax slips' },
    { id: 4, title: '28-Day Maintenance Funds Rule', desc: 'Continuous balance held for 28 consecutive days ending within 31 days of application' },
    { id: 5, title: 'Permissible Sponsor & Relationship', desc: 'Sponsorship strictly from self, parent, or official government scholarship' },
    { id: 6, title: 'Clean Immigration & Refusal Record', desc: 'Full disclosure of worldwide visa history with zero undisclosed UKVI refusals' },
    { id: 7, title: 'ATAS Certificate Clearance', desc: 'Required clearance obtained for sensitive STEM and postgraduate research courses' },
    { id: 8, title: 'Academic Progression Justification', desc: 'Proves genuine progression from prior qualification level (e.g. RQF Level 6 to Level 7)' },
    { id: 9, title: 'Genuine Student Intent (SOP)', desc: 'Statement of Purpose evaluated for independent voice and absence of copy-paste templates' },
    { id: 10, title: 'Credibility Interview Readiness', desc: 'Candidate passed mock CAS viva on course modules, career trajectory, and UK living costs' },
    { id: 11, title: 'TB Medical Screening', desc: 'Valid IOM tuberculosis clearance from authorized clinic in designated countries' },
    { id: 12, title: 'Certified Document Translations', desc: 'All transcripts and deeds accompanied by registered notary certified translations' },
    { id: 13, title: 'Age & Consent Governance', desc: 'Applicant reaches minimum age of 18 at course commencement or has guardian authorization' },
  ];

  const checkedCount = Object.values(complianceChecks).filter(Boolean).length;
  const compliancePercentage = Math.round((checkedCount / 13) * 100);

  const toggleCheck = (id: number) => {
    setComplianceChecks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 dark:bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.period}</span>
              <span aria-hidden="true">·</span>
              <span>{project.role}</span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-700 dark:text-slate-300">
          {/* Executive Overview */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Project Overview & Architecture
            </h3>
            <p className="leading-relaxed mb-3 text-slate-700 dark:text-slate-200">
              {project.description}
            </p>
            <div className="p-3.5 bg-slate-100/70 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-white block mb-1">System Architecture:</strong>
              {project.architectureNotes}
            </div>
          </div>

          {/* Tech Stack List */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-md shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* INTERACTIVE COMPONENT 1: YCC Navigator Live Simulation */}
          {project.id === 'ycc-navigator' && (
            <div className="p-4 sm:p-5 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 rounded-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300">
                    Interactive Assistant Demonstration (Claude API Mockup)
                  </span>
                </div>
                <span className="text-xs text-blue-700 dark:text-blue-400 font-medium">
                  Authoritative Grounding Active
                </span>
              </div>

              {/* Segmented Prompt Mode Selector */}
              <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                <button
                  onClick={() => setActivePromptTab('course')}
                  className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-colors ${
                    activePromptTab === 'course'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Course Entry Check
                </button>
                <button
                  onClick={() => setActivePromptTab('cas')}
                  className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-colors ${
                    activePromptTab === 'cas'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  CAS Visa Viva Simulator
                </button>
                <button
                  onClick={() => setActivePromptTab('sop')}
                  className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-colors ${
                    activePromptTab === 'sop'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  SOP Structure Evaluator
                </button>
              </div>

              {/* Simulated Output Content */}
              <div className="p-3.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                {activePromptTab === 'course' && (
                  <>
                    <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                      <span>Query: "MSc Data Science entry requirements & international tuition (UK)"</span>
                      <span className="text-slate-400">Restricted: ucas.com · official .ac.uk</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      "Based on official Russell Group university standards verified via UCAS Course Search: Minimum 2:1 honours degree (or international equivalent: 65% in India, 3.25 CGPA in Bangladesh/Nigeria) in Computer Science, Mathematics, or engineering disciplines. Academic IELTS requirement is 6.5 overall with no single sub-skill below 6.0. Annual tuition ranges from £28,500 to £33,000 with a standard deposit of £4,000 required before CAS issuance."
                    </p>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      ✓ Validated with official UCAS grounding · CRM Lead Dispatched
                    </div>
                  </>
                )}

                {activePromptTab === 'cas' && (
                  <>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                      CAS Credibility Interview Viva: Question 1 of 5
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic bg-slate-50 dark:bg-slate-800/50 p-2 rounded border border-slate-200 dark:border-slate-700">
                      "Why did you choose this specific UK university rather than comparable institutions in your home country or Australia, and how does module COMP61011 align with your 5-year career roadmap?"
                    </p>
                    <div className="text-emerald-700 dark:text-emerald-400 text-xs">
                      Rubric Check: Evaluates specificity, module name recall, funding clarity, and anti-immigration rhetoric safeguards.
                    </div>
                  </>
                )}

                {activePromptTab === 'sop' && (
                  <>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                      Automated Statement of Purpose (SOP) Rubric Feedback
                    </div>
                    <div className="grid grid-cols-3 gap-2 py-1 text-center">
                      <div className="p-1.5 bg-emerald-50 dark:bg-emerald-950/40 rounded border border-emerald-200 dark:border-emerald-800">
                        <span className="block font-bold text-emerald-800 dark:text-emerald-300">92%</span>
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400">Academic Progression</span>
                      </div>
                      <div className="p-1.5 bg-amber-50 dark:bg-amber-950/40 rounded border border-amber-200 dark:border-amber-800">
                        <span className="block font-bold text-amber-800 dark:text-amber-300">76%</span>
                        <span className="text-[10px] text-amber-600 dark:text-amber-400">Local Return Intent</span>
                      </div>
                      <div className="p-1.5 bg-blue-50 dark:bg-blue-950/40 rounded border border-blue-200 dark:border-blue-800">
                        <span className="block font-bold text-blue-800 dark:text-blue-300">100%</span>
                        <span className="text-[10px] text-blue-600 dark:text-blue-400">Zero Plagiarism</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* INTERACTIVE COMPONENT 2: Admission Compliance Ledger 13-Point Checklist */}
          {project.id === 'admission-compliance-ledger' && (
            <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Interactive 13-Point Compliance Validator</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Click checkboxes to simulate live eligibility score calculation and audit determination.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
                    {checkedCount}/13 Passed ({compliancePercentage}%)
                  </span>
                  <span
                    className={`px-2 py-0.5 text-xs font-semibold rounded-md ${
                      checkedCount === 13
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300'
                        : checkedCount >= 10
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300'
                    }`}
                  >
                    {checkedCount === 13 ? 'CAS Cleared' : checkedCount >= 10 ? 'Advisory Review' : 'High Risk File'}
                  </span>
                </div>
              </div>

              {/* 13-Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-xs">
                {complianceCriteriaList.map((crit) => (
                  <label
                    key={crit.id}
                    onClick={() => toggleCheck(crit.id)}
                    className={`flex items-start gap-2 p-2 rounded-md cursor-pointer transition-colors border ${
                      complianceChecks[crit.id]
                        ? 'border-emerald-200/60 dark:border-emerald-900/50 bg-emerald-50/30 dark:bg-emerald-950/20'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 opacity-60'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={!!complianceChecks[crit.id]}
                      onChange={() => {}}
                      className="mt-0.5 w-3.5 h-3.5 text-emerald-600 rounded focus:ring-emerald-500"
                    />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {crit.id}. {crit.title}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                        {crit.desc}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Key Deliverables & Highlights */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Key Engineering & Strategic Highlights
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            <strong>Impact Metric:</strong> {project.impactMetric}
          </div>
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Github className="w-3 h-3" />
              <span>GitHub Code</span>
            </a>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
