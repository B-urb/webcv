import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";
import {BlogpostMarkdown} from "../../components/BlogpostMarkdown";
import {allBlogposts, getPostById, IBlogPost} from "../../lib/directus";
import Link from "next/link";
import {GetStaticPropsContext} from "next";
import SEO from "../../components/Seo";


type BlogParams = {
  id: string
}

const Blogpost = (props: {post: IBlogPost}) => {

 return (props.post != undefined ? <div className="flex items-center flex-col">
   <SEO title={props.post.title} description={props.post.title}/>
      <div className="flex flex-row w-[90vw] justify-between mx-4">
      <Link href="/blogposts"><button className="md:text-2xl transition-all hover:scale-150">
        <FontAwesomeIcon icon={faArrowAltCircleLeft}/></button>
      </Link>
        <h2 className="hidden md:inline font-roboto opacity-50 w-48 text-xl md:text-sm">{props.post.title!}</h2>
      </div>
      <article className="flex justify-items-center flex-col mt-6 min-w-[65vw]
      max-w-[90vw]
      dark:prose-p:text-2xl
       prose prose-pre:bg-inherit dark:prose-p:text-dark-4
       dark: prose-pre:opacity-90
       dark:prose-headings:text-dark-4
       dark:prose-invert"><h2>{props.post.title!}</h2><BlogpostMarkdown markdown={props.post.content!}/> </article>
      </div> :<div>No Blogdata</div>)
}
export async function getStaticPaths() {
  const res = await allBlogposts()
  const blogposts = res.data
  const paths = blogposts!.map((post) => ({
    params: { id: post.id.toString() },
  }))

  return { paths, fallback: false }
}
export async function getStaticProps({params}: GetStaticPropsContext<BlogParams>) {
  const id = params!.id
  // Call an external API endpoint to get posts
  const post = await getPostById(id)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      post,
    },
  }
}

export default Blogpost;