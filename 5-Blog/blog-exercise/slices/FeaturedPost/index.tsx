import { RichText } from "@/components/RichText";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeaturedPost`.
 */
export type FeaturedPostProps = SliceComponentProps<Content.FeaturedPostSlice>;

/**
 * Component for "FeaturedPost" Slices.
 */
const FeaturedPost = ({ slice }: FeaturedPostProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`flex flex-col gap-y-4 sm:gap-y-6 md:flex md:flex-row md:gap-x-8`}
    >
      <PrismicNextImage
        field={slice.primary.postimage}
        className={`order-1 md:order-2 rounded-3xl self-center md:size-full md:max-h-auto md:max-w-[30vw]`}
      />
      <div
        className={`order-2 md:order-1 flex flex-col gap-2 sm:gap-6 md:gap-8 md:w-[70vw]`}
      >
        <RichText
          field={slice.primary.posttitle}
        />
        <RichText
          field={slice.primary.postdescription}
        />
      </div>
    </section>
  );
};

export default FeaturedPost;
