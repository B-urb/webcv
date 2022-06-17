


const ProjectsCard = (props: {key: number, content: string}) => {
    return <div className="dark:shadow-white dark:shadow-md self-stretch rounded-md m-4">
        <div className=" shadow-sm p-3 rounded-md bg-gray-900 min-w-0 self-stretch">
            {props.content}
    </div>
    </div>
}

export default ProjectsCard