import { readItem, readItems } from "@directus/sdk";

import { directus } from "./directusClient";
import type { Project } from "./types";

export async function allProjects(): Promise<Project[]> {
  // We don't need to authenticate if data is public
  return directus.request(
    readItems("projects", {
      // By default API limits results to 100.
      // With -1, it will return all results, but it may lead to performance degradation
      // for large result sets.
      deep: {
        translations: {
          _filter: {
            languages_code: { _eq: "en-US" },
          },
        },
      },
      fields: [
        "id",
        "name",
        "tags",
        "repository_url",
        { translations: ["*"], associated_skills: ["*"] },
      ],
    })
  );
}
export async function getProjectById(id: string): Promise<Project> {
  return directus.request(
    readItem("projects", id, {
      deep: {
        translations: {
          _filter: {
            _and: [
              {
                languages_code: { _eq: "en-US" },
              },
              {
                projects_id: { _eq: parseInt(id, 10) },
              },
            ],
          },
        },
      },
      fields: ["*", { translations: ["*"], associated_skills: ["*"] }],
      limit: 1,
    })
  );
}
