import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'xpreswash',
    title: 'XpresWash',
    description:
      'Subscription-based car wash platform allowing customers unlimited washes for a fixed monthly or yearly price. Includes Angular 21 web app and .NET MAUI mobile application with seamless payment integration.',
    technologies: ['Angular 21', '.NET MVC', '.NET Core', 'MAUI', 'SQL Server'],
    githubUrl: null,
    liveUrl: null,
    features: [
      'Subscription-based pricing model',
      'Mobile app with .NET MAUI',
      'Cashless wash experience',
      'Operator abuse prevention',
    ],
    imageUrl: '/assets/images/projects/xpreswash.svg',
    featured: true,
    category: 'Angular',
  },
  {
    id: 'openforce',
    title: 'OpenForce',
    description:
      'Next-generation platform strengthening relationships between independent contractor vendors and companies through modern tech and services, enabling both parties to maximize revenue.',
    technologies: ['React', '.NET MVC', '.NET Core', 'Elixir', 'GraphQL', 'Snowflake'],
    githubUrl: null,
    liveUrl: null,
    features: [
      'Multi-stack architecture',
      'GraphQL API layer',
      'Snowflake data warehouse',
      'Vendor-company relationship management',
    ],
    imageUrl: '/assets/images/projects/openforce.svg',
    featured: true,
    category: 'React',
  },
  {
    id: 'nibrs',
    title: 'NIBRS',
    description:
      'National Incident-Based Reporting System for the St. Paul Police Department — a US-based platform for monitoring and reporting police department cases with comprehensive incident tracking.',
    technologies: ['Angular 10', '.NET Core', 'Oracle', 'Material UI', 'Bootstrap'],
    githubUrl: null,
    liveUrl: 'https://nibrs.gteladvisors.com/',
    features: [
      'Incident-based reporting',
      'Police case monitoring',
      'Role-based access control',
      'Real-time dashboards',
    ],
    imageUrl: '/assets/images/projects/nibrs.svg',
    featured: true,
    category: 'Angular',
  },
  {
    id: 'incident-storyboard',
    title: 'Incident Storyboard',
    description:
      'Law enforcement video management platform for St. Paul Police Department to collect, organize, and monitor all incident videos from a unified dashboard.',
    technologies: ['Angular 12', '.NET Core 5', 'MySQL', 'Material UI', 'Bootstrap'],
    githubUrl: null,
    liveUrl: null,
    features: [
      'Centralized video repository',
      'Incident timeline view',
      'Multi-source video aggregation',
      'Search and filter capabilities',
    ],
    imageUrl: '/assets/images/projects/storyboard.svg',
    featured: true,
    category: 'Angular',
  },
  {
    id: 'bktc',
    title: 'BKTC — Chardham Portal',
    description:
      'Official Uttarakhand Chardham Yatra booking portal for puja reservations and temple donations at Badrinath and Kedarnath.',
    technologies: ['ASP.NET', 'PostgreSQL', 'Bootstrap', 'JavaScript'],
    githubUrl: null,
    liveUrl: 'https://badrinath-kedarnath.gov.in/',
    features: [
      'Puja booking system',
      'Online donation portal',
      'Government compliance',
      'Multi-temple support',
    ],
    imageUrl: '/assets/images/projects/bktc.svg',
    featured: false,
    category: '.NET',
  },
  {
    id: 'apsts',
    title: 'APSTS',
    description:
      'Government of Arunachal Pradesh online bus ticket booking portal enabling citizens to book bus tickets digitally.',
    technologies: ['ASP.NET', 'Oracle', 'Bootstrap', 'JavaScript', 'Ajax'],
    githubUrl: null,
    liveUrl: 'https://apsts.arunachal.gov.in/',
    features: [
      'Online ticket booking',
      'Route management',
      'Payment integration',
      'Government portal compliance',
    ],
    imageUrl: '/assets/images/projects/apsts.svg',
    featured: false,
    category: '.NET',
  },
  {
    id: 'forestonline',
    title: 'Forestonline',
    description:
      'Uttarakhand Forest Department official website for issuing and registering mountain expedition permits across Uttarakhand peaks.',
    technologies: ['ASP.NET MVC', 'PostgreSQL', 'Bootstrap', 'JavaScript'],
    githubUrl: null,
    liveUrl: 'https://forestonline.uk.gov.in/',
    features: [
      'Expedition permit issuance',
      'Online registration',
      'Forest department workflows',
      'Document management',
    ],
    imageUrl: '/assets/images/projects/forestonline.svg',
    featured: false,
    category: '.NET',
  },
  {
    id: 'ticketsimply',
    title: 'TicketSimply',
    description:
      "World's leading bus travel technology partner and online bus ticketing ecosystem — a complete SaaS platform for running the full online bus travel ecosystem on web and mobile.",
    technologies: ['Ruby on Rails', 'MySQL', 'Bootstrap', 'JavaScript', 'Ajax'],
    githubUrl: null,
    liveUrl: 'https://www.ticketsimply.com',
    features: [
      'Cloud/SaaS bus ticketing',
      'Complete travel ecosystem',
      'Web and mobile support',
      'Multi-operator management',
    ],
    imageUrl: '/assets/images/projects/ticketsimply.svg',
    featured: false,
    category: 'Ruby on Rails',
  },
];

export const PROJECT_FILTERS: string[] = [
  'All',
  'Angular',
  'React',
  '.NET',
  'Ruby on Rails',
  'AWS',
];
