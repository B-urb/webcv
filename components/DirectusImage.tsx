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
             fill
             objectFit= "contain"
             style={{
               marginTop: 0,
              marginBottom: 0
      }}
             sizes={"(max-width: 768px) 70vw, 10vw (max-width: 1200px) 70vw, 40vw, 10vw"}
      />
  )
}


export default DirectusImage