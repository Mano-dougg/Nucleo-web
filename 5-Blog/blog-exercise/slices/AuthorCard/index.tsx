import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AuthorCard`.
 */
export type AuthorCardProps = SliceComponentProps<Content.AuthorCardSlice>;

/**
 * Component for "AuthorCard" Slices.
 */
const AuthorCard = ({ slice }: AuthorCardProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for author_card (variation: {slice.variation})
      Slices
    </section>
  );
};

export default AuthorCard;
