import ProjectsCard from "./ProjectsCard";
import {useQuery} from "react-query";
import {start} from "./api/directus";


const Projects = () => {
    const {status, data, error} = useQuery("blogposts",start);

    if (status === 'loading'|| status === 'idle') {
        return <span>Loading...</span>
    }
    if (status === 'error') {
        if(error instanceof Error)
        return <span>Error: {error.message}</span>
    }
    if (status === 'success') {

        return <div className=" grid grid-cols-1 md:grid-cols-3">
            {data.data != undefined && data.data.length > 0 ?
                data?.data.map((content, key) => <div key={key} className="flex-col items-stretch flex">
                <ProjectsCard content={content.content!}/>
            </div>): <span>No Projects yet :( </span>}

        </div>
    }
    else return <span>wat</span>
}

export default Projects;