"use client";

import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

import MetaTag from "./MetaTag";

const ProjectsCard = (props: {
  id: number;
  name: string;
  content: string;
  tags: Array<string | undefined>;
}) => {
  return (
    <Link href={`projects/${props.id!.toString()}`}>
      <div className="size-full self-stretch rounded-md shadow-black transition-all duration-300 hover:cursor-pointer md:w-96 md:hover:scale-105">
        <div className="md:text-md grid h-full divide-y divide-dotted divide-white rounded-md bg-primary p-3 text-xs text-black dark:bg-secondary dark:text-text">
          <div className="row-span-auto">
            <h2 className="font-roboto text-xl md:text-2xl">{props.name}</h2>
          </div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="row-auto h-44 cursor-default overflow-hidden font-barlow text-base prose-a:underline md:h-36"
          >
            <Markdown className="text-md line-clamp-6 xl:text-xl">
              {props.content}
            </Markdown>
          </div>
          <div className="row-auto flex flex-wrap justify-start justify-items-start gap-2 pt-2">
            {props.tags.map((tag) => {
              if (tag !== undefined) return <MetaTag key={tag} tag={tag} />;
              return null;
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsCard;
