import {
  ArrowRight,
  Brain,
  Mail,
  Users,
  Zap,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Reveal from "@/components/ui/Reveal/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="page-section contact-section">
      <div className="section-inner">
        <Reveal>
          <div className="contact-card">
            <div className="contact-content">
              <span className="section-label">What&apos;s next?</span>

              <h2>Let&apos;s build something useful.</h2>

              <p>
                I&apos;m available for software engineering opportunities and
                looking for a team where I can contribute, learn quickly and
                keep improving as a developer.
              </p>

              <div className="hero-actions">
                <a
                  href="mailto:benjarag7@outlook.com"
                  className="button button-primary"
                >
                  <Mail size={18} />
                  Contact Me
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
              </div>
            </div>

            <div className="contact-features">
              <div>
                <Zap size={22} />
                <strong>Quick to learn</strong>
                <span>I enjoy picking up new technologies.</span>
              </div>

              <div>
                <Users size={22} />
                <strong>Team player</strong>
                <span>I value collaboration and clear communication.</span>
              </div>

              <div>
                <Brain size={22} />
                <strong>Problem solver</strong>
                <span>I like understanding how and why things work.</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
