// pages/_document.js
import Script from "next/script";
import { Html, Head, Main, NextScript,  } from 'next/document'

export default function Document() {


  return (
      <Html lang={"en"}>
        <Head>
          <link rel="icon" type="image/svg+xml" href="/code-solid.svg"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
          <Script type="text/javascript" src="/static/script.js" strategy={"beforeInteractive"}></Script>
          <Script  defer={false} strategy={"beforeInteractive"} data-website-id="bc8f0a5f-a0ef-4aef-bc32-0d94447f7a2e" src="https://stats.burban.me/umami.js"/>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
  )
}
