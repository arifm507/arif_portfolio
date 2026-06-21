import { Certification, Education } from '../models/education.model';

export const EDUCATION: Education[] = [
  {
    id: 'btech',
    degree: 'B.Tech in Computer Science & Engineering',
    institute: 'Feroze Gandhi Institute of Engineering & Technology, Raebareli',
    period: '2015 – 2019',
    score: '78%',
    description: 'Department of Computer Science & Engineering',
  },
  {
    id: 'class-xii',
    degree: 'Class XII (State Board)',
    institute: 'Children Higher Secondary School, Azamgarh',
    period: '2014',
    score: '87.6% (92.3% in PCM)',
  },
  {
    id: 'class-x',
    degree: 'Class X (State Board)',
    institute: 'Children Higher Secondary School, Azamgarh',
    period: '2012',
    score: '80%',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ds-training',
    title: 'Summer Training in Data Structures',
    provider: 'Naresh IT, Hyderabad',
  },
  {
    id: 'java-training',
    title: 'Summer Training in Advanced Java (Servlet & JSP)',
    provider: 'Naresh IT, Hyderabad',
  },
];

export const EXTRA_CURRICULAR = [
  '1st position at district level in 16th National Science Olympiad',
  'Coordinator of various cultural events organized in college',
  'Top performer in sports and cultural activities in college and school',
];
