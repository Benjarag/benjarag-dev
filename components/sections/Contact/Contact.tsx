import {
  ArrowRight,
  Brain,
  Mail,
  Users,
  Zap,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Reveal from "@/components/ui/Reveal/Reveal";
import { contactLinks } from "@/data/contact";
import type { Dictionary } from "@/i18n/types";

type ContactProps = {
  content: Dictionary["contact"];
};

export default function Contact({ content }: ContactProps) {
  return (
    <section id="contact" className="page-section contact-section">
      <div className="section-inner">
        <Reveal>
          <div className="contact-card">
            <div className="contact-content">
              <span className="section-label">{content.eyebrow}</span>

              <h2>{content.title}</h2>

              <p>{content.introduction}</p>

              <div className="hero-actions">
                <a
                  href={contactLinks.email}
                  className="button button-primary"
                >
                  <Mail size={18} />
                  {content.contact}
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
              </div>
            </div>

            <div className="contact-features">
              <div>
                <Zap size={22} />
                <strong>{content.features.learning.title}</strong>
                <span>{content.features.learning.description}</span>
              </div>

              <div>
                <Users size={22} />
                <strong>{content.features.teamwork.title}</strong>
                <span>{content.features.teamwork.description}</span>
              </div>

              <div>
                <Brain size={22} />
                <strong>{content.features.problemSolving.title}</strong>
                <span>{content.features.problemSolving.description}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
