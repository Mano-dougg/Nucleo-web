import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SinglePost`.
 */
export type SinglePostProps = SliceComponentProps<Content.SinglePostSlice>;

/**
 * Component for "SinglePost" Slices.
 */
const SinglePost = ({ slice }: SinglePostProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for single_post (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SinglePost;
