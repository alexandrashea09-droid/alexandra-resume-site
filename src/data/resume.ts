export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  metrics?: { label: string; value: string }[];
}

export interface Project {
  title: string;
  summary: string;
  problem: string;
  approach: string;
  impact: string;
  links?: { label: string; url: string }[];
}

export interface Education {
  institution: string;
  degree: string;
  years: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  contact: {
    email: string;
    website?: string;
    linkedin?: string;
    github?: string;
  };
  experiences: Experience[];
  education?: Education[];
  skills?: string[];
  projects: Project[];
}

const resumeData: ResumeData = {
  name: "Alexandra Chen",
  title: "Full-Stack Engineer",
  location: "San Francisco, CA / Remote",
  contact: {
    email: "alexandra@example.com",
    website: "https://alexandrachen.dev",
    linkedin: "https://linkedin.com/in/alexandrachen",
    github: "https://github.com/alexandrachen",
  },
  experiences: [
    {
      company: "Tech Startup Inc.",
      role: "Senior Full-Stack Engineer",
      startDate: "2022-01",
      endDate: "Present",
      description: "Leading development of customer-facing web applications and internal tools. Architected scalable microservices infrastructure and improved developer experience through tooling and automation.",
      metrics: [
        { label: "Users served", value: "500,000+" },
        { label: "Performance improvement", value: "60% faster load times" },
        { label: "Team size", value: "8 engineers" },
      ],
    },
    {
      company: "Digital Agency",
      role: "Frontend Engineer",
      startDate: "2020-06",
      endDate: "2021-12",
      description: "Built responsive web applications for enterprise clients using React and Next.js. Collaborated with designers to implement pixel-perfect UIs and optimized applications for performance and accessibility.",
      metrics: [
        { label: "Projects delivered", value: "15+" },
        { label: "Client satisfaction", value: "98%" },
        { label: "Page speed score", value: "95+ average" },
      ],
    },
    {
      company: "Software Corp",
      role: "Software Engineer",
      startDate: "2018-08",
      endDate: "2020-05",
      description: "Developed and maintained backend services and APIs. Worked on database optimization and implemented automated testing pipelines.",
      metrics: [
        { label: "API response time", value: "Reduced by 40%" },
        { label: "Test coverage", value: "85%+" },
      ],
    },
  ],
  education: [
    {
      institution: "University of California, Berkeley",
      degree: "B.S. in Computer Science",
      years: "2014-2018",
    },
  ],
  skills: [
    "TypeScript / JavaScript",
    "React / Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "AWS",
    "Docker",
    "GraphQL",
  ],
  projects: [
    {
      title: "E-Commerce Platform Redesign",
      summary: "Complete redesign of a high-traffic e-commerce platform with focus on performance and user experience.",
      problem: "The existing platform had slow load times (5+ seconds), poor mobile experience, and high bounce rates. Legacy codebase made it difficult to iterate quickly.",
      approach: "Built a new Next.js application with server-side rendering, implemented a design system with Tailwind CSS, migrated to a headless CMS, and set up comprehensive monitoring and analytics.",
      impact: "Reduced load time by 70% (from 5s to 1.5s), increased mobile conversion rate by 45%, and improved developer velocity by 3x through better tooling and architecture.",
      links: [
        { label: "Case Study", url: "#" },
        { label: "GitHub", url: "#" },
      ],
    },
    {
      title: "Internal Dashboard & Analytics Tool",
      summary: "Built a comprehensive analytics dashboard for internal teams to track key business metrics in real-time.",
      problem: "Teams were using multiple disconnected tools and spreadsheets to track metrics, leading to inconsistent data and time wasted on manual reporting.",
      approach: "Created a unified dashboard using React and D3.js for data visualization. Built a real-time data pipeline with WebSockets and implemented role-based access control. Designed intuitive charts and filters for different user personas.",
      impact: "Reduced time spent on reporting by 80%, improved data accuracy, and enabled faster decision-making. Used by 200+ team members daily.",
      links: [
        { label: "Demo", url: "#" },
      ],
    },
    {
      title: "Open Source Component Library",
      summary: "Created and maintained a design system component library used across multiple projects.",
      problem: "Inconsistent UI components across projects led to poor user experience and duplicated development effort.",
      approach: "Designed a comprehensive component library with TypeScript, Storybook for documentation, and automated visual regression testing. Established contribution guidelines and review process.",
      impact: "Adopted by 5+ teams, reduced development time by 30% for new features, and improved design consistency across all products. 2,000+ weekly downloads on npm.",
      links: [
        { label: "Documentation", url: "#" },
        { label: "GitHub", url: "#" },
      ],
    },
    {
      title: "Mobile-First SaaS Application",
      summary: "Led development of a mobile-first SaaS application from concept to launch.",
      problem: "Small business owners needed a simple, affordable tool to manage their operations but existing solutions were too complex or expensive.",
      approach: "Conducted user research and built an MVP using React Native for mobile and Next.js for web. Implemented subscription billing, real-time notifications, and offline-first architecture. Launched with a freemium model.",
      impact: "Acquired 10,000+ users in first 6 months, achieved 85% user retention rate, and generated $50K+ MRR. Featured in Product Hunt's top 5 products of the week.",
      links: [
        { label: "Live App", url: "#" },
        { label: "Case Study", url: "#" },
      ],
    },
  ],
};

export default resumeData;
