// pages/_document.js
import Script from "next/script";
import { Html, Head, Main, NextScript,  } from 'next/document'

export default function Document() {


  return (
      <Html>
        <Head>
          <link rel="icon" type="image/svg+xml" href="/code-solid.svg"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
          <Script type="text/javascript" src="/static/script.js" strategy={"beforeInteractive"}></Script>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
  )
}
