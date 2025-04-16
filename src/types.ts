export interface Experience {
  category: string;
  roles: Role[];
}

export interface Role {
  title: string;
  organization: string;
  duration: string;
  responsibilities: string[];
}

export interface ResearchProject {
  title: string;
  research_area: string;
  tools: string[];
  duration: string;
  organization: string;
  contributions: string[];
}

export interface Publication {
  authors: string[];
  title: string;
  journal?: string;
  conference?: string;
  year: number;
  doi?: string;
  status?: string;
  volume?: string | number;
  pages?: string;
  location?: string;
}

export interface Award {
  award: string;
  year: number;
  term: string;
  institution: string;
  amount?: string;
  project?: string;
  program?: string;
  granting_institution?: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  year: number;
  gpa: number;
  thesis_title?: string;
  supervisor?: Supervisor;
  supervisors?: Supervisor[];
}

export interface Supervisor {
  name: string;
  designation: string;
  department?: string;
  institution: string;
}