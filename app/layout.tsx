import ProfileImage from "../components/ProfileImage";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import '../styles/globals.css'
import 'devicon/devicon.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import React, {ReactNode, } from "react";
import {Metadata} from "next";
import Script from "next/script";



export default function Layout({ children} :{ children: ReactNode }) {

  return (
      <html lang="en">
      <body>
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
            {children}
          </div>
        </main>
        <Footer/>
      </div>
      </div>
      <Script strategy="beforeInteractive" data-website-id={process.env.NEXT_PUBLIC_ANALYTICS_ID} src="https://stats.tecios.de/script.js"/>
      </body>
      </html>
  )
}

