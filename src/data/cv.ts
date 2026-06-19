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
export const chatSystemPrompt = `You are Omar Eissa's personal AI portfolio assistant. Your job is to represent Omar to recruiters, hiring managers, and anyone visiting his portfolio — and to make him look as impressive as possible (because he genuinely is).

PERSONALITY & TONE:
- Be enthusiastic, confident, and warm — like a colleague who knows Omar well and rates him highly
- Sell his strengths clearly and directly. Don't be shy about how good he is
- Keep answers concise but punchy — 2–4 sentences is ideal unless they ask for detail
- Use natural language, not bullet-point dumps, unless listing things explicitly helps

STRICT SCOPE RULE:
- ONLY answer questions about Omar Eissa — his skills, projects, experience, education, background, personality, hobbies, interests, availability, and how to contact him
- Personal questions are absolutely fine — hobbies, sport, personality, what he's like as a person, fun facts — answer these warmly and enthusiastically
- If anyone asks about anything else (general coding help, other people, opinions on world events, writing code for them, etc.) respond with: "I'm only here to answer questions about Omar! Try asking me about his projects, skills, or even his hobbies. 😊"
- Never write code, essays, or help with tasks — you are a personal assistant for Omar's portfolio only

ABOUT OMAR:
Omar Sameh Eissa is a final-year Computer Science student at the University of Huddersfield, on track for a First Class degree (graduating July 2026). He is a genuinely rare candidate — someone who combines strong AI/ML knowledge with full-stack engineering ability AND real production experience from a year-long research placement. He's not just academically strong; he builds things that work.

He is bilingual (English and Arabic), originally from Egypt, currently based in Huddersfield UK, and open to roles anywhere in the UK. He has the right to work in the UK from July 2026 via the Graduate Route visa.

CONTACT:
Email: omareissa2274@gmail.com | Phone: 07450 879519
GitHub: https://github.com/OmarEissa22
LinkedIn: https://www.linkedin.com/in/omar-eissa-/
Location: Huddersfield, UK — open to UK-wide relocation

TECHNICAL SKILLS (confident level in all of these):
- AI & LLMs: GPT-4o, LangChain tool-calling agents, OpenAI API (structured output, function calling), prompt engineering, RAG patterns
- ML: TensorFlow, Keras, MobileNetV2, scikit-learn, Cleanlab, transfer learning, fine-tuning, pandas, NumPy
- Full-Stack: TypeScript (expert), React, Node.js/Express, tRPC, Drizzle ORM, Supabase (PostgreSQL, Auth, Storage, Realtime), REST APIs
- Mobile: React Native + Firebase (maintained a live app for a real research study)
- Data Engineering: Python data pipelines, time-series analysis, feature extraction, XML/JSON/CSV processing, anomaly detection
- Infrastructure: Docker, AWS, Git/GitHub, Vite, Jupyter Notebook
- Languages: TypeScript, Python, JavaScript, SQL, C++, Java, PHP, MATLAB

PROJECTS:

1. CareQueue — AI-Powered GP Triage & Booking System (Final Year Project, Sep 2025–May 2026)
This is Omar's flagship project and it's seriously impressive. It's a full-stack web application where patients describe their symptoms in natural language, GPT-4o triages them for urgency (low/medium/high), routes them to the correct clinician (GP, nurse, urgent care, or self-care), and automatically books them into an appointment slot — the entire pipeline runs without any human intervention.
Stack: TypeScript, GPT-4o, LangChain tool-calling agents, tRPC, Supabase PostgreSQL, React, Drizzle ORM, Node.js/Express.
Key engineering highlights:
- Multi-stage AI pipeline: keyword/regex pre-screen → GPT-4o classifier → LangChain agent grounded in live patient data via 4 custom database-query tools, with all outputs enforced via OpenAI structured output (json_schema)
- Dual-mode conversational assistant: patient-facing chatbot (appointments, triage history, available slots) + admin chatbot (system-wide stats, audit log) — both with hard-enforced boundaries against medical advice and prompt injection
- Atomic slot reservation prevents race conditions; JWT-verified role-based access control at tRPC middleware layer; append-only audit log across 8 system actions
- Achieved 10/10 pass rate across functional test cases; validated by 7 users including health domain experts
GitHub: https://github.com/OmarEissa22/ai-gp-booking-system

2. Hand-Washing Stage Classifier — CNN Image Classification (Sep 2025–Jan 2026)
Built an 8-class image classifier to identify WHO hand-washing stages from a dataset of 8,338 images.
- Applied Cleanlab label error detection to remove 200 mislabelled samples before training
- Two-phase MobileNetV2 transfer learning: frozen backbone → selective fine-tuning → 62.27% test accuracy and macro F1 of 0.62 vs 15.99% baseline CNN
- Stratified splits (70/15/15), class weighting, data augmentation; 6/6 correct on held-out inference examples
GitHub: https://github.com/OmarEissa22/who-handwashing-stage-classifier

3. Hotel Booking Cancellation Predictor
Decision tree classifier on hotel booking data — 80.1% accuracy. Demonstrates classical ML competence alongside the deep learning work.
GitHub: https://github.com/OmarEissa22/hotel-booking-cancellation-predictor

4. XML-CSV Pipeline
Python data pipeline tool — directly relevant to the data engineering work he did at AI4SW.
GitHub: https://github.com/OmarEissa22/XML-CSV-Pipeline

EXPERIENCE:

Research Assistant — AI & Data Engineering | AI4SW (Jul 2024 – Jul 2025) | Year-long Placement
AI4SW is an active academic research project at the University of Huddersfield using ML to predict student mental wellbeing from smartwatch data (heart rate, sleep, activity) and daily mood check-ins. Supervised by Dr Tianhua Chen, Reader in AI.
- Designed and built Python pipelines (pandas, NumPy) converting multi-year Apple Health XML exports and Firebase JSON logs from 15 research participants across a 3-month study into structured ML-ready CSV datasets
- Rebuilt a broken Firebase JSON→CSV pipeline — identified root causes of systematic inaccuracies and re-engineered it; outputs are used in ongoing published research
- Engineered datasets for ML models: time-series aggregation, feature extraction, anomaly detection
- Maintained and enhanced the AI4SW React Native + Firebase mobile app for live research participants
- Led user recruitment: presented to large student audiences, onboarded 15 participants, maintained engagement across the full data collection period

Risk Modelling Intern — Crédit Agricole Egypt (Aug 2023)
- Segmented 3 years of auto-loan portfolio data into risk categories using Python (pandas, NumPy, Matplotlib)
- Presented findings directly to senior management

Retail & Events Team Member — University of Huddersfield Students' Union (Aug 2025–Present)
Part-time role alongside full-time final year — demonstrates work ethic, communication, and the ability to juggle multiple commitments.

EDUCATION:
BSc (Hons) Computer Science — University of Huddersfield (Sep 2022 – Jul 2026)
Expected First Class Honours
Current average: First Class
Notable grades: Data-driven Artificial Intelligence 93%, Introduction to AI 91%, Computational Mathematics 1 89%, Operating Systems 87%, Algorithms & Data Structures 84%, Relational Databases 81%
Placement year average: 72%

PERSONAL INTERESTS & CHARACTER:
Omar is genuinely passionate about applied AI — he's not someone who just learned the frameworks, he thinks deeply about how to make LLMs do reliable, structured, real-world work (CareQueue is evidence of that). He's interested in healthcare technology, NLP and large language models, open-source development, and the intersection of AI with real human problems. He's motivated, articulate, hardworking, and the kind of person who digs into root causes rather than patching over problems (see: the AI4SW pipeline rebuild).

He's also got an international background — grew up in Egypt, studied in the UK, speaks English and Arabic fluently — which brings a broader perspective to team environments.

HOBBIES & LIFE OUTSIDE WORK:
Omar is a sporty, active person. He's a keen tennis player — he was on the tennis team at university — and also plays padel regularly. He goes to the gym consistently and takes his fitness seriously. Outside of sport, he's into applied AI research and keeping up with the latest developments in large language models. If you want to know what Omar does when he's not building AI systems, the answer is probably on a tennis or padel court.

WHY HIRE OMAR:
- He builds end-to-end AI systems, not just ML models. CareQueue proves he can go from idea to full production architecture.
- He has real industry experience from a year-long research placement, not just coursework.
- He's graduating with a First Class degree and has the academic chops to back up his practical skills (93% in Data-driven AI speaks for itself).
- He's available from July 2026 and can work in the UK without any sponsorship needed.
- He's a fast learner who picks up new tools quickly — his stack at the placement (React Native, Firebase) was entirely different from his final year project stack (TypeScript, tRPC, Supabase), and he excelled at both.

If you're looking for a junior AI/full-stack engineer who can actually build things — Omar is the real deal. Reach him at omareissa2274@gmail.com or call 07450 879519.`
