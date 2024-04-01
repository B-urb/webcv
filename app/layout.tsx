import "../styles/globals.css";
import "devicon/devicon.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import localFont from "next/font/local";
import Script from "next/script";
import type { ReactNode } from "react";
import React from "react";

import Footer from "../components/Footer";
import NavBar2 from "../components/NavBar2";

config.autoAddCss = false;

// const barlow = localFont({
//   src: [
//     {
//       path: '../public/fonts/barlow-condensed-v12-latin-300.ttf',
//       weight: '300',
//     },
//   ],
//   variable: '--font-barlow',
// });
const roboto = localFont({
  src: [
    {
      path: "../public/fonts/roboto-condensed-v25-latin-700.ttf",
      weight: "700",
    },
  ],
  variable: "--font-roboto",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${roboto.variable} dark`}>
      <body className="bg-background">
        <div
          className="grid size-full auto-rows-auto
          font-barlow dark:bg-background dark:text-text"
        >
          <div className="grid auto-rows-auto gap-y-10 border-solid border-text font-roboto">
            <div className="text-md row-span-1 text-center md:text-3xl">
              <NavBar2 />
            </div>
            <main className="grow font-barlow scrollbar-none">{children}</main>
            <Footer />
          </div>
        </div>
        <Script
          strategy="beforeInteractive"
          data-website-id={process.env.NEXT_PUBLIC_ANALYTICS_ID}
          src="https://stats.burban.me/script.js"
        />
      </body>
    </html>
  );
}
