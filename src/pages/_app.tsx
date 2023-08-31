import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";

import ThemeProvider from "../components/layout/ThemeProvider";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FigmaLand - business made just for you!</title>
        <meta
          name="description"
          content="On FigmaLand you can find the exact thing you'be been waiting for your whole life"
        />
      </Head>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
