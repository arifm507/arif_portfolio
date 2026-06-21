export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  features: string[];
  imageUrl: string;
  featured: boolean;
  category: string;
}
