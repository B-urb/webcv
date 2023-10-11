import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";
import {BlogpostMarkdown} from "../../../components/BlogpostMarkdown";
import {allBlogposts, getPostById, IBlogPost} from "../../../lib/directus";
import Link from "next/link";
import {Metadata, ResolvingMetadata} from "next";
type BlogParams = {
  id: string
}

//FIXME: Add metadata generation
async function getPost(postId: string) {
  // Call an external API endpoint to get posts
  console.log(postId)
  const post = await getPostById(postId)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return post

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
const Blogpost = async ({params }: any) => {
const post: IBlogPost = await getPost(params.id)
 return post != undefined ? <div className="flex items-center flex-col">
      <div className="flex flex-row w-[90vw] justify-between mx-4">
      <Link href="/blog" legacyBehavior><button className="md:text-2xl transition-all hover:scale-150">
        <FontAwesomeIcon icon={faArrowAltCircleLeft}/></button>
      </Link>
        <h2 className="hidden md:inline font-roboto opacity-50 w-48 text-xl md:text-sm">{post.title!}</h2>
      </div>
      <article className="flex justify-items-center flex-col mt-6 min-w-[65vw]
      max-w-[90vw]
      dark:prose-p:text-2xl
       prose prose-pre:bg-inherit dark:prose-p:text-dark-4
       dark: prose-pre:opacity-90
       dark:prose-headings:text-dark-4
       dark:prose-invert"><h2>{post.title!}</h2><BlogpostMarkdown markdown={post.content!}/> </article>
      </div> :<div>No Blogdata</div>;
}



export default Blogpost;