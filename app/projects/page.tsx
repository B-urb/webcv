import ProjectsCard from "../../components/ProjectsCard";
import {allProjects, IProject} from "../../lib/directus";
import {Metadata} from "next";

export const metadata: Metadata = {

  title: "Björn Urban | Projects",
  description:"Have a look at some of the projects I have worked on in the past or working on at the moment. This can be work, university or hobby projects."
}
const Projects = async () => {
  const res = await allProjects()
  const  projects = res.data
  return <div className="flex flex-col">
    <h2 className="text-center">Projects summarizing my professional experience with different frameworks and programming languages and technologies.</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">

    {projects != undefined && projects.length > 0 ?
        projects.map((content, key) => <div key={key} className="flex-col items-stretch flex">
          <ProjectsCard id={content.id} name={content.name!} content={content.description!} tags={content.tags!}/>
        </div>) : <span>No Projects yet :( </span>}
  </div>
  </div>
}


export default Projects;