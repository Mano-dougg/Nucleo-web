import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PostCard } from "@/components/PostCard";
import { RichText } from "@/components/RichText";

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
  const authorPage = await client
    .getByUID("authorpage", params.uid)
    .catch(() => notFound());

  const author = await client.getByUID("author", params.uid).catch(() => notFound());

  return {
    title: author.data.name || authorPage.data.meta_title || undefined,
    description: authorPage.data.meta_description,
    openGraph: {
      title: authorPage.data.meta_title || undefined,
      images: [
        {
          url: authorPage.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();

  // Fetch the current author post page being displayed by the UID of the page
  const authorPage = await client
    .getByUID("authorpage", params.uid)
    .catch(() => notFound());

  const author = await client.getByUID("author", params.uid).catch(() => notFound());

  /**
   * Fetch all of the blog posts in Prismic by the author and ordered by publication date.
   *
   * We use this data to display our "recommended posts" section at the end of the author page
   */
  const posts = await client.getAllByType("blog_post", {
    predicates: [ prismic.filter.at("my.blog_post.author", author.id) ],
    orderings: [
      { field: "my.blog_post.publication_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
    limit: 5,
  });

  // Destructure out the content of the current page
  const { slices, summary, description } = authorPage.data;
  const { avatar, name, networks } = author.data;

  return (
    <>
      <section className="flex flex-col md:flex-row items-center">
        <PrismicNextImage
          field={avatar}
          sizes="100vw"
          className="size-full max-w-[20vw] max-h-full rounded-full mr-4 object-cover"
        />
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="flex flex-col gap-6 items-center">
            <h1
              className={`text-center font-bold mb-8 text-4xl sm:text-6xl text-green-950 dark:text-foreground`}
            >
              {name}
            </h1>
            <RichText field={summary} />
            <ul className="flex items-center gap-x-4">
              {networks.map(({ url, icon }) => (
                <li key={crypto.randomUUID()}>
                  <PrismicNextLink field={url}>
                    <PrismicNextImage
                      field={icon}
                      max-h="50"
                      max-w="50"
                      imgixParams={{ ar: "1:1", fit: "crop" }}
                    />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
          <RichText field={description} />

      {/* Display the content of the AuthorPage */}
      <SliceZone slices={slices} components={components} />

      {/* Display the Recommended Posts section using the posts we requested earlier */}
      <h2 className="font-bold text-3xl">More by the author</h2>
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
   * Query all Author pages.
   */
  const authorPages = await client.getAllByType("authorpage");

  /**
   * Define a path for every Document.
   */
  return authorPages.map((page) => {
    return { uid: page.uid };
  });
}