import MetaTag from "./MetaTag";
import ReactMarkdown from "react-markdown";
import React, {useState} from "react";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProjectsCard = (props: {name: string, content: string, tags: Array<string|undefined>}) => {
    const [showModal, setShowModal] = useState(false);

    return <><div className=" hover:cursor-pointer md:hover:scale-105 transition-all duration-300 shadow-black  h-full self-stretch rounded-md m-4">
        <div className=" p-3 rounded-md bg-light-4 text-black dark:text-white dark:bg-dark-2 divide-y h-full divide-white divide-dotted grid text-xs md:text-md" onClick={() => setShowModal(true)}
        >
            <div className="row-span-auto">
                <h2 className="font-roboto text-xl md:text-2xl">{props.name}</h2></div>
            <div onClick={(e)=> e.stopPropagation()} className="row-auto text-base h-44 font-barlow md:h-36 cursor-default prose-a:underline"><ReactMarkdown className="text-xl md:text-xl  line-clamp-6">
                {props.content}
            </ReactMarkdown>
            <button onClick={(e) => setShowModal(true)}>Details</button></div>
            <div className="row-auto pt-2 flex flex-wrap justify-start justify-items-start gap-2">{
                props.tags.map((tag,key) => {
                        if(tag!== undefined)
                        return <MetaTag key={key} tag={tag}/>
                    }
                )}
                </div>
    </div>
    </div>
    {showModal ? (
        <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto min-w-[90vw] max-w-7xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5  border-b border-solid border-gray-300 rounded-t bg-light-4">
                            <h3 className="text-3xl font=semibold">{props.name}</h3>
                            <button
                                className="bg-transparent border-0 text-black float-right"
                                onClick={() => setShowModal(false)}
                            >
                    <span className="text-black opacity-7 h-6 w-6 text-2xl block py-0 rounded-full">
                      <FontAwesomeIcon icon={faXmark}/>
                    </span>
                            </button>
                        </div>
                        <div className="relative p-6 flex-auto bg-light-4">
                            <ReactMarkdown>
                                {props.content}
                            </ReactMarkdown>

                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : null}
</>
}

export default ProjectsCard