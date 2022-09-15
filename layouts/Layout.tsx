import ProfileImage from "../components/ProfileImage";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import React, {ReactNode, useEffect} from "react";
import LightDarkSwitch from "../components/LightDarkSwitch";



export default function Layout(props:{children: ReactNode}) {

  return (
        <div
            className="min-h-screen grid auto-rows-auto
            bg-gradient-to-br from-light-1 to-light-2 dark:bg-gradient-to-b
            dark:from-gray-800 dark:to-black dark:bg-dark-1
            text-black font-jetbrains dark:text-yellow-300">
            <div className="grid auto-rows-auto border-b-4 font-roboto border-dashed border-black dark:border-yellow-300">
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
                {props.children}
              </div>
            </main>
              <Footer/>
          </div>

  )
}
