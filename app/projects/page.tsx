import type { Metadata } from "next";
import { Suspense } from "react";

import ProjectsList from "../../components/ProjectsList";

export const metadata: Metadata = {
  title: "Björn Urban | Projects",
  description:
    "Have a look at some of the projects I have worked on in the past or working on at the moment. This can be work, university or hobby projects.",
};
const Projects = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center">
        Projects summarizing my professional experience with different
        frameworks and programming languages and technologies.
      </h2>
      <Suspense>
        <ProjectsList />
      </Suspense>
    </div>
  );
};

export default Projects;
