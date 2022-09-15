import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../layouts/Layout";
import UiProvider from "../lib/ui-context"

function MyApp({ Component, pageProps }: AppProps) {
  return   <UiProvider
  ><Layout>
    <Component {...pageProps}/>
  </Layout></UiProvider>
}

export default MyApp
