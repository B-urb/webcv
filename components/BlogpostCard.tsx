import MetaTag from "./MetaTag";
import React, {useState} from "react";
import DirectusImage from "./DirectusImage";

const BlogpostCard = (props: {name: string, thumbnail: string, abstract: string, date: string, tags: Array<string|undefined>}) => {
  const dateOptions :Intl.DateTimeFormatOptions = {year: "numeric", month: 'long', day: '2-digit'};

  return <div className="hover:cursor-pointer md:hover:scale-105 w-96 transition-all duration-300 shadow-black h-full self-stretch rounded-md m-4">
    <div className=" p-3 rounded-md bg-light-4 text-black dark:text-white dark:bg-dark-2 divide-y h-full divide-white divide-dotted grid text-xs md:text-md" >
      <div className="flex justify-center">
      <div className="aspect-video relative w-1/2 ">
      <DirectusImage src={props.thumbnail} alt="test"/>
      </div>
      </div>
      <div className="row-span-auto">
        <h2 className="font-roboto text-xl md:text-2xl">{props.name}</h2></div>
      <div onClick={(e)=> e.stopPropagation()} className="row-auto text-base h-44  font-barlow md:h-36 cursor-default prose-a:underline">
        <span className="text-xs">{new Date(props.date!).toLocaleDateString("de-DE", dateOptions)}</span>
      <div className="row-auto pt-2 flex flex-wrap justify-start justify-items-start gap-2">{
        props.tags.map((tag,key) => {
              if(tag!== undefined)
                return <MetaTag key={key} tag={tag}/>
            }
        )}
      </div>
      </div>
    </div>
  </div>
}

export default BlogpostCard