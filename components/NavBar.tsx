import Link from "next/link";
import React from "react";
import {useRouter} from "next/router";


const NavLinkWrapper = (props: {text:string,path:string}) => {
  const router = useRouter()
  const isActive = () => {
    return router.pathname.includes(props.path) || (props.path === "/#" && router.pathname  === "/")
  }
  return <Link href={props.path}>
      <a className={"transition-all border-solid hover:scale-110  duration-50 border-black dark:border-dark-4 focus:border-b-2 motion-reduce:transition-none ease-in-out" + (isActive() ? "border-solid border-b-2 border-black  hover:scale-150" : "")}>
     {props.text}
    </a>
    </Link>

}

const NavBar = () => {

  return <nav className="flex lg:text-xl justify-center gap-4 list-none ">
      <NavLinkWrapper path={"/#"} text={"About Me"}/>
      <NavLinkWrapper path="/projects" text={"Projects"}/>
      <NavLinkWrapper path="/blogposts" text={"Blog"}/>
  </nav>
}

export default NavBar;