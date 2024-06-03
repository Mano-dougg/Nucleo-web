import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={{
        heading1: ({children}) => <h1>{children}</h1>
      }} />
      <PrismicNextImage field={slice.primary.image} />
      <PrismicRichText field={slice.primary.news_title} />
      <PrismicRichText field={slice.primary.body} />
    </section>
  );
};

export default Hero;
