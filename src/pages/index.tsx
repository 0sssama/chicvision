import type { NextPage } from "next";
import Head from "next/head";
import { SearchBanner } from "@/components/home";
import { GridLayout, Brand, Footer } from "@/components";
import { useState } from "react";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import { server } from "@/config";
import { brandType } from "@/interfaces";

const Home: NextPage = ({
  brands,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // search input
  const [search, setSearch] = useState("");

  return (
    <div className="w-full">
      <Head>
        <title>Chic Vision</title>
        <meta name="description" content="Chic Vision - Page Principale" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper flex flex-col justify-start padding-x">
        <SearchBanner search={search} setSearch={setSearch} />
        <GridLayout>
          {brands.map((brand: brandType, i: number) => (
            <Brand data={brand} key={i} />
          ))}
        </GridLayout>
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${server}/api/brands`);

  const brands = await response.json();

  return {
    props: {
      brands: await brands,
    },
  };
};

export default Home;
