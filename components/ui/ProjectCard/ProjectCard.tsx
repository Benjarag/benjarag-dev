import {
  ArrowUpRight,
  Boxes,
  Clapperboard,
  House,
  Landmark,
  ShieldCheck,
} from "lucide-react";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

const icons = {
  landmark: Landmark,
  cinema: Clapperboard,
  shield: ShieldCheck,
  house: House,
  boxes: Boxes,
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = icons[project.icon];

  return (
    <article
      className={`project-card ${
        project.featured ? "project-card-featured" : ""
      }`}
    >
      <div className="project-top">
        <div className={`project-icon project-icon-${project.icon}`}>
          <Icon size={32} />
        </div>

        <ArrowUpRight className="project-arrow" size={22} />
      </div>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="technology-list">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
    </article>
  );
}
