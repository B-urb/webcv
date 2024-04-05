import Link from "next/link";

import { allSkills } from "../lib/skills";
import SkillsBadge from "./SkillsBadge";

const SkillsGroup = async () => {
  const skills = await allSkills();
  console.log(skills);
  return skills !== undefined && skills.length > 0 ? (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
      {skills.map((skill) => (
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
