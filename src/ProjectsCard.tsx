import MetaTag from "./MetaTag";


const ProjectsCard = (props: {key: number, content: string}) => {
    return <div className="dark:shadow-white dark:shadow-md h-full self-stretch rounded-md m-4">
        <div className=" shadow-sm p-3 rounded-md bg-gray-900 min-w-0 self-stretch h-full max-h-full divide-y divide-white divide-dotted grid overflow-scroll  text-xs md:text-lg">
            <div className="row-span-1">
                <h2>Header</h2></div>
            <p className="row-auto">{props.content}</p>
            <div className="row-end-auto row-span-1 p-3 flex align-bottom h-fit"><MetaTag tag={"C++"}/></div>
    </div>
    </div>
}

export default ProjectsCard