export const personal = {
  name: 'Omar Eissa',
  fullName: 'Omar Sameh Eissa',
  email: 'omareissa2274@gmail.com',
  phone: '07727 808240',
  location: 'Huddersfield, UK',
  locationNote: 'Open to London and UK-wide relocation',
  linkedin: 'https://www.linkedin.com/in/omar-eissa22',
  github: 'https://github.com/OmarEissa22',
  rightToWork: 'Graduate Route application submitted July 2026, decision pending. Permitted to work on a PAYE basis now; two years of full UK working rights with no sponsorship required once granted.',
  languages: ['English (fluent)', 'Arabic (native)'],
}

export const roles = [
  'Data Analyst',
  'Business Intelligence Analyst',
  'Analytics & Data Engineering',
  'First Class Computer Science Graduate',
]

export const bio = `Computer Science graduate (First Class Honours, 86%) working in data and analytics.

My strongest work has been the unglamorous middle of the job: extraction, cleaning, quality checks, and
then getting a finding in front of someone who can act on it. On a year-long placement I inherited a data
pipeline producing systematically inaccurate outputs that nobody had flagged, because the numbers looked
plausible. I traced it to root cause and rebuilt it; that data now supports published research.

I build cohort models and forecasts, validate them by backtesting rather than by inspection, and report
the result honestly when the model is wrong.`

export interface Skill {
  name: string
  category: 'sql' | 'analysis' | 'viz' | 'engineering' | 'other'
  usedIn: string[]
}

export const skills: Skill[] = [
  // SQL & Databases
  { name: 'SQL',                    category: 'sql',         usedIn: ['CareQueue — queries, views and constraints', 'Relational Databases module — 81%'] },
  { name: 'PostgreSQL',             category: 'sql',         usedIn: ['CareQueue — full relational schema with atomic slot reservation'] },
  { name: 'Relational Schema Design', category: 'sql',       usedIn: ['CareQueue — constraints preventing double-booking under concurrent access'] },
  { name: 'Supabase',               category: 'sql',         usedIn: ['CareQueue — PostgreSQL, Auth, Storage'] },
  { name: 'Firebase',               category: 'sql',         usedIn: ['AI4SW — research data collection backend'] },

  // Analysis & Statistics
  { name: 'Python',                 category: 'analysis',    usedIn: ['AI4SW — data pipelines', 'Credit Agricole — auto-loan risk segmentation', 'Fintech case study — cohort forecasting'] },
  { name: 'pandas',                 category: 'analysis',    usedIn: ['AI4SW — multi-year Apple Health XML and Firebase JSON processing', 'Cohort modelling'] },
  { name: 'NumPy',                  category: 'analysis',    usedIn: ['AI4SW — time-series feature extraction'] },
  { name: 'Cohort Analysis',        category: 'analysis',    usedIn: ['Fintech case study — twelve-month adoption forecast'] },
  { name: 'Forecasting & Backtesting', category: 'analysis', usedIn: ['Fintech case study — backtested from an earlier cutoff; the model ran 24% low and I reported it'] },
  { name: 'Customer Segmentation',  category: 'analysis',    usedIn: ['Credit Agricole — three years of auto-loan portfolio data into risk categories'] },
  { name: 'Funnel Analysis',        category: 'analysis',    usedIn: ['Fintech case study — conversion funnel alongside the forecast'] },
  { name: 'Feature Engineering',    category: 'analysis',    usedIn: ['AI4SW — heart rate, sleep and activity signals joined to daily mood check-ins'] },
  { name: 'Anomaly Detection',      category: 'analysis',    usedIn: ['AI4SW — wearable health time-series'] },
  { name: 'scikit-learn',           category: 'analysis',    usedIn: ['Hand-Washing Classifier — stratified splits, class weighting'] },

  // Reporting & Visualisation
  { name: 'Power BI',               category: 'viz',         usedIn: ['AI4SW — reporting on wellbeing study data'] },
  { name: 'Tableau',                category: 'viz',         usedIn: ['AI4SW — reporting on wellbeing study data'] },
  { name: 'Matplotlib',             category: 'viz',         usedIn: ['Credit Agricole — risk segmentation visuals for senior management'] },
  { name: 'Excel',                  category: 'viz',         usedIn: ['Credit Agricole — summary tables management already read'] },

  // Data Engineering
  { name: 'ETL & Pipeline Design',  category: 'engineering', usedIn: ['AI4SW — rebuilt a Firebase to CSV pipeline from root cause'] },
  { name: 'Data Quality & Validation', category: 'engineering', usedIn: ['AI4SW — found systematically inaccurate outputs nobody had flagged', 'Hand-Washing Classifier — label error detection'] },
  { name: 'XML / JSON / CSV',       category: 'engineering', usedIn: ['AI4SW — multi-year Apple Health exports and Firebase logs'] },
  { name: 'Time-Series Aggregation', category: 'engineering', usedIn: ['AI4SW — daily and hourly structured datasets'] },

  // Other tooling
  { name: 'TypeScript',             category: 'other',       usedIn: ['CareQueue — full stack'] },
  { name: 'React',                  category: 'other',       usedIn: ['CareQueue frontend', 'AI4SW mobile app (React Native)'] },
  { name: 'Git / GitHub',           category: 'other',       usedIn: ['All projects'] },
  { name: 'GPT-4o / LangChain',     category: 'other',       usedIn: ['CareQueue — structured output with JSON schema enforcement'] },
]

export interface Project {
  id: string
  title: string
  subtitle: string
  type: string
  period: string
  featured: boolean
  tags: string[]
  summary: string
  bullets: string[]
  github?: string
}

export const projects: Project[] = [
  {
    id: 'forecasting',
    title: 'Customer Adoption Forecasting',
    subtitle: 'Cohort Modelling, Backtesting & Funnel Analysis',
    type: 'Fintech Analytics Case Study',
    period: '2026',
    featured: true,
    tags: ['Python', 'pandas', 'Cohort Analysis', 'Backtesting', 'Funnel Analysis'],
    summary: 'A twelve-month customer adoption and asset-holdings forecast for an investment product — built as a cohort model rather than a time series, then stress-tested against what actually happened.',
    bullets: [
      'Chose a cohort model over fitting a time series, because the observable series was distorted by how the sample was constructed and a trend model would have learned the artefact as real. An ARIMA fit on the same data returned roughly one third of the cohort figure, confidently.',
      'Backtested the forecast by rebuilding it from an earlier information cutoff and comparing against realised outcomes. It ran consistently 24% low. I reported the miss and its direction rather than presenting a cleaner number.',
      'Caught a methodological flaw in my own driver analysis partway through: unequal observation windows were inflating every effect by roughly threefold and, more importantly, changing which variable ranked as the strongest driver.',
      'Delivered conversion funnel analysis and asset class decomposition alongside the forecast, and presented the full analysis including its limitations to two senior analysts.',
    ],
  },
  {
    id: 'carequeue',
    title: 'CareQueue',
    subtitle: 'Relational Schema & AI Triage Booking System',
    type: 'Final Year Project',
    period: 'Sep 2025 – May 2026',
    featured: true,
    tags: ['PostgreSQL', 'SQL', 'TypeScript', 'GPT-4o', 'tRPC', 'React'],
    summary: 'End-to-end system where patients describe symptoms, get triaged for urgency, routed to the right clinician and automatically booked. The hard part was correctness under concurrency, not the model.',
    bullets: [
      'Designed the full relational schema in PostgreSQL, including atomic slot reservation that prevents two patients being booked into the same appointment under concurrent access, and constraints that hold when the system is under load.',
      'Built an append-only audit log spanning eight distinct system actions, so every state change in the booking flow stays traceable after the fact.',
      'Multi-stage triage: keyword pre-screen, then a GPT-4o classifier, then a tool-calling agent grounded in live data through four custom database-query tools — with every model output constrained by JSON schema enforcement, on the assumption that model output cannot be trusted unchecked.',
      'Validated through structured testing rather than inspection: 10 of 10 functional test cases passed, with user testing across 7 participants including health domain experts.',
    ],
    github: 'https://github.com/OmarEissa22/ai-gp-booking-system',
  },
  {
    id: 'handwash',
    title: 'Hand-Washing Stage Classifier',
    subtitle: 'Data Quality Before Model Tuning',
    type: 'University Module Project',
    period: 'Sep 2025 – Jan 2026',
    featured: false,
    tags: ['Python', 'Data Quality', 'Cleanlab', 'scikit-learn', 'TensorFlow'],
    summary: 'An 8-class image classifier over 8,338 images — and a demonstration that fixing the data beats tuning the model.',
    bullets: [
      'Ran label error detection before touching the architecture, surfacing roughly 200 mislabelled samples. Removing them improved the result more than any architectural change did.',
      'Applied stratified 70/15/15 splits, class weighting for imbalance and augmentation for robustness, reaching 62.27% test accuracy and 0.62 macro F1 against a 15.99% baseline.',
    ],
    github: 'https://github.com/OmarEissa22/who-handwashing-stage-classifier',
  },
]

export const experience = [
  {
    id: 'ai4sw',
    role: 'Research Assistant — Data & Analysis',
    org: 'AI4SW (Artificial Intelligence for Student Wellbeing)',
    orgDetail: 'University of Huddersfield · Supervised by Dr Tianhua Chen, Reader in AI',
    period: 'Jul 2024 – Jul 2025',
    type: 'Year-long Placement',
    featured: true,
    bullets: [
      'Inherited a Firebase to CSV pipeline producing systematically inaccurate outputs that had gone unnoticed, because the numbers looked plausible. Traced the fault to root cause, proved the mechanism and rebuilt the pipeline. The corrected data now supports ongoing published research and I am credited in the forthcoming paper; in its previous state it would not have got there.',
      'Built the datasets behind a study predicting student wellbeing from wearable health data, converting multi-year Apple Health XML exports and Firebase JSON logs for 15 participants across a 3-month collection period into structured daily and hourly tables.',
      'Engineered the analytical layer: time-series aggregation, feature extraction and anomaly detection across heart rate, sleep and activity signals, joined against daily mood check-ins. Reported findings using Power BI and Tableau.',
      'Maintained the project React Native and Firebase mobile app, resolving data collection and front-end defects and deploying updates to live users throughout the academic year.',
      'Led participant recruitment: presented to large student audiences, onboarded 15 participants and maintained communication across the full collection period.',
    ],
  },
  {
    id: 'credit-agricole',
    role: 'Risk Modelling Intern',
    org: 'Crédit Agricole Egypt',
    orgDetail: 'Credit & Risk Management Division · Cairo, Egypt',
    period: 'Aug 2023',
    type: 'Internship',
    featured: true,
    bullets: [
      'Segmented three years of auto-loan portfolio data into high, medium and low risk categories using Python (pandas, NumPy, Matplotlib).',
      'Presented the risk findings directly to senior management, including defending a segment that carried higher non-payment risk than the team expected — which meant showing the pattern held rather than being an artefact of where I had drawn the segment boundaries.',
      'Completed structured Python data analytics training alongside the risk modelling team.',
    ],
  },
  {
    id: 'students-union',
    role: 'Retail & Events Team Member',
    org: "University of Huddersfield Students' Union",
    orgDetail: 'Huddersfield, UK',
    period: 'Aug 2025 – Aug 2026',
    type: 'Part-time',
    featured: false,
    bullets: [
      'Customer-facing role in a high-volume live events and retail environment, alongside full-time study.',
      'Supported on-campus events end to end: coordinating with organisers, managing attendee flow and problem-solving in real time.',
    ],
  },
]

export const education = {
  degree: 'BSc (Hons) Computer Science',
  class: 'First Class Honours — 86%',
  institution: 'University of Huddersfield',
  period: 'Sep 2022 – Jul 2026',
  highlights: [
    { module: 'Data-driven Artificial Intelligence', grade: '93%' },
    { module: 'Introduction to AI',                 grade: '91%' },
    { module: 'Computational Mathematics 1',        grade: '89%' },
    { module: 'Relational Databases',               grade: '81%' },
    { module: 'Final year average',                 grade: '85.2%' },
  ],
}

// System prompt for the AI chatbot widget
export const chatSystemPrompt = `You are Omar Eissa's portfolio assistant. You represent Omar to recruiters and hiring managers visiting his site.

PERSONALITY & TONE:
- Warm, direct and specific. Talk about what he has actually done, not adjectives about him.
- Concrete evidence beats enthusiasm. If you can cite a number or a decision he made, do that instead of calling him talented.
- Keep answers to 2-4 sentences unless asked for detail.
- Never overstate his level. If something is a genuine gap, say so plainly — it reads as more credible, not less.

STRICT SCOPE RULE:
- ONLY answer questions about Omar — his skills, projects, experience, education, background, interests, availability and how to contact him.
- Personal questions are fine — hobbies, sport, what he is like to work with.
- For anything else (general coding help, other people, world events, writing code) respond with: "I'm only here to answer questions about Omar! Try asking me about his projects, skills, or even his hobbies."
- Never write code or essays for anyone.

ABOUT OMAR:
Omar Sameh Eissa is a Computer Science graduate from the University of Huddersfield — First Class Honours at 86%, graduated July 2026, including a year-long industrial placement. He works in data and analytics.

He is based in Huddersfield, open to London and UK-wide relocation, and bilingual in English and Arabic.

RIGHT TO WORK: Graduate Route application submitted July 2026, decision pending. He is permitted to work on a PAYE basis now. Once granted, that is two years of full UK working rights with no employer sponsorship required. Be accurate about this and never overstate it.

CONTACT:
Email: omareissa2274@gmail.com | Phone: 07727 808240
GitHub: https://github.com/OmarEissa22
LinkedIn: https://www.linkedin.com/in/omar-eissa22

WHAT HE IS TARGETING:
Data analyst, business intelligence analyst, insight analyst and analytics roles. He reached the final round of Wise's Analytics Graduate Programme.

TECHNICAL SKILLS — be accurate about levels:
- Strong: SQL, PostgreSQL, relational schema design, Python (pandas, NumPy, Matplotlib), ETL and pipeline design, data quality and validation, cohort analysis, forecasting and backtesting, customer segmentation, feature engineering, TypeScript, React, Git.
- Working level: scikit-learn, TensorFlow, Excel, Supabase, Firebase, AWS, GPT-4o and LangChain, structured JSON output.
- Basic, and he says so openly: Power BI, Tableau, DAX. He has built reports in them but would not claim depth.
- Not working languages: Java is university coursework only; C++ is not a language he works in. Do not claim otherwise.

THE THREE THINGS WORTH KNOWING:

1. Fintech analytics case study — customer adoption forecasting (2026)
Built a twelve-month adoption and asset-holdings forecast for an investment product. Used a cohort model rather than fitting a time series, because the observable series was distorted by how the sample was constructed and a trend model would have learned the artefact as real (an ARIMA fit on the same data returned about a third of the cohort figure, confidently). He backtested it by rebuilding from an earlier information cutoff: it ran consistently 24% low, and he reported that rather than presenting a cleaner number. Partway through he also caught a flaw in his own driver analysis, where unequal observation windows were inflating every effect roughly threefold and changing which variable ranked strongest. Delivered funnel analysis alongside it and presented to two senior analysts including the limitations.

2. AI4SW research placement — data engineering (Jul 2024 to Jul 2025)
A year-long placement on a study predicting student wellbeing from wearable health data. He inherited a Firebase to CSV pipeline producing systematically inaccurate outputs that nobody had flagged, because the numbers looked plausible. He traced the fault to root cause, proved the mechanism and rebuilt the pipeline. That data now supports published research and he is credited in the forthcoming paper. Source material was multi-year Apple Health XML exports and Firebase JSON logs for 15 participants across three months, so extraction, cleaning and validation were most of the job. He also maintained the project's React Native app for live participants and led participant recruitment.

3. Crédit Agricole Egypt — risk modelling intern (Aug 2023)
Segmented three years of auto-loan portfolio data into risk categories using Python and presented the findings directly to senior management, including defending a segment carrying higher non-payment risk than the team expected. That meant showing the pattern held rather than being an artefact of where he drew the segment boundaries.

ALSO:
CareQueue (final year project) — a GP triage and booking system. Worth knowing for the database work: he designed the full PostgreSQL schema including atomic slot reservation preventing double-booking under concurrent access, and an append-only audit log across eight system actions. The AI layer used GPT-4o and LangChain with JSON schema enforcement on every output. 10 of 10 functional tests passed, user tested with 7 participants including health domain experts.

Hand-Washing Stage Classifier — an 8-class classifier over 8,338 images, mainly interesting because label error detection surfaced around 200 mislabelled samples and removing them improved the result more than any architectural change did. A data-quality story more than a modelling one.

EDUCATION:
BSc (Hons) Computer Science, University of Huddersfield, Sep 2022 to Jul 2026. First Class Honours, 86%. Final year average 85.2%, Grade A across all modules. Notable: Data-driven Artificial Intelligence 93%, Introduction to AI 91%, Computational Mathematics 1 89%, Distributed and Client-Server Systems 97%, Operating Systems 87%, Relational Databases 81%.

CHARACTER:
The thread running through his work is not trusting a dataset until he has checked it. He found a broken pipeline nobody had noticed, caught a flaw in his own analysis before anyone else did, reported a forecast that ran 24% low rather than smoothing it over, and defended a risk finding to senior management under challenge. That is the thing worth telling people about him.

HOBBIES:
Keen tennis player — he was on the university tennis team — and plays padel regularly. Goes to the gym consistently.

If someone wants to reach him: omareissa2274@gmail.com or 07727 808240.`
