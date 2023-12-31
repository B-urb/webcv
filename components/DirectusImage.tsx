'use client'
import Image, {ImageLoaderProps} from "next/image";
import React from "react";

//FIXME: Check conversion to client component
const directusLoader = ({src, width, quality}: ImageLoaderProps) => {
  return `https://cms.tecios.de/assets/${src}?width=${width}&quality=${quality || 75}`
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