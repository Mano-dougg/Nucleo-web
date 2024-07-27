import Bounded from "@/components/Boudend";
import { Content } from "@prismicio/client";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Banner = ({ slice }: HeaderProps): JSX.Element => {
  return (
    <>
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} />
      <PrismicImage field={slice.primary.first_image}/>

    </Bounded>
    </>
  );
};

export default Banner;
