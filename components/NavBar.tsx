import Link from "next/link";
import React, {useState} from "react";


const NavLinkWrapper = (props: {text:string,path:string, active: Boolean, activate: Function, index: number}) => {
  return <li onClick={() => props.activate(props.index)} className={"p-6 md:p-4 transition-all hover:scale-150" + (props.active ? "border-b-2 border-solid border-black" : "") }>
    <Link className={"transition-all border-solid border-black dark:border-yellow-300 border-b-2 motion-reduce:transition-none ease-in-out"}  href={props.path}>{props.text}
    </Link>
  </li>
}

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleChange = (index: number) => {
    setActiveLink(index)
  }
  return <nav className="flex lg:text-xl justify-center ">
    <ul className="flex justify-around ">
      <NavLinkWrapper active={activeLink === 0} index={0} activate={handleChange} path={"/"} text={"About Me"}/>
      <NavLinkWrapper active={activeLink === 1} index={1} activate={handleChange} path="/projects" text={"Projects"}/>
      <NavLinkWrapper active={activeLink === 2} index={2} activate={handleChange} path="/blogposts" text={"Blog"}/>
    </ul>
  </nav>
}

export default NavBar;