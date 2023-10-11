import Link from "next/link";
import { allBlogposts } from "../../lib/directus";
import BlogpostCard from "../../components/BlogpostCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Björn Urban | Blogposts",
  description: "Checkout my Blogposts. I write about tech, mostly tutorials and experiences from my hobby projects."
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
  const blogposts: BlogPostData[] = res?.data ?? [];

  return (
      <div className="text-center mt-2 flex flex-col items-center justify-center">
        <h2>Blogposts about mostly tech related topics. Tutorials, experiences and more.</h2>
        <nav className="flex flex-row gap-4 justify-center flex-wrap list-none">
          {blogposts.length > 0
              ? blogposts.sort((a, b) => new Date(b.date_created ?? "").getTime() - new Date(a.date_created ?? "").getTime()).map((post, key) => (
                  <Link key={key} href={"blog/" + (post.id?.toString() ?? "")}>
                    <BlogpostCard
                        name={post.title ?? ""}
                        thumbnail={post.thumbnail}
                        abstract={post.abstract ?? ""}
                        date={post.date_created ?? ""}
                        tags={post.tags ?? []}
                    />
                  </Link>
              ))
              : <span>No Blogposts yet :( </span>}
        </nav>
      </div>
  );
};

export default Blogposts;
