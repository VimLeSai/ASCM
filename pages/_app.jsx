import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#14293f" />
        <meta name="apple-mobile-web-app-title" content="muda-management" />
        <meta name="application-name" content="muda-management" />
        <meta name="msapplication-TileColor" content="#14293f" />
        <meta name="theme-color" content="#14293f" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
