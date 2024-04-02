import {
  createDirectus,
  graphql,
  readItem,
  readItems,
  readSingleton,
  rest,
  staticToken,
} from "@directus/sdk";

const directus = createDirectus<MyCollections>("https://cms.burban.me")
  .with(staticToken(process.env.DIRECTUS_TOKEN!))
  .with(rest())
  .with(graphql());

// const directus = new Directus<MyCollections>('https://cms.burban.me', {
//   auth: {
//     staticToken: process.env.DIRECTUS_TOKEN!
//   }
// })

export type Blogpost = {
  id: number;
  title: string;
  abstract: string;
  thumbnail: string;
  content: string;
  tags: Array<string>;
  date_created: string;
};

export type Project = {
  id: number;
  name: string;
  tags: Array<string>;
  translations: ProjectTranslations[] | null;
  repository_url: string;
};
export type ProjectTranslations = {
  id: number;
  projects_id: number;
  category: string;
  languages_code: string;
  description: string;
};

export type WorkExperience = {
  id: number;
  name: string;
  startdate: string;
  enddate?: string;
  logo: string;
  url: string;
  roles: WorkRoles[] | null;
};

export type WorkRoles = {
  id: number;
  employer_id: number;
  title: string;
  startdate: string;
  enddate?: string;
  translations: WorkRolesTranslations[] | null;
};

export type WorkRolesTranslations = {
  id: number;
  work_roles_id: number;
  description: string;
  languages_code: string;
};

export type Introtext = {
  id: number;
  introtext: string;
};

interface MyCollections {
  blogposts: Blogpost[];
  projects: Project[];
  projects_translations: ProjectTranslations[];
  aboutme: Introtext;
  work_experience: WorkExperience[];
  work_roles: WorkRoles[];
  work_roles_translations: WorkRolesTranslations[];
}

export async function allBlogposts(): Promise<Blogpost[]> {
  // We don't need to authenticate if data is public
  const filter = {};
  return directus.request(
    readItems("blogposts", {
      // By default API limits results to 100.
      // With -1, it will return all results, but it may lead to performance degradation
      // for large result sets.
      filter,
      fields: [
        "id",
        "title",
        "abstract",
        "thumbnail",
        "content",
        "tags",
        "date_created",
      ],
      limit: -1,
    })
  );
}

export function getProfileImage() {
  const id = "384e369b-89b9-4182-80b4-871848fad4c2"; // TODO: GET BY NAME
  // const file = directus.request(readFile(id))
  return id;
}

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
      fields: ["id", "name", "tags", "repository_url", { translations: ["*"] }],
    })
  );
}

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
        { roles: ["*", { translations: ["*"] }] },
      ],
    })
  );
}

export async function getPostById(id: string): Promise<Blogpost> {
  return directus.request(readItem("blogposts", id));
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
      fields: ["*", { translations: ["*"] }],
      limit: 1,
    })
  );
}

export async function getIntrotext(): Promise<Introtext> {
  return directus.request(readSingleton("aboutme"));
}
