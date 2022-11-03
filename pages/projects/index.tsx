import ProjectsCard from "../../components/ProjectsCard";
import {allProjects, IProjects} from "../../lib/directus";
import { NextSeo } from 'next-seo';

const Projects = (props: { projects: Array<IProjects> }) => {
  return <div className="flex flex-col">
    <NextSeo title={"Björn Urban | Projects "} description={"Have a look at some of the projects I have worked on in the past or working on at the moment. This can be work, university or hobby projects."}/>
    <h2 className="text-center">Projects summarizing my professional experience with different frameworks and programming languages and technologies.</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">

    {props.projects != undefined && props.projects.length > 0 ?
        props.projects.map((content, key) => <div key={key} className="flex-col items-stretch flex">
          <ProjectsCard name={content.name!} content={content.description!} tags={content.tags!}/>
        </div>) : <span>No Projects yet :( </span>}
  </div>
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