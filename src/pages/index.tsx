import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "@/components";
import { SearchBanner } from "@/components/home";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chic Vision</title>
        <meta name="description" content="Chic Vision - Page Principale" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper flex flex-col justify-start padding-x">
        <SearchBanner />
      </div>
    </div>
  );
};

export default Home;
