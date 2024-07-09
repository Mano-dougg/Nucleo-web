import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import ProductsQueue from "@/components/products/ProductsQueue";
import PromotionQueue from "@/components/promotions/PromotionsQueue";

export default function Page({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name="description" content={page.data.meta_description} />
        ) : null}
      </Head>
      <Header />
      <main className="  flex flex-col items-center space-y-10 ">
        <SearchBar />
        <SliceZone slices={page.data.slices} components={components} />
        <ProductsQueue />
        <PromotionQueue />
      </main>
      <Footer />
    </>
  )};

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });
  const page = await client.getSingle("home");

  return {
    props: { page },
  };
}
