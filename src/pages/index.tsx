import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "@/components";

const Home: NextPage = () => {
  return (
    <div className="content flex flex-col justify-start">
      <Head>
        <title>Chic Vision</title>
        <meta name="description" content="Chic Vision - Page Principale" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World</h1>
      <Button type="orange-primary">Click Me</Button>
      <Button type="orange-secondary">Click Me</Button>
      <Button type="dark-primary">Click Me</Button>
      <Button type="dark-secondary">Click Me</Button>
      <input
        type="text"
        name="search"
        className="cv-input header-search"
        placeholder="Rechercher"
      />
      <input
        type="text"
        name="search"
        className="cv-input search"
        placeholder="Rechercher"
      />
    </div>
  );
};

export default Home;
