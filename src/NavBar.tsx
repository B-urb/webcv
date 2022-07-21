import {NavLink} from "react-router-dom";
import React from "react";


const NavLinkWrapper = (props: {text:string,path:string}) => {
  return <li className="p-6 md:p-4 bor-bo">
    <NavLink className={({ isActive }) => isActive ? "underline transition-all ease" : undefined} to={props.path}>{props.text}
    </NavLink>
  </li>
}

const NavBar = () => {
  return <nav className="flex justify-center">
    <ul className="flex justify-around">
      <NavLinkWrapper text={"About Me"} path={"/"}/>
      <NavLinkWrapper path="projects" text={"Projects"}/>
      <NavLinkWrapper path="blogposts" text={"Blog"}/>
    </ul>
  </nav>
}

export default NavBar;