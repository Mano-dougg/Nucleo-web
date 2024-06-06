import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `IconePost`.
 */
export type IconePostProps = SliceComponentProps<Content.IconePostSlice>;

/**
 * Component for "IconePost" Slices.
 */
const IconePost = ({ slice }: IconePostProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for icone_post (variation: {slice.variation}) Slices
    </section>
  );
};

export default IconePost;
