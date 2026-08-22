import { Code2, Wrench } from "lucide-react";

import SkillCard from "@/components/sections/Skills/SkillCard";
import { engineeringTools, technicalSkills } from "@/data/skills";
import type { Dictionary } from "@/i18n/types";

type SkillsProps = {
  content: Dictionary["skills"];
};

export default function Skills({ content }: SkillsProps) {
  return (
    <div id="skills" className="skills-stack">
      <SkillCard
        title={content.technologyTitle}
        items={technicalSkills}
        icon={Code2}
      />
      <SkillCard
        title={content.engineeringTitle}
        items={engineeringTools}
        icon={Wrench}
      />
    </div>
  );
}
