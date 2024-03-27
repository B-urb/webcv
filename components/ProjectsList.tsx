import type { Project } from "../lib/directus";
import { allProjects } from "../lib/directus";
import ProjectsCard from "./ProjectsCard";

const filterProjects = (elem: Project, category: string | undefined) => {
  console.log(elem);
  console.log("jo");
  console.log(category);
  if (!category) {
    return true;
  }
  return category === elem.translations?.[0].category;
};
const ProjectsList = async (props: { category?: string }) => {
  const projects = await allProjects();
  return (
    <nav className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:w-2/3 xl:grid-cols-3 2xl:grid-cols-4">
      {projects !== undefined && projects.length > 0 ? (
        projects
          .filter((project) => filterProjects(project, props.category))
          .map((content) => (
            <ProjectsCard
              key={content.name}
              id={content.id}
              name={content.name!}
              content={content.translations?.[0]?.description!}
              tags={content.tags!}
            />
          ))
      ) : (
        <span>No Projects yet :( </span>
      )}
    </nav>
  );
};

export default ProjectsList;
