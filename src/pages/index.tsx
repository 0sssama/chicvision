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
      <div
        className="content flex flex-col justify-start"
        style={{ width: "100%" }}
      >
        <h1>
          Hello World, <a href="#">link!</a>
        </h1>
        <Button type="orange-primary">Click Me</Button>
        <Button type="orange-secondary">Click Me</Button>
        <Button type="dark-primary">Click Me</Button>
        <Button type="dark-secondary">Click Me</Button>
        <Input type="header-search" name="search" placeholder="Rechercher" />
        <Input type="main-search" name="search" placeholder="Rechercher" />
        <Input type="textarea" name="content" placeholder="Type your story!" />
        <Input type="email" name="email" placeholder="john@doe.com" />
      </div>
    </div>
  );
};

export default Home;
