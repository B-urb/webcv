import {Directus, ID, ManyItems, OneItem,} from '@directus/sdk';
import blogposts from "../Blogposts";



export type BlogPost = {
  id: ID;
  title: string;
  content: string;
};

type MyCollections = {
  posts: BlogPost
}
const directus = new Directus<MyCollections>('https://cms.burban.me');
export async function allBlogposts() : Promise<ManyItems<BlogPost>> {
  // We don't need to authenticate if data is public
  return await directus.items("blogposts").readByQuery({
    // By default API limits results to 100.
    // With -1, it will return all results, but it may lead to performance degradation
    // for large result sets.
    fields: ['id','title'],
    limit: -1,
  });

}

export async function getPostById(id: number) : Promise<OneItem<BlogPost>> {
  return await directus.items("blogposts").readOne(id);
}
