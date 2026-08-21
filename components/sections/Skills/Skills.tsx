import { Code2 } from "lucide-react";

import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <div id="skills" className="skills-card">
      <div className="card-heading">
        <Code2 size={22} />
        <h3>Skills / Tech Stack</h3>
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