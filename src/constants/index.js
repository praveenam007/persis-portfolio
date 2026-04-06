/**
 * Navigation Links Configuration
 */
export const NAV_LINKS = [
  { icon: '🏠', label: 'Home', href: '#top' },
  { icon: '👤', label: 'About me', href: '#about' },
  { icon: '⚙️', label: 'Services', href: '#services' },
  { icon: '💼', label: 'My Work', href: '#work' },
  { icon: '✉️', label: 'Contact me', href: '#contact' },
];

/**
 * Tools/Technologies Configuration
 */
export const TOOLS = [
  { name: 'bigquery', icon: './assets/bigquery.png' },
  { name: 'python', icon: './assets/python.png' },
  { name: 'react', icon: './assets/react.png' },
  { name: 'sql', icon: './assets/sql.png' },
  { name: 'git', icon: './assets/git.png' },
];

/**
 * Experience Data (Dynamic based on perspective)
 */
export const getExperienceData = (isTechnical) => [
  {
    name: 'Education',
    icon1: './assets/edu-icon.png',
    icon2: './assets/edu-icon-dark.png',
    description: 'B.Tech + M.Tech in Biological Engineering, IIT Madras',
  },
  {
    name: isTechnical ? 'Technical Depth' : 'Business Impact',
    icon1: './assets/project-icon.png',
    icon2: './assets/project-icon-dark.png',
    description: isTechnical
      ? 'Optimized SQL for 1M+ daily records & built AI dashboards using React/REST APIs.'
      : 'Driven 40% revenue growth for clients & automated workflows to save 60% analysis time.',
  },
  {
    name: 'Quantitative Rank',
    icon1: './assets/code-icon.png',
    icon2: './assets/code-icon-dark.png',
    description: 'World Quant Brain Gold Medalist (Ranked 1.5k/37k).',
  },
];

/**
 * Header Content (Dynamic based on perspective)
 */
export const getHeaderContent = (isTechnical) => ({
  role: isTechnical ? 'Data Analyst' : 'Business Analyst',
  title: isTechnical ? 'Data. AI. Pipelines at Scale.' : 'Data. Strategy. Growth at Scale.',
  description: isTechnical
    ? 'Data Analyst with 2 years of experience in building high-performance SQL pipelines and AI dashboards that process 1M+ records daily.'
    : 'Leveraging data insights to drive 40% revenue growth and automating workflows to reduce analysis time by 60%.',
});

/**
 * About Section Content (Dynamic based on perspective)
 */
export const getAboutContent = (isTechnical) => ({
  description: isTechnical
    ? 'I am a Data Analyst specializing in building scalable AI-powered pipelines and interactive dashboards. I focus on optimizing complex SQL queries and engineering end-to-end data products.'
    : 'I am a Business Analyst with a track record of translating complex datasets into growth opportunities, contributing to significant revenue increases and operational efficiency.',
});
