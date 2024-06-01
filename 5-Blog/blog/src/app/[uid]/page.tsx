'use server'

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { BlogPostDocument } from "../../../prismicio-types";
import PostCard from "@/components/post-card/post-card";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("post_category", params.uid)
    .catch(() => notFound());

  const posts = await client.getAllByType("blog_post");
  const postList = posts
    .map(({ data, uid }:BlogPostDocument<string>)=>(
      <PostCard title={data.title} post_image={data.post_image} 
      paragraph={data.paragraph} autor={data.autor} 
      category={data.category} uid={parseInt(uid, 10)} 
      key={uid} />
    ))

  return (
  <section className="flex flex-col items-center w-screen">
    <SliceZone slices={page.data.slices} components={components} />
    {postList}
  </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("post_category", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("post_category");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
