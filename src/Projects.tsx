import ProjectsCard from "./ProjectsCard";
import {useQuery, UseQueryResult} from "react-query";
import {allProjects, IBlogPost, IProjects} from "./api/directus";
import {ManyItems} from "@directus/sdk";


const Projects = () => {
    const {status, data, error} : UseQueryResult<ManyItems<IProjects>, Error>= useQuery("projects",allProjects);

    switch (status) {
        case "idle":
            return <div>idle</div>;
        case 'loading': return <span>Loading...</span>
        case 'error':
            return <span>Error: {error.message}</span>

        case "success": return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {data.data != undefined && data.data.length > 0 ?
                data?.data.map((content, key) => <div key={key} className="flex-col items-stretch flex">
                <ProjectsCard name={content.name!} content={content.description!} tags={content.tags!}/>
            </div>): <span>No Projects yet :( </span>}

        </div>
    }
}

export default Projects;