// pages/_document.js
import Script from "next/script";
import { Html, Head, Main, NextScript,  } from 'next/document'

export default function Document() {


  return (
      <Html>
        <Head>
          <link rel="icon" type="image/svg+xml" href="/code-solid.svg"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>

          <link
              href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Roboto+Condensed:wght@700&family=Trispace:wght@300&display=swap"
              rel="stylesheet"/>
          <Script type="text/javascript" src="/static/script.js"></Script>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
  )
}
