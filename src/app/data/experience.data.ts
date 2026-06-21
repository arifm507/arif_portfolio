import { Experience } from '../models/experience.model';

export const EXPERIENCES: Experience[] = [
  {
    id: 'qss-technosoft',
    company: 'QSS Technosoft Pvt. Ltd.',
    role: 'Technical Team Lead',
    period: 'Sept 2021 – Present',
    startDate: '2021-09',
    endDate: null,
    location: 'Noida, Uttar Pradesh',
    isCurrent: true,
    responsibilities: [
      'Lead full-stack development teams delivering Angular and .NET Core enterprise applications',
      'Architect scalable solutions for SaaS products including XpresWash and OpenForce',
      'Drive technical decisions on cloud infrastructure, API design, and database optimization',
      'Mentor developers and conduct code reviews to maintain high code quality standards',
      'Collaborate with clients and stakeholders on requirements, timelines, and deliverables',
    ],
    achievements: [
      'Led delivery of XpresWash platform with Angular 21 and .NET MAUI mobile app',
      'Architected multi-stack OpenForce platform integrating React, .NET, Elixir, and GraphQL',
      'Established development best practices and CI/CD workflows across teams',
    ],
  },
  {
    id: 'nic',
    company: 'National Informatics Center',
    role: 'Software Engineer',
    period: 'Dec 2019 – Sept 2021',
    startDate: '2019-12',
    endDate: '2021-09',
    location: 'Dehradun, Uttarakhand',
    isCurrent: false,
    responsibilities: [
      'Developed government web portals using ASP.NET, PostgreSQL, and Oracle databases',
      'Built BKTC Chardham booking portal and Forestonline expedition registration system',
      'Implemented secure authentication, payment integration, and document management workflows',
      'Collaborated with government stakeholders on compliance and accessibility requirements',
    ],
    achievements: [
      'Delivered BKTC portal serving thousands of pilgrims for Chardham Yatra bookings',
      'Built Forestonline portal for Uttarakhand Forest Department expedition permits',
      'Contributed to APSTS bus ticketing portal for Government of Arunachal Pradesh',
    ],
  },
  {
    id: 'bitla',
    company: 'Bitla Softwares Pvt. Ltd.',
    role: 'Trainee Software Developer (RoR)',
    period: 'Aug 2019 – Dec 2019',
    startDate: '2019-08',
    endDate: '2019-12',
    location: 'Bengaluru, Karnataka',
    isCurrent: false,
    responsibilities: [
      'Developed features for TicketSimply bus ticketing SaaS platform using Ruby on Rails',
      'Built responsive UI components with HTML, CSS, Bootstrap, and JavaScript',
      'Worked with MySQL database for ticket booking and operator management modules',
      'Participated in agile sprints and code reviews with senior developers',
    ],
    achievements: [
      'Contributed to TicketSimply — a leading global bus travel technology platform',
      'Gained hands-on experience with full SaaS development lifecycle',
    ],
  },
];
