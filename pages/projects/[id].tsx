import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";
import {BlogpostMarkdown} from "../../components/BlogpostMarkdown";
import {allBlogposts,  getProjectById,  IProject} from "../../lib/directus";
import Link from "next/link";
import {GetStaticPropsContext} from "next";
import {NextSeo} from "next-seo";

type ProjectParams = {
  id: string
}

const Project = (props: {project: IProject}) => {

  return (props.project != undefined ? <div className="flex items-center flex-col">
    <NextSeo title={props.project.name} description={props.project.description}/>
    <div className="flex flex-row w-[90vw] justify-between mx-4">
      <Link href="/blogposts"><button className="md:text-2xl transition-all hover:scale-150">
        <FontAwesomeIcon icon={faArrowAltCircleLeft}/></button>
      </Link>
      <h2 className="hidden md:inline font-roboto opacity-50 w-48 text-xl md:text-sm">{props.project.name!}</h2>
    </div>
    <article className="flex justify-items-center flex-col mt-6 min-w-[65vw]
      max-w-[90vw]
      dark:prose-p:text-2xl
       prose prose-pre:bg-inherit dark:prose-p:text-dark-4
       dark: prose-pre:opacity-90
       dark:prose-headings:text-dark-4
       dark:prose-invert"><h2>{props.project.name!}</h2><BlogpostMarkdown markdown={props.project.description!}/> </article>
  </div> :<div>No Blogdata</div>)
}
export async function getStaticPaths() {
  const res = await allBlogposts()
  const projects = res.data
  const paths = projects!.map((project) => ({
    params: { id: project.id.toString() },
  }))

  return { paths, fallback: false }
}
export async function getStaticProps({params}: GetStaticPropsContext<ProjectParams>) {
  const id = params!.id
  // Call an external API endpoint to get posts
  const project = await getProjectById(id)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      project,
    },
  }
}

export default Project;