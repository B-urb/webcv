import {NavLink} from "react-router-dom";
import React from "react";


const NavLinkWrapper = (props: {text:string,path:string}) => {
  return <li className=" p-6 md:p-4 transition-all hover:scale-150">
    <NavLink className={"transition-all border-b-0 border-black dark:border-yellow-300 focus:border-b-2 motion-reduce:transition-none ease-in-out"} end to={props.path}>{props.text}
    </NavLink>
  </li>
}

const NavBar = () => {
  return <nav className="flex lg:text-xl justify-center ">
    <ul className="flex justify-around ">
      <NavLinkWrapper text={"About Me"} path={"/"}/>
      <NavLinkWrapper path="projects" text={"Projects"}/>
      <NavLinkWrapper path="blogposts" text={"Blog"}/>
    </ul>
  </nav>
}

export default NavBar;