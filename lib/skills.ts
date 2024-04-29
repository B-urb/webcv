import { readItems } from "@directus/sdk";

import { directus } from "./directusClient";
import type { Project, Skill } from "./types";

export async function allSkills(): Promise<Skill[]> {
  // We don't need to authenticate if data is public
  return directus.request(
    readItems("skills", {
      limit: -1,
      // By default API limits results to 100.
      // With -1, it will return all results, but it may lead to performance degradation
      // for large result sets.
      fields: ["id", "key", "text"],
    })
  );
}
export async function getSkillsById(ids: number[]): Promise<Skill[]> {
  if (ids.length < 1) return [];
  return directus.request(
    readItems("skills", {
      limit: -1,
      filter: {
        id: {
          _in: ids,
        },
      },
      // By default API limits results to 100.
      // With -1, it will return all results, but it may lead to performance degradation
      // for large result sets.
      fields: ["id", "key", "text"],
    })
  );
}
export async function getSkillAssociatedProjects(
  id: string
): Promise<Project[]> {
  return directus.request(
    readItems("projects", {
      deep: {
        translations: {
          _filter: {
            languages_code: { _eq: "en-US" },
          },
        },
      },
      filter: {
        associated_skills: {
          skills_id: {
            id: {
              _in: parseInt(id, 10),
            },
          },
        },
      },
      fields: ["*", { translations: ["*"], associated_skills: ["*"] }],
    })
  );
}
