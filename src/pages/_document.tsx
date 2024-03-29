import { Html, Head, NextScript, Main } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" />
        <link rel="icon" type="image/png" href="./favicon.ico" />
        <meta name="theme-color" content="#2091F9" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
