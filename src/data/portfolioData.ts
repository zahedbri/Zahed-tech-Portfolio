export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Generative AI & LLMs' | 'EdTech Platforms' | 'Cloud & Architecture';
  role: string;
  period: string;
  description: string;
  architectureNotes: string;
  techStack: string[];
  impactMetric: string;
  liveUrl?: string;
  githubUrl: string;
  highlights: string[];
  features: string[];
}

export interface CompetencyItem {
  id: string;
  title: string;
  category: string;
  description: string;
  bullets: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  businessFocus: string;
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  type: 'degree' | 'diploma' | 'certification';
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: 'Mohammed Zahed Hossain',
    headline: 'Business Development Leader | Education Go-To-Market | Generative AI & EdTech',
    subheadline: 'Connecting 22 years of global commercial leadership with hands-on Generative AI architecture for education institutions.',
    summary:
      'Business development leader with 22 years of commercial experience and over 10 years building go-to-market channels in global education across the UK, South Asia, the Middle East and Asia-Pacific. Combines deep sector expertise—working directly with university leadership, education agents, and government programmes—with hands-on generative AI engineering: designing and shipping student advisory, eligibility, and lead-management platforms built on the Claude API and modern cloud infrastructure.',
    location: 'London, United Kingdom',
    phone: '07743 726785',
    phoneInternational: '+44 7743 726785',
    email: 'zaslinks@gmail.com',
    linkedin: 'https://linkedin.com/in/zahedzaslinks',
    linkedinDisplay: 'linkedin.com/in/zahedzaslinks',
    github: 'https://github.com/zahedbri',
    githubDisplay: 'github.com/zahedbri',
    liveSite: 'https://ycc-navigator.com',
    liveSiteDisplay: 'ycc-navigator.com',
    avatarImage: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_15.55.44_a4626190.jpeg',
    cvPdfPath: '/assets/aistudio/Zahed_Hossain_CV_AWS_GenAI_Education__1__a50768de.pdf',
  },

  stats: [
    { label: 'Commercial Experience', value: '22+', unit: 'Years', desc: 'Across UK, South Asia, Middle East & APAC' },
    { label: 'Global Education GTM', value: '10+', unit: 'Years', desc: 'University partnerships & channel co-sell' },
    { label: 'Recruitment Growth', value: '+30%', unit: 'Intake', desc: 'Scaled multi-country pipeline over 5 years' },
    { label: 'Lead Conversion Lift', value: '+25%', unit: 'Qualified', desc: 'CRM-driven automated lead engagement' },
  ],

  projects: [
    {
      id: 'ycc-navigator',
      title: 'YCC Navigator',
      subtitle: 'Official University & UCAS-Grounded Advisory Assistant',
      category: 'Generative AI & LLMs' as const,
      role: 'AI Product Architect & GTM Lead',
      period: '2024 - 2025',
      description:
        'A production Generative AI student advisory assistant built on the Claude API (Anthropic). Designed to answer course, tuition fee, and entry-requirement questions with web search restricted strictly to official university and UCAS sources—eliminating hallucinated guidance.',
      architectureNotes:
        'Engineered with Claude API with strict system prompts and authoritative web grounding over university repositories. Features multi-step conversational guidance for CV building, Statement of Purpose (SOP) drafting, and interactive Confirmation of Acceptance for Studies (CAS) interview practice. Automatically hands off unresolved or edge-case enquiries to institutional CRM pipelines.',
      techStack: ['Claude API (Anthropic)', 'React', 'Next.js', 'UCAS Web-Grounding', 'CRM Webhooks', 'Tailwind CSS'],
      impactMetric: '100% official-source grounded responses with seamless human advisor handoff',
      liveUrl: 'https://ycc-navigator.com',
      githubUrl: 'https://github.com/zahedbri',
      highlights: [
        'Domain-restricted RAG query pipeline preventing hallucinatory admission advice',
        'Interactive Statement of Purpose (SOP) iterative drafting workflow',
        'Simulated mock CAS visa interview practice module with automated feedback',
        'Automatic enquiry routing and webhook escalation to education CRM systems',
      ],
      features: [
        'Course & Tuition Lookup with official UCAS grounding',
        'Step-by-step CV builder tailored for UK higher education applications',
        'Live CAS interview coaching with rubric-based score evaluations',
        'Zero-trust escalation bridge to human recruitment advisors',
      ],
    },
    {
      id: 'admission-compliance-ledger',
      title: 'Admission Compliance Ledger',
      subtitle: 'AI-Assisted 13-Point Eligibility & Compliance Engine',
      category: 'Cloud & Architecture',
      role: 'System Designer & Cloud Engineer',
      period: '2024 - 2025',
      description:
        'An automated student admission compliance application that rigorously evaluates international applicant files against 13 strict institutional and UKVI compliance criteria, identifying study gaps, financial sufficiency, and qualification equivalencies.',
      architectureNotes:
        'Built with React and Vite frontend, backed by a serverless API proxy architecture deployed on AWS. Utilizes Amazon S3 and CloudFront for edge content delivery, AWS Lambda and Amazon API Gateway for secure backend execution, and AWS Secrets Manager for zero-exposure credential handling.',
      techStack: ['React', 'Vite', 'AWS Lambda', 'Amazon API Gateway', 'AWS S3', 'CloudFront', 'AWS Secrets Manager'],
      impactMetric: '13 strict compliance checkpoints evaluated in sub-second automated workflows',
      githubUrl: 'https://github.com/zahedbri',
      highlights: [
        '13-factor automated compliance scoring matrix for international admissions',
        'Secure serverless architecture deployed on AWS with CloudFront edge caching',
        'Zero-leakage API token protection using AWS Secrets Manager',
        'Clear audit trail for compliance officers and institutional risk auditors',
      ],
      features: [
        'Academic qualification and grade scale equivalency matching',
        'Funding and maintenance bank statement verification check',
        'Study gap and employment verification tracking',
        'Immigration history and visa refusal assessment checklist',
      ],
    },
    {
      id: 'lead-desk',
      title: 'Lead Desk Multi-Region Triage',
      subtitle: 'Automated Applicant Ingestion for Emerging Markets',
      category: 'EdTech Platforms',
      role: 'Product Owner & CRM Strategist',
      period: '2024',
      description:
        'A dedicated lead-triage and conversion management platform purpose-built for paid social recruitment campaigns generating high-volume applicant inquiries across Nigeria, Ghana, Bangladesh, and the Democratic Republic of Congo.',
      architectureNotes:
        'Engineered for rapid high-volume processing with batch CSV imports, automated deduplication, real-time stage tracking, and programmatic triggers that dispatch localized document-request emails to applicants.',
      techStack: ['React', 'Node.js', 'CSV Batch Engine', 'Email Automation', 'Pipeline Analytics', 'REST API'],
      impactMetric: 'Streamlined multi-country lead triage across 4 high-growth student recruitment corridors',
      githubUrl: 'https://github.com/zahedbri',
      highlights: [
        'Batch CSV ingestion engine with robust sanitization and phone normalization',
        'Multi-stage triage pipeline from initial inquiry to document verification',
        'Automated document-request email dispatch with country-specific guidelines',
        'Real-time conversion stage analytics for university marketing teams',
      ],
      features: [
        'Corridor-specific document requirements (WAEC, NECO, HSC, Bachelor degrees)',
        'Stage progression tracking with SLA alerts for sluggish response times',
        'One-click WhatsApp and email contact initiation for recruitment officers',
        'Instant CSV export of verified candidate batches for university admissions',
      ],
    },
    {
      id: 'commission-crm',
      title: 'Commission CRM & The Academic City',
      subtitle: 'Three-Way Reconciliation & Executive Education Portal',
      category: 'EdTech Platforms',
      role: 'Solution Architect & Commercial Lead',
      period: '2024 - 2025',
      description:
        'A comprehensive platform engineered on Next.js and Supabase for tripartite university-agent-student commission reconciliation, paired with an executive online business school demonstration environment for institutional leadership.',
      architectureNotes:
        'Architected with Next.js App Router, Supabase PostgreSQL with Row Level Security (RLS), and custom business logic calculating multi-tier agent commissions, tuition milestone payments, and clawback protections.',
      techStack: ['Next.js', 'Supabase', 'PostgreSQL', 'Row-Level Security', 'Tailwind CSS', 'Recharts'],
      impactMetric: 'Eliminated manual spreadsheet disputes with automated multi-tier commission reconciliation',
      githubUrl: 'https://github.com/zahedbri',
      highlights: [
        'Real-time transparent commission ledger across universities and agent networks',
        'Role-Based Access Control ensuring agents only view their respective portfolios',
        'Automated tuition payment milestone tracking and invoice generation',
        'Executive dashboard with intake forecasting and margin modeling',
      ],
      features: [
        'Tripartite ledger reconciling University fees, Agent commissions, and Student enrollments',
        'Dynamic tier calculation based on annual student enrollment milestones',
        'Automated commission disbursement scheduling following census date confirmation',
        'Interactive business school curriculum & management demonstration suite',
      ],
    },
  ],

  competencies: [
    {
      id: 'comp-1',
      title: 'Go-to-Market & Channel Co-Sell',
      category: 'Commercial Strategy',
      description: 'Strategic market entry and sustainable distribution channel development across international higher education sectors.',
      bullets: [
        'Country-level market entry strategies across UK, South Asia, Middle East, and APAC',
        'B2B partner and education agency network recruitment and co-selling frameworks',
        'Value proposition positioning tailored to regional regulatory environments',
        'Contract structuring, commission tiering, and multi-destination alliances',
      ],
    },
    {
      id: 'comp-2',
      title: 'Senior Stakeholder Engagement',
      category: 'Relationship Leadership',
      description: 'C-suite and diplomatic level relationship building with education providers, government agencies, and university leadership.',
      bullets: [
        'Direct advisory to Vice-Chancellors, Provosts, and Dean councils on intake diversification',
        'Collaboration with British Council, ICEF, and overseas ministry delegations',
        'Management of 25+ certified education agencies across UK, Australia, and Canada',
        'Cross-functional alignment bridging UK corporate headquarters with regional field offices',
      ],
    },
    {
      id: 'comp-3',
      title: 'Generative AI Applications & LLMs',
      category: 'Artificial Intelligence',
      description: 'Designing and deploying applied LLM architectures that automate education guidance and compliance without hallucinations.',
      bullets: [
        'Production Claude API (Anthropic) prompt engineering and system guardrails',
        'Domain-restricted retrieval-augmented workflows grounded in official university data',
        'Automated Statement of Purpose (SOP) drafting and CAS interview practice tools',
        'Certified in Artificial Intelligence by Accenture and Minca Ventures (FutureLearn)',
      ],
    },
    {
      id: 'comp-4',
      title: 'Cloud & Full-Stack Data Tech',
      category: 'Technical Architecture',
      description: 'Full-stack application development and cloud serverless architecture tailored for scalable enterprise education platforms.',
      bullets: [
        'Modern frontend architecture with React, Next.js, Vite, and Tailwind CSS',
        'Cloud infrastructure on AWS: S3, CloudFront, Lambda, API Gateway, Secrets Manager',
        'Relational data modeling with Supabase, PostgreSQL, and Row Level Security',
        'Dual software engineering diplomas and foundational ERP systems background',
      ],
    },
    {
      id: 'comp-5',
      title: 'Commercial Leadership & P&L',
      category: 'Operational Excellence',
      description: 'Driving quantifiable business growth, forecasting accuracy, and cross-functional team management.',
      bullets: [
        'Proven history leading international cross-functional teams of up to 20 personnel',
        'Delivered +30% student enrollment growth over 5 years at Zaslinks Study Group',
        'Designed CRM marketing campaigns boosting qualified lead acquisition by +25%',
        'Pipeline forecasting, KPI governance, and transparent budget allocation',
      ],
    },
    {
      id: 'comp-6',
      title: 'Executive Seminars & Workshops',
      category: 'Thought Leadership',
      description: 'Delivering high-impact educational briefings, agent masterclasses, and international summit keynotes.',
      bullets: [
        'Delivered one-to-many briefings for institution leaders, counsellors, and prospective scholars',
        'Represented UK institutions at major international education expos and trade conferences',
        'Conducted GenAI literacy and digital skills workshops for education professionals',
        'Interactive compliance and visa readiness masterclasses across South Asia and UK',
      ],
    },
  ],

  experiences: [
    {
      id: 'exp-1',
      role: 'Business Development Executive',
      company: 'Riz & Rim Solutions Ltd',
      location: 'London, UK',
      period: 'May 2024 – Present',
      isCurrent: true,
      businessFocus: 'EdTech: Web, CRM and HR software platforms for education businesses',
      achievements: [
        'Lead client engagement for education-sector technology projects, scoping web application, CRM and HR software requirements with education providers and agencies (including Gunjon Education and Global Edulink) and coordinating handoff to the engineering team.',
        'Translate client business priorities into solution proposals, then manage delivery follow-up and digital marketing for live client platforms.',
        'Designed and ran CRM-driven marketing campaigns that increased qualified leads by 25% and improved conversion tracking and follow-up.',
        'Build and manage B2B partnerships with UK and overseas institutions and partner agencies, opening new recruitment and revenue channels.',
        'Carry out competitor and market analysis to inform programme launches, pricing and positioning; represent the company at international education events.',
      ],
    },
    {
      id: 'exp-2',
      role: 'Business Development Manager – Bangladesh & Nepal',
      company: 'ABE Global UK',
      location: 'UK Awarding Body / South Asia',
      period: 'Feb 2024 – Apr 2024',
      businessFocus: 'UK awarding body qualifications and transnational education',
      achievements: [
        'Led regional go-to-market for a UK awarding body across training institutes and private universities in two countries, opening new territory within two months.',
        'Negotiated agreements with partner institutions, agents and senior stakeholders to accelerate market penetration.',
        'Delivered one-to-many seminars and briefings for institution leaders, counsellors and prospective students.',
      ],
    },
    {
      id: 'exp-3',
      role: 'Head of International Recruitment',
      company: 'Zaslinks Study Group',
      location: 'London & Global',
      period: 'Mar 2019 – Feb 2024',
      businessFocus: 'Multi-destination student recruitment and university partnership scaling',
      achievements: [
        'Owned multi-country recruitment strategy and a team of around 10, growing annual student intake by 30% over five years.',
        'Built and managed partnerships with universities and colleges in the UK, Australia and Canada, and scaled a partner network of more than 25 agents.',
        'Introduced KPIs across the pipeline and used performance data to make recommendations to leadership, improving forecasting accuracy and accountability.',
        'Developed digital marketing strategies that increased brand visibility and engagement by 40%.',
        'Represented the organisation at international education fairs and government-sponsored initiatives.',
      ],
    },
    {
      id: 'exp-4',
      role: 'Country Head – Operations & Business Development',
      company: 'Zain Global (UK) Ltd',
      location: 'UK & South Asia',
      period: 'Jan 2016 – Dec 2018',
      businessFocus: 'Transnational education operations and institutional alliances',
      achievements: [
        'Ran country-level operations with more than 20 staff, securing new B2B and distribution partnerships.',
        'Designed and delivered marketing strategies that increased client acquisition by 35%.',
        'Managed cross-functional programmes between the UK head office and South Asian teams, aligning processes and timelines to group targets.',
        'Led negotiations for multi-destination education programmes and institutional alliances.',
      ],
    },
    {
      id: 'exp-5',
      role: 'Earlier Commercial & Tech Leadership',
      company: 'Middle East & South Asia Ventures',
      location: 'Middle East / South Asia',
      period: 'Earlier Career',
      businessFocus: 'Trade fair consultancy, shipping, financial services & ERP software',
      achievements: [
        'Marketing and business development roles in trade fair consultancy, manufacturing, cargo shipping and oil trading, and financial services in the Middle East.',
        'Investment consultancy for garment manufacturing in Bangladesh, including ERP technology training and enterprise systems implementation.',
      ],
    },
  ],

  education: [
    {
      degree: 'MBA, Marketing',
      institution: 'Newport University',
      location: 'Bengaluru, India',
      year: '1999',
      type: 'degree' as const,
    },
    {
      degree: 'Diplomas in Software Engineering (Two Credentials)',
      institution: 'Nextgen Software / Enterprise Training',
      location: 'Delhi, India',
      year: 'Enterprise & ERP Training',
      type: 'diploma' as const,
    },
  ],

  certifications: [
    {
      degree: 'Organisational Transformation with Artificial Intelligence',
      institution: 'Minca Ventures & FutureLearn',
      location: 'Credential Validated',
      year: '2026',
      type: 'certification' as const,
    },
    {
      degree: 'Digital Skills: Artificial Intelligence',
      institution: 'Accenture & FutureLearn',
      location: 'Credential Validated',
      year: '2025',
      type: 'certification' as const,
    },
    {
      degree: 'British Council and ICEF Certified Education Agent',
      institution: 'British Council / ICEF Global',
      location: 'Certified Agent Status',
      year: '2020, 2023',
      type: 'certification' as const,
    },
  ],

  languages: [
    { language: 'English', proficiency: 'Fluent' },
    { language: 'Bengali', proficiency: 'Fluent' },
    { language: 'Hindi', proficiency: 'Proficient' },
    { language: 'Arabic', proficiency: 'Basic' },
  ],
};
