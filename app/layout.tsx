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
import Script from "next/script";
import localFont from "next/font/local";

const barlow = localFont({
  src: [
    {
      path: '../public/fonts/barlow-condensed-v12-latin-300.ttf',
      weight: '300'
    },
  ],
  variable: '--font-barlow'
})
const roboto = localFont({
  src: [

    {
      path: '../public/fonts/roboto-condensed-v25-latin-700.ttf',
      weight: '700'
    }
  ],
  variable: '--font-roboto'
})

export default function Layout({ children} :{ children: ReactNode }) {

  return (
      <html lang="en" className={`${roboto.variable} ${roboto.variable} dark`}>
      <body>
      <div
          className="h-full grid auto-rows-auto
            dark:text-text dark:bg-background font-barlow dark:-z-40 dark:">
        <div className="-z-0">
        <div className="grid font-roboto auto-rows-auto border-solid border-text dark:border-dark-4 ">
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
        <main className="min-h-[70vh] overflow-y-scroll font-barlow ">
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

