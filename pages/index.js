import Head from "next/head";
import IndexComponent from "@/components/IndexComponent/IndexComponent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Index() {
  return (
    <>
      <Head>
        <title>Title</title>
      </Head>
      <IndexComponent />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Index;
