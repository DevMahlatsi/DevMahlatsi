export  interface  readerProps {
  isOpen: boolean;
}
export interface updateProps {
  onToggle: () => void;
  currentValue: boolean;
}
export interface skillsProps{
  id: number;
  icon: string;
  title: string;
  description : string[];
}
export type ProjectStatus = 'completed' | 'in-progress' | 'planned';
export type ProjectCategory = 'iot' | 'ai' | 'web' | 'mobile' | 'other';
export type TeamType = 'solo' | 'group';

export interface TeamInfo {
  type: TeamType;
  teamSize: number;
  role?: string;
  responsibilities?: string[];
}

export interface ProjectLinks {
  github?: string;
  liveDemo?: string;
  caseStudy?: string;
  videoDemo?: string;
}

export interface ProjectMetrics {
  performanceImprovement?: string;
  usersTested?: number;
  [key: string]: string | number | undefined;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  
  status: ProjectStatus;
  featured: boolean;
  category: ProjectCategory;
  year: number;
  duration?: string;

  team: TeamInfo;

  problem: string;
  solution: string;

  techStack: string[];
  features: string[];

  images: string[];

  links: ProjectLinks;
  
  metrics?: ProjectMetrics;
}

export type Projects = Project[];

// Component Props
export interface ProjectCardProps {
  project: Project;
  variant?: 'featured' | 'compact' | 'detailed';
  className?: string;
}

export interface ProjectListProps {
  projects: Project[];
  filterByStatus?: ProjectStatus;
  filterByCategory?: ProjectCategory;
  featuredOnly?: boolean;
  limit?: number;
}

export interface ProjectSectionProps {
  title?: string;
  subtitle?: string;
  projects: Project[];
  showViewAll?: boolean;
  viewAllLink?: string;
}