export const SECTION_IDS = {
  hero: 'hero',
  about: 'about',
  skills: 'skills',
  projects: 'projects',
  experience: 'experience',
  education: 'education',
  resume: 'resume',
  contact: 'contact',
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const NAV_LINKS: { label: string; sectionId: SectionId }[] = [
  { label: 'Home', sectionId: SECTION_IDS.hero },
  { label: 'About', sectionId: SECTION_IDS.about },
  { label: 'Skills', sectionId: SECTION_IDS.skills },
  { label: 'Projects', sectionId: SECTION_IDS.projects },
  { label: 'Experience', sectionId: SECTION_IDS.experience },
  { label: 'Education', sectionId: SECTION_IDS.education },
  { label: 'Resume', sectionId: SECTION_IDS.resume },
  { label: 'Contact', sectionId: SECTION_IDS.contact },
];

export const THEME_STORAGE_KEY = 'arif-portfolio-theme';

export type Theme = 'dark' | 'light';

export const DEFAULT_THEME: Theme = 'dark';

export const THEME_COLORS: Record<Theme, string> = {
  dark: '#0a0a0f',
  light: '#fafafa',
};
