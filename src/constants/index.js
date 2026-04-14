/**
 * Navigation Links Configuration
 */
export const NAV_LINKS = [
  { icon: 'home', label: 'Home', href: '#top' },
  { icon: 'user', label: 'About me', href: '#about' },
  { icon: 'briefcase', label: 'Services', href: '#services' },
  { icon: 'folder', label: 'My Work', href: '#work' },
  { icon: 'mail', label: 'Contact me', href: '#contact' },
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
    description: 'B.Tech + M.Tech in Biological Engineering, IIT Madras.',
  },
  {
    name: isTechnical ? 'Analytics Build' : 'Business Impact',
    icon1: './assets/project-icon.png',
    icon2: './assets/project-icon-dark.png',
    description: isTechnical
      ? 'Built AI dashboards, optimized SQL workflows, and automated reporting for 1M+ daily records.'
      : 'Delivered performance insights, pricing analysis, and reporting systems that helped drive 40% client revenue growth.',
  },
  {
    name: 'Recognition',
    icon1: './assets/code-icon.png',
    icon2: './assets/code-icon-dark.png',
    description: 'WorldQuant Brain Gold Medalist and Goldman Sachs Women\'s Possibilities Summit finalist.',
  },
];

/**
 * Header Content (Dynamic based on perspective)
 */
export const getHeaderContent = (isTechnical) => ({
  role: isTechnical ? 'Data Analyst' : 'Business Analyst',
  title: isTechnical ? 'Data. AI. Dashboards that scale.' : 'Growth. Insights. Strategy that lands.',
  description: isTechnical
    ? 'Data Analyst with experience in SQL, Python, dashboard engineering, and AI-powered analytics products that turn high-volume data into clear action.'
    : 'Business Analyst with experience translating marketplace data into KPI frameworks, pricing insights, and executive-ready recommendations that support growth.',
});

/**
 * About Section Content (Dynamic based on perspective)
 */
export const getAboutContent = (isTechnical) => ({
  description: isTechnical
    ? 'I am a Data Analyst who enjoys turning messy, high-volume data into reliable dashboards, faster decisions, and production-ready analytics experiences. My work blends SQL depth, Python problem solving, and AI-enhanced product thinking.'
    : 'I am a Business Analyst who connects business goals with clear metrics, structured analysis, and executive-ready recommendations. I focus on growth, pricing, and performance stories that teams can act on quickly.',
});

export const getServices = (isTechnical) => [
  {
    title: isTechnical ? 'Analytics Engineering' : 'Business KPI Design',
    description: isTechnical
      ? 'I build dependable SQL models, validation layers, and reporting pipelines that keep large marketplace datasets clean, queryable, and decision-ready.'
      : 'I define the right metrics, business questions, and reporting structure so teams can track growth, pricing, and conversion performance with clarity.',
    highlight: isTechnical ? 'BigQuery, SQL optimization, 1M+ records/day' : 'Metric design, stakeholder alignment, executive reporting',
  },
  {
    title: isTechnical ? 'Dashboard Development' : 'Decision Support Dashboards',
    description: isTechnical
      ? 'From React and Highcharts to Looker Studio and Power BI, I create dashboards that move from raw data to polished interfaces people actually use.'
      : 'I turn performance data into focused dashboard views that help leadership spot trends, compare scenarios, and act faster with confidence.',
    highlight: isTechnical ? 'React, REST APIs, Highcharts, BI tools' : 'Insight storytelling, adoption, action-oriented reporting',
  },
  {
    title: isTechnical ? 'Applied AI Workflows' : 'Growth & Optimization Analysis',
    description: isTechnical
      ? 'I use machine learning, OCR, and predictive analytics to automate manual work and surface opportunities that standard reporting misses.'
      : 'I analyze conversion, bidding, and pricing patterns to identify what is driving revenue and where optimization can unlock better outcomes.',
    highlight: isTechnical ? 'OCR systems, forecasting, automation' : 'Revenue impact, pricing strategy, funnel insights',
  },
];

export const getWorkItems = (isTechnical) => [
  {
    title: 'AI-Driven Revenue & Pricing Optimization Dashboard',
    category: isTechnical ? 'Forecasting + Product Analytics' : 'Pricing Strategy + Revenue Planning',
    image: './assets/work-1.png',
    description: isTechnical
      ? 'Built a SKU-day analytics pipeline with forecasting and price-response modelling, then surfaced the results in an interactive React dashboard.'
      : 'Created a scenario-based dashboard to help teams compare pricing and bidding decisions and understand revenue and margin trade-offs faster.',
    stack: 'React, Highcharts, REST APIs, BigQuery, SQL',
    outcome: 'Enabled faster, data-backed pricing and budget decisions.',
  },
  {
    title: 'Marketplace Performance Command Center',
    category: isTechnical ? 'Scalable Reporting System' : 'Client Growth Analytics',
    image: './assets/work-2.png',
    description: isTechnical
      ? 'Designed optimized SQL workflows and dashboard layers for Amazon and Walmart marketplace data, with validation logic for daily reporting at scale.'
      : 'Delivered product, bidding, and conversion insights for enterprise clients, contributing to measurable growth and clearer performance tracking.',
    stack: 'BigQuery, Looker Studio, Luzmo, Power BI',
    outcome: 'Helped drive 40% revenue growth for key client accounts.',
  },
  {
    title: 'OCR-Based Document Verification System',
    category: isTechnical ? 'ML Automation' : 'Operational Efficiency',
    image: './assets/work-3.png',
    description: isTechnical
      ? 'Built a Python-based OCR workflow with document classification, masked storage, and a Gradio interface for faster verification.'
      : 'Reduced manual verification effort by automating ID extraction and classification across multiple document formats.',
    stack: 'Python, OpenCV, Gradio, Machine Learning',
    outcome: 'Cut manual data entry by 70% and reduced turnaround from minutes to seconds.',
  },
  {
    title: 'Breast Cancer Classification Model',
    category: isTechnical ? 'Deep Learning Project' : 'Predictive Modelling Case Study',
    image: './assets/work-4.png',
    description: isTechnical
      ? 'Implemented preprocessing, feature scaling, and a feedforward TensorFlow/Keras model to classify tumors using biopsy data.'
      : 'Built a clean predictive modelling workflow that demonstrates how analytical rigor can support high-stakes classification problems.',
    stack: 'Python, TensorFlow, Keras, Pandas, Scikit-learn',
    outcome: 'Reached approximately 95% validation accuracy.',
  },
];

export const CONTACT_DETAILS = [
  {
    label: 'Email',
    value: 'persispraveenam@gmail.com',
    href: 'mailto:persispraveenam@gmail.com',
  },
  {
    label: 'Location',
    value: 'Bangalore, India',
    href: 'https://www.google.com/maps/place/Bengaluru',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/persispraveenam',
    href: 'https://www.linkedin.com/in/persispraveenam',
  },
];

export const RESUME_LINKS = [
  {
    title: 'Business Analyst Resume',
    description: 'Focused on KPI design, pricing analysis, growth insights, and executive dashboards.',
    href: './assets/persis-praveena-business-analyst-resume.pdf',
  },
  {
    title: 'Data Analyst Resume',
    description: 'Focused on SQL, dashboard automation, AI workflows, and scalable data products.',
    href: './assets/persis-praveena-data-analyst-resume.pdf',
  },
];
