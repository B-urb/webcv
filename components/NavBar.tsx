'use client'
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";


const NavLinkWrapper = (props: {text:string,path:string}) => {
  const pathname = usePathname()
  const isActive = () => {
    return pathname.includes(props.path) || (props.path === "/#" && pathname  === "/")
  }
  return <Link href={props.path} className={"transition-all border-solid hover:scale-110  duration-50 border-black dark:border-dark-4 focus:border-b-2 motion-reduce:transition-none ease-in-out" + (isActive() ? "border-solid border-b-2 border-accent  hover:scale-150" : "")}>
     {props.text}
    </Link>

}

const NavBar = () => {

  return <nav className="flex lg:text-4xl text-accent  justify-center gap-4 list-none ">
      <NavLinkWrapper path={"/#"} text={"About Me"}/>
      <NavLinkWrapper path="/projects" text={"Projects"}/>
      <NavLinkWrapper path="/blogposts" text={"Blog"}/>
  </nav>
}

export default NavBar;