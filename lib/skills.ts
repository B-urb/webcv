import { readItems } from "@directus/sdk";

import { directus } from "./directusClient";
import type { Skill } from "./types";

export async function allSkills(): Promise<Skill[]> {
  // We don't need to authenticate if data is public
  return directus.request(
    readItems("skills", {
      // By default API limits results to 100.
      // With -1, it will return all results, but it may lead to performance degradation
      // for large result sets.
      fields: ["id", "key", "text"],
    })
  );
}

// export async function getSkillAssociatedProjects(
//   id: string
// ): Promise<Project[]> {
//   return directus.request(
//     readItem("projects", id, {
//       deep: {
//         translations: {
//           _filter: {
//             languages_code: { _eq: "en-US" },
//           },
//         },
//         skills: {
//           _search: {
//             : { _contains: parseInt(id, 10) },
//           },
//         },
//       },
//       fields: ["*", { translations: ["*"], skills: ["id", "key", "text"] }],
//     })
//   );
// }
