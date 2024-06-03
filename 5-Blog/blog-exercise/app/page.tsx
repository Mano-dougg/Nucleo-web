import { Metadata } from "next";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <main
      className={`p-[100px_16px_103px] sm:p-[141px_32px_148px] flex flex-col gap-y-4 md:gap-x-8 items-center max-w-[95vw] mx-auto`}
    >
      <PrismicRichText
        field={page.data.main_section_header}
        components={{
          heading1: ({ children }) => (
            <h1
              className={`text-center font-bold mb-8 text-4xl sm:text-6xl text-green-950 dark:text-foreground`}
            >
              {children}
            </h1>
          ),
        }}
      />
      <SliceZone slices={page.data.slices} components={components} />
    </main>
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
