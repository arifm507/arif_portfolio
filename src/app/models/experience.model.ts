export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string | null;
  location: string;
  responsibilities: string[];
  achievements: string[];
  isCurrent: boolean;
}
