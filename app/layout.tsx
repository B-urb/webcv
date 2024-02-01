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
import NavBar2 from "../components/NavBar2";

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
      <body className="bg-background">
      <div
          className="h-full grid auto-rows-auto
          w-full dark:text-text dark:bg-background font-barlow">
        <div className="grid font-roboto auto-rows-auto border-solid border-text">
          <div className="row-span-1 text-md text-center md:text-3xl">
              <NavBar2/>
          </div>
            <div className="row-span-1 mt-4 flex justify-center">
              <ProfileImage/>
            </div>
        <main className="overflow-y-auto scrollbar-none lg:overflow-y-hidden xl:min-h-[70vh] font-barlow ">
            {children}
        </main>
        <Footer/>
      </div>
      </div>
      <Script strategy="beforeInteractive" data-website-id={process.env.NEXT_PUBLIC_ANALYTICS_ID} src="https://stats.tecios.de/script.js"/>
      </body>
      </html>
  )
}

