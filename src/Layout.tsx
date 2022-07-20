import './App.css'
import './Header'
import Header from "./Header";
import Footer from "./Footer";
import { Outlet} from "react-router-dom";
import React from "react";
import LightDarkSwitch from "./LightDarkSwitch";
import NavBar from "./NavBar";
const Layout = ()  => {
  return (<>
        <div className="h-screen overflow-scroll grid grid-flow-row auto-rows-max bg-yellow-300 text-black dark:bg-black font-jetbrains dark:text-yellow-300">
          <div className="grid grid-rows-3 border-b-4 font-roboto border-dashed border-black dark:border-yellow-300">
            <div className="row-span-2 grid grid-cols-4 justify-between dark:bg-gradient-to-b dark:from-gray-800 dark:to-black items-center text-center md:text-4xl">
              <div/>
              <Header/>
              <LightDarkSwitch/>
            </div>
            <div className="row-span-1 text-center items-center">
              <NavBar/>
            </div>            </div>


          <main>
            <div className="mt-4">
            <Outlet/>
            </div>
          </main>
          <div className="row-end-auto flex justify-center">
            <Footer/>
          </div>
          </div>
    </>
  )
}

export default Layout;
