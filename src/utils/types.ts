export type TechIcon = {
  icon: string;
  name: string;
  hoverText?: string;
};

export type ExpType = {
  role: string;
  company: string;
  timePeriod: string;
  description: string;
};

export type EduType = {
  degree: string;
  institute: string;
  timePeriod: string;
  cgpa?: number;
  percentage?: number;
};

export type ProjectType = {
  title: string;
  img: string;
  description: string;
  githubLink: string;
  prodLink?: string;
};
