import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "../../components/Bounded";
import Heading from "../../components/Heading";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="lg" className="text-left font-bold mx-4 my-6">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="font-display text-black text-md text-left mx-4 my-6">{children}</p>
  )
};


/**
 * Props for `News`.
 */
export type NewsProps = SliceComponentProps<Content.NewsSlice>;

/**
 * Component for "News" Slices.
 */
const News = ({ slice }: NewsProps): JSX.Element => {
  return (
    <Bounded className="p-10 mx-auto max-w-4xl flex flex-col mt-10 rounded-t-3xl bg-white"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components} field={slice.primary.heading} />
      <PrismicNextImage className=" rounded-2xl mx-auto max-w-full mb-6" field={slice.primary.news_face} />
      <PrismicRichText components={components} field={slice.primary.news_title} />
      <PrismicRichText components={components} field={slice.primary.paragraph} />
      <PrismicRichText components={components} field={slice.primary.another_news_title} />
      <PrismicRichText components={components} field={slice.primary.another_paragraph} />
      <div className="flex flex-row justify-between mx-2 mt-4">
        <div className="flex flex-row justify-center items-center gap-2 mb-5">
          <PrismicNextImage className="w-8 h-8 rounded-full" field={slice.primary.userphoto} />
          <PrismicRichText components={components} field={slice.primary.username} />
        </div>
        <div className="flex items-center">{slice.primary.date}</div>
      </div>
    </Bounded>
  );
};

export default News;
