export type ProjectIcon =
  | "landmark"
  | "cinema"
  | "shield"
  | "house"
  | "boxes";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  icon: ProjectIcon;
  featured?: boolean;
};
