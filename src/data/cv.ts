export const personal = {
  name: 'Omar Eissa',
  fullName: 'Omar Sameh Eissa',
  email: 'omareissa2274@gmail.com',
  phone: '07450 879519',
  location: 'Huddersfield, UK',
  locationNote: 'Open to UK-wide relocation',
  linkedin: 'https://www.linkedin.com/in/omar-eissa-/',
  github: 'https://github.com/OmarEissa21',
  rightToWork: 'Graduate Route visa upon graduation (July 2026) — authorised to work in the UK',
  languages: ['English (fluent)', 'Arabic (native)'],
}

export const roles = [
  'AI Engineer',
  'Full-Stack TypeScript Developer',
  'Data Engineer',
  'CS Student @ University of Huddersfield',
]

export const bio = `First-class Computer Science student at the University of Huddersfield, graduating July 2026.
I specialise in AI engineering, full-stack TypeScript development, and data engineering — building systems
where language models do real, structured work. My final year project, CareQueue, is an end-to-end
AI-powered GP triage and booking system built with GPT-4o and LangChain. I also spent a full year
as a research assistant designing Python data pipelines on real-world wearable health data.`

export interface Skill {
  name: string
  category: 'ai' | 'frontend' | 'backend' | 'data' | 'infra'
  usedIn: string[]
}

export const skills: Skill[] = [
  // AI & ML
  { name: 'GPT-4o',        category: 'ai',       usedIn: ['CareQueue — triage classifier & dual-mode chatbot'] },
  { name: 'LangChain',     category: 'ai',       usedIn: ['CareQueue — tool-calling agents grounded in live DB data'] },
  { name: 'OpenAI API',    category: 'ai',       usedIn: ['CareQueue — structured output via response_format:json_schema'] },
  { name: 'TensorFlow',    category: 'ai',       usedIn: ['Hand-Washing Classifier — MobileNetV2 transfer learning'] },
  { name: 'MobileNetV2',   category: 'ai',       usedIn: ['Hand-Washing Classifier — pretrained backbone, fine-tuned'] },
  { name: 'scikit-learn',  category: 'ai',       usedIn: ['Hand-Washing Classifier — stratified splits, class weighting'] },
  { name: 'Cleanlab',      category: 'ai',       usedIn: ['Hand-Washing Classifier — label error detection, removed 200 mislabelled samples'] },
  // Frontend
  { name: 'React',         category: 'frontend', usedIn: ['CareQueue frontend', 'AI4SW mobile app (React Native)'] },
  { name: 'TypeScript',    category: 'frontend', usedIn: ['CareQueue — entire stack end-to-end'] },
  { name: 'React Native',  category: 'frontend', usedIn: ['AI4SW placement — maintained live app for research participants'] },
  { name: 'Vite',          category: 'frontend', usedIn: ['CareQueue frontend build tooling'] },
  // Backend
  { name: 'Node.js',       category: 'backend',  usedIn: ['CareQueue — Express server, tRPC API layer'] },
  { name: 'tRPC',          category: 'backend',  usedIn: ['CareQueue — type-safe end-to-end API with JWT middleware'] },
  { name: 'Supabase',      category: 'backend',  usedIn: ['CareQueue — PostgreSQL, Auth, Storage'] },
  { name: 'Drizzle ORM',   category: 'backend',  usedIn: ['CareQueue — type-safe DB queries, atomic slot reservation'] },
  // Data
  { name: 'Python',        category: 'data',     usedIn: ['AI4SW — data pipelines', 'Hand-Washing Classifier', 'Crédit Agricole — risk analysis'] },
  { name: 'pandas',        category: 'data',     usedIn: ['AI4SW — multi-year Apple Health XML + Firebase JSON processing'] },
  { name: 'NumPy',         category: 'data',     usedIn: ['AI4SW — time-series feature extraction'] },
  // Infra
  { name: 'Docker',        category: 'infra',    usedIn: ['CareQueue — containerised deployment'] },
  { name: 'AWS',           category: 'infra',    usedIn: ['CareQueue — cloud infrastructure'] },
  { name: 'Git / GitHub',  category: 'infra',    usedIn: ['All projects — version control & collaboration'] },
  { name: 'Firebase',      category: 'infra',    usedIn: ['AI4SW — mobile app backend & data collection'] },
]

export const projects = [
  {
    id: 'carequeue',
    title: 'CareQueue',
    subtitle: 'AI-Powered GP Triage & Booking System',
    type: 'Final Year Project',
    period: 'Sep 2025 – May 2026',
    featured: true,
    tags: ['TypeScript', 'GPT-4o', 'LangChain', 'tRPC', 'Supabase', 'React', 'Drizzle ORM'],
    summary: 'End-to-end web application where patients describe symptoms, get triaged by GPT-4o for urgency, routed to the right clinician, and automatically booked — the entire pipeline runs without human intervention.',
    bullets: [
      'Engineered a multi-stage AI triage: keyword/regex pre-screen → GPT-4o classifier → LangChain tool-calling agent grounded in live patient data via four custom DB-query tools, with all outputs enforced via OpenAI structured output.',
      'Dual-mode LangChain conversational assistant: patient-facing chatbot (appointments, triage history, available slots) and admin chatbot (system-wide stats, audit log) — both with hard-enforced boundaries against medical advice and prompt injection.',
      'Built for correctness and security: atomic slot reservation prevents race conditions; JWT-verified RBAC at the tRPC middleware layer; append-only audit log across eight system actions.',
      'Achieved 10/10 pass rate across functional test cases; validated by 7 users including health domain experts.',
    ],
    github: 'https://github.com/OmarEissa21',
  },
  {
    id: 'handwash',
    title: 'Hand-Washing Stage Classifier',
    subtitle: 'CNN Image Classification',
    type: 'University Module Project',
    period: 'Sep 2025 – Jan 2026',
    featured: false,
    tags: ['Python', 'TensorFlow', 'Keras', 'MobileNetV2', 'Cleanlab', 'scikit-learn'],
    summary: '8-class image classifier identifying WHO hand-washing stages from 8,338 images. Applied Cleanlab label error detection, MobileNetV2 transfer learning, and selective fine-tuning.',
    bullets: [
      'Applied Cleanlab-based label error detection to identify and remove 200 mislabelled samples before training.',
      'Two-phase training: frozen backbone for initial head training, then selective fine-tuning — achieving 62.27% test accuracy and macro F1-score of 0.62 versus a 15.99% baseline CNN.',
      'Stratified splits (70/15/15), class weighting for imbalance, data augmentation; model achieved 6/6 correct predictions on held-out inference examples with high confidence.',
    ],
    github: 'https://github.com/OmarEissa21/who-handwashing-stage-classifier',
  },
]

export const experience = [
  {
    id: 'ai4sw',
    role: 'Research Assistant — AI & Data Engineering',
    org: 'AI4SW (Artificial Intelligence for Student Wellbeing)',
    orgDetail: 'University of Huddersfield · Supervised by Dr Tianhua Chen, Reader in AI',
    period: 'Jul 2024 – Jul 2025',
    type: 'Year-long Placement',
    featured: true,
    bullets: [
      'Designed and built Python pipelines (pandas, NumPy) converting multi-year Apple Health XML exports and Firebase JSON logs — 15 research participants across a 3-month study period — into structured CSV datasets ready for ML model training.',
      'Rebuilt a broken Firebase JSON→CSV pipeline, identifying root causes of systematic inaccuracies and re-engineering it for reliable output used in ongoing published research.',
      'Engineered datasets for ML models predicting student wellbeing through wearable health data: time-series aggregation, feature extraction, and anomaly detection.',
      'Maintained and enhanced the AI4SW React Native + Firebase mobile app, resolving data collection and front-end bugs and deploying updates for live users.',
      'Led user recruitment: presented to large student audiences, onboarded 15 participants, maintained communication across the 3-month data collection period.',
    ],
  },
  {
    id: 'credit-agricole',
    role: 'Risk Modelling Intern',
    org: 'Crédit Agricole Egypt',
    orgDetail: 'Credit & Risk Management Division · Cairo, Egypt',
    period: 'Aug 2023',
    type: 'Internship',
    featured: false,
    bullets: [
      'Segmented 3 years of auto-loan portfolio data into high-, medium-, and low-risk categories using Python (pandas, NumPy, Matplotlib), presenting risk insights directly to senior management.',
      'Shadowed the risk modelling team, gaining exposure to professional credit risk workflows.',
    ],
  },
  {
    id: 'students-union',
    role: 'Retail & Events Team Member',
    org: "University of Huddersfield Students' Union",
    orgDetail: 'Huddersfield, UK',
    period: 'Aug 2025 – Present',
    type: 'Part-time',
    featured: false,
    bullets: [
      'Deliver customer service in a high-volume environment, handling student and visitor queries and resolving complaints under pressure.',
      'Support on-campus events end-to-end: coordinating with organisers, managing attendee flow, and problem-solving in real time.',
    ],
  },
]

export const education = {
  degree: 'BSc (Hons) Computer Science',
  class: 'Expected First Class',
  institution: 'University of Huddersfield',
  period: 'Sep 2022 – Jul 2026',
  highlights: [
    { module: 'Data-driven Artificial Intelligence', grade: '93%' },
    { module: 'Introduction to AI',                 grade: '91%' },
    { module: 'Computational Mathematics 1',        grade: '89%' },
    { module: 'Operating Systems',                  grade: '87%' },
    { module: 'Algorithms & Data Structures',       grade: '84%' },
  ],
}

// System prompt for the AI chatbot widget
export const chatSystemPrompt = `You are Omar Eissa's personal portfolio assistant. Answer recruiter and hiring manager questions about Omar based only on the information below. Be concise, warm, and professional. If asked something not covered here, say you don't have that information and suggest they contact Omar directly at omareissa2274@gmail.com.

## About Omar
First-class Computer Science student at the University of Huddersfield, graduating July 2026. Specialises in AI engineering, full-stack TypeScript development, and data engineering. Authorised to work in the UK on the Graduate Route visa from July 2026.

## Contact
Email: omareissa2274@gmail.com | Phone: 07450 879519 | Location: Huddersfield, UK (open to UK-wide relocation)

## Key Skills
- AI/ML: GPT-4o, LangChain (tool-calling agents), OpenAI API, TensorFlow, MobileNetV2, scikit-learn, Cleanlab, prompt engineering
- Full-Stack: TypeScript, React, Node.js/Express, tRPC, Drizzle ORM, Supabase (PostgreSQL, Auth, Storage), React Native
- Data Engineering: Python, pandas, NumPy, time-series analysis, feature extraction, XML/JSON/CSV pipelines, Firebase, SQL
- Infrastructure: Docker, AWS, Git/GitHub, Vite

## Projects
**CareQueue** (Final Year Project, Sep 2025–May 2026): AI-powered GP triage and appointment booking system. Patients describe symptoms, GPT-4o triages for urgency and routes to the right clinician, then auto-books a slot — no human intervention. Stack: TypeScript, GPT-4o, LangChain tool-calling agents, tRPC, Supabase PostgreSQL, React, Drizzle ORM. Achieved 10/10 functional test pass rate, validated by 7 users including health domain experts.

**Hand-Washing Stage Classifier** (Jan 2026): 8-class CNN identifying WHO hand-washing stages from 8,338 images. Used MobileNetV2 transfer learning, Cleanlab label denoising (removed 200 mislabelled samples), achieved 62.27% accuracy vs 15.99% baseline.

## Experience
**Research Assistant — AI4SW** (Jul 2024–Jul 2025, year-long placement, University of Huddersfield): Built Python data pipelines converting Apple Health XML and Firebase JSON from 15 participants into ML-ready CSV datasets. Rebuilt a broken pipeline used in published research. Maintained a React Native mobile app for live users. Supervised by Dr Tianhua Chen.

**Risk Modelling Intern — Crédit Agricole Egypt** (Aug 2023): Segmented 3 years of auto-loan portfolio data using Python, presented risk insights to senior management.

## Education
BSc Computer Science, University of Huddersfield (Sep 2022–Jul 2026), Expected First Class. Notable grades: Data-driven AI 93%, Intro to AI 91%, Algorithms & DS 84%.`
