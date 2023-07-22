import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";
import {BlogpostMarkdown} from "../../../components/BlogpostMarkdown";
import {allProjects, getProjectById, IProject} from "../../../lib/directus";
import Link from "next/link";

type ProjectParams = {
  id: string
}
async function getProject(projectId: string) {
  // Call an external API endpoint to get posts
  const project = await getProjectById(projectId)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return project
}
//FIXME: Add generate metadata
const Project = async ({params}: any) => {
const project: IProject = await getProject(params.id)
console.log(project)

  return project != undefined ? <div className="flex items-center flex-col">
    <div className="flex flex-row w-[90vw] justify-between mx-4">
      <Link href="/projects" legacyBehavior><button className="md:text-2xl transition-all hover:scale-150">
        <FontAwesomeIcon icon={faArrowAltCircleLeft}/></button>
      </Link>
      <h2 className="hidden md:inline font-roboto opacity-50 w-48 text-xl md:text-sm">{project.name!}</h2>
    </div>
    <article className="flex justify-items-center flex-col mt-6 min-w-[65vw]
      max-w-[90vw]
      dark:prose-p:text-2xl
       prose prose-pre:bg-inherit dark:prose-p:text-dark-4
       dark: prose-pre:opacity-90
       dark:prose-headings:text-dark-4
       dark:prose-invert"><h2>{project.name!}</h2><BlogpostMarkdown markdown={project.description!}/> </article>
  </div> :<div>No Projectdata</div>;
}



export default Project;