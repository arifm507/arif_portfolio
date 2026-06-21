import { SkillCategory } from '../models/skill.model';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'layout',
    skills: [
      { name: 'Angular 21', proficiency: 95 },
      { name: 'React JS', proficiency: 88 },
      { name: 'JavaScript', proficiency: 92 },
      { name: 'HTML', proficiency: 95 },
      { name: 'CSS', proficiency: 90 },
      { name: 'Bootstrap', proficiency: 88 },
      { name: 'Material UI', proficiency: 85 },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'server',
    skills: [
      { name: 'C#', proficiency: 92 },
      { name: 'ASP.NET', proficiency: 90 },
      { name: '.NET Core', proficiency: 92 },
      { name: '.NET MVC', proficiency: 88 },
      { name: 'Entity Framework', proficiency: 90 },
      { name: 'LINQ', proficiency: 88 },
      { name: 'GraphQL', proficiency: 82 },
      { name: 'Elixir', proficiency: 75 },
    ],
  },
  {
    id: 'database',
    name: 'Database',
    icon: 'database',
    skills: [
      { name: 'SQL Server', proficiency: 90 },
      { name: 'Oracle', proficiency: 85 },
      { name: 'PostgreSQL', proficiency: 88 },
      { name: 'MySQL', proficiency: 85 },
      { name: 'Snowflake', proficiency: 78 },
    ],
  },
  {
    id: 'cloud-devops',
    name: 'Cloud / DevOps',
    icon: 'cloud',
    skills: [
      { name: 'AWS S3', proficiency: 85 },
      { name: 'AWS EC2', proficiency: 82 },
      { name: 'AWS ECS', proficiency: 80 },
      { name: 'AWS SQS / SNS', proficiency: 78 },
      { name: 'Parameter Store', proficiency: 80 },
      { name: 'Transcribe / Textract', proficiency: 75 },
      { name: 'Docker', proficiency: 82 },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Technologies',
    icon: 'wrench',
    skills: [
      { name: 'Git', proficiency: 90 },
      { name: 'SSR', proficiency: 85 },
      { name: '.NET MAUI', proficiency: 78 },
      { name: 'Ajax', proficiency: 88 },
      { name: 'Ruby on Rails', proficiency: 75 },
    ],
  },
];

export const ALL_TECHNOLOGIES: string[] = [
  ...new Set(SKILL_CATEGORIES.flatMap((category) => category.skills.map((skill) => skill.name))),
];
