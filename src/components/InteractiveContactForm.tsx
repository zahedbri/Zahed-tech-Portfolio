import React, { useState, useId } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  FileDown,
  Clock,
  Sparkles,
} from 'lucide-react';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export const InteractiveContactForm: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const formId = useId();

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Education GTM & AI Advisory',
    message: '',
  });

  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    fullName: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Validate form in real-time
  const validate = (data: FormState): FormErrors => {
    const errors: FormErrors = {};

    if (!data.fullName.trim()) {
      errors.fullName = 'Full name is required';
    } else if (data.fullName.trim().length < 2) {
      errors.fullName = 'Name must be at least 2 characters';
    }

    if (!data.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (data.phone.trim() && !/^(\+)?[\d\s-]{7,20}$/.test(data.phone.trim())) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!data.subject.trim()) {
      errors.subject = 'Please select or enter an inquiry topic';
    }

    if (!data.message.trim()) {
      errors.message = 'Message content is required';
    } else if (data.message.trim().length < 20) {
      errors.message = `Please provide more detail (${data.message.trim().length}/20 chars min)`;
    }

    return errors;
  };

  const errors = validate(formData);
  const isFormValid = Object.keys(errors).length === 0;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    if (!isFormValid) return;

    setIsSubmitting(true);
    // Simulate real-time dispatch process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleMailto = () => {
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wide text-blue-700 dark:text-blue-400 mb-2">
            Initiate Collaboration
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get in Touch with Mohammed
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Available for executive education advisory, university GTM channel structuring, and enterprise Generative AI EdTech consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Interactive Contact Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Inquiry Prepared Successfully
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5 max-w-md mx-auto">
                      Thank you for reaching out, <strong>{formData.fullName}</strong>. You can dispatch this message directly via your email client or copy it with one click.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-left text-xs space-y-2 max-w-lg mx-auto">
                    <div>
                      <span className="text-slate-400">Subject:</span>{' '}
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{formData.subject}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">From:</span>{' '}
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{formData.email}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Message Preview:</span>{' '}
                      <p className="text-slate-600 dark:text-slate-300 italic mt-0.5 line-clamp-3">
                        "{formData.message}"
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleMailto}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-xs"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Default Email Client</span>
                    </button>
                    <button
                      onClick={() => handleCopy(formData.message, 'full_message')}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      {copiedField === 'full_message' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedField === 'full_message' ? 'Copied to Clipboard' : 'Copy Message Body'}</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          subject: 'Education GTM & AI Advisory',
                          message: '',
                        });
                        setTouched({
                          fullName: false,
                          email: false,
                          phone: false,
                          subject: false,
                          message: false,
                        });
                      }}
                      className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 py-2"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="flex items-center justify-between pb-1 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Interactive Inquiry Form
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Real-time Field Validation
                    </span>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label
                          htmlFor={`${formId}-fullName`}
                          className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                        >
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        {touched.fullName && !errors.fullName && (
                          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                            <Check className="w-3 h-3" /> Valid
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        id={`${formId}-fullName`}
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={() => handleBlur('fullName')}
                        placeholder="e.g. Dr. Arthur Edwards"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors focus-visible:outline-hidden focus-visible:ring-2 ${
                          touched.fullName && errors.fullName
                            ? 'border-rose-400 focus-visible:ring-rose-500'
                            : 'border-slate-200 dark:border-slate-700 focus-visible:ring-blue-600'
                        }`}
                        aria-invalid={touched.fullName && !!errors.fullName}
                      />
                      {touched.fullName && errors.fullName && (
                        <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label
                          htmlFor={`${formId}-email`}
                          className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                        >
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        {touched.email && !errors.email && (
                          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                            <Check className="w-3 h-3" /> Valid
                          </span>
                        )}
                      </div>
                      <input
                        type="email"
                        id={`${formId}-email`}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur('email')}
                        placeholder="e.g. arthur.edwards@university.ac.uk"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors focus-visible:outline-hidden focus-visible:ring-2 ${
                          touched.email && errors.email
                            ? 'border-rose-400 focus-visible:ring-rose-500'
                            : 'border-slate-200 dark:border-slate-700 focus-visible:ring-blue-600'
                        }`}
                        aria-invalid={touched.email && !!errors.email}
                      />
                      {touched.email && errors.email && (
                        <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Subject Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label
                          htmlFor={`${formId}-phone`}
                          className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                        >
                          Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        {touched.phone && !errors.phone && formData.phone && (
                          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                            <Check className="w-3 h-3" /> Valid
                          </span>
                        )}
                      </div>
                      <input
                        type="tel"
                        id={`${formId}-phone`}
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => handleBlur('phone')}
                        placeholder="+44 7700 900077"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors focus-visible:outline-hidden focus-visible:ring-2 ${
                          touched.phone && errors.phone
                            ? 'border-rose-400 focus-visible:ring-rose-500'
                            : 'border-slate-200 dark:border-slate-700 focus-visible:ring-blue-600'
                        }`}
                      />
                      {touched.phone && errors.phone && (
                        <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Inquiry Topic / Subject */}
                    <div>
                      <label
                        htmlFor={`${formId}-subject`}
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                      >
                        Inquiry Topic <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id={`${formId}-subject`}
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                      >
                        <option value="Education GTM & AI Advisory">Education GTM & AI Advisory</option>
                        <option value="YCC Navigator & Claude API Integration">YCC Navigator & Claude API Integration</option>
                        <option value="Admission Compliance Ledger Architecture">Admission Compliance Ledger Architecture</option>
                        <option value="University Agency Partnership & Recruitment">University Agency Partnership & Recruitment</option>
                        <option value="Executive Briefing / Speaking Engagement">Executive Briefing / Speaking Engagement</option>
                        <option value="General Commercial Inquiry">General Commercial Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label
                        htmlFor={`${formId}-message`}
                        className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Message & Scope Details <span className="text-rose-500">*</span>
                      </label>
                      <span className="text-[11px] font-mono text-slate-400">
                        {formData.message.trim().length} chars (20 min)
                      </span>
                    </div>
                    <textarea
                      id={`${formId}-message`}
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur('message')}
                      placeholder="Share details regarding your institution, GTM objectives, target markets, or GenAI requirements..."
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors focus-visible:outline-hidden focus-visible:ring-2 ${
                        touched.message && errors.message
                          ? 'border-rose-400 focus-visible:ring-rose-500'
                          : 'border-slate-200 dark:border-slate-700 focus-visible:ring-blue-600'
                      }`}
                      aria-invalid={touched.message && !!errors.message}
                    />
                    {touched.message && errors.message && (
                      <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl transition-colors shadow-xs disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Validating & Preparing Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Executive Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Verified Coordinates & Links (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Coordinates Card */}
            <div className="p-6 sm:p-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Direct Contact Coordinates
              </h3>

              {/* Email */}
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-lg">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Direct Email</div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(profile.email, 'email')}
                  className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-md hover:bg-slate-200/60 dark:hover:bg-slate-700 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-lg">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Mobile (London)</div>
                    <a
                      href={`tel:${profile.phoneInternational.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {profile.phone} <span className="text-slate-400 font-normal">({profile.phoneInternational})</span>
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(profile.phoneInternational, 'phone')}
                  className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-md hover:bg-slate-200/60 dark:hover:bg-slate-700 transition-colors"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                <div className="p-2 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Location Base</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    {profile.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Resume & Online Profiles */}
            <div className="p-6 sm:p-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-3">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Profiles & Resume
              </h3>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-slate-200/70 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {profile.linkedinDisplay}
                  </span>
                </div>
                <span className="text-xs text-slate-400 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-slate-200/70 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {profile.githubDisplay}
                  </span>
                </div>
                <span className="text-xs text-slate-400 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>

              <a
                href={profile.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-slate-200/70 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {profile.liveSiteDisplay}
                  </span>
                </div>
                <span className="text-xs text-slate-400 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>

              <div className="pt-2">
                <a
                  href={profile.cvPdfPath}
                  download="Mohammed_Zahed_Hossain_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 p-3 text-xs font-semibold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
                >
                  <FileDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Download Complete CV (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
