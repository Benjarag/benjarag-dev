import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Mail,
  Plane,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "@/components/ui/Reveal/Reveal";
import { contactLinks } from "@/data/contact";
import type { Dictionary } from "@/i18n/types";

type HeroProps = {
  content: Dictionary["hero"];
};

export default function Hero({ content }: HeroProps) {
  return (
    <section id="top" className="hero-section">
      <div className="hero-background" />

      <div className="hero-grid">
        <Reveal>
          <h1 className="hero-title">{content.name}</h1>

          <p className="hero-subtitle">{content.subtitle}</p>

          <div className="availability">
            <span className="availability-dot" />
            {content.availability}
          </div>

          <div className="status-line">
            <CheckCircle2 size={18} />
            <span>{content.status}</span>
          </div>

          <p className="hero-copy">{content.introduction}</p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              {content.viewProjects}
              <ArrowRight size={18} />
            </a>

            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary button-social"
            >
              <FaGithub size={18} />
              {content.github}
            </a>

            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary button-social"
            >
              <FaLinkedin size={18} />
              {content.linkedin}
            </a>

            <a
              href={contactLinks.email}
              className="button button-secondary"
            >
              <Mail size={18} />
              {content.contact}
            </a>
          </div>
        </Reveal>

        <Reveal className="academic-cards" delay={0.15}>
          <div className="academic-card">
            <div className="academic-icon">
              <GraduationCap size={25} />
            </div>

            <div>
              <strong>{content.education.university.title}</strong>
              <span>{content.education.university.subtitle}</span>
            </div>

            <span className="completed">
              {content.education.university.status}
            </span>
          </div>

          <div className="academic-card">
            <div className="academic-icon">
              <BarChart3 size={25} />
            </div>

            <div>
              <strong>{content.education.gpa.title}</strong>
              <span>{content.education.gpa.subtitle}</span>
            </div>
          </div>

          <div className="academic-card">
            <div className="academic-icon">
              <Plane size={25} />
            </div>

            <div>
              <strong>{content.education.exchange.title}</strong>
              <span>{content.education.exchange.subtitle}</span>
            </div>
          </div>
        </Reveal>
      </div>

      <a href="#projects" className="scroll-cue">
        <span>{content.scroll}</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
