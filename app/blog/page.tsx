import type { Metadata } from "next";
import Link from "next/link";

import BlogpostCard from "../../components/BlogpostCard";
import { allBlogposts } from "../../lib/directus";

export const metadata: Metadata = {
  title: "Björn Urban | Blogposts",
  description:
    "Checkout my Blogposts. I write about tech, mostly tutorials and experiences from my hobby projects.",
};

interface BlogPostData {
  id?: number;
  title?: string;
  thumbnail?: string;
  abstract?: string;
  date_created?: string;
  tags?: Array<string>;
}

const Blogposts = async () => {
  const res = await allBlogposts();
  const blogposts: BlogPostData[] = res ?? [];

  return (
    <div className="mt-2 flex flex-col items-center justify-center gap-y-3 text-center lg:gap-y-14">
      <h2 className="text-center font-bold text-accent underline lg:text-2xl">
        Blogposts about mostly tech related topics. Tutorials, experiences and
        more.
      </h2>
      <nav className="grid list-none grid-cols-1 justify-start gap-4 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
        {blogposts.length > 0 ? (
          blogposts
            .sort(
              (a, b) =>
                new Date(b.date_created ?? "").getTime() -
                new Date(a.date_created ?? "").getTime()
            )
            .map((post) => (
              <Link key={post.id} href={`blog/${post.id?.toString() ?? ""}`}>
                <BlogpostCard
                  name={post.title ?? ""}
                  thumbnail={post.thumbnail}
                  abstract={post.abstract ?? ""}
                  date={post.date_created ?? ""}
                  tags={post.tags ?? []}
                />
              </Link>
            ))
        ) : (
          <span>No Blogposts yet :( </span>
        )}
      </nav>
    </div>
  );
};

export default Blogposts;
