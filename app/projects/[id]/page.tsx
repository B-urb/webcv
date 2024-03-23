import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { BlogpostMarkdown } from '../../../components/BlogpostMarkdown';
import { getProjectById, Project } from '../../../lib/directus';

// export async function generateMetadata(
//     id: string,
//     parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   // fetch data
//   //const project = await getProject(id)
//   return {
//     title: "test", // project.title,
//     description: "test"
//   }
// }

async function getProject(projectId: string) {
  // Call an external API endpoint to get posts
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return getProjectById(projectId);
}
// FIXME: Add generate metadata
const Project = async ({ params }: any) => {
  const project: Project = await getProject(params.id);
  console.log(project);

  return project != undefined ? (
    <div className="flex flex-col items-center">
      <div className="mx-4 flex w-[90vw] flex-row justify-between">
        <Link href="/projects" legacyBehavior>
          <button className="transition-all hover:scale-150 md:text-2xl">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </button>
        </Link>
        <h2 className="hidden w-48 font-roboto text-xl opacity-50 md:inline md:text-sm">
          {project.name!}
        </h2>
      </div>
      <article
        className="dark:prose-p:text-dark-4 dark: dark:prose-headings:text-dark-4 prose mt-6
      flex
      min-w-[65vw]
       max-w-[90vw] flex-col justify-items-center
       dark:prose-invert prose-pre:bg-inherit
       prose-pre:opacity-90
       dark:prose-p:text-2xl"
      >
        <h2>{project.name!}</h2>
        <BlogpostMarkdown markdown={project.description!} />{' '}
      </article>
    </div>
  ) : (
    <div>No Projectdata</div>
  );
};

export default Project;
