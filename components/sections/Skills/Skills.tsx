import { Code2 } from "lucide-react";

import { skills } from "@/data/skills";
import type { Dictionary } from "@/i18n/types";

type SkillsProps = {
  content: Dictionary["skills"];
};

export default function Skills({ content }: SkillsProps) {
  return (
    <div id="skills" className="skills-card">
      <div className="card-heading">
        <Code2 size={22} />
        <h3>{content.title}</h3>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
