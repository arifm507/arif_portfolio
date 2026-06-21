export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email' | 'location';
}

export interface CareerHighlight {
  title: string;
  description: string;
  icon?: string;
}

export interface ProfessionalStat {
  label: string;
  value: string;
}

export interface Profile {
  fullName: string;
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  careerObjective: string;
  email: string;
  phone: string;
  location: string;
  photoUrl: string;
  resumeUrl: string;
  linkedIn: string;
  github: string;
  typingRoles: string[];
  highlights: CareerHighlight[];
  stats: ProfessionalStat[];
  hobbies: string[];
  socialLinks: SocialLink[];
}
