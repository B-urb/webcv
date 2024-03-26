"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinkWrapper = (props: { text: string; path: string }) => {
  const pathname = usePathname();
  const isActive = () => {
    return (
      pathname.includes(props.path) || (props.path === "/#" && pathname === "/")
    );
  };
  return (
    <Link
      href={props.path}
      className={`duration-50 dark:border-dark-4 border-solid  border-black transition-all ease-in-out hover:scale-110 focus:border-b-2 motion-reduce:transition-none${
        isActive()
          ? "border-b-2 border-solid border-accent  hover:scale-150"
          : ""
      }`}
    >
      {props.text}
    </Link>
  );
};

const NavBar = () => {
  return (
    <nav className="flex list-none justify-center  gap-4 text-accent lg:text-4xl ">
      <NavLinkWrapper path="/#" text="About Me" />
      <NavLinkWrapper path="/projects" text="Projects" />
      <NavLinkWrapper path="/blog" text="Blog" />
    </nav>
  );
};

export default NavBar;
