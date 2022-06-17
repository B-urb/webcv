import MetaTag from "./MetaTag";


const ProjectsCard = (props: {key: number, content: string}) => {
    return <div className="dark:shadow-white dark:shadow-md h-full self-stretch rounded-md m-4">
        <div className=" shadow-sm p-3 rounded-md bg-gray-900 min-w-0 self-stretch h-full max-h-full overflow-scroll text-xs md:text-lg">
            <p>{props.content}</p>
            <div><MetaTag tag={"C++"}/></div>
    </div>
    </div>
}

export default ProjectsCard