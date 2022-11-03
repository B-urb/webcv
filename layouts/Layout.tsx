import ProfileImage from "../components/ProfileImage";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import React, {ReactNode, useEffect} from "react";
import LightDarkSwitch from "../components/LightDarkSwitch";


export default function Layout(props: { children: ReactNode }) {

  return (
      <div
          className="h-full grid auto-rows-auto
            dark:text-dark-4 dark:bg-dark-1 font-barlow dark:-z-40 dark:">
        <div className="fixed flex m-auto w-full h-full dark:bg-moon opacity-30 bg-no-repeat bg-contain bg-center bg-fixed"></div>
        <div className="-z-0">
        <div className="grid font-roboto auto-rows-auto border-solid border-black dark:border-dark-4 ">
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
        <main className="min-h-[70vh] ">
          <div className="mt-4">
            {props.children}
          </div>
        </main>
        <Footer/>
      </div>
      </div>
  )
}

