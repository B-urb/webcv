import { readItems } from "@directus/sdk";

import { directus } from "./directusClient";
import type { WorkExperience } from "./types";

export async function allWorkExperience(): Promise<WorkExperience[]> {
  // We don't need to authenticate if data is public
  return directus.request(
    readItems("work_experience", {
      // By default API limits results to 100.
      // With -1, it will return all results, but it may lead to performance degradation
      // for large result sets.
      deep: {
        roles: {
          translations: {
            _filter: {
              languages_code: { _eq: "en-US" },
            },
          },
        },
      },
      fields: [
        "id",
        "name",
        "url",
        "startdate",
        "enddate",
        "logo",
        { roles: ["*", { translations: ["*"], associated_skills: ["*"] }] },
      ],
    })
  );
}
