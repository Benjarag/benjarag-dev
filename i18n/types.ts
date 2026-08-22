import type { ProjectSlug } from "@/types/project";

export type ProjectCopy = {
  title: string;
  category: string;
  summary: string;
  details: readonly [string, string];
};

export type Dictionary = {
  metadata: {
    siteTitle: string;
    titleTemplate: string;
    description: string;
  };
  header: {
    navigationLabel: string;
    languageLabel: string;
    projects: string;
    about: string;
    skills: string;
    contact: string;
    cv: string;
  };
  hero: {
    name: string;
    subtitle: string;
    availability: string;
    status: string;
    introduction: string;
    viewProjects: string;
    github: string;
    linkedin: string;
    contact: string;
    scroll: string;
    education: {
      university: {
        title: string;
        subtitle: string;
        status: string;
      };
      gpa: {
        title: string;
        subtitle: string;
      };
      exchange: {
        title: string;
        subtitle: string;
      };
    };
  };
  projects: {
    eyebrow: string;
    title: string;
    viewProject: string;
    back: string;
    overview: string;
    technologies: string;
    year: string;
    items: Record<ProjectSlug, ProjectCopy>;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: readonly [string, string, string];
    location: string;
    education: string;
  };
  skills: {
    title: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    introduction: string;
    contact: string;
    github: string;
    linkedin: string;
    features: {
      learning: {
        title: string;
        description: string;
      };
      teamwork: {
        title: string;
        description: string;
      };
      problemSolving: {
        title: string;
        description: string;
      };
    };
  };
  footer: {
    location: string;
    github: string;
    linkedin: string;
    email: string;
  };
};
