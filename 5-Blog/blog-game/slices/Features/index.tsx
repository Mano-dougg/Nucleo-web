import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "../../components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import Heading from "../../components/Heading";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="lg" className="text-left font-bold mb-2">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="text-left  mb-1">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="font-display text-black text-md text-left">{children}</p>
  )};

  
/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components} field={slice.primary.heading} />

      <div className="flex flex-col lg:flex-row gap-4">
        {slice.primary.post.map((item,index) => (
          <div key={index} className="flex flex-col p-10 max-w-96 border gap-4 rounded-3xl">
            <PrismicNextImage className="rounded-3xl max-h-48 max-w-92 object-cover object-center" field={item.post} />
            <div className="bg-blue-500 rounded-full p-2 w-fit">{item.post_tag}</div>
              <PrismicRichText components={components} field={item.post_title} />
              <PrismicRichText components={components} field={item.post_description} />
                <div className="flex items-center flex-row max-h-[25%] justify-between max-w-full mt-auto">
                  <PrismicNextImage className="w-10 h-10 rounded-full" field={item.userphoto} />
                  <PrismicRichText components={components} field={item.username} />
                  <>{item.date}</>
                </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Features;
