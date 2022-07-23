import {Directus, ID, ISingleton, ManyItems, OneItem,} from '@directus/sdk';
import blogposts from "../Blogposts";



export type IBlogPost = {
  id: ID;
  title: string;
  content: string;
  code: string;
  tags: Array<string>;
};

export type IProjects = {
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
  projects: IProjects,
  intro: Introtext,
}
const directus = new Directus<MyCollections>('https://cms.burban.me');
export async function allBlogposts() : Promise<ManyItems<IBlogPost>> {
  // We don't need to authenticate if data is public
  return await directus.items("blogposts").readByQuery({
    // By default API limits results to 100.
    // With -1, it will return all results, but it may lead to performance degradation
    // for large result sets.
    fields: ['id','title'],
    limit: -1,
  });

}
export async function allProjects() : Promise<ManyItems<IProjects>> {
  // We don't need to authenticate if data is public
  return await directus.items("Projects").readByQuery({
    // By default API limits results to 100.
    // With -1, it will return all results, but it may lead to performance degradation
    // for large result sets.
    limit: -1,
  });

}
export async function getPostById(id: number) : Promise<OneItem<IBlogPost>> {
  return await directus.items("blogposts").readOne(id);
}


export async function getIntrotext() : Promise<OneItem<Introtext>> {
  return directus.singleton("intro").read();
}
