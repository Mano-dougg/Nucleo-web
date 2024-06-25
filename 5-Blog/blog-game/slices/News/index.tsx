import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "../../components/Bounded";
import Heading from "../../components/Heading";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="lg" className="text-left font-bold mx-4 my-6 text-black">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="font-display text-md text-left mx-4 my-6 text-black">{children}</p>
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
    <Bounded className="w-[85%] md:w-[75%] lg:w-[50%] p-10 mx-auto  flex flex-col mt-10 rounded-t-3xl bg-white"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components} field={slice.primary.heading} />
      <PrismicNextImage className=" rounded-2xl mx-auto max-w-[90%] mb-6" field={slice.primary.news_face} />
      <PrismicRichText components={components} field={slice.primary.news_title} />
      <PrismicRichText components={components} field={slice.primary.paragraph} />
      <PrismicRichText components={components} field={slice.primary.another_news_title} />
      <PrismicRichText components={components} field={slice.primary.another_paragraph} />
      <div className="flex-cloumn md:flex flex-row justify-between mx-2 mt-4">
        <div className="flex flex-row justify-center items-center gap-2">
          <PrismicNextImage className="w-8 h-8 rounded-full" field={slice.primary.userphoto} />
          <PrismicRichText components={components} field={slice.primary.username} />
        </div>
        <div className="mb-2 flex justify-center md:flex items-center text-black">{slice.primary.date}</div>
      </div>
    </Bounded>
  );
};

export default News;
