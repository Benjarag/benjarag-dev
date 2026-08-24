import Reveal from "@/components/ui/Reveal/Reveal";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import { projects } from "@/data/projects";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

type ProjectsProps = {
  locale: Locale;
  content: Dictionary["projects"];
};

export default function Projects({ locale, content }: ProjectsProps) {
  return (
    <section id="projects" className="page-section projects-section">
      <div className="section-inner">
        <Reveal>
          <div className="section-heading">
            <span className="section-line" />
            <div>
              <span className="section-label">{content.eyebrow}</span>
              <h2>{content.title}</h2>
            </div>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              className="project-reveal"
              delay={Math.min(index * 0.07, 0.28)}
            >
              <ProjectCard
                project={project}
                content={content.items[project.slug]}
                href={`/${locale}/projects/${project.slug}`}
                viewProjectLabel={content.viewProject}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
