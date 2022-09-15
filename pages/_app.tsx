import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../layouts/Layout";
import UiProvider from "../lib/ui-context"
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return   <UiProvider>
    <Layout>
    <Component {...pageProps}/>
  </Layout></UiProvider>
}

export default MyApp
