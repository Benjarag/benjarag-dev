import {
  ArrowUpRight,
  Boxes,
  Clapperboard,
  House,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

import styles from "@/components/ui/ProjectCard/ProjectCard.module.css";
import type { ProjectCopy } from "@/i18n/types";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  content: ProjectCopy;
  href: string;
  viewProjectLabel: string;
};

const icons = {
  landmark: Landmark,
  cinema: Clapperboard,
  shield: ShieldCheck,
  house: House,
  boxes: Boxes,
};

const iconStyles = {
  landmark: "",
  cinema: "",
  shield: styles.iconGreen,
  house: styles.iconGreen,
  boxes: "",
};

export default function ProjectCard({
  project,
  content,
  href,
  viewProjectLabel,
}: ProjectCardProps) {
  const Icon = icons[project.icon];

  return (
    <article className={styles.article}>
      <Link
        href={href}
        className={`${styles.card} ${project.featured ? styles.featured : ""}`}
        aria-label={`${viewProjectLabel}: ${content.title}`}
      >
        <div className={styles.top}>
          <div className={`${styles.icon} ${iconStyles[project.icon]}`}>
            <Icon size={32} aria-hidden="true" />
          </div>

          <ArrowUpRight className={styles.arrow} size={22} aria-hidden="true" />
        </div>

        <h3>{content.title}</h3>

        <p>{content.summary}</p>

        <div className={styles.technologyList}>
          {(project.cardTechnologies ?? project.technologies).map(
            (technology) => <span key={technology}>{technology}</span>,
          )}
        </div>
      </Link>
    </article>
  );
}
