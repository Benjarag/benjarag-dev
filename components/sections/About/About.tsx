import { GraduationCap, MapPin } from "lucide-react";

import Reveal from "@/components/ui/Reveal/Reveal";
import Skills from "@/components/sections/Skills/Skills";
import type { Dictionary } from "@/i18n/types";

type AboutProps = {
  content: Dictionary["about"];
  skillsContent: Dictionary["skills"];
};

export default function About({ content, skillsContent }: AboutProps) {
  return (
    <section id="about" className="page-section about-section">
      <div className="section-inner">
        <div className="about-grid">
          <Reveal>
            <div className="about-card">
              <div className="section-heading">
                <span className="section-line section-line-green" />

                <div>
                  <span className="section-label">{content.eyebrow}</span>
                  <h2>{content.title}</h2>
                </div>
              </div>

              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="about-facts">
                <div>
                  <MapPin size={18} />
                  {content.location}
                </div>

                <div>
                  <GraduationCap size={18} />
                  {content.education}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <Skills content={skillsContent} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
