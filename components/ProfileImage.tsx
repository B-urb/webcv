'use client'
import Image, {ImageLoaderProps} from "next/image";
import React from "react";


const directusLoader = ({src, width, quality}: ImageLoaderProps) => {
  return `https://cms.tecios.de/assets/${src}?width=${width}&quality=${quality || 76}`
}

const ProfileImage = () => {
  const image_uuid = "218814ac-b04e-4156-9be9-3770ff825a70"
  return (
      <div className="relative rounded-full w-36 h-36 lg:h-56 overflow-hidden lg:w-56 border-4 border-accent dark:border-accent">
        <Image
            src={image_uuid}
            alt={"Profile Picture"}
            loader={directusLoader}
            sizes="(max-width: 769px) 30vw, (max-width: 1200px) 50vw"
            fill/>
      </div>
  )


}

export default ProfileImage;