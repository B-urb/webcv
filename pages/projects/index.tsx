import ProjectsCard from "../../components/ProjectsCard";
import {allProjects, IProjects} from "../../lib/directus";
import SEO from "../../components/Seo";


const Projects = (props: { projects: Array<IProjects> }) => {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <SEO title={"Björn Urban | Projects "} description={"Overview of my personal projects"}/>
    {props.projects != undefined && props.projects.length > 0 ?
        props.projects.map((content, key) => <div key={key} className="flex-col items-stretch flex">
          <ProjectsCard name={content.name!} content={content.description!} tags={content.tags!}/>
        </div>) : <span>No Projects yet :( </span>}
  </div>
}

export async function getStaticProps() {
  const res = await allProjects()
  const  projects = res.data
  return {
    props:
        {
          projects,
        },
  }

}
export default Projects;