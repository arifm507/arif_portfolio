import { Profile } from '../models/profile.model';

export const PROFILE: Profile = {
  fullName: 'Mohammad Arif',
  firstName: 'Mohammad',
  lastName: 'Arif',
  title: 'Technical Team Lead · Software Developer',
  tagline:
    'Building scalable full-stack solutions with Angular, .NET, and cloud-native architecture',
  careerObjective:
    'To work in an organization which offers key participation, immediate challenges and team-oriented tasks in an environment that encourages innovative thinking, recognition, and career development. Client interaction is a plus.',
  email: 'arifm507@gmail.com',
  phone: '+91 7275771008',
  location: 'Sector 143, Noida, Uttar Pradesh, India',
  photoUrl: '/assets/images/profile.jpeg',
  resumeUrl: '/assets/resume/Mohammad-Arif-Resume.pdf',
  linkedIn: 'https://www.linkedin.com/in/mohd-arif-705985135/',
  github: 'https://github.com/arifm507',
  typingRoles: [
    'Software Developer',
    'Technical Team Lead',
    'Full-Stack Engineer',
    'Angular Specialist',
  ],
  highlights: [
    {
      title: '6+ Years Experience',
      description: 'Delivering enterprise web applications across government and SaaS domains.',
      icon: 'briefcase',
    },
    {
      title: 'Science Olympiad Winner',
      description: '1st position at district level in the 16th National Science Olympiad.',
      icon: 'trophy',
    },
    {
      title: 'Team Leadership',
      description: 'Leading full-stack teams building Angular and .NET Core solutions at QSS Technosoft.',
      icon: 'users',
    },
    {
      title: 'Government & Enterprise',
      description: 'Built portals for NIC, Uttarakhand Forest Dept, and St. Paul Police Department.',
      icon: 'building',
    },
  ],
  stats: [
    { label: 'Years Experience', value: '6+' },
    { label: 'Projects Delivered', value: '8+' },
    { label: 'Technologies', value: '25+' },
    { label: 'Companies', value: '3' },
  ],
  hobbies: ['Volleyball', 'Cricket', 'Travelling', 'Listening to Music'],
  socialLinks: [
    { label: 'Email', url: 'mailto:arifm507@gmail.com', icon: 'email' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohd-arif-705985135/', icon: 'linkedin' },
    { label: 'GitHub', url: 'https://github.com/arifm507', icon: 'github' },
    { label: 'Location', url: 'https://maps.google.com/?q=Sector+143+Noida', icon: 'location' },
  ],
};
