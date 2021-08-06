import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "@/components/Header/Header";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CssBaseline />
      <>
        <Header />
        <Component {...pageProps} />
      </>
    </>
  );
}

export default appWithTranslation(MyApp);
