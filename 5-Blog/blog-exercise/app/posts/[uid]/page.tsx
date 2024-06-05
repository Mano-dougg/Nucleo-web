import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { PostCard } from "@/components/PostCard";
import { RichText } from "@/components/RichText";
import { AuthorInfo } from "@/components/AuthorInfo";

type Params = { uid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  return {
    title: prismic.asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();

  // Fetch the current blog post page being displayed by the UID of the page
  const page = await client
    .getByUID(
      "blog_post",
      params.uid,
      {
      graphQuery: `{
        blog_post {
          ...blog_postFields
          author {
            ...on author {
              name
              avatar
            }
          }
        }
      }`
    }
  ).catch(() => notFound());
  const authorData = page.data.author as Record<string, any>;
  const author = await client.getByUID("author", authorData.uid).catch(() => notFound());

  const authorPage = await client.getByUID("authorpage", authorData.uid).catch(() => notFound());

  /**
   * Fetch all of the blog posts in Prismic (max 2), excluding the current one, and ordered by publication date.
   *
   * We use this data to display our "recommended posts" section at the end of the blog post
   */
  const posts = await client.getAllByType("blog_post", {
    predicates: [ prismic.filter.not("my.blog_post.uid", params.uid) ],
    orderings: [
      { field: "my.blog_post.publication_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
    limit: 2,
  });

  // Destructure out the content of the current page
  const { slices, title, publication_date, summary, featured_image } =
    page.data;

  return (
    <>
      {/* Display the "hero" section of the blog post */}
      <section className="flex flex-col md:flex-row items-center">
        <PrismicNextImage
          field={featured_image}
          sizes="100vw"
          className="size-full max-w-[20vw] max-h-full rounded-lg mr-4 object-cover"
        />
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="flex flex-col gap-6 items-center">
            <p className="opacity-75 border-b-2 w-min pb-1">
              {new Date(publication_date || "").toLocaleDateString("pt-BR")}
            </p>
            <div className="text-center">
              <RichText field={title} />
            </div>
          </div>
          <div className="text-center">
            <RichText field={summary} />
          </div>
        </div>
      </section>

      {/* Display the content of the blog post */}
      <SliceZone slices={slices} components={components} />

      <AuthorInfo author={author} authorPage={authorPage} date={publication_date} />

      {/* Display the Recommended Posts section using the posts we requested earlier */}
      <h2 className="font-bold text-3xl">Recommended Posts</h2>
      <section className="grid grid-cols-1 gap-8 max-w-3xl w-full">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("blog_post");

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid };
  });
}