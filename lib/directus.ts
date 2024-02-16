import {
  createDirectus,
  graphql, readFile,
  readItem, readItems, readSingleton,
  rest,
  staticToken,
} from '@directus/sdk';
const directus =
    createDirectus<MyCollections>('https://cms.burban.me')
    .with(staticToken(process.env.DIRECTUS_TOKEN!))
    .with(rest()).with(graphql());


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
  date_created: string
};

export type Project = {
  id: number;
  name: string;
  description: string;
  tags: Array<string>;
}
export type Introtext = {
  id: number;
  introtext: string;
}

interface MyCollections {
  blogposts: Blogpost[];
  projects: Project[];
  aboutme: Introtext;
}

export async function allBlogposts(): Promise<Blogpost[]> {
  // We don't need to authenticate if data is public
  const filter = {};
  return directus.request(readItems("blogposts", {
    // By default API limits results to 100.
    // With -1, it will return all results, but it may lead to performance degradation
    // for large result sets.
    filter: filter,
    fields: ['id', 'title', 'abstract', 'thumbnail', 'content', 'tags', 'date_created'],
    limit: -1,
  }));
}

export function getProfileImage() {
  const id = "384e369b-89b9-4182-80b4-871848fad4c2" //TODO: GET BY NAME
  //const file = directus.request(readFile(id))
  return id
}

export async function allProjects(): Promise<Project[]> {
  // We don't need to authenticate if data is public
  return directus.request(readItems("projects", {
    // By default API limits results to 100.
    // With -1, it will return all results, but it may lead to performance degradation
    // for large result sets.
    fields: ['id', 'name', 'description', 'tags'],
  }));

}

export async function getPostById(id: string): Promise<Blogpost> {
  return directus.request(readItem("blogposts", id));
}

export async function getProjectById(id: string): Promise<Project> {
  return directus.request(readItem("projects", id));
}

export async function getIntrotext(): Promise<Introtext> {
  return directus.request(readSingleton("aboutme"));
}
