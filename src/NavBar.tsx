import {NavLink} from "react-router-dom";
import React from "react";


const NavLinkWrapper = (props: {text:string,path:string}) => {
  return <li className="p-4">
    <NavLink className={({ isActive }) => isActive ? "underline" : undefined} to={props.path}>{props.text}
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