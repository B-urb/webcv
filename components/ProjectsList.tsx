import React from "react";

import type { Project } from "../lib/directus";
import { allProjects } from "../lib/directus";
import ProjectsCard from "./ProjectsCard";

const filterProjects = (elem: Project, category: string | undefined) => {
  console.log(elem);

  if (!category) {
    return true;
  }
  return category === elem.translations?.[0].category;
};
const ProjectsList: React.FC<{
  category?: string;
  loader?: () => Promise<Project[]>;
}> = async ({
  category,
  loader = allProjects, // Assigning the default loader function
}) => {
  const projects = await loader();
  return (
    <nav className="grid w-4/5 grid-cols-1 gap-4 md:w-fit md:grid-cols-2 3xl:grid-cols-3 4xl:grid-cols-4">
      {projects !== undefined && projects.length > 0 ? (
        projects
          .filter((project) => filterProjects(project, category))
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
