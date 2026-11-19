export const GROUPS = {
  Languages: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  Frontend: ['React', 'React Native', 'HTML', 'CSS', 'Tailwind', 'Framer Motion'],
  Backend: ['Node.js', 'Express', 'Spring Boot', 'FastAPI', 'Go', 'REST APIs'],
  Data: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
  Tools: ['Docker', 'Git', 'JWT', 'Postman', 'Electron'],
  Core: ['DSA', 'OOP', 'System Design', 'API Design', 'Machine Learning', 'NLP', 'Data Science'],
};
export const SKILLS = Object.entries(GROUPS).flatMap(([g, ws]) => ws.map((w) => ({ w, g })));

export const PROJECTS = [
  {
    tag: 'AI · Privacy',
    title: 'PolicyGuard',
    em: 'AI',
    desc: 'Reads privacy policies and contracts so people don’t have to — risk detection, privacy alerts and a live risk score across web, desktop and mobile.',
    stack: ['React', 'React Native', 'Electron', 'Node.js', 'OpenAI', 'MongoDB', 'Docker'],
  },
  {
    tag: 'ML · Real-time',
    title: 'Release Risk',
    em: 'Heatmap',
    desc: 'A Random Forest model classifies every software release by risk, mapped as a live heatmap across teams and modules.',
    stack: ['TypeScript', 'React', 'FastAPI', 'scikit-learn', 'PostgreSQL'],
  },
  {
    tag: 'AI · Fashion',
    title: 'StarCloset',
    em: 'Myntra',
    desc: 'A conversational AI stylist that builds head-to-toe outfits from your occasion, budget and taste — powered by stylist personas.',
    stack: ['Go', 'Gin', 'Redis', 'PostgreSQL', 'LLM', 'Framer Motion'],
  },
];

export const STATS = [
  { label: 'LeetCode', value: 450, suffix: '+', h: 4.5 },
  { label: 'CodeChef', value: 500, suffix: '+', h: 5.0 },
  { label: 'GeeksforGeeks', value: 280, suffix: '+', h: 2.8 },
  { label: 'HackerRank', value: 20, suffix: '★', h: 2.0 },
];

export const JOURNEY = [
  { year: '2021', role: 'Intermediate, MPC', place: 'Sri Chaitanya Junior College', note: '2021 — 2023 · 90.6%' },
  { year: '2023', role: 'B.Tech, Data Science', place: 'Aditya College of Engineering & Technology', note: '2023 — 2027 · CGPA 9.07 · Department Topper' },
  { year: '2026', role: 'Full Stack Intern', place: 'Technical Hub', note: 'May — June · Web & mobile apps with React Native' },
];

export const CERTS = [
  ['MongoDB', 'Associate Developer'],
  ['Oracle', 'Java Foundations Associate'],
  ['Microsoft', 'GitHub Foundations'],
  ['Google Cloud', 'Career Launchpad — Data Analytics'],
  ['Cisco', 'JavaScript Essentials 1 & 2'],
  ['Cisco', 'Python & Intro to Data Science'],
  ['Certiport · Pearson', 'HTML & CSS'],
  ['CLA', 'Programming Essentials in C / C++'],
];
