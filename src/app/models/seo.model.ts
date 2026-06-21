export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  author: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export interface PersonSchema {
  name: string;
  jobTitle: string;
  email: string;
  url?: string;
  image: string;
  addressLocality: string;
  sameAs: string[];
}
