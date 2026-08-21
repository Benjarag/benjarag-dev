import { GraduationCap, MapPin } from "lucide-react";

import Reveal from "@/components/ui/Reveal/Reveal";
import Skills from "@/components/sections/Skills/Skills";

export default function About() {
  return (
    <section id="about" className="page-section about-section">
      <div className="section-inner">
        <div className="about-grid">
          <Reveal>
            <div className="about-card">
              <div className="section-heading">
                <span className="section-line section-line-green" />

                <div>
                  <span className="section-label">A little context</span>
                  <h2>About Me</h2>
                </div>
              </div>

              <p>
                I have completed all requirements for my BSc in Software
                Engineering at Reykjavík University, with formal graduation
                scheduled for October 2026.
              </p>

              <p>
                During my studies I also completed an exchange semester at
                Queensland University of Technology in Brisbane, with a focus
                on areas including cybersecurity and secure software
                development.
              </p>

              <p>
                I enjoy building backend systems and full-stack applications,
                learning new technologies and solving problems with software
                that is clear, maintainable and useful.
              </p>

              <div className="about-facts">
                <div>
                  <MapPin size={18} />
                  Reykjavík, Iceland
                </div>

                <div>
                  <GraduationCap size={18} />
                  BSc requirements completed
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <Skills />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
