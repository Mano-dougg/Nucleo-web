import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PostCard`.
 */
export type PostCardProps = SliceComponentProps<Content.PostCardSlice>;

/**
 * Component for "PostCard" Slices.
 */
const PostCard = ({ slice }: PostCardProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for post_card (variation: {slice.variation}) Slices
    </section>
  );
};

export default PostCard;
