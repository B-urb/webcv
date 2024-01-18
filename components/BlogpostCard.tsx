'use client'
import React from "react";
import DirectusImage from "./DirectusImage";
import MetaTag from "./MetaTag";

interface BlogpostCardProps {
  name: string;
  thumbnail?: string;
  abstract: string;
  date: string;
  tags: Array<string>;
}

const BlogpostCard: React.FC<BlogpostCardProps> = ({ name, thumbnail, abstract, date, tags }) => {
  const dateOptions: Intl.DateTimeFormatOptions = { year: "numeric", month: 'long', day: '2-digit' };

  return (
      <div className="hover:cursor-pointer md:hover:scale-105 w-96 transition-all duration-300 shadow-black h-full self-stretch rounded-md m-4">
        <div className="p-3 rounded-md bg-secondary text-black dark:text-white dark:bg-secondary divide-y h-full divide-white divide-dotted grid text-xs md:text-md">
          <div className="flex justify-center">
            <div className="relative w-52 h-52 2xl:w-80 2xl:h-80">
              <DirectusImage src={thumbnail ?? ""} alt="test" />
            </div>
          </div>
          <div className="row-span-auto">
            <h2 className="font-roboto text-xl h-24 md:text-2xl">{name}</h2>
          </div>
          <div onClick={(e) => e.stopPropagation()} className="row-auto text-base h-44 font-barlow md:h-36 cursor-default prose-a:underline">
            <span className="text-xs">{new Date(date).toLocaleDateString("de-DE", dateOptions)}</span>
            <div className="row-auto pt-2 flex flex-wrap justify-start justify-items-start gap-2">
              {tags.map((tag, key) => tag && <MetaTag key={key} tag={tag} />)}
            </div>
          </div>
        </div>
      </div>
  );
};

export default BlogpostCard;
