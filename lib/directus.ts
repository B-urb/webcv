import {Auth, Directus, ID, ISingleton, ManyItems, OneItem,} from '@directus/sdk';
const directus =  new Directus<MyCollections>('https://cms.tecios.de', {
  auth: {
    staticToken: process.env.DIRECTUS_TOKEN!
  }
})

export type IBlogPost = {
  id: ID;
  title: string;
  abstract: string;
  thumbnail: string;
  content: string;
  tags: Array<string>;
  date_created: string
};

export type IProject = {
  id: ID;
  name: string;
  description: string;
  tags: Array<string>;
}
export type Introtext = {
  id: ID;
  introtext: string;
}

type MyCollections = {
  posts: IBlogPost
  projects: IProject,
  intro: Introtext,
}
class DirecutsApi {
  constructor() {

  }

}
export async function allBlogposts(): Promise<ManyItems<IBlogPost>> {
  // We don't need to authenticate if data is public
  const env = process.env.NODE_ENV
  const filter =  {};
  return await directus.items("blogposts").readByQuery({
    // By default API limits results to 100.
    // With -1, it will return all results, but it may lead to performance degradation
    // for large result sets.
    filter:filter,
    fields: ['id', 'title','abstract', 'thumbnail', 'tags', 'date_created'],
    limit: -1,
  });
}

export function getProfileImage() {
  const id = "410d7427-8a7c-4f4f-9ba7-9563757ac99a" //TODO: GET BY NAME
  const file = directus.files.readOne(id)
  return id
}

export async function allProjects(): Promise<ManyItems<IProject>> {
  // We don't need to authenticate if data is public
  return await directus.items("projects").readByQuery({
    // By default API limits results to 100.
    // With -1, it will return all results, but it may lead to performance degradation
    // for large result sets.
    fields: ['id', 'name','description', 'tags'],
    limit: -1,
  });

}

export async function getPostById(id: string): Promise<OneItem<IBlogPost>> {
  return await directus.items("blogposts").readOne(id);
}
export async function getProjectById(id: string): Promise<OneItem<IProject>> {
  return await directus.items("projects").readOne(id);
}

export async function getIntrotext(): Promise<OneItem<Introtext>> {
  return directus.singleton("aboutme").read();
}
