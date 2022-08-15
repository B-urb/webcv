import './App.css'
import './Header'
import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";
import React from "react";
import LightDarkSwitch from "./LightDarkSwitch";
import NavBar from "./NavBar";
import ProfileImage from "./ProfileImage";

const Layout = () => {
  return (
        <div
            className="min-h-screen grid auto-rows-auto bg-light1 text-black dark:bg-dark-1 font-jetbrains dark:text-yellow-300">
            <div className="dark:bg-gradient-to-b dark:from-gray-800 dark:to-black grid auto-rows-auto border-b-4 font-roboto border-dashed border-black dark:border-yellow-300">
              <div
                  className="row-span-1 text-md text-center md:text-3xl">
                <div className="row-span-1 grid grid-cols-4 justify-start mt-4">
                <div/>
                <Header/>
                <LightDarkSwitch/>
                </div>
                <div className="row-span-1 flex justify-center">
                  <ProfileImage/>
                </div>
              </div>
              <div className="row-span-1 text-center items-center flex-col self-end">
                <NavBar/>
              </div>
            </div>
            <main className="min-h-[70vh]">
              <div className="mt-4">
                <Outlet/>
              </div>
            </main>
              <Footer/>
          </div>

  )
}

export default Layout;
