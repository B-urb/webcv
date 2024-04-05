import { createDirectus, graphql, rest, staticToken } from "@directus/sdk";

import type {
  Blogpost,
  Introtext,
  Project,
  ProjectTranslations,
  WorkExperience,
  WorkRoles,
  WorkRolesTranslations,
} from "./types";

export const directus = createDirectus<MyCollections>("https://cms.burban.me")
  .with(staticToken(process.env.DIRECTUS_TOKEN!))
  .with(rest())
  .with(graphql());

interface MyCollections {
  blogposts: Blogpost[];
  projects: Project[];
  projects_translations: ProjectTranslations[];
  aboutme: Introtext;
  work_experience: WorkExperience[];
  work_roles: WorkRoles[];
  work_roles_translations: WorkRolesTranslations[];
}
