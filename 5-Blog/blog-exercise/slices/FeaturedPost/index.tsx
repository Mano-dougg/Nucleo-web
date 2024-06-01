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
        <PrismicRichText
          field={slice.primary.posttitle}
          components={{
            heading2: ({ children }) => (
              <h2
                className={`text-xl sm:text-[40px] text-center font-semibold text-green-950 dark:text-foreground`}
              >
                {children}
              </h2>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.postdescription}
          components={{
            paragraph: ({ children }) => (
              <p className={`text-foreground text-xs sm:text-base md:text-xl`}>
                {children}
              </p>
            ),
          }}
        />
      </div>
    </section>
  );
};

export default FeaturedPost;
