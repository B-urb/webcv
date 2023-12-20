import MetaTag from "./MetaTag";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTags, faClock} from "@fortawesome/free-solid-svg-icons";


const BlogMeta = (props: {tags: string[], date:string}) => {
  const dateOptions: Intl.DateTimeFormatOptions = { year: "numeric", month: 'long', day: '2-digit' };
  return <div className="grid grid-cols-6 border-2 border-accent border-opacity-50 p-2 gap-4">
      <FontAwesomeIcon className="col-span-1 self-center justify-self-center" icon={faClock}/>
   <span className="text-xs col-span-5">{new Date(props.date).toLocaleDateString("de-DE", dateOptions)}</span>
        <FontAwesomeIcon className="col-span-1 self-center justify-self-center" icon={faTags}/>
  <div className="col-span-5 pt-2 flex flex-wrap justify-start justify-items-start gap-2">
    {props.tags.map((tag, key) => tag && <MetaTag key={key} tag={tag} />)}
  </div>
 </div>
}

export default BlogMeta