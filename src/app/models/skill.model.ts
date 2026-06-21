export type SkillCategoryId =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'cloud-devops'
  | 'tools';

export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  id: SkillCategoryId;
  name: string;
  icon: string;
  skills: Skill[];
}
