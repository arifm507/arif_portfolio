export interface Education {
  id: string;
  degree: string;
  institute: string;
  period: string;
  score: string;
  description?: string;
}

export interface Certification {
  id: string;
  title: string;
  provider: string;
  period?: string;
}
