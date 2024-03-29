'use client'
import MetaTag from "./MetaTag";
import ReactMarkdown from "react-markdown";
import React from "react";
import Link from "next/link";


const ProjectsCard = (props: {id: number, name: string, content: string, tags: Array<string|undefined>}) => {

    return <Link href={"projects/"+props.id!.toString()}>
        <div className=" hover:cursor-pointer md:hover:scale-105 xl:w-96 transition-all duration-300 shadow-black h-full self-stretch rounded-md m-4">
        <div className="p-3 rounded-md bg-primary text-black dark:text-text dark:bg-secondary divide-y h-full divide-white divide-dotted grid text-xs md:text-md"
        >
            <div className="row-span-auto">
                <h2 className="font-roboto text-xl md:text-2xl">{props.name}</h2></div>
            <div onClick={(e)=> e.stopPropagation()} className="row-auto text-base h-44 font-barlow md:h-36 cursor-default overflow-hidden prose-a:underline">
                <ReactMarkdown className="text-xl md:text-xl line-clamp-6">
                {props.content}
            </ReactMarkdown>
            </div>
            <div className="row-auto pt-2 flex flex-wrap justify-start justify-items-start gap-2">{
                props.tags.map((tag,key) => {
                        if(tag!== undefined)
                        return <MetaTag key={key} tag={tag}/>
                    }
                )}
                </div>
    </div>
    </div>
    </Link>
}

export default ProjectsCard