import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { BlogPostDocument } from "../../prismicio-types";
import PostCard from "@/components/post-card/post-card";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  const posts = await client.getAllByType("blog_post");
  const postList = posts
    .reverse()
    .map(({ data, uid }:BlogPostDocument<string>)=>(
      <PostCard title={data.title} post_image={data.post_image} paragraph={data.paragraph} autor={data.autor} category={data.category} uid={parseInt(uid, 10)} key={uid} />
    ))


  return (
  <section className="flex flex-col items-center w-screen">
    <SliceZone slices={page.data.slices} components={components} />
    <div className="flex flex-col items-center w-full
     md:flex-row md:items-start md:justify-evenly md:flex-wrap 
     xl:px-[5%]">
    {postList}
    </div>
  </section>
);
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
