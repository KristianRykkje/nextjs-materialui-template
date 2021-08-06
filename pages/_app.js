import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "@/components/Header/Header";

function MyApp({ Component, pageProps }) {
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
