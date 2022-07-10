import {Directus, ID, ManyItems,} from '@directus/sdk';



export type BlogPost = {
  id: ID;
  content: string;
};

type MyCollections = {
  posts: BlogPost
}
const directus = new Directus<MyCollections>('https://cms.burban.me');
export async function start() : Promise<ManyItems<BlogPost>> {
  // We don't need to authenticate if data is public
  return await directus.items("blogposts").readByQuery({
    // By default API limits results to 100.
    // With -1, it will return all results, but it may lead to performance degradation
    // for large result sets.
    limit: -1,
  });

}
