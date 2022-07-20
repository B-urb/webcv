import './App.css'
import './Header'
import Header from "./Header";
import Footer from "./Footer";
import {NavLink, Outlet} from "react-router-dom";
import React from "react";
import LightDarkSwitch from "./LightDarkSwitch";
const Layout = ()  => {
  return (<>
        <div className="h-screen overflow-scroll grid bg-yellow-300 text-black dark:bg-black font-jetbrains dark:text-yellow-300">
          <div className="row-span-1 border-b-4 border-dashed border-black dark:border-yellow-300">
            <div className="dark:bg-gradient-to-b dark:from-gray-800 dark:to-black  font-roboto self-stretch items-center justify-center text-center md:text-4xl">
              <Header/>
            <LightDarkSwitch/>
            </div>
            <nav className="p-1 m-1">
              <ul className="ml-auto flex items-center">
                <li className="inline-block m-3"><NavLink to="/">About Me</NavLink></li>
                <li className="inline-block m-3"><NavLink to="projects">Projects</NavLink></li>
                <li className="inline-block m-3"><NavLink to="blogposts">Blog</NavLink></li>
              </ul>
            </nav>
          </div>
          <main className="row-auto ">
            <Outlet/>
          </main>
          <div className=" row-span-1 flex justify-center items-center content-center justify-items-center ">
            <Footer/>
          </div>
        </div>
    </>
  )
}

export default Layout;
