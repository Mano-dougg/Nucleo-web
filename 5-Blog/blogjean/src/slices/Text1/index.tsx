import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Text1`.
 */
export type Text1Props = SliceComponentProps<Content.Text1Slice>;

/**
 * Component for "Text1" Slices.
 */
const Text1 = ({ slice }: Text1Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for text1 (variation: {slice.variation}) Slices
    </section>
  );
};

export default Text1;
