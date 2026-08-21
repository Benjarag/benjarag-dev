import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Mail,
  Plane,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import Reveal from "@/components/ui/Reveal/Reveal";

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-background" />

      <div className="hero-grid">
        <Reveal>
          <h1 className="hero-title">Benjamín Ragnarsson</h1>

          <p className="hero-subtitle">
            Software Engineer · BSc requirements completed
          </p>

          <div className="availability">
            <span className="availability-dot" />
            Available for work
          </div>

          <div className="status-line">
            <CheckCircle2 size={18} />
            <span>All coursework completed and ready to contribute.</span>
          </div>

          <p className="hero-copy">
            Based in Reykjavík, Iceland. I build reliable backend systems,
            APIs and full-stack applications with a focus on clean code,
            maintainability and real-world impact.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="https://github.com/Benjarag"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
            >
              <FaGithub size={18} />
              GitHub
            </a>

            <a
              href="mailto:benjarag7@outlook.com"
              className="button button-secondary"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>

        </Reveal>

        <Reveal className="academic-cards" delay={0.15}>
          <div className="academic-card">
            <div className="academic-icon">
              <GraduationCap size={25} />
            </div>

            <div>
              <strong>Reykjavík University</strong>
              <span>BSc requirements completed</span>
            </div>

            <span className="completed">Completed</span>
          </div>

          <div className="academic-card">
            <div className="academic-icon">
              <BarChart3 size={25} />
            </div>

            <div>
              <strong>GPA 8.8 / 10</strong>
              <span>Strong academic performance</span>
            </div>
          </div>

          <div className="academic-card">
            <div className="academic-icon">
              <Plane size={25} />
            </div>

            <div>
              <strong>QUT Exchange, Brisbane</strong>
              <span>Exchange semester in Australia</span>
            </div>
          </div>
        </Reveal>
      </div>

      <a href="#projects" className="scroll-cue">
        <span>Scroll to explore</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
