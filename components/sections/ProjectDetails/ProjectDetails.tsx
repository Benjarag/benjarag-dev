import { ArrowLeft, CalendarDays } from "lucide-react";
import Link from "next/link";

import styles from "@/components/sections/ProjectDetails/ProjectDetails.module.css";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectCopy } from "@/i18n/types";
import type { Project } from "@/types/project";

type ProjectDetailsProps = {
  locale: Locale;
  project: Project;
  content: ProjectCopy;
  labels: Pick<
    Dictionary["projects"],
    "back" | "overview" | "technologies" | "year"
  >;
};

export default function ProjectDetails({
  locale,
  project,
  content,
  labels,
}: ProjectDetailsProps) {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <Link className={styles.backLink} href={`/${locale}#projects`}>
          <ArrowLeft size={18} aria-hidden="true" />
          {labels.back}
        </Link>

        <header className={styles.header}>
          <div className={styles.meta}>
            <span>{content.category}</span>
            <span className={styles.metaDivider} aria-hidden="true">
              ·
            </span>
            <time className={styles.year} dateTime={String(project.year)}>
              <CalendarDays size={17} aria-hidden="true" />
              {labels.year} {project.year}
            </time>
          </div>

          <h1>{content.title}</h1>
          <p className={styles.summary}>{content.summary}</p>
        </header>

        <section className={styles.section}>
          <h2>{labels.overview}</h2>
          {content.details.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className={styles.section}>
          <h2>{labels.technologies}</h2>
          <div className={styles.technologies}>
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
