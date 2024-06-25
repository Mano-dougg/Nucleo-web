import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "../../components/Bounded";
import Heading from "../../components/Heading";

const components: JSXMapSerializer ={
  heading1: ({ children }) => (
  <Heading 
      as="h1" 
      size="md" 
      className="mb-2 md:mb-4 mt-6 text-center first:mt-0 last:mb-0"
    >
    {children}
  </Heading>
  ),
  paragraph: ({ children }) => <p className="text-base p-0.1 md:text-lg font-normal text-white font-body p-1">{children}</p>
}

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col items-center text-black">
        <PrismicRichText 
          field={slice.primary.heading} 
          components={components} 
        />
        <div className="relative">
          <PrismicNextImage field={slice.primary.image} className="mw-lg h-auto rounded-2xl" />
            <div className="absolute bottom-0 left-0 p-4 flex flex-col space-y-0.1 text-left">
              <PrismicRichText 
                field={slice.primary.news_title} 
                components={{
                  paragraph: ({ children }) => <p className="text1xl p-0.1 md: text-2xl font-bold text-white font-body p-1">{children}</p>
                }} 
              />
              <PrismicRichText 
                field={slice.primary.body} 
                components={components} 
              />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
