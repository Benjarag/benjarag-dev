export type ProjectIcon =
  | "landmark"
  | "cinema"
  | "shield"
  | "house"
  | "boxes";

export const projectSlugs = [
  "einkaklubburinn-arion-banki",
  "dr-cinema",
  "cryptocop",
  "fasteignavefur",
  "e-commerce-microservices",
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export type Project = {
  slug: ProjectSlug;
  year: number;
  technologies: readonly string[];
  cardTechnologies?: readonly string[];
  icon: ProjectIcon;
  featured?: boolean;
};

export function isProjectSlug(value: string): value is ProjectSlug {
  return projectSlugs.some((slug) => slug === value);
}
