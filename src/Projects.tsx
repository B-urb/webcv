import ProjectsCard from "./ProjectsCard";

const td = [{content:"Test1"}, {content:"This is some test content"}, {content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}];

const Projects = () => {
    return <div className=" grid grid-cols-1 md:grid-cols-3">
        {td.map( (content,key) => <div className="flex-col items-stretch flex">
            <ProjectsCard key={key} content={content.content}/>
        </div>)}

    </div>
}

export default Projects;