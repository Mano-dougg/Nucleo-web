import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "../../components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

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
      <PrismicRichText field={slice.primary.heading} />

      <>
        {slice.primary.post.map((item,index) => (
          <div key={index}>
            <PrismicNextImage field={item.post} />
            <>{item.post_tag}</>
            <PrismicRichText field={item.post_title} />
            <PrismicRichText field={item.post_description} />
            <PrismicNextImage field={item.userphoto} />
            <PrismicRichText field={item.username} />
            <>{item.date}</>
          </div>
        ))}
      </>
    </Bounded>
  );
};

export default Features;
