import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import BlogMeta from '../../../components/BlogMeta';
import { BlogpostMarkdown } from '../../../components/BlogpostMarkdown';
import DirectusImage from '../../../components/DirectusImage';
import type { Blogpost } from '../../../lib/directus';
import { getPostById } from '../../../lib/directus';

// FIXME: Add metadata generation
async function getPost(postId: string) {
  // Call an external API endpoint to get posts
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return getPostById(postId);
}

// export async function generateMetadata(
//     { id }: BlogParams,
//     parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//
//   // fetch data
//   //const blog = await getPost(id)
//   return {
//     title: "test", //blog.title,
//     description: "test" //blog?.description
//   }
// }
const BlogpostView = async ({ params }: any) => {
  const post: Blogpost = await getPost(params.id);
  return post !== undefined ? (
    <div className="flex flex-col items-center">
      <div className="mx-4 flex w-[90vw] flex-row justify-between">
        <Link href="/blog" legacyBehavior>
          <button className="transition-all hover:scale-150 md:text-2xl">
            <FontAwesomeIcon
              aria-label="Back to list"
              icon={faArrowAltCircleLeft}
            />
          </button>
        </Link>
        <h2 className="hidden w-48 font-roboto text-xl opacity-50 md:inline md:text-sm">
          {post.title!}
        </h2>
      </div>
      <article
        className="dark:prose-p:text-dark-4 dark:prose-headings:text-dark-4 prose mt-6 flex
      min-w-[65vw]
      max-w-[90vw]
      flex-col
      justify-items-center
      dark:prose-invert
       prose-pre:bg-inherit dark:prose-pre:text-xs dark:prose-pre:opacity-90
       dark:prose-p:sm:text-sm
       dark:prose-p:md:text-sm
       dark:prose-p:xl:text-2xl"
      >
        <h2>{post.title!}</h2>
        <div className="flex flex-col items-center justify-items-center gap-y-2">
          <div className="relative size-96">
            <DirectusImage src={post.thumbnail} alt="Titelbild" />
          </div>
          <div className="">
            <BlogMeta tags={post.tags} date={post.date_created} />
          </div>
          <div />
        </div>
        <BlogpostMarkdown markdown={post.content!} />{' '}
      </article>
    </div>
  ) : (
    <div>No Blogdata</div>
  );
};

export default BlogpostView;
