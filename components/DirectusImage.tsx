import Image, {ImageLoaderProps} from "next/future/image";
import React from "react";


const directusLoader = ({src, width, quality}: ImageLoaderProps) => {
  return `https://cms.burban.me/assets/${src}?width=${width}&quality=${quality || 75}`
}

const DirectusImage = (props: { src: string, alt: string }) => {
  return (
      <Image src={props.src}
             alt={props.alt}
             loader={directusLoader}
             fill/>


  )
}


export default DirectusImage