import Reveal from "@/components/ui/Reveal/Reveal";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="page-section projects-section">
      <div className="section-inner">
        <Reveal>
          <div className="section-heading">
            <span className="section-line" />
            <div>
              <span className="section-label">Finished work</span>
              <h2>Featured Projects</h2>
            </div>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              className="project-reveal"
              delay={Math.min(index * 0.07, 0.28)}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
