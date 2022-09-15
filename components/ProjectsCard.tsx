import MetaTag from "./MetaTag";
import ReactMarkdown from "react-markdown";

const ProjectsCard = (props: {name: string, content: string, tags: Array<string|undefined>}) => {
    return <div onClick={() => alert("Detailed Projects view Coming soon ;)")} className="shadow-md hover:cursor-pointer shadow-black dark:shadow-white dark:shadow-md h-full self-stretch rounded-md m-4">
        <div className="shadow-sm p-3 rounded-md bg-light-4 text-black dark:text-white dark:bg-dark-2 divide-y h-full divide-white divide-dotted grid text-xs md:text-md">
            <div className="row-span-auto">
                <h2 className="font-roboto text-xl md:text-2xl">{props.name}</h2></div>
            <div className="row-auto text-base h-44 md:h-36"><ReactMarkdown>
                {props.content}
            </ReactMarkdown></div>
            <div className="row-auto pt-2 flex flex-wrap justify-start justify-items-start gap-2">{
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