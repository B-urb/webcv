import Link from "next/link";
import React from "react";
import {useRouter} from "next/router";


const NavLinkWrapper = (props: {text:string,path:string}) => {
  const router = useRouter()
  return <li className={"p-6 md:p-4 transition-all hover:scale-150" }>
    <Link href={props.path}>
      <a className={"transition-all border-solid border-black dark:border-yellow-300 focus:border-b-2 motion-reduce:transition-none ease-in-out" + (router.pathname == props.path ? "border-solid border-b-2 border-black" : "")}>
     {props.text}
    </a>
    </Link>
  </li>
}

const NavBar = () => {

  return <nav className="flex lg:text-xl justify-center ">
    <ul className="flex justify-around ">
      <NavLinkWrapper path={"/"} text={"About Me"}/>
      <NavLinkWrapper path="/projects" text={"Projects"}/>
      <NavLinkWrapper path="/blogposts" text={"Blog"}/>
    </ul>
  </nav>
}

export default NavBar;