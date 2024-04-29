import Link from "next/link";

import { allSkills } from "../lib/skills";
import SkillsBadge from "./SkillsBadge";

const SkillsGroup = async () => {
  const skills = await allSkills();
  return skills !== undefined && skills.length > 0 ? (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
      {skills
        .sort((a, b) => (a.text < b.text ? -1 : 0))
        .map((skill) => (
          <Link key={skill.id} href={`/skills/${skill.id}`}>
            <SkillsBadge id={skill.key} text={skill.text} />
          </Link>
        ))}
    </div>
  ) : (
    <span>No Projects yet :( </span>
  );
};

export default SkillsGroup;
