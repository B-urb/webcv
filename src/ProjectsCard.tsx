import MetaTag from "./MetaTag";
import parse from "html-react-parser"

const ProjectsCard = (props: {name: string, content: string, tags: Array<string|undefined>}) => {
    return <div onClick={() => alert("Coming soon ;)")} className="shadow-md hover:cursor-pointer hadow-black dark:shadow-white dark:shadow-md h-full self-stretch rounded-md m-4">
        <div className="shadow-sm p-3 rounded-md bg-yellow-600 dark:bg-gray-900 min-w-0 self-stretch h-full max-h-full divide-y divide-white divide-dotted grid text-xs md:text-md">
            <div className="row-span-1">
                <h2 className="font-roboto text-xl md:text-2xl">{props.name}</h2></div>
            <div className="row-auto h-32">{parse(props.content)}</div>
            <div className="row-end-auto row-span-1  pt-2 grid auto-cols-auto grid-flow-col gap-x-2 justify-start h-fit">{
                props.tags.map((tag,key) => {
                        if(tag!== undefined)
                        return <MetaTag key={key} tag={tag}/>
                    }
                )}
                </div>
    </div>
    </div>
}

export default ProjectsCard