import type { NextPage } from "next";
import Head from "next/head";
import { Button, Input, Header } from "@/components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chic Vision</title>
        <meta name="description" content="Chic Vision - Page Principale" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="wrapper flex flex-col justify-start padding-x">
        <Input
          type="text"
          HTMLtype="text"
          placeholder="Your name here..."
          required={true}
          name="name"
          label="Your name:"
        />
      </div>
    </div>
  );
};

export default Home;
