'use client';

import type { ImageLoaderProps } from 'next/image';
import Image from 'next/image';
import React from 'react';

// FIXME: Check conversion to client component
const directusLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://cms.burban.me/assets/${src}?width=${width}&quality=${quality || 75}`;
};

const DirectusImage = (props: { src: string; alt: string }) => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      loader={directusLoader}
      fill
      sizes="(max-width: 768px) 70vw, 10vw (max-width: 1200px) 70vw, 40vw, 10vw"
    />
  );
};

export default DirectusImage;
