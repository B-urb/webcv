import { readItem, readItems } from "@directus/sdk";

import { directus } from "./directusClient";
import type { Blogpost } from "./types";

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

export async function getPostById(id: string): Promise<Blogpost> {
  return directus.request(readItem("blogposts", id));
}
