'use client';

import Link from 'next/link';
import React from 'react';
import Markdown from 'react-markdown';

import MetaTag from './MetaTag';

const ProjectsCard = (props: {
  id: number;
  name: string;
  content: string;
  tags: Array<string | undefined>;
}) => {
  return (
    <Link href={`projects/${props.id!.toString()}`}>
      <div className=" m-4 h-full self-stretch rounded-md shadow-black transition-all duration-300 hover:cursor-pointer md:hover:scale-105 xl:w-96">
        <div className="md:text-md grid h-full divide-y divide-dotted divide-white rounded-md bg-primary p-3 text-xs text-black dark:bg-secondary dark:text-text">
          <div className="row-span-auto">
            <h2 className="font-roboto text-xl md:text-2xl">{props.name}</h2>
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="row-auto h-44 cursor-default overflow-hidden font-barlow text-base prose-a:underline md:h-36"
          >
            <Markdown className="line-clamp-6 text-xl md:text-xl">
              {props.content}
            </Markdown>
          </div>
          <div className="row-auto flex flex-wrap justify-start justify-items-start gap-2 pt-2">
            {props.tags.map((tag, key) => {
              if (tag !== undefined) return <MetaTag key={key} tag={tag} />;
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsCard;
