import ProjectsCard from "../../components/ProjectsCard";
import {allProjects} from "../../lib/directus";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Björn Urban | Projects",
  description:"Have a look at some of the projects I have worked on in the past or working on at the moment. This can be work, university or hobby projects."
}
const Projects = async () => {
  const projects = await allProjects()
  return <div className="flex flex-col items-center">
    <h2 className="text-center">Projects summarizing my professional experience with different frameworks and programming languages and technologies.</h2>
    <div className="flex gap-4 flex-row flex-wrap xl:w-2/3">

    {projects != undefined && projects.length > 0 ?
        projects.map((content, key) =>
          <ProjectsCard key={key} id={content.id} name={content.name!} content={content.description!} tags={content.tags!}/>
        ) : <span>No Projects yet :( </span>}
  </div>
  </div>
}


export default Projects;