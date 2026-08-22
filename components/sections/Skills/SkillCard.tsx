import type { LucideIcon } from "lucide-react";

type SkillCardProps = {
  title: string;
  items: readonly string[];
  icon: LucideIcon;
};

export default function SkillCard({ title, items, icon: Icon }: SkillCardProps) {
  return (
    <div className="skills-card">
      <div className="card-heading">
        <Icon size={22} aria-hidden="true" />
        <h3>{title}</h3>
      </div>

      <div className="skills-grid">
        {items.map((item) => (
          <span key={item} className="skill-pill">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
