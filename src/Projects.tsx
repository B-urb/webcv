import ProjectsCard from "./ProjectsCard";

const td = ["Test1", "Test2", "Test3"];

const Projects = () => {
    return <div className=" grid grid-cols-3">
        {td.map( content => <div className="col">
            <ProjectsCard key={content}/>
        </div>)}

    </div>
}

export default Projects;